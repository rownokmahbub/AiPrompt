import Image from 'next/image'
import React from 'react'
import {
  
  UserButton
} from "@clerk/nextjs";
export default function Navbar() {
  return ( 
    <div className='flex justify-between items-center gap-5 container mx-auto py-2'>
        <Image src='/logo.png' alt='logo' width={100} height={100}/>
        <div className=' items-center gap-5 hidden md:flex'>
            <p className='text-black dark:text-white cursor-pointer hover:text-blue-500'>Home</p>
            <p className='text-black dark:text-white cursor-pointer hover:text-blue-500'>History</p>
            <p className='text-black dark:text-white cursor-pointer hover:text-blue-500'>ContactUs</p>
        </div>
        <UserButton/>
    </div>
  )
}
