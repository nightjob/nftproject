import type { Account } from "../domain/account";
import { AccountType } from "../domain/account";
import type { NFT } from "../domain/nft";
import account from "../store/account";
import nfts from "../store/nfts";
import fetchNftsByAddress from "./fetchNftsByAddress";

async function connectPhantom() {
  // 1 connect to phantom wallet
  // 2 fetchNftsByAddress, account store both assume an eth address right now. Must change

  // todo: typings for window object to contain phantom
  const phantom = await (window as any).phantom.solana.connect();
  const address = (window as any).phantom.solana.publicKey.toString();
  const domainAccount: Account = {
    accountType: AccountType.Solana,
    address: address,
  };
  account.set(domainAccount);

  const fetchedNfts: NFT[] = await fetchNftsByAddress(domainAccount);
  nfts.set(fetchedNfts);
}

export default connectPhantom;
