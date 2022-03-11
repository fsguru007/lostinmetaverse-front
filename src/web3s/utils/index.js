import { ethers } from "ethers";
import { CHAIN_ID, getRpcUrl } from "../constants";

export const simpleRpcProvider = new ethers.providers.StaticJsonRpcProvider(getRpcUrl());

export const trimAddress = (addr) => {
  return `${addr.substring(0, 6) }...${addr.substring(addr.length - 4)}`;
}

export const switchNetwork = (library) => {
  if (library && library.provider) {
    library.provider.request({
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: `0x${CHAIN_ID.toString(16)}`,
        },
      ],
    });
  }
}