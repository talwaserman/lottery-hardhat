// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.20;

import {VRFConsumerInterface} from "./VRFConsumerInterface.sol";
import {VRFV2Provider} from "./VRFV2Provider.sol";
import "hardhat/console.sol";

contract Lottery is VRFConsumerInterface {
    uint256 private lotteryCounter = 0;
    address private contractOwner;

    VRFV2Provider private vrfV2Provider;

    struct LotteryTicket {
        address owner;
        uint256 lotteryId;
        uint256 number;
    }

    struct LottryContest {
        uint256 id;
        uint256 winningPrize;
        uint256 startTime;
        uint256 closeTime;
        uint256 winingNumbers;
        bool gotRandomNumber;
        address creator;
        uint256 limitOfJoiners;
        uint256 joinedCounter;
        uint256 numberOfWinners;
        string chainType;
    }

    struct LottryContestLite {
        uint256 id;
        uint256 winningPrize;
        uint256 startTime;
        uint256 closeTime;
        uint256 joinedCounter;
        string chainType;
    }

    struct UserInfo {
        mapping(uint256 => LotteryTicket) tickets;
        uint256[] ticketIds;
    }

    mapping(address => UserInfo) participantsInLottery;
    LottryContest[] lotteries;

    event emitLotteryCreated(
        uint256 indexed id,
        address indexed owner,
        uint256 startTime,
        uint256 closeTime
    );
    event emitLotteryJoined(uint256 indexed id, address indexed joinerAddress);
    event emitRequestedRandomNumber(uint256 id);
    event vrfFailedByGasLimit();
    event LogMessage(string message);

    constructor(address _VRFV2Provider) payable {
        contractOwner = msg.sender;
        vrfV2Provider = VRFV2Provider(_VRFV2Provider);
    }

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    function closeTimeCalc(uint256 daysValue) private view returns (uint256) {
        return block.timestamp + daysValue * 1 days; // converts days to seconds, 1 day equals 86400 seconds
    }

    function checkIfLotteryIsLiveById(uint256 lotteryId)
        public
        view
        validateLottey(lotteryId)
        returns (bool)
    {
        LottryContest memory specificLottery = getLotteryById(lotteryId);
        return specificLottery.closeTime >= block.timestamp;
    }

    function checkIfIWonTheLottery(uint256 lotteryId)
        public
        view
        validateLottey(lotteryId)
        returns (bool)
    {
        LottryContest memory specificLottery = getLotteryById(lotteryId);

        UserInfo storage userInfo = participantsInLottery[msg.sender];
        require(
            userInfo.tickets[lotteryId].lotteryId >= 0,
            "user did not join that lottery"
        );

        require(
            specificLottery.gotRandomNumber == true,
            "random number was not added to the lottery"
        );

        console.log("checkIfIWonTheLottery called1: %s", uint256(userInfo.tickets[lotteryId].number));
        console.log("checkIfIWonTheLottery called2: %s", uint256(specificLottery.winingNumbers));

        return
            userInfo.tickets[lotteryId].number == specificLottery.winingNumbers;
    }

    function getLotteries() external view returns (LottryContestLite[] memory) {
        LottryContestLite[] memory lotteriesLite = new LottryContestLite[](
            lotteries.length
        );
        for (uint256 i = 0; i < lotteries.length; i++) {
            lotteriesLite[i] = LottryContestLite({
                id: lotteries[i].id,
                winningPrize: lotteries[i].winningPrize,
                startTime: lotteries[i].startTime,
                closeTime: lotteries[i].closeTime,
                joinedCounter: lotteries[i].joinedCounter,
                chainType: lotteries[i].chainType
            });
        }
        return lotteriesLite;
    }

    function getLotteryPrize(uint256 lotteryId)
        external
        payable
        validateLottey(lotteryId)
    {
        LottryContest memory specificLottery = getLotteryById(lotteryId);
        require(
            !checkIfLotteryIsLiveById(lotteryId),
            "Withdraw of funds is allowed after lottery is closed"
        );
        require(
            specificLottery.numberOfWinners > 0,
            "There are no winners to this lottery"
        );
        if (checkIfIWonTheLottery(lotteryId)) {
            payable(msg.sender).transfer(
                specificLottery.winningPrize / specificLottery.numberOfWinners
            );
        }
    }

    function checkLotteryPrize(uint256 lotteryId)
        external
        view
        validateLottey(lotteryId)
        returns (uint256)
    {
        LottryContest memory specificLottery = getLotteryById(lotteryId);
        return specificLottery.winningPrize;
    }

    function getLotteryById(uint256 lotteryId)
        private
        view
        returns (LottryContest memory)
    {
        LottryContest memory result;
        console.log("getLotteryById called, id: %s", lotteryId);
        for (uint256 i = 0; i < lotteries.length; i++) {
            if (lotteries[i].id == lotteryId) {
                result = lotteries[i];
                break;
            }
        }
        return result;
    }

    function updateLotteryCounter(uint256 lotteryId) private {
        for (uint256 i = 0; i < lotteries.length; i++) {
            if (lotteries[i].id == lotteryId) {
                lotteries[i].joinedCounter++;
                break;
            }
        }
    }

    function hashNumber(string memory _number) internal pure returns (uint256) {
        console.log('hashNumber before: %s', _number);
        console.log('hashNumber after: %s', uint256(keccak256(abi.encodePacked(_number))));

        return uint256(keccak256(abi.encodePacked(_number)));
    }

    function joinLottery(uint256 lotteryId, string memory number)
        external
        payable
        validateLottey(lotteryId)
        returns (LotteryTicket memory)
    {
        require(msg.value == 0.001 ether, "lottery ticket costs 0.001 ether");
        require(
            bytes(number).length == 4,
            "you should have a number with 4 digits"
        );

        LottryContest memory specificLottery = getLotteryById(lotteryId);
        require(
            checkIfLotteryIsLiveById(lotteryId),
            "lotteries that are not live can't be joined"
        );
        require(
            specificLottery.limitOfJoiners > specificLottery.joinedCounter,
            "limit of joiners for this lottery was reached"
        );

        updateLotteryCounter(lotteryId);

        UserInfo storage userInfo = participantsInLottery[msg.sender];
        LotteryTicket storage userticket = userInfo.tickets[lotteryId];
        userticket.owner = msg.sender;
        userticket.lotteryId = lotteryId;
        userticket.number = hashNumber(number);

        userInfo.ticketIds.push(lotteryId);

        emit emitLotteryJoined(lotteryId, msg.sender);

        return userticket;
    }

    function createNewLottery(
        uint256 startTimeInSeconds,
        uint256 endTimeInSeconds,
        uint256 limitOfJoiners,
        string memory chainType
    ) external payable returns (bool) {
        // Convert the winning prize from ether to wei
        uint256 winningPrize = msg.value * 1 ether;
        uint256 minValueInWei = 0.01 * 1 ether;
        require(
            winningPrize >= minValueInWei,
            "value should be greater then 0.01"
        );
        require(
            endTimeInSeconds > startTimeInSeconds,
            "start time should be smaller then end time"
        );

        lotteryCounter++;

        LottryContest memory newContest = LottryContest({
            id: lotteryCounter,
            winningPrize: msg.value,
            startTime: startTimeInSeconds,
            closeTime: endTimeInSeconds,
            winingNumbers: 0,
            gotRandomNumber: false,
            creator: msg.sender,
            limitOfJoiners: limitOfJoiners,
            joinedCounter: 0,
            numberOfWinners: 0,
            chainType: chainType
        });
        lotteries.push(newContest);

        emit emitLotteryCreated(
            lotteryCounter,
            msg.sender,
            startTimeInSeconds,
            endTimeInSeconds
        );
        return true;
    }

    function getUserTickets() external view returns (uint256[] memory) {
        return participantsInLottery[msg.sender].ticketIds;
    }

    function getUserTicketForLottery(uint256 lotteryId)
        external
        view
        returns (LotteryTicket memory)
    {
        return participantsInLottery[msg.sender].tickets[lotteryId];
    }

    function getAllFunds() external payable onlyOwner {
        payable(address(msg.sender)).transfer(address(this).balance);
    }

    function getNumberOfJoinersForLotteryId(uint256 lotteryId)
        external
        view
        returns (uint256)
    {
        LottryContest memory specificLottery = getLotteryById(lotteryId);
        return specificLottery.joinedCounter;
    }

    function getRandomNumber(uint256 id) internal {
        console.log("getRandomNumber called");
        (bool success, ) = address(vrfV2Provider).call{gas: 500000}(
            abi.encodeWithSignature("requestRandomWords(uint256)", id)
        );
        if (success == false) {
            emit vrfFailedByGasLimit();
        }
    }

    function getWinningNumberForLottery(uint256 id) external onlyOwner {
        console.log("getWinningNumberForLottery called");
        getRandomNumber(id);
    }

    function vrfCallback(uint256[] memory _randomNumbers, uint256 id) external {
        //create new lottery ticket
        bytes32 test = keccak256(abi.encodePacked(_randomNumbers[0] % 10000));
        console.log("vrfCallback called: %s", uint256(test));
        for (uint256 i = 0; i < lotteries.length; i++) {
            if (lotteries[i].id == id) {
                lotteries[i].winingNumbers = uint256(keccak256(abi.encodePacked(_randomNumbers[0] % 10000)));
                console.log("here ------->");
                lotteries[i].gotRandomNumber = true;
            }
        }
    }

    modifier onlyOwner() {
        require(
            msg.sender == contractOwner,
            "This operation is allowed only by the creator of the contract"
        );
        _;
    }

    // Modifier factory function that accepts parameters
    modifier validateLottey(uint256 lotteryId) {
        bool exists = false;
        for (uint256 i = 0; i < lotteries.length; i++) {
            if (lotteries[i].id == lotteryId) {
                exists = true;
                break;
            }
        }
        require(exists, "Lottery does not exist");
        _;
    }
}
