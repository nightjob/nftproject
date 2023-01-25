import type { Account } from "../domain/account";
import { AccountType } from "../domain/account";
import type { NFT } from "../domain/nft";
import fetchEthereumNfts from "./fetchEthereumNfts";
import fetchImxNfts from "./fetchimxNfts";
// import fetchSolanaNfts from "./fetchSolanaNfts";
import { web3 } from "@project-serum/anchor";

async function fetchNftsByAddress(account: Account): Promise<NFT[]> {
  if (account.accountType === AccountType.Ethereum) {
    const imxNfts: NFT[] = await fetchImxNfts(account.address);
    const ethereumNfts: NFT[] = await fetchEthereumNfts(account.address);
    return imxNfts.concat(ethereumNfts);
    // } else {
    //   const solanaNfts: NFT[] = await fetchSolanaNfts(
    //     new web3.Connection(import.meta.env.VITE_SOLANA_RPC_URL),
    //     account.address
    //   );
    //   return solanaNfts;
  }
}

export default fetchNftsByAddress;
