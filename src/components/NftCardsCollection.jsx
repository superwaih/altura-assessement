import React, { useEffect, useState } from "react";
import { NFTs } from "../utils/data";
import NftCard from "./NftCard";

const NftCardsCollection = () => {
  const [activateModal, setActivateModal] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <div className="m-auto mb-6 w-[80%] place-content-center grid mt-8 grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-4 ">
        {NFTs.map((nft) => (
          <NftCard
            activateModal={activateModal}
            setActivateModal={setActivateModal}
            nft={nft}
          />
        ))}
      </div>
    </div>
  );
};

export default NftCardsCollection;
