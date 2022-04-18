import { useEffect, useState } from "react"
import { useMulticallContract } from "./useContracts";
import nftAbi from '../abis/LITM.json';
import typeHelperAbi from '../abis/TypeHelper.json';
import royaltyAbi from '../abis/royaltyDiv.json';
import { Interface } from "ethers/lib/utils";
import { nftAddress, royaltyAddress, typeHelperAddress } from "../contracts";
import { BigNumber, ethers } from "ethers";

export const _1e16 = BigNumber.from(10).pow(16);
export const _1e14 = BigNumber.from(10).pow(14);

const nftItf = new Interface(nftAbi);
const thItf = new Interface(typeHelperAbi);
const royaltyItf = new Interface(royaltyAbi);

export const fetchNftStats = async (mc, account) => {
  if (mc && account) {
    const calls = [
      [nftAddress, nftItf.encodeFunctionData('balanceOf', [account])],
      [nftAddress, nftItf.encodeFunctionData('totalSupply')],
      [nftAddress, nftItf.encodeFunctionData('price')],
      [nftAddress, nftItf.encodeFunctionData('royaltyToken', [account])],
      [royaltyAddress, royaltyItf.encodeFunctionData('pendingReward', [account])],
      [nftAddress, nftItf.encodeFunctionData('royaltySupply')],
      [nftAddress, nftItf.encodeFunctionData('whitelistFree', [account])],
      [nftAddress, nftItf.encodeFunctionData('whitelist88d', [account])],
      [nftAddress, nftItf.encodeFunctionData('whitelist55d', [account])],
      [nftAddress, nftItf.encodeFunctionData('whitelist22d', [account])],
    ]
  
    const [bn, data] = await mc.aggregate(calls);
  
    return {
      balance: nftItf.decodeFunctionResult('balanceOf', data[0])[0].toNumber(),
      totalSupply: nftItf.decodeFunctionResult('totalSupply', data[1])[0].toNumber(),
      price: nftItf.decodeFunctionResult('price', data[2])[0],
      royaltyToken: nftItf.decodeFunctionResult('royaltyToken', data[3])[0].toNumber(),
      pendingReward: royaltyItf.decodeFunctionResult('pendingReward', data[4])[0].div(_1e14).toNumber()/10000,
      royaltySupply: nftItf.decodeFunctionResult('royaltySupply', data[5])[0].toNumber(),
      whitelistFree: nftItf.decodeFunctionResult('whitelistFree', data[6])[0],
      whitelist88d: nftItf.decodeFunctionResult('whitelist88d', data[7])[0],
      whitelist55d: nftItf.decodeFunctionResult('whitelist55d', data[8])[0],
      whitelist22d: nftItf.decodeFunctionResult('whitelist22d', data[9])[0],
    };
  } else {
    return {
      balance: 0,
      totalSupply: 0,
      price: ethers.utils.parseEther('0.11'),
      royaltyToken: 0,
      pendingReward: 0,
      royaltySupply: 0,
      whitelistFree: false,
      whitelist88d: false,
      whitelist55d: false,
      whitelist22d: false,
    }
  }
}

export const useNftStats = (account, update) => {

  const [stats, setStats] = useState({
    balance: 0,
    totalSupply: 0,
    price: ethers.utils.parseEther('0.11'),
    royaltyToken: 0,
    pendingReward: 0,
    royaltySupply: 0,
    whitelistFree: false,
    whitelist88d: false,
    whitelist55d: false,
    whitelist22d: false,
  });

  const mc = useMulticallContract();

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchNftStats(mc, account);
      setStats( data );
    }

    if (account && mc) {
      fetch();
    }
  }, [account, mc, update]);

  return stats;
}

export const useNftTypes = (ids, update) => {
  const [data, setData] = useState([]);

  const mc = useMulticallContract();

  useEffect(() => {
    const fetch = async () => {
      const calls = [];
      for (let i = 0; i < ids.length; i++) {
        calls.push([nftAddress, nftItf.encodeFunctionData('used', [ids[i]])]);
        calls.push([typeHelperAddress, thItf.encodeFunctionData('typeOf', [ids[i]])]);
      }

      const [bn, res] = await mc.aggregate(calls);

      const res2 = [];
      for (let i = 0; i < ids.length; i++) {
        res2.push({
          id: ids[i],
          used: nftItf.decodeFunctionResult('used', res[i * 2])[0],
          type: thItf.decodeFunctionResult('typeOf', res[i * 2 + 1])[0].toNumber()
        });
      }

      setData(res2);
    }

    if (mc && ids.length) {
      fetch();
    }
  }, [ids, update, mc]);

  return data;
}

