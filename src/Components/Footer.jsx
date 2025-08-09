import React from 'react'

const Footer = () => {
  return (
    <div className='relative w-[100%] text-[#E7E8E0] h-[600px] overflow-hidden  px-[100px] bg-[#2D3B36]'>
        <div className='flex justify-between pt-[100px] items-center'>
            <p className='text-[60px] font-thin leading-[60px]'>Join The Skincare <br />
            Community Now.</p>
            <div className='leading-[60px]'>
                <h1 className='text-[30px] font-thin'>Get in Touch</h1>
                <p className='text-[60px] font-thin'>contact.skincare.com</p>
            </div>
        </div>

        <div className='flex justify-between mt-[100px]'>
            <div>
                <ul className=' font-thin flex gap-[40px]' >
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
            </div>

            <div>
                <ul className=' font-thin flex gap-[40px]'>
                    <li>Term of Services</li>
                    <li>Privacy Policy</li>
                    <li>Cookies Policies</li>
                </ul>
            </div>
        </div>

        <h1 className="absolute  bottom-[-200px] left-[-70px] text-[310px] text-[#3D4B4680] ">SKINCARE</h1>
    </div>
  )
}

export default Footer