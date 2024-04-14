// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.20;

contract Lottery {
    uint256 private lotteryCounter = 1;
    address private contractOwner;

    struct LotteryTicket {
        address owner;
        uint256 lotteryId;
        uint256[] numbers;
    }

    struct LottryContest {
        uint256 id;
        uint256 winningPrize;
        uint256 startTime;
        uint256 closeTime;
        uint256[] winingNumbers;
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

    constructor() payable {
        contractOwner = msg.sender;
    }

    function getContractBalance() external view returns(uint256)  {
        return address(this).balance;
    }

    function closeTimeCalc(uint256 daysValue) private view returns (uint256) {
        return block.timestamp + daysValue  * 1 days; // converts days to seconds, 1 day equals 86400 seconds
    } 

    function checkIfLotteryIsLiveById(uint256 lotteryId) public view validateLottey(lotteryId) returns(bool) {
        LottryContest memory specificLottery = getLotteryById(lotteryId);
        return specificLottery.closeTime >= block.timestamp;
    }

    function checkIfIWonTheLottery(uint256 lotteryId) public view validateLottey(lotteryId) returns(bool) {
        bool result = false;

        LottryContest memory specificLottery = getLotteryById(lotteryId);
        UserInfo storage userInfo = participantsInLottery[msg.sender];
        require(userInfo.tickets[lotteryId].lotteryId >= 0, "user did not join that lottery");
        
        if(compareArrays(userInfo.tickets[lotteryId].numbers, specificLottery.winingNumbers)) {
            result = true;
        }
        return result;
    }

    function compareArrays(uint256[] memory array1, uint256[] memory array2) private pure returns (bool) {
        if (array1.length != array2.length) {
            return false; // Arrays have different lengths
        }

        for (uint256 i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) {
                return false; // Elements at index i are different
            }
        }

        return true; // Arrays are identical
    }

    function getLotteries() external view returns(LottryContestLite[] memory) {
        LottryContestLite[] memory lotteriesLite = new LottryContestLite[](lotteries.length);
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

    function getLotteryPrize(uint256 lotteryId) payable external validateLottey(lotteryId) {
        LottryContest memory specificLottery = getLotteryById(lotteryId);
        require(!checkIfLotteryIsLiveById(lotteryId), "Withdraw of funds is allowed after lottery is closed");
        require(specificLottery.numberOfWinners > 0, "There are no winners to this lottery");
        if (checkIfIWonTheLottery(lotteryId)) {
            payable(msg.sender).transfer(specificLottery.winningPrize / specificLottery.numberOfWinners);
        }
    }

    function checkLotteryPrize(uint256 lotteryId) external view validateLottey(lotteryId) returns(uint256) {
        LottryContest memory specificLottery = getLotteryById(lotteryId);
        return specificLottery.winningPrize;
    }

    function getLotteryById(uint256 lotteryId) private view returns(LottryContest memory ) {
        LottryContest memory result;
        for(uint256 i = 0; i< lotteries.length; i++) {
            if (lotteries[i].id == lotteryId) {
                result = lotteries[i];
                break;
            }
        }
        return result;
    }

    function updateLotteryCounter(uint256 lotteryId) private {
        for(uint256 i = 0; i< lotteries.length; i++) {
            if (lotteries[i].id == lotteryId) {
                lotteries[i].joinedCounter++;
                break;
            }
        }
    }

    function joinLottery(uint256 lotteryId, uint256[] memory numbers) payable external validateLottey(lotteryId) returns(LotteryTicket memory ) {
        require(msg.value == 0.001 ether, "lottery ticket costs 0.001 ether");
        require(numbers.length == 4, "you should have 4 numbers");
        
        LottryContest memory specificLottery = getLotteryById(lotteryId);
        require(checkIfLotteryIsLiveById(lotteryId), "lotteries that are not live can't be joined");
        require(specificLottery.limitOfJoiners > specificLottery.joinedCounter, "limit of joiners for this lottery was reached");

        updateLotteryCounter(lotteryId);

        if(compareArrays(numbers, specificLottery.winingNumbers)) {
            for(uint256 i = 0; i< lotteries.length; i++) {
                if(lotteries[i].id == lotteryId) {
                    lotteries[i].numberOfWinners++;
                }
            }
        }

        UserInfo storage userInfo = participantsInLottery[msg.sender];
        LotteryTicket storage userticket = userInfo.tickets[lotteryId];
        userticket.owner = msg.sender;
        userticket.lotteryId = lotteryId;
        userticket.numbers = numbers;

        userInfo.ticketIds.push(lotteryId);

        return userticket;
    }

    function createNewLottery(uint256 startTimeInSeconds, uint256 endTimeInSeconds, uint256[] memory winingNumbers, uint256 limitOfJoiners, string memory chainType) payable external returns(bool) {
        require(winingNumbers.length == 4, "winning number length should be 4");
        
        // Convert the winning prize from ether to wei
        uint256 winningPrize = msg.value * 1 ether;
        uint256 minValueInWei = 0.01 * 1 ether;
        require(winningPrize >= minValueInWei, "value should be greater then 0.01");
        require(endTimeInSeconds > startTimeInSeconds, "start time should be smaller then end time");

        LottryContest memory newContest = LottryContest({
            id: lotteryCounter,
            winningPrize: msg.value,
            startTime: startTimeInSeconds,
            closeTime: endTimeInSeconds,
            winingNumbers: winingNumbers,
            creator: msg.sender,
            limitOfJoiners: limitOfJoiners,
            joinedCounter: 0,
            numberOfWinners: 0,
            chainType: chainType
        });
        lotteries.push(newContest);
        lotteryCounter++;
        return true;
    }

    function getUserTickets() external view returns(uint256[] memory) {
        return participantsInLottery[msg.sender].ticketIds;
    }

    function getUserTicketForLottery(uint256 lotteryId) external view returns(LotteryTicket memory) {
        return participantsInLottery[msg.sender].tickets[lotteryId];
    }

    function getAllFunds() external payable onlyOwner {
        payable(address(msg.sender)).transfer(address(this).balance);
    }

    function getNumberOfJoinersForLotteryId(uint256 lotteryId) external view returns(uint256) {
        LottryContest memory specificLottery = getLotteryById(lotteryId);
        return specificLottery.joinedCounter;
    }

    modifier onlyOwner() {
        require(msg.sender == contractOwner, "This operation is allowed only by the creator of the contract");
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