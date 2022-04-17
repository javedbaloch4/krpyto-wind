require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/2u202jWhmJmUnT7T1lzY7cQJcoQhGYcv",
      accounts: [""],
    },
  },
};
