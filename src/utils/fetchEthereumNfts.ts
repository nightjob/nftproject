import { NFTType, type NFT } from "../domain/nft";
import { Network, Alchemy } from "alchemy-sdk";
async function fetchEthereumNfts(address: string): Promise<NFT[]> {
  const settings = {
    apiKey: "eqVlGAkmbuEJsJ_9jR5c9RAsVA8yYRBy", //TOOO: Move to env file, so its not commited to git. this is insecure.
    network: Network.ETH_MAINNET, // replace my network
  };

  const alchemy = new Alchemy(settings);

  const nfts = await alchemy.nft.getNftsForOwner(address);
  // now i have the response from alchemy, but the response
  // from alchemy is going to be whatever.
  // TYPE alchemy said not this custom NFT type I just made.
  // I want ALL my functions that get nfts, to return the SAME type
  // so they're easy to deal with.
  // For instance, I cant have a function that returns AlchemyNFTs,
  // then IMXNfts, and they all have diffrent properties
  // thats insane to deal with

  const domainNfts: NFT[] = [];
  // i want to loop over the response from alchemy and convert each
  // entry into the type I want to use
  nfts.ownedNfts.forEach(function (alchemyNft) {
    if (!alchemyNft.title) return;
    const media = alchemyNft.media;
    const imageURL = media.length ? media[0].raw : "";

    const nft: NFT = {
      name: alchemyNft.title,
      description: alchemyNft.description,
      imageURL: imageURL,
      nftType: NFTType.Ethereum,
    };

    domainNfts.push(nft);
  });
  return domainNfts;
}

export default fetchEthereumNfts;
