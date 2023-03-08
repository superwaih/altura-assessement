import React from 'react'

const LoadingCard = () => {
  return (
    <div className="min-h-[350px] p-3 max-w-[350px] border-2 rounded-md">
  <div className="flex animate-pulse flex-row h-full space-x-5">
        <div className="flex w-full flex-col space-y-3">
        <div className="w-full bg-gray-300 h-[240px] rounded-md ">
        </div>
        <div className="w-full bg-gray-300 h-[100px] rounded-md ">
        </div>
    </div>
  </div>
</div>
  )
}

export default LoadingCard