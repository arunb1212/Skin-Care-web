import React from 'react'
import MobileNav from './MobileComp/MobileNav'
import MobileHero from './MobileComp/MobileHero'

const MobileHome = () => {
  return (
    <div className=' max-w-screen overflow-x-hidden  bg-[#EFF5E1] '>
      <div className='pt-[30px]'>
      <MobileNav/>
      </div>

      <div className=' mt-[50px]'>
      <MobileHero/>
      </div>
    </div>
  )
}

export default MobileHome