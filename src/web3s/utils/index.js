import { ethers } from "ethers";
import { getRpcUrl } from "../constants";

export const simpleRpcProvider = new ethers.providers.StaticJsonRpcProvider(getRpcUrl());

export const trimAddress = (addr) => {
  return `${addr.substring(0, 6) }...${addr.substring(addr.length - 4)}`;
}