import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
require("dotenv").config();

const sepoliaPrivateKey = process.env.sepolia_private_key || '';
const config: HardhatUserConfig = {
  // solidity: "0.8.20",
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {}
      },
      {
        version: "0.4.24",
        settings: {}
      },
      {
        version: "0.6.0",
        settings: {}
      },
      {
        version: "0.6.6",
        settings: {}
      }
    ]
  },
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
