import React from 'react'

const Imgcard = () => {
  return (
    <div className=''>
        <div className=' relative mt-[100px] px-[100px] '>
        <img className='rounded-[30px]' src="./src/assets/ChatGPT Image Jun 16, 2025, 01_32_50 AM 1.png" alt="" />
        <div className='absolute flex justify-center px-[100px] items-center flex-col bottom-[10px] '>
            <p className='text-[#FEFFF4] text-center text-[80px]'>Feel Beautiful Inside and Out <br /> with Every Product.</p>
            <button className='bg-[#FEFFF4] font-thin w-[180px] h-[60px] rounded-[30px]'>Shop now</button>
        </div>
    </div>
    </div>
  )
}

export default Imgcard