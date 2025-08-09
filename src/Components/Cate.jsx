import React from 'react'
import ProductCard from './ProductCard'
const Cate = () => {
  return (
    <div className='mt-[100px]'>
        <div>
            <p className='text-[60px] font-thin text-center leading-[50px]'>Feel Beautiful Inside and Out <br />
            with Every Product.</p>
            <div className='flex gap-[20px] mt-[50px] justify-center'>
<button className='w-[195px] h-[60px] bg-[#2D3B36] text-[#FEFFF4] rounded-[100px]'>NEW ARRIVAL</button>
<button className='w-[195px] h-[60px] border text-[#2D3B36] rounded-[100px]' >CLEANSING</button>
<button className='w-[195px] h-[60px] border text-[#2D3B36] rounded-[100px]'>ACNE FIGHTER</button>
<button className='w-[195px] h-[60px] border text-[#2D3B36] rounded-[100px]'>ANTI AGGING</button>

            </div>
        </div>
{/* Card */}
        <div>
        <div className='flex px-[100px] gap-[20px]'>
            <ProductCard img={"./src/assets/filip-knezevic-k-ElrinXWAk-unsplash 2.png"}/>
    <ProductCard img={"./src/assets/cierra-henderson-LWIQp-0_b98-unsplash 1.png"}/>
    <ProductCard img={"./src/assets/mathilde-langevin-p3O5f4u95Lo-unsplash 1.png"}/>

    </div>
        </div>
    </div>
  )
}

export default Cate