import { CHAIN_ID } from "./constants";

export const MULTICALL = {
  56: '0x6262E318C2638d93C933f5FA7b8396D797D3b55d',
  97: '0x8175c10383511b3a1C68f9dB222dc14A19CC950e',
  4: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  1: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
};

export const NFT = {
  4: '0xD6a0988575c7cA5ea7F3a78F41E8ea54b54cD1E8',
}

export const TYPE_HELPER = {
  4: '0x7e887938F432F336426d0F585E57859A060efC5C',
}

export const multicallAddress = MULTICALL[CHAIN_ID];
export const nftAddress = NFT[CHAIN_ID];
export const typeHelperAddress = TYPE_HELPER[CHAIN_ID];
