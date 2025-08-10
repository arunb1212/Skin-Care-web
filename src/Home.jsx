import React, { useState, useEffect } from 'react'
// import Nav from './Components/Nav'
import Hero from './Components/Hero'
// import Skincare from './Components/Skincare'
// import ProductCard from './Components/ProductCard'
import Skincare from './Components/Skincare'
import ProductCard from './Components/ProductCard'
import Imgcard from './Components/Imgcard'
import Cate from './Components/Cate'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import MobileHome from './MobileHome'

const Home = () => {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth
      if (width < 600) {
        setMobile(true)
      } else if (width > 768) {
        setMobile(false)
      }
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  if (mobile) {
    return (
      <div>
        <MobileHome/>
      </div>
    )
  }

  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className='max-h-fit'>
        <Skincare />
      </div>
      <div className='px-[100px] mt-[100px]'>
        <div className='flex justify-between items-center'>
          <button className='w-[300px] flex justify-center items-center gap-[20px] h-[60px] border rounded-[30px]'>
            <div className='w-[15px] h-[15px] rounded-[50%] bg-black'></div>
            Best Selling Products
          </button>
          <p className='text-center leading-[50px] text-[50px] font-thin'>
            Skincare That Brings Out <br />
            Your Natural Radiance
          </p>
          <div className='flex gap-[20px]'>
            <img className='w-[60px] h-[60px]' src="./src/assets/left arrow 1.svg" alt="" />
            <img className='w-[60px] h-[60px]' src="./src/assets/right arrow 1.svg" alt="" />
          </div>
        </div>
        <div className='flex gap-[20px]'>
          <ProductCard img={"./src/assets/filip-knezevic-k-ElrinXWAk-unsplash 2.png"} />
          <ProductCard img={"./src/assets/cierra-henderson-LWIQp-0_b98-unsplash 1.png"} />
          <ProductCard img={"./src/assets/mathilde-langevin-p3O5f4u95Lo-unsplash 1.png"} />
        </div>
      </div>
      <div>
        <Imgcard />
      </div>
      <div>
        <Cate />
      </div>
      <div>
        <Faq />
      </div>
      <div className='mt-[100px]'>
        <Footer />
      </div>
    </div>
  )
}

export default Home