import React, { useState } from 'react'
import NftModal from './NftModal'

const NftCard = ({nft, activateModal, setActivateModal}) => {
  console.log(nft.name)
  return (
    <>
    <div  className='flex justify-center items-center'>
      <div onClick={() => setActivateModal(!activateModal)} className='box-shadow  max-w-[380px] hover:scale-105 cursor-pointer duration-300 flex flex-col'>
      <div className="img w-full px-3 py-3">
        <img src={nft?.img} className="w-full" alt="Nft Image" />
      </div>
      
      <div className='py-5 m-2 px-3 bg-black'>
        <div className='flex justify-between  '>
          <h3 className='text-white font-semibold md:text-lg lg:text-xl'>{nft?.name}</h3>
          <p className='text-main-color uppercase font-bold'>Buy</p>
        </div>
        <div className='flex py-3 justify-between bg-black'>
          <h3 className='text-[#9CA3AF] md:text-lg lg:text-xl font-bold'>{nft?.collection}</h3>
          <p className='text-white md:text-lg lg:text-xl font-bold'>2.5ETH</p>
        </div>
      </div>
    </div>
    
    </div>
   
    </>
  )
}

export default NftCard