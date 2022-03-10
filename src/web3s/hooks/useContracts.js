import { useMemo } from "react"
import { getMulticallContract, getNftContract } from "../utils/contractHelper";

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
