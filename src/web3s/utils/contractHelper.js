import { ethers } from "ethers";
import { simpleRpcProvider } from ".";
import multicallAbi from '../abis/multicall.json';
import nftAbi from '../abis/LITM.json';
import royaltyAbi from '../abis/royaltyDiv.json';
import { multicallAddress, nftAddress, royaltyAddress } from "../contracts";


export const getContract = (abi, address, signer = undefined) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getMulticallContract = () => {
  return getContract(multicallAbi, multicallAddress);
}

export const getNftContract = (provider) => {
  return getContract(nftAbi, nftAddress, provider);
}

export const getRoyaltyContract = (provider) => {
  return getContract(royaltyAbi, royaltyAddress, provider);
}
