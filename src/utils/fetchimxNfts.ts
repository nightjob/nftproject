import { NFTType, type NFT } from "../domain/nft";
import { ImmutableX, Config } from "@imtbl/core-sdk";

async function fetchImxNfts(address: string): Promise<NFT[]> {
  const client = new ImmutableX(Config.PRODUCTION);
  const imxNfts = await client.assetApi.listAssets({ user: address });

  const domainNfts: NFT[] = [];

  imxNfts.data.result.forEach(function (imxNft) {
    const nft: NFT = {
      name: imxNft.name,
      description: imxNft.description,
      imageURL: imxNft.image_url,
      nftType: NFTType.IMX,
    };

    domainNfts.push(nft);
  });
  return domainNfts;
}

export default fetchImxNfts;
