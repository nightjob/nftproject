import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import type { NFT } from "../domain/nft";
import { NFTType } from "../domain/nft";
import axios from "axios";
import nfts from "../store/nfts";

async function fetchSolanaNfts(address: string): Promise<NFT[]> {
  const connection = new Connection(clusterApiUrl("mainnet-beta"));
  const metaplex = new Metaplex(connection);

  const domainNfts: NFT[] = [];

  const myNfts = await metaplex.nfts().findAllByOwner({
    owner: address,
  });
}
return nfts;
console.log(nfts);

export default fetchSolanaNfts;

// import { web3 } from "@project-serum/anchor";

// // import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
// import type { NFT } from "../domain/nft";
// import { NFTType } from "../domain/nft";
// // import * as metadata from "./metadata";
// import axios from "axios";

// export const fetchSolanaNfts = async (
//   connection: web3.Connection,
//   address: string
// ): Promise<NFT[]> => {
//   const pubKey = new web3.PublicKey(address);
//   const nfts: NFT[] = [];
//   const tokenAccounts = await connection.getParsedTokenAccountsByOwner(pubKey, {
//     programId: TOKEN_PROGRAM_ID,
//   });

//   await Promise.all(
//     tokenAccounts.value.map(async (tokenAccount) => {
//       if (tokenAccount.account.data.parsed.info.tokenAmount.amount === "0") {
//         return;
//       }

//       const accInfo = await connection.getAccountInfo(metadata.toPublicKey(m));

//       if (!accInfo) return;
//       const decoded = metadata.decodeMetadata(accInfo!.data);

//       const uri = decoded.data.uri;

//       let arweaveMetadata: any = {};
//       try {
//         arweaveMetadata = await axios.get(uri);
//       } catch {
//         return;
//       }

//       const nft: NFT = {
//         name: arweaveMetadata.data.name,
//         imageURL: arweaveMetadata.data.image,
//         nftType: NFTType.Solana,
//         description: "",
//       };

//       nfts.push(nft);
//     })
//   );
//   return nfts;
// };

// export default fetchSolanaNfts;
