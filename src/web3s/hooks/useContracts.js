import { useMemo } from "react"
import { getMulticallContract, getNftContract } from "../utils/contractHelper";

export const useMulticallContract = () => {
  return useMemo(() => {
    return getMulticallContract();
  }, []);
}