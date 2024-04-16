import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
require("dotenv").config();

const sepoliaPrivateKey = process.env.sepolia_private_key || '';
const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.lottery_eth_sepolia_RPC_URL,
      accounts: [sepoliaPrivateKey]
    }
  },
  sourcify: {
    enabled: false
  },
  etherscan: {
    apiKey: process.env.etherscan
  },
};

export default config;
