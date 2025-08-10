import React from 'react'

const MobileNav = () => {
  return (
    <div className='max-w-[600px]  flex justify-between items-center px-[30px] bg-[#EFF5E1]'>
        <h1 className='font-bold'>SKINCARE</h1>
        <div className='flex justify-center items-center gap-[10px]'>
            <img className='w-[30px] p-[5px] h-[30px] bg-[#F8FEE5] rounded-[50%]'  src="./src/assets/bag-4-svgrepo-com 1.svg" alt="" />
            <h1 >Cart(1)</h1>
            <img className='w-[30px] p-[5px] h-[30px] bg-[#F8FEE5] rounded-[50%]' src="./src/assets/heart-svgrepo-com (1) 1.svg" alt="" />
            <img className='w-[30px] p-[5px] h-[30px] bg-[#F8FEE5] rounded-[50%]' src="./src/assets/person 1.svg" alt="" />

        </div>
    </div>
  )
}

export default MobileNav