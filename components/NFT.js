import React from "react";
import { ipfs2http } from "../util";

export const NFT = (nft) => {
  console.log(nft);
  return (
    <>
      <a
        className="text-left w-24
        cursor-pointer rounded-md shadow-xs
        mr-3 mb-3 sm:mr-4 hover:underline text-center"
        href={`/${encodeURIComponent(nft.name)}`}
      >
        <img src={nft.image} className="rounded-md h-auto bg-black" />
        <div className="rounded-b-md py-2 px-2">
          <h3 className="text-xs text-gray-200">
            [#{nft.rarity_rank}] {nft.name}
          </h3>
        </div>
      </a>
    </>
  );
};
