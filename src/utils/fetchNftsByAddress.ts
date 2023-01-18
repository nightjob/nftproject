import type { NFT } from "../domain/nft";
import fetchEthereumNfts from "./fetchEthereumNfts";
import fetchImxNfts from "./fetchimxNfts";

async function fetchNftsByAddress(address: string): Promise<NFT[]> {
  const imxNfts: NFT[] = await fetchImxNfts(address);
  const ethereumNfts: NFT[] = await fetchEthereumNfts(address);
  return imxNfts.concat(ethereumNfts);
}

export default fetchNftsByAddress;
