// SPDX-License-Identifier: UNLICENSEDs 
pragma solidity ^0.8.0;

contract Transaction {

    uint256 transactionCount;

    event Transfer(address sender, address recevier, uint amount, string message, uint256 timestamp, string keywords);

    struct TransferStruct {
        address sender;
        address recevier;
        uint amount;
        string message;
        uint256 timestamp;
        string keywords;
    }

    TransferStruct[] transactions;

    // Add To Blockchain
    function addToBlockChain(address payable recevier, uint amount, string memory message, uint256 timestamp, string memory keywords) public {
        transactionCount++;
        transactions.push(TransferStruct(msg.sender, recevier, amount, message, block.timestamp, keywords));
    }

    // Get All the Transactions
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    // Get Transaction count
    function getTransactionCount() public view returns(uint) {
        return transactionCount;
    }
}