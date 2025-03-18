import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden ' id='Footer'>
         <div className=' container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima dolores maxime porro quisquam consectetur id facilis facere corporis ex iure laboriosam vel, quas enim iste eos repellat dolor! Nobis, natus? </p>
                </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0' >
                <h3 className='text-lg text-white font-bold mb-4 '>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white '>Home</a>
                    <a href="#About" className='hover:text-white '>About Us</a>
                    <a href="#Contact" className='hover:text-white '>Contact Us</a>
                    <a href="#" className='hover:text-white '>Privacy-Policy</a>
                </ul>
            </div>
            <div className=' w-full md:w-1/3 '>
            <h3 className='text-lg text-white font-bold mb-4 '>Subscribe to our newsletter</h3>
            <p className='text-gray-400 max-w-80 mb-4'> The latest news,articles,and resources ,sent to your inbox weekly.</p>
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter your Email' className=' p-2 border border-gray-700 focus:outline-none bg-gray-800 text-gray-400 w-full md:w-auto ' />
                <button className='py-2 px-4 bg-blue-500 rounded text-white'>Subscribe</button>
            </div>
            </div>

         </div>
         <div className='border-t border-gray-700 py-4 mt-10 text-gray-500 text-center '>
         Copyright 2025 @ Shashi.All Right Reserved.
         </div>


        

    </div>
  )
}

export default Footer