import {useWeb3React} from "@web3-react/core";
import {useEffect, useState, useCallback} from "react";
import { injected } from "../constants";

export const useEagerConnect = () => {
  const { activate, active } = useWeb3React();

  const [tried, setTried] = useState(false);

  const tryActivate = useCallback(() => {
    async function _tryActivate() {
      const isAuthorized = await injected.isAuthorized();

      if (isAuthorized) {
        try {
          await activate(injected, undefined, true);
        } catch(e) {
          console.error(e);
        }
      }

      setTried(true);
    }

    _tryActivate();
  }, [activate]);

  useEffect(() => {
    tryActivate();
  }, [tryActivate]);

  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}

export function useInactiveListener(suppress) {
  const { active, error, activate, chainId } = useWeb3React();

  useEffect(() => {
    // @ts-ignore
    const { ethereum } = window;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = async ()  => {
        // console.log("Handling 'connect' event");
        activate(injected);
      };

      const handleChainChanged = (chainId) => {
        // console.log("Handling 'chainChanged' event with payload", chainId);
        activate(injected);
      };

      const handleAccountsChanged = (accounts) => {
        // console.log("Handling 'accountsChanged' event with payload", accounts);
        if (accounts.length > 0) {
          activate(injected);
        }
      };

      ethereum.on('connect', handleConnect);
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);

      // cleanup function
      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }
  }, [active, error, suppress, activate]);
}