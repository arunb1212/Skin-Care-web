import React from 'react'
import Nav from './Nav'


const Hero = () => {
  return (
    <div className='w-full  bg-[#EFF5E1]'>
        <div className='pt-[50px]'>
        <Nav />

        </div>
 
<div className='flex mt-[100px] px-[100px] justify-between items-center'>
    <p className='font-thin text-[20px] indent-[95px]'>Transform your skincare  <br /> routine with premium products that <br /> restore, protect, and enhance your <br /> nautural glow every day.</p>
    <div className='w-[398px] leading-[80px] h-[253px] '>
    <h1 className='text-[100px] text-bold '>GLOW
    NATUR-ALLY</h1>
    </div>

    <img className='w-[222px] h-[220px] rounded-md' src="./src/assets/skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 4.png" alt="" />
</div>

<div className='w-100%  relative mt-[430px]'>
<h1 className='w-[full] font-[800] text-[275px]'>SKINCARE</h1>
<div className='rounded-md'>
    <img className=' absolute bottom-[115px] left-[450px]  rounded-md w-[610px] h-[675px]' src="./src/assets/ChatGPT Image Jun 15, 2025, 10_24_47 PM 3.png" alt="" />
</div>
<button className=' absolute top-[-100px] left-[100px] text-[#EFF5E1] bg-[#2D3B36] w-[180px] h-[60px] rounded-[40px]'>Shop Now</button>
</div>
<div className='px-[100px]'>
    <h1 className='text-[40px] font-light text-left'>
    Experience the ultimate in skincare with our expertly formulated products,
crafted to nourish, protect, and rejuvenate your skin. Combining the finest
natural ingredients with <span className='opacity-30'> advanced science, our collection ensures every
skin type can achieve a radiant, healthy glow. Embrace your beauty with
confidence every day. Experience the ultimate in skincare with our 
expertly formulated products, crafted to nourish, protect, and rejuvenate
your skin.</span>
    </h1>
</div>


    </div>
  )
}

export default Hero