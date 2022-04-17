const hre = require("hardhat");

async function main() {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Greeter.deploy();

  await transactions.deployed();

  console.log("Transaction deployed to:", transactions.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (errors) {
    console.log(errors);
    process.exit(1);
  }
};
