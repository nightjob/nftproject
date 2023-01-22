// import { BinaryReader, BinaryWriter, deserializeUnchecked } from "borsh";
// import { PublicKey } from "solana/web3.js";
// import base58 from "bs58";
// import type { MetadataApi } from "@imtbl/core-sdk";
// import { resolvePackageEntry } from "vite";

// export const METADATA_PROGRAM_ID =
//   "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s" as StringPublicKey;
// export const METADATA_PREFIX = "metadata";

// const PubKeysInternedMap = new Map<string, PublicKey>();

// (BinaryReader.prototype as any).readPubkey = function () {
//   const reader = this as unknown as BinaryReader;
//   const array = reader.readFixedArray(32);
//   return new PublicKey(array);
// };

// (BinaryWriter.prototype as any).writePubkey = function (value: PublicKey) {
//   const writer = this as unknown as BinaryWriter;
// };

// export async function getMetadataAccount(
//   tokenMint: StringPublicKey
// ): Promise<StringPublicKey> {
//   return (
//     await findProgramAddress(
//       [
//         Buffer.from(METADATA_PREFIX),
//         toPublicKey(METADATA_PROGRAM_ID).toBuffer(),
//         toPublicKey(tokenMint).toBuffer(),
//       ],
//       toPublicKey(METADATA_PROGRAM_ID)
//     )
//   )[0];
// }

// const METADATA_REPLACE = new RegExp("\u0000", "g");
// export const decodeMetadata = (buffer: Buffer): Metadata => {
//   const metadata = deserializeUnchecked(
//     METADATA_SCHEMA,
//     Metadata,
//     buffer
//   ) as Metadata;

//   metadata.data.name = metadata.data.name.replace(METADATA_REPLACE, "");
//   metadata.data.uri = metadata.data.uri.replace(METADATA_REPLACE, "");
//   metadata.data.symbol = metadata.data.symbol.replace(METADATA_REPLACE, "");
//   return metadata;
// };
