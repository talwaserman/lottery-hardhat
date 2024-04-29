// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {VRFConsumerInterface} from "../VRFConsumerInterface.sol";
import "hardhat/console.sol";

contract VRFV2ProviderMock is ConfirmedOwner {
    event RequestSent(uint256 requestId, uint32 numWords);
    event RequestFulfilled(uint256 requestId, uint256[] randomWords);
    event RequestFailedByGasLimit(uint256 requestId);

    // For this example, retrieve 2 random values in one request.
    // Cannot exceed VRFCoordinatorV2.MAX_NUM_WORDS.
    uint32 numWords = 1;

    uint256[] randomWords = [78544231182531060814759757165607304792016541380596556152157484404320355427347];

    // Your subscription ID.
    uint64 s_subscriptionId;

    struct CallerData{
        address account;
        uint256 id;
    }

    mapping(uint256 => CallerData) callerData; // caller address mapped to it's request id
    mapping(address => bool) allowList; // list of allowed contracts that can call this random generator

    struct RequestStatus {
        bool fulfilled; // whether the request has been successfully fulfilled
        bool exists; // whether a requestId exists
        uint256[] randomWords;
    }
    mapping(uint256 => RequestStatus) public s_requests; /* requestId --> requestStatus */

    constructor(uint64 _subscriptionId) ConfirmedOwner(msg.sender) {
        s_subscriptionId = _subscriptionId;
    }

    // past requests Id.
    uint256[] public requestIds;
    uint256 public lastRequestId;

    // This contract can provide random numbers for several connected contracts, here we control which contract is allowed to use this provider
    function addToAllowList(address account) external onlyOwner {
        allowList[account] = true;
    }

    // Removed contracts will not be able to get random number from this provider
    function removeFromAllowList(address account) external onlyOwner {
        allowList[account] = false;
    }

    // Assumes the subscription is funded sufficiently.
    function requestRandomWords(uint256 callerRequestId)
        external
        onlyAuthorized
        returns (uint256 requestId)
    {

        s_requests[requestId] = RequestStatus({
            randomWords: new uint256[](0),
            exists: true,
            fulfilled: false
        });

        requestIds.push(requestId);
        lastRequestId = requestId;

        callerData[requestId].account = msg.sender;
        callerData[requestId].id = callerRequestId;

        emit RequestSent(requestId, numWords);
        console.log("requestRandomWords called");

        fulfillRandomWords(requestId);
        return requestId;
    }

    function fulfillRandomWords(uint256 _requestId) internal {
        require(s_requests[_requestId].exists, "request not found");
        s_requests[_requestId].fulfilled = true;
        s_requests[_requestId]
            .randomWords = randomWords;
        console.log("fulfillRandomWords called: %s", callerData[_requestId].id);

        require(allowList[callerData[_requestId].account], 'account not allowed');

        VRFConsumerInterface callerContract = VRFConsumerInterface(address(callerData[_requestId].account));

        //(bool success,) = address(callerContract).call{gas: 500000}(abi.encodeWithSignature("vrfCallback(uint256[], uint256)", randomWords, callerData[_requestId].id));
        callerContract.vrfCallback(randomWords, callerData[_requestId].id);

        // if (success == false) {
        //     emit RequestFailedByGasLimit(_requestId);
        // }

        // require(success, "Gas limit was not sufficient");
        emit RequestFulfilled(_requestId, randomWords);
    }

    modifier onlyAuthorized() {
        require(
            (msg.sender == owner() || allowList[msg.sender] == true),
            "Caller is not authorized"
        );
        _;
    }
}
