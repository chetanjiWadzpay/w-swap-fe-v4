require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { MAINNET_RPC_URL, DEPLOYER_PRIVATE_KEY, CHAIN_ID } = process.env;

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.20" },
      { version: "0.8.26" }
    ],
    overrides: {
      // Your custom v4 pool contracts
      "contracts/v4/**/*.sol": {
        version: "0.8.26"
      }
    }
  },

  paths: {
    sources: "./contracts",
    tests: "./hardhat-tests",
  },

  networks: {
    mainnet: {
      url: MAINNET_RPC_URL || "https://rpc.w-chain.com",
      chainId: CHAIN_ID ? Number(CHAIN_ID) : 171717,
      accounts: DEPLOYER_PRIVATE_KEY ? [DEPLOYER_PRIVATE_KEY] : []
    },
    hardhat: {
      forking: {
        url: MAINNET_RPC_URL || "https://rpc.w-chain.com",
      },
      chainId: CHAIN_ID ? Number(CHAIN_ID) : 171717
    }
  }
};
