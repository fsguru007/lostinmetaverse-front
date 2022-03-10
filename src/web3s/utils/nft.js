import { ethers } from "ethers";
import { useNftContract } from "../hooks/useContracts"

export const mintNfts = async (nftContract, amount, pay) => {
  if (nftContract && nftContract.signer) {
    try {
      const tx = await nftContract.mint(amount, {
        value: ethers.utils.parseEther(pay.toString())
      });
      await tx.wait();
      return true;
    } catch(e) {
      console.error(e);
    }
  }
  return false;
}

export const mintRoyaltyNft = async (nftContract, tokens) => {
  if (nftContract && tokens[0] && tokens[1] && tokens[2]) {
    try {
      const tx = await nftContract.mintRoyalty(tokens[0], tokens[1], tokens[2]);
      await tx.wait();
      return true;
    } catch(e) {
      console.error(e);
    }
  }
  return false;
}