import React from 'react'

const ProductCard = ({img}) => {
  return (
    <div  className=' relative mt-[50px]' >
        <img className=' object-cover w-[560px] h-[770px] rounded-[20px]' src={img} alt="" />
        <div className= ' rounded-xl m-auto absolute bottom-[20px] bg-[#FEFFF4] flex items-center justify-between p-[20px] left-[20px] w-[360px] h-[100px] '>
            <div className='flex flex-col justify-between gap-[30px]'>
            <p>ALYA SKIN CLEANSER.</p>
            <p>FROM $29.99</p>
            </div>
            <div className='h-[80px] flex justify-center bg-[#2D3B361A] rounded-xl items-center w-[80px] ' >
                <img className='h-[20px] w-[20px]' src="./src/assets/cart-large-2-svgrepo-com 5.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProductCard