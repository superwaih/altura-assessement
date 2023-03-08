import React from 'react'

const Header = ({address}) => {
  return (
    <div className=' bg-[#131313] '>
    <div className='flex m-auto  py-6 text-white w-[80%] justify-between'>
      <div>
        <h1 className='font-bold uppercase'>Altura</h1>
      </div>
      <div>
        {address ? address.slice(0,3) + "..." + address.slice(10, 15) : "Address"}
        

      </div>
    </div>

    </div>
  )
}

export default Header