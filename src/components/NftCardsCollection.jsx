import React, { useEffect, useState } from "react";
import { NFTs } from "../utils/data";
import LoadingCard from "./LoadingCard";
import NftCard from "./NftCard";

const NftCardsCollection = ({activateModal, setActivateModal, loading, address, network, setSelectedNFT, totalNFTs, selectedNFT}) => {
  const arr = [1,2,3,4,5,6,7,8]
  return (
    <div className="flex justify-center items-center">
      {/* <LoadingCard /> */}
      <div className="m-auto mb-6 w-[80%] place-content-center grid mt-8 grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-4 ">
        { loading ? 
        arr.map((item) => (
          <LoadingCard key={item} />
        ))
        
        
        : 
        
        totalNFTs.map((nft) => (
          <NftCard
            activateModal={activateModal}
            setSelectedNFT={setSelectedNFT}
            setActivateModal={setActivateModal}
            nft={nft}
            key={nft?.token_id}
            token_id={nft?.token_id}
            token_address={nft?.token_address}
            address={address}
            network={network}
            
          />
        ))
        }
      </div>
    </div>
  );
};

export default NftCardsCollection;
