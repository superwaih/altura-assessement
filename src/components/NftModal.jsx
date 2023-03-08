import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import imageOne from "../utils/images/nft-1.png"
const NftModal = ({nft, activateModal, network, setActivateModal}) => {
  console.log(nft)

  const itemURL = () =>{
    return network === "polygon" ? "https://opensea.io/assets/matic" : "https://opensea.io/assets/ethereum"
  }

  const metadata = JSON.parse(nft?.metadata)
  return (
    <div className='fixed bg-black min-h-[60vh] left-8 right-8 md:left-[20%] md:right-[20%]  top-[25%] m-auto w-[80%] md:w-[60%] '>
      <div onClick={() => setActivateModal(!activateModal)} className='flex cursor-pointer  p-3 w-full justify-end items-end'>
        <div className='bg-main-color hover:bg-white p-3 rounded-full'>
        <AiOutlineClose className=' text-2xl text-black' />
        </div>
      </div>

      <div  className='cursor-pointer p-4 gap-8 justify-evenly duration-300 flex flex-col lg:flex-row'>
      <div className="img w-full">
        <img src={metadata?.image ? metadata?.image : imageOne} className="max-h-[300px] w-full text-white" alt="Nft Image" />
      </div>

      <div className='flex flex-col justify-between px-3  space-y-4'>
      <h3 className='text-white font-semibold md:text-lg lg:text-2xl'>{metadata?.name} <span># {nft?.block_number}</span></h3>
      <p className='text-[#FFFFFF]/50 max-w-lg leading-12 w-full'>{metadata?.description}</p>

      <div className='flex flex-col justify-between'>
      <div className='flex flex-col '>
        <h3 className='text-[#FFFFFF]/50'>Token Address</h3>
        <p className='text-main-color font-bold'>{nft?.token_address}</p>
      </div>
      <div className='flex flex-col '>
        <h3 className='text-[#FFFFFF]/50'>Owned By</h3>
        <p className='text-main-color font-bold'>{nft?.owner_of}</p>
      </div>
      <div className='flex flex-col '>
        <h3 className='text-[#FFFFFF]/50'>Contract</h3>
        <p className='text-main-color font-bold'>{nft?.contract_type}</p>
      </div>
      </div>


      <div className=''>
          <a href={`${itemURL()}/${nft?.token_address}/${nft?.token_id}`} target="_blank">
          <button className='bg-main-color rounded-md font-semibold w-full p-4 text-lg'>
          Buy Now
        </button>
          </a>
       
      </div>
      </div>

      
      
      {/* <div className='p bg-black'>
        <div className='flex flex-col justify-between'>
          <div className='flex gap-4 '>
            <h3 className='text-white'>NFT NAME:</h3>
            <p className='text-white font-semibold md:text-lg lg:text-xl'>{metadata?.name}</p>
          </div>
          <div>

          </div>
          <p className='text-main-color uppercase font-bold'>{nft?.symbol}</p>
        </div>
        <div className='flex py-3 justify-between bg-black'>
          <h3 className='text-[#9CA3AF] md:text-lg lg:text-xl font-bold'>{nft?.contract_type}</h3>
          <p className='text-white md:text-lg lg:text-xl font-bold'>2.5ETH</p>
        </div>
      </div> */}
    </div>
    </div>
  )
}

export default NftModal