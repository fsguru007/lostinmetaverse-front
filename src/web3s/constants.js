import { InjectedConnector } from "@web3-react/injected-connector";

export const CHAIN_ID = 1;

export const getRpcUrl = () => {
  return {
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    56: 'https://bsc-dataseed.binance.org/',
    4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  }[CHAIN_ID]
}

export const injected = new InjectedConnector({
  supportedChainIds: [1, 2, 4, 56, 97, 31337, 43114, 250, 137, 25, 42161, 62621]
})
