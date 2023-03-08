import axios from 'axios'
import React, { useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"


const API_KEY = "pgEKI8Ykt0tQUHC9RRU47LD3hpFXOJiVthbNwfipXc3WlnTle13aGoYZeyTlDLab"
const base_url = "https://deep-index.moralis.io/api/v2"


const SearchInput = ({address, setAddress, loading, setLoading, setTotalNFTs, network, setNetwork}) => {

  const fetchNFTs = async () => {
    const config = {
      headers: { 
        accept: 'application/json', 
      'X-API-Key': API_KEY,
      // params: { chain: 'polygon' }
    }
    };
    setLoading(true)
    if(network != "" && address != ""){
        try {
          const {data} = await axios.get(`${base_url}/${address}/nft?chain=${network}&format=decimal`, config)
          setTotalNFTs(data.result)
          setLoading(false)
          console.log(data.result)
          
        } catch (error) {
          console.log(error)
          setLoading(false)

        }
    }
   
  }
  
  return (
    <div className='mt-8 flex md:flex-row flex-col justify-between gap-5 m-auto  w-[80%] lg:w-[60%]'>
     
     <div className='relative bg-[#131313] w-full'>
     <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Paste your address to see you NFTs' className="w-full p-4 text-white bg-inherit" />
      
     </div>

     <div className='w-full bg-[#131313]'>
      <select onChange={(e) => setNetwork(e.target.value)} 
      value={network}
      className='w-full p-4 bg-inherit text-main-color' name="" id="">
        <option value="">select network</option>
        <option value="eth">Etheruem</option>
        <option value="polygon">Polygon</option>
        <option value="bsc">Binance Smart Chain</option>
        <option value="cro">Cronos</option>

      </select>
     </div>

     <button onClick={fetchNFTs} className='text-white focus:outline-main-color active:outline-dotted active:outline-1 p-2 border hover:text-main-color
     '>
        <AiOutlineSearch className='text-2xl' />
      </button>


    </div>
  )
}

export default SearchInput