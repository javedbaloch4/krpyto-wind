require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/2u202jWhmJmUnT7T1lzY7cQJcoQhGYcv",
      accounts: [
        "ebd75f2c94f1bdb6d610c81a1813bf876e1c24d5f1bfb300baa62eea354c3459",
      ],
    },
  },
};
