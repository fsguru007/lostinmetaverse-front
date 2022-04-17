import { useState, useEffect } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/react-hooks";
import gql from "graphql-tag";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({uri: 'https://api.thegraph.com/subgraphs/name/lyu-jinhang/litm-nft'})
})

export const useNfts = (account) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetch = async () => {

      const QL= gql`
      {
        nftEntities(where:{owner:"${account.toLowerCase()}"}) {
          id
        }
      }
      `

      const res = await client.query({
        query: QL
      });

      const {data: {nftEntities}} = res;

      setNfts(nftEntities.map(item=>item.id));
    }

    if (account) {
      fetch();
    }
  }, [account]);

  return nfts;
}