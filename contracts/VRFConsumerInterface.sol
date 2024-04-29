// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

interface VRFConsumerInterface {
    function vrfCallback(uint256[] memory _randomNumbers, uint256 id) external;
}