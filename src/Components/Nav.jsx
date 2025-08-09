import React from 'react'

const Nav = () => {
  return (
    <div className='w-100%'>
        <div className=' flex w-full justify-between items-center px-[100px] '>
            <h1>SKINCARE</h1>
            <ul className='flex gap-[30px]'>
                <li>All Products</li>
                <li>Serum</li>
                <li>Sunscreen</li>
                <li>Bundle</li>
            </ul>
            <div className='flex items-center gap-[10px]'>
               <img className='h-[40px] w-[40px] p-[10px]  rounded-[50%] bg-[#F8FEE5]' src="./src/assets/bag-4-svgrepo-com 1.svg" alt="" /> 
               <h1>Cart(1)</h1>
               <img className='h-[40px] w-[40px] p-[10px]  rounded-[50%] bg-[#F8FEE5]' src="./src/assets/heart-svgrepo-com (1) 1.svg" alt="" />
               <img className='h-[40px] w-[40px] p-[10px]  rounded-[50%] bg-[F8FEE5]' src="./src/assets/person 1.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Nav