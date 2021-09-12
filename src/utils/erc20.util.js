import abi from "@/constants/abi/erc20.json";
import { getWeb3 } from "@/utils/web3.util";
import { MASTERCHEF_ADDRESS } from '@/env'
import { ethers } from "ethers";
import BigNumber from 'bignumber.js'

const getContract = (provider, tokenAddress) => {
  const web3 = getWeb3(provider);
  const contract = new web3.eth.Contract(abi, tokenAddress);
  return contract;
};

export const approve = async (provider, tokenAddress, account) => {
  console.log(`approve:>>tokenAddress`, tokenAddress)
  console.log(`approve:>>account`, account)
  console.log(`approve:>>MASTERCHEF_ADDRESS`, MASTERCHEF_ADDRESS)
  console.log(`approve:>>ethers.constants.MaxUint256`, new BigNumber(ethers.constants.MaxUint256).toNumber())
  const contract = getContract(provider, tokenAddress);
  return contract.methods
    .approve(MASTERCHEF_ADDRESS, ethers.constants.MaxUint256)
    .send({ from: account });
};