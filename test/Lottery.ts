import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { describe } from "mocha";

const blockInfoHelper = async () => {
  // Get the current block number
  const blockNumber = await ethers.provider.getBlockNumber();
  console.log("blockNumber:", blockNumber);

  // Get the block information for the current block
  const block = await ethers.provider.getBlock(blockNumber);

  // Retrieve the timestamp from the block information
  const timestamp = block?.timestamp;
  console.log("timestamp:", timestamp);
};

const advanceTimeBy = async (seconds: number) => {
  const currentTimestamp = Date.now();
  // Set the block timestamp to the current timestamp
  await ethers.provider.send("evm_setNextBlockTimestamp", [currentTimestamp]);
  // Mine a new block to update the timestamp
  await ethers.provider.send("evm_mine", []);
  // Increase the EVM's timestamp by 65 seconds
  await ethers.provider.send("evm_increaseTime", [seconds]);
  // Mine a new block to update the timestamp
  await ethers.provider.send("evm_mine", []);
};

const ETH_PRIZE1 = ethers.parseEther("0.5");

describe("Lottery", function () {
  async function deployLotteryFixture() {
    // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    // const ONE_GWEI = 1_000_000_000;

    // const lockedAmount = ONE_GWEI;
    // const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const LotteryFactory = await ethers.getContractFactory("Lottery");
    const lotteryContract = await LotteryFactory.deploy({
      value: ethers.parseEther("1"),
    });

    return { lotteryContract, owner, otherAccount };
  }

  async function deployLotteryWithLiveLotteryInstanceFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const startTime = new Date().getTime();
    const endTime = startTime + 60;

    const LotteryFactory = await ethers.getContractFactory("Lottery");
    const lotteryContract = await LotteryFactory.deploy({
      value: ethers.parseEther("1"),
    });
    await lotteryContract.createNewLottery(
      startTime,
      endTime,
      [1, 2, 3, 4],
      1,
      "5",
      {
        value: ETH_PRIZE1,
      }
    );

    return { lotteryContract, owner, otherAccount };
  }

  describe("Deployment", () => {
    it("Should set 1 ether in contract balance", async () => {
      const { lotteryContract } = await loadFixture(deployLotteryFixture);

      expect(await lotteryContract.getContractBalance()).to.equal(
        ethers.parseEther("1")
      );
    });
  });

  describe("Creation of lottery instance", () => {
    it("Should enable creation of lottery instance", async () => {
      const startTime = Date.now();
      const endTime = startTime + 60;
      const { lotteryContract } = await loadFixture(deployLotteryFixture);
      await lotteryContract.createNewLottery(
        startTime,
        endTime,
        [1, 2, 3, 4],
        3,
        "Sepolia",
        {
          value: ETH_PRIZE1,
        }
      );
      const lotteries = await lotteryContract.getLotteries();
      expect(lotteries.length).to.equal(1);
      expect(lotteries[0].winningPrize).to.equal(ETH_PRIZE1);

      expect(lotteries[0].closeTime).to.equal(endTime);
    });

    it("Should revert creation of lottery instance if ether is not provided", async () => {
      const { lotteryContract } = await loadFixture(deployLotteryFixture);
      const startTime = new Date().getTime();
      const endTime = startTime + 60;
      try {
        await lotteryContract.createNewLottery(
          startTime,
          endTime,
          [1, 2, 3, 4],
          3,
          "Sepolia"
        );
        expect.fail("Expected function call to revert, but it did not");
      } catch (err: any) {
        expect(err.message).to.contain("value should be greater then 0.01");
      }
    });

    it("Should revert creation of lottery instance if endTime <= startTime", async () => {
      const { lotteryContract } = await loadFixture(deployLotteryFixture);
      const startTime = new Date().getTime();
      const endTime = startTime - 60;
      try {
        await lotteryContract.createNewLottery(
          startTime,
          endTime,
          [1, 2, 3, 4],
          3,
          "Sepolia",
          {
            value: ETH_PRIZE1,
          }
        );
        expect.fail("Expected function call to revert, but it did not");
      } catch (err: any) {
        console.log(err);
        expect(err.message).to.contain("start time should be smaller then end time");
      }
    });
  });

  describe("Joining existing lottery instance", () => {
    it("Should prevent join to a live lottery without passing value or with less amount then needed", async () => {
      const { lotteryContract } = await loadFixture(
        deployLotteryWithLiveLotteryInstanceFixture
      );

      try {
        await lotteryContract.joinLottery("1", [1, 2, 3, 4]);
        expect.fail("Expected function call to revert, but it did not");
      } catch (err: any) {
        expect(err.message).to.contain("lottery ticket costs 0.001 ether");
      }

      try {
        await lotteryContract.joinLottery("1", [1, 2, 3, 4], {
          value: ethers.parseEther("0.0001"),
        });
        expect.fail("Expected function call to revert, but it did not");
      } catch (err: any) {
        expect(err.message).to.contain("lottery ticket costs 0.001 ether");
      }
    });

    it("Should prevent joining existing lottery instance for more then max allowed joiners", async () => {
      const { lotteryContract, owner } = await loadFixture(
        deployLotteryWithLiveLotteryInstanceFixture
      );
      await lotteryContract.joinLottery("1", [1, 2, 3, 4], {
        value: ethers.parseEther("0.001"),
      });
      try {
        await lotteryContract.joinLottery("1", [1, 2, 3, 4], {
          value: ethers.parseEther("0.001"),
        });
        expect.fail("Expected function call to revert, but it did not");
      } catch (err: any) {
        expect(err.message).to.contain(
          "limit of joiners for this lottery was reached"
        );
      }
    });

    it("Should enable joining existing lottery instance", async () => {
      const { lotteryContract, owner } = await loadFixture(
        deployLotteryWithLiveLotteryInstanceFixture
      );
      await lotteryContract.joinLottery("1", [1, 2, 3, 4], {
        value: ethers.parseEther("0.001"),
      });
      expect(
        (await lotteryContract.getUserTicketForLottery("1")).lotteryId
      ).to.equal("1");
      const contractNumbers = (
        await lotteryContract.getUserTicketForLottery("1")
      ).numbers.map((n) => n.toString());
      expect(contractNumbers).to.deep.equal(["1", "2", "3", "4"]);
      expect(
        (await lotteryContract.getUserTicketForLottery("1")).owner
      ).to.equal(owner);
      expect(
        await lotteryContract.getNumberOfJoinersForLotteryId("1")
      ).to.equal(1);
    });

    it("check that if numbers equal winning numbers, the user is marked as a winner", async () => {
      const { lotteryContract, owner } = await loadFixture(
        deployLotteryWithLiveLotteryInstanceFixture
      );
      await lotteryContract.joinLottery("1", [1, 2, 3, 4], {
        value: ethers.parseEther("0.001"),
      });
      expect(await lotteryContract.checkIfLotteryIsLiveById("1")).to.be.true;
      expect(await lotteryContract.checkIfIWonTheLottery("1")).to.be.true;
    });
  });

  describe("time effects of live lottery", () => {
    it("lottery should not be live if time passed after close time", async () => {
      const { lotteryContract, owner } = await loadFixture(
        deployLotteryWithLiveLotteryInstanceFixture
      );

      await advanceTimeBy(80);
      expect(await lotteryContract.checkIfLotteryIsLiveById("1")).to.be.false;
    });

    it("users should not be able to join a lottery that is not live", async () => {
      const { lotteryContract, owner } = await loadFixture(
        deployLotteryWithLiveLotteryInstanceFixture
      );
      await advanceTimeBy(65);
      try {
        await lotteryContract.joinLottery("1", [1, 2, 3, 4], {
          value: ethers.parseEther("0.001"),
        });
        expect.fail("Expected function call to revert, but it did not");
      } catch (err: any) {
        expect(err.message).to.contain(
          "lotteries that are not live can't be joined"
        );
      }
    });
  });

  describe("prize collection", () => {
    it("if user has won he should get his percentage of the prize", async () => {
      const { lotteryContract, owner } = await loadFixture(
        deployLotteryWithLiveLotteryInstanceFixture
      );

      await lotteryContract.joinLottery("1", [1, 2, 3, 4], {
        value: ethers.parseEther("0.001"),
      });

      try {
        await lotteryContract.getLotteryPrize("1");
        expect.fail("Expected function call to revert, but it did not");
      } catch (err: any) {
        expect(err.message).to.contain(
          "Withdraw of funds is allowed after lottery is closed"
        );
      }

      await advanceTimeBy(65);

      const balanceBeforeWinning = await ethers.provider.getBalance(owner);

      expect(await lotteryContract.checkIfIWonTheLottery("1")).to.be.true;
      await lotteryContract.getLotteryPrize("1");
      const balanceAfterCollectingReward = await ethers.provider.getBalance(
        owner
      );

      expect(balanceAfterCollectingReward).to.be.greaterThan(
        balanceBeforeWinning
      );
    });
  });
});
