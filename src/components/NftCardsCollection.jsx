import React, { useEffect, useState } from "react";
import { NFTs } from "../utils/data";
import LoadingCard from "./LoadingCard";
import NftCard from "./NftCard";

const NftCardsCollection = ({activateModal, setActivateModal, loading, address, network, setSelectedNFT, totalNFTs, selectedNFT}) => {
  const arr = [1,2,3,4,5,6,7,8]


  return (
    <div className="flex justify-center items-center">
      {/* <LoadingCard /> */}
      
        { loading ? 
          <div className="m-auto mb-6 w-[80%] place-content-center grid mt-8 grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 ">
        {arr.map((item) => (
        
        
            <LoadingCard key={item} />
        ))}
        </div>
        
        
        : 
        totalNFTs.length > 0 ? 
        <div className="m-auto mb-6 w-[80%] place-content-center grid mt-8 grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 ">
        {totalNFTs.map((nft) => (
        
        
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
        ))}
        </div>
        
        : 
        <div className="text-white flex justify-center max-w-lg p-8 items-center w-full m-auto text-2xl">
              You do not have any NFTs in the Current Network, Pls Enter your wallet Address and Select another blockchain network 
        </div>
        }
      </div>
    
  );
};

export default NftCardsCollection;
