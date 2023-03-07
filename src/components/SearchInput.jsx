import React, { useState } from 'react'

const SearchInput = () => {
  const[address, setAddress] = useState("")
  return (
    <div className='mt-8 flex relative m-auto bg-[#131313] w-[80%] lg:w-[60%]'>
     
      <input type="text" placeholder='Paste your address to see you NFTs' className="w-full p-4  bg-inherit" />
      <button className='text-white focus:outline-main-color active:outline-dotted active:outline-1 hover:text-main-color absolute right-0 top-[30%]'>Search</button>
    </div>
  )
}

export default SearchInput