import React from 'react'

function Card({place ,country ,person ,link}) {
  
  return (
    <>
      <div className='flex flex-col items-center bg-gray-400 w-64 h-70 p-2 rounded m-3'>
        <img className='w-56 h-56 rounded cursor-pointer' src={link}   alt="" />
        <p className='text-[18px] font-semibold'><span className='italic text-[20px]'>{place}</span>  {country}</p>
        <p className='font-semibold'>Captured By <span className='italic font-bold'>{person}</span></p>
      </div>
   
    </>
  )
}

export default Card