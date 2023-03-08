import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
const NftModal = ({nft, activateModal, setActivateModal}) => {
  console.log(nft)

  const metadata = JSON.parse(nft?.metadata)
  return (
    <div className='fixed bg-black min-h-[60vh] left-[20%] right-[20%]  top-[25%] mx-auto md:w-[60%] '>
      <div onClick={() => setActivateModal(!activateModal)} className='text-white flex p-3 w-full justify-end items-end'>
        <AiOutlineClose />
      </div>

      <div  className='cursor-pointer p-4 gap-8 justify-evenly duration-300 flex flex-col md:flex-row'>
      <div className="img w-full">
        <img src={metadata?.image ? metadata?.image : imageOne} className="max-h-[300px] w-full text-white" alt="Nft Image" />
      </div>

      <div className='flex flex-col justify-between px-3  space-y-4'>
      <h3 className='text-white font-semibold md:text-lg lg:text-2xl'>{metadata?.name}</h3>
      <p className='text-[#FFFFFF]/50 leading-12 text-justify'>{metadata?.description}</p>

      <div className='flex justify-between'>
      <div className='flex flex-col '>
        <h3 className='text-[#FFFFFF]/50'>Created By</h3>
        <p className='text-main-color font-bold'>Hello</p>
      </div>
      <div className='flex flex-col '>
        <h3 className='text-[#FFFFFF]/50'>Owned By</h3>
        <p className='text-main-color font-bold'>Hello</p>
      </div>
      </div>


      <div className=''>
        <button className='bg-main-color w-full p-4 text-lg'>Vist Opensea</button>
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