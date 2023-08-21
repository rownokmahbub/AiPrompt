import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10'>
        <div className='flex flex-col gap-4 items-center md:items-start'>
            <h2 className='text-3xl md:text-6xl font-bold '>Premium Car Rental <br /> In Your Area</h2>
            <p className='text-lg'>Book the selected car effortlessly, <br /> Pay
for driving only, Book the Car Now</p>
<button className='btn bg-cyan-600 capitalize'>Explore Cars</button>
        </div>
        <div>
            <Image className='object-cover w-full align-middle' src='/hero.png' alt='hero' width={400} height={500} />
        </div>
    </div>
  )
}
