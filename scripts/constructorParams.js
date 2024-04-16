import { ethers } from "hardhat";
import contractJSON from "../artifacts/contracts/Lottery.sol/Lottery.json" ;

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
  const parameters = ["param1", "param2", ...]; // Parameters passed to the constructor

  const abiCoder = new ethers.AbiCoder();
  const encodedParams = abiCoder.encode(contractJSON.abi[0].inputs, parameters);
  console.log(encodedParams);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
