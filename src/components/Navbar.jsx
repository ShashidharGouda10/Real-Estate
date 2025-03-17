import { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
    const[showMobileMenu,setShowMobileMenu]=useState(false)

    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow ='hiddden'
        }else{
            document.body.style.overflow='auto'
        }
        return()=>{
            document.body.style.overflow= 'auto'
        };

    },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex items-center justify-between px-6 py-4 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className=' hidden md:flex  gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Testimonails" className='cursor-pointer hover:text-gray-400'>Testimonails</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>SignUp</button>
            <img  onClick={()=>{setShowMobileMenu(true)}}  src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/* mobile menu */}
        <div className={`md:hidden ${showMobileMenu? 'fixed w-full':'h-0 w-0'}  top-0 right-0 bottom-0 overflow-hidden transition-all bg-white`}>
            <div className=' flex justify-end p-6 cursor-pointer'>
                <img onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} className='w-6 flex items-end ' alt="" />
            </div>
            <ul className=' flex flex-col items-center mt-5 gap-2 px-5 text-lg font-medium'>
                <a onClick={()=>setShowMobileMenu(false)}href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a onClick={()=>setShowMobileMenu(false)}href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={()=>setShowMobileMenu(false)}href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a onClick={()=>setShowMobileMenu(false)}href="#Testimonails" className='px-4 py-2 rounded-full inline-block'>Testimonails</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar