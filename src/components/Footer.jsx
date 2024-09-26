import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='flex justify-between items-center px-2 sm:px-20 cursor-pointer'>
        <ul className='flex list-none my-14  space-x-6'>
        <li to='/' className="hover:text-[#A5A5A5]">Home</li>
        <li to='/jobsec' className="hover:text-[#A5A5A5]">Jobs</li>
        <li to='/uploadjob' className="hover:text-[#A5A5A5]">UploadJob</li>
        <li to='/blogpage' className="hover:text-[#A5A5A5]">Blog</li>
        <li to='/aboutus' className="hover:text-[#A5A5A5]">AboutUs</li>
        <li to='/terms' className="hover:text-[#A5A5A5]">Terms</li>
        </ul>
        <div className='flex space-x-4'>
            <FaGithub className='sm:text-2xl hover:text-[#A5A5A5]'/>
            <FaLinkedin className='sm:text-2xl hover:text-[#A5A5A5]'/>
        </div>
    </section>
  )
}

export default Footer