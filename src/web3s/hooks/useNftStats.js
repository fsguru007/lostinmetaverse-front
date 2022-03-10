import { useEffect, useState } from "react"
import { useMulticallContract } from "./useContracts";
import nftAbi from '../abis/LITM.json';
import { Interface } from "ethers/lib/utils";
import { nftAddress } from "../contracts";
import { BigNumber } from "ethers";

export const _1e16 = BigNumber.from(10).pow(16);

export const useNftStats = (account) => {

  const [stats, setStats] = useState({
    balance: 0,
    totalSupply: 0,
    price: 0.11,
    wallet: []
  });

  const mc = useMulticallContract();

  const nftItf = new Interface(nftAbi);

  useEffect(() => {
    const fetch = async () => {
      const calls = [
        [nftAddress, nftItf.encodeFunctionData('balanceOf', [account])],
        [nftAddress, nftItf.encodeFunctionData('totalSupply')],
        [nftAddress, nftItf.encodeFunctionData('price')],
        [nftAddress, nftItf.encodeFunctionData('walletOf', [account])],
      ]

      const [bn, data] = await mc.aggregate(calls);

      setStats({
        balance: nftItf.decodeFunctionResult('balanceOf', data[0])[0].toNumber(),
        totalSupply: nftItf.decodeFunctionResult('totalSupply', data[1])[0].toNumber(),
        price: nftItf.decodeFunctionResult('price', data[2])[0].div(_1e16).toNumber()/100,
        wallet: nftItf.decodeFunctionResult('walletOf', data[3])[0].map(i=>i.toNumber())
      });
    }

    if (account && mc) {
      fetch();
    }
  }, [account, mc]);

  return stats;
}
