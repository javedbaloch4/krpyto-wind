import React, { Children, useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionConext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
};

export const TransactionProvider = ({ children }) => {
  return (
    <TransactionConext.Provider value={{ value: "Test Network data" }}>
      {children}
    </TransactionConext.Provider>
  );
};
