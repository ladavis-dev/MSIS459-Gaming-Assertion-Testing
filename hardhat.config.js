
require("@nomicfoundation/hardhat-ethers");

module.exports = {
  solidity: {
    version: "0.5.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 31337
    }
  }
};
