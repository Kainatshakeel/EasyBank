import React from 'react'
import { Button } from './button'
import Image from 'next/image'
import CustomIcon from '@/public/desktop'
import Choose from '../choose'

const NextGen = () => {
  return (<div>
    <div className="relative md:p-0 sm:pb-20 flex flex-col md:flex-row mt-16 md:pl-20">
      <div className="space-y-6 md:mt-20 sm:-mt-28 text-center md:text-left md:order-1 sm:order-2 ">
      <h1 className="md:text-7xl sm:text-5xl">
  Next generation <br /> digital banking
</h1>

        <p className="w-[90%] md:w-[60%] text-neutral-grayishBlue mx-auto md:mx-0">
          Take your financial life online. Your Easybank account will be a one-stop-shop
          for spending, saving, budgeting, investing, and much more.
        </p>
        <Button />
      </div>

      <div className='relative overflow-hidden md:order-2 sm:order-1'>
        <CustomIcon 
          width={900}
          height={500} 
          className="absolute inset-0 z-0 object-cover top-[-70px] left-[-100px]" 
        />
        <Image 
          src="/image-mockups.png" 
          alt="mobile" 
          width={800} 
          height={800} 
          className="relative z-10 object-cover md:top-[-90px] sm:top-[-160px] md:right-[-50px]" 
        />
      </div>
    </div>
    <div className='absolute md:top-[85%] left-0  right-0' >
    <Choose/></div>
    </div>
  )
}

export default NextGen
