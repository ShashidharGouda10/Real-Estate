import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex items-center justify-between px-6 py-4 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className=' hidden md:flex  gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Testimonails</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>SignUp</button>
            <img src={assets.menu_icon} className='md:hidden w-7' alt="" />
        </div>
        {/* mobile menu */}
        <div className='md:hidden fixed w-full top-0 right-0 bottom-0 overflow-hidden transition-all bg-white'>
            <div className=' flex justify-end p-6'>
                <img src={assets.cross_icon} className='w-6 flex items-end ' alt="" />
            </div>
            <ul className=' flex flex-col items-center mt-5 gap-2 px-5 text-lg font-medium'>
                <a href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a href="#Testimonails" className='px-4 py-2 rounded-full inline-block'>Testimonails</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar