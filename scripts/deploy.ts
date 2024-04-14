import { ethers } from "hardhat";

async function main() {
  const amount = ethers.parseEther("0.001");

  const contract = await ethers.deployContract("Lottery", {
    value: amount,
  });

  await contract.waitForDeployment();

  console.log(
    `Lottery with ${ethers.formatEther(amount)}ETH deployed to ${
      contract.target
    }`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
