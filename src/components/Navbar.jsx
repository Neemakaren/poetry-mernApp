import {useState, useRef} from 'react'
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";

import { HiMenuAlt3 } from "react-icons/hi";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <nav className="w-full px-6 sm:px-20 bg-transparent mx-auto py-8 fixed z-10 select-none">
    
    <div className="flex justify-between bg-transparent">
      
      <div className=" bg-transparent">
        <h2 className='bg-[rgb(70,70,70)] logo text-[#F5F5F5] text-2xl font-extrabold'>Karen</h2>
        {/* <h2 className=' text-[rgb(70,70,70)] text-2xl px-2 font-extrabold '>Karen</h2> */}
      </div>

      <div className='flex'>
      <div onClick={handleCloseNavbar}
          className={`${isOpen ? " flex " : "hidden"} flex-row items-center transition duration-5 z-10  bg-[rgb(70,70,70)] text-[#F5F5F5] cursor-pointer list-none `}>
      <div className="hidden space-x-6 md:flex md:px-2 list-none lg:px-10 text-[1.1em] bg-transparent">
        <li to='/' className="hover:text-[#A5A5A5]">Home</li>
        <li to='/jobsec' className="hover:text-[#A5A5A5]">Jobs</li>
        <li to='/uploadjob' className="hover:text-[#A5A5A5]">UploadJob</li>
        <li to='/blogpage' className="hover:text-[#A5A5A5]">Blog</li>
        <li to='/aboutus' className="hover:text-[#A5A5A5]">AboutUs</li>
        <li to='/terms' className="hover:text-[#A5A5A5]">Terms</li>
      </div>
      </div>
      <button className='flex flex-row items-center justify-center text-2xl cursor-pointer transition-all duration-0.3 linear text-slate-900 ' onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <AiOutlineClose size={26} className=' md:bg-[rgb(70,70,70)]  md:text-[#F5F5F5] sm:h-10 sm:pr-2 lg:items-center'/> : <HiMenuAlt3  size={26}/>}
          </button>
          </div> 
      
    </div>

    <div className='flex'>
    <div onClick={handleCloseNavbar}
          className={`${isOpen ? " flex bg-[rgb(70,70,70)] " : "hidden"} md:hidden lg:hidden flex-col fixed min-h-full w-[50%] h-full right-0  list-none justify-start pt-6 transition duration-5 z-10 text-[1.2em] pl-6 space-y-6 text-[#F5F5F5]`}
        >
          <li to='/' >Home</li>
          <li to='/jobsec'>Jobs</li>
          <li to='/uploadjob' >UploadJob</li>
          <li to='/blogpage'>Blog</li>
          <li to='/aboutus' >AboutUs</li>
          <li to='/terms'>Terms</li>
          <li to='/faq'>Faq</li>
        </div>
        </div>

  </nav>
  )
}

export default Navbar

//