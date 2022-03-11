import { useMemo } from "react"
import { getMulticallContract, getNftContract, getRoyaltyContract } from "../utils/contractHelper";

export const useMulticallContract = () => {
  return useMemo(() => {
    return getMulticallContract();
  }, []);
}

export const useNftContract = (library) => {
  return useMemo(() => {
    if (library) {
      return getNftContract(library.getSigner());
    } else {
      return null;
    }
  }, [library]);
}

export const useRoyaltyContract = (library) => {
  return useMemo(() => {
    if (library) {
      return getRoyaltyContract(library.getSigner());
    } else {
      return null;
    }
  }, [library]);
}
