import React from 'react'

const MobileHero = () => {
  return (
    <div className=  '  relative w-[full] '>
        <div className=' -ml-[10px] top text-[90px] text-[#2D3B36] text-center w-screen leading-[60px] font-[900] '>
        <h1 className='leading-[70px]'>GLOWWWW <br />
        NATURALLY</h1>
        </div>
        <div className='px-[30px] text-[18px] font-thin text-left'>
            <p>Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.</p>
        </div>

<div className='flex w-full flex-col' >
    <img className='object-cover w-screen z-[1]' src="./src/assets/ChatGPT Image Jun 15, 2025, 10_24_47 PM 3.png" alt="" />
    <div >
        <h1 className='text-[105px]  w-full sm:text-5xl  -mt-[60px]  -ml-[20px]  text-[#2D3B36] font-bold'>SKINCARE</h1>
    </div>
    <img className='-mt-[50px] object-cover w-[screen]' src="./src/assets/skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 4.png" alt="" />


</div>
<div className='flex justify-center'>
        <button className='w-[178px] bg-[#2D3B36] text-[#EFF5E1] mt-[50px] border h-[50px] font-thin rounded-[100px]  text-center'>Shop Now</button>
    </div>
    <div className='px-[30px] mt-[50px] font-thin text-left text-[20px]'>
    Experience the ultimate in skincare with our expertly formulated products,
crafted to nourish, protect, and rejuvenate your skin.  <br />
Combining the finest natural ingredients with advanced science, our collection ensures every
skin type can achieve a radiant, healthy glow. <br /> 
Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.
    </div>
    </div>
  )
}

export default MobileHero