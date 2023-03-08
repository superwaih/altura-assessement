import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NftModal from './NftModal'
import imageOne from "../utils/images/nft-1.png"

// const API_KEY = ""
const base_url = "https://deep-index.moralis.io/api/v2/nft"
const NftCard = ({nft, activateModal, setSelectedNFT, token_address, token_id, address, network, setActivateModal}) => {  

  const[nftDetail, setNftDetail] = useState([])
  const fetchUniqueNFT = async()=>{
    const config = {
      headers: { 
        accept: 'application/json', 
      'X-API-Key': API_KEY,
     
    }
    };
    if(network != "" && address != ""){
        try {
          const {data} = await axios.get(`${base_url}/${token_address}/${token_id}?chain=${network}`, config)
          console.log(data.result)
          
        } catch (error) {
          console.log(error)
        }
    }
  }

  const metadata = JSON.parse(nft?.metadata)
  return (

    <div  onClick={() => setSelectedNFT(nft)} key={token_id} className='flex justify-center items-center'>
      <div onClick={() => setActivateModal(!activateModal)} className='box-shadow  max-w-[380px] hover:scale-105 cursor-pointer duration-300 flex flex-col'>
      <div className="img w-full px-3 py-3">
        <img src={metadata?.image ? metadata?.image : imageOne} className="w-full text-white" alt="Nft Image" />
      </div>
      
      <div className='py-5 m-2 px-3 bg-black'>
        <div className='flex justify-between  '>
          <h3 className='text-white font-semibold md:text-lg lg:text-xl'>{metadata?.name}</h3>
          <p className='text-main-color uppercase font-bold'>{nft?.symbol}</p>
        </div>
        <div className='flex py-3 justify-between bg-black'>
          <h3 className='text-[#9CA3AF] md:text-lg lg:text-xl font-bold'>{nft?.contract_type}</h3>
          <p className='text-white md:text-lg lg:text-xl font-bold'>2.5ETH</p>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default NftCard