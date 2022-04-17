import { ethers } from "ethers";
import { useNftContract } from "../hooks/useContracts"

export const mintNfts = async (nftContract, amount, pay) => {
  if (nftContract && nftContract.signer) {
    try {
      const tx = await nftContract.mint(amount, {
        value: pay
      });
      await tx.wait();
      return true;
    } catch(e) {
      console.error(e);
    }
  }
  return false;
}

export const mintNftFree = async (nftContract) => {
  if (nftContract && nftContract.signer) {
    try {
      const tx = await nftContract.mintWLfree();
      await tx.wait();
      return true;
    } catch(e) {
      console.error(e);
    }
  }
  return false;
}

export const mintNftsDiscounted = async (nftContract, amount, pay, disc) => {
  if (nftContract && nftContract.signer) {
    try {
      let tx;
      if (disc === 88) {
        tx = await nftContract.mintWL88d({ value: pay });
      } else if (disc === 55) {
        tx = await nftContract.mintWL55d(amount, { value: pay });
      } else if (disc === 22) {
        tx = await nftContract.mintWL22d(amount, { value: pay });
      }
      
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

export const claimReward = async (royaltyContract) => {
  if (royaltyContract) {
    try {
      const tx = await royaltyContract.claim();
      await tx.wait();
      return true;
    } catch(e) {
      console.error(e);
    }
  }
  return false;
}