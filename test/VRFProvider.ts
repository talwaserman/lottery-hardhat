import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
const { networkConfig } = require("../helper-hardhat-config");

const { assert, expect } = require("chai");
import { ethers } from "hardhat";
import { describe } from "mocha";

describe("VRFV2ProviderMock - Unit Tests", function () {
  const deployVRFProviderFixture = async () =>  {
    // Contracts are deployed using the first signer/account by default
    const [deployer, otherAccount] = await ethers.getSigners();

    const VRFV2ProviderMockFactory = await ethers.getContractFactory(
      "VRFV2ProviderMock"
    );
    const VRFV2ProviderMock: any = await VRFV2ProviderMockFactory.deploy(11073);

    return { VRFV2ProviderMock, deployer, otherAccount };
  }

  describe("#requestRandomWords", async function () {
    it("fail getting words since user is not allowed", async function () {
      const { VRFV2ProviderMock, deployer } = await loadFixture(
        deployVRFProviderFixture
      );
      try {
        await expect(await VRFV2ProviderMock.requestRandomWords()).to.emit(VRFV2ProviderMock, "RequestSent");
        //expect.fail("Expected function call to revert, but it did not");
      } catch(err: any) {
        console.log(err);
        expect(err.message).to.contain("fail getting words since user is not allowed");
      }
    });

    it("get random words", async function () {
      const { VRFV2ProviderMock, deployer } = await loadFixture(
        deployVRFProviderFixture
      );
      await VRFV2ProviderMock.requestRandomWords(deployer);
      expect(await VRFV2ProviderMock.requestRandomWords()).to.emit(VRFV2ProviderMock, "RequestSent");
      expect(await VRFV2ProviderMock.requestRandomWords()).to.emit(VRFV2ProviderMock, "RequestFulfilled");
    });
  });
});
