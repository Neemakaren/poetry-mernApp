import React from 'react'
import img from '../assets/img-1.jpg'
import Navbar from './Navbar'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


const Hero = () => {
  return (
  <header className='h-screen relative'>
    <Navbar />
    <div className='image w-[100%] h-[100%] bg-no-repeat bg-cover'>
      
      <div className='h-full text-[1em] flex flex-col items-center justify-center font-extrabold w-[90%] uppercase lg:text-[1.2em] sm:w-[70%]  mx-auto text-center space-y-5'>
      {/* <div className='fade'> */}
      <RoughNotation type="highlight" show={true} color="#fff176">
        <h2>Hi There I'm Karen</h2>
        </RoughNotation>
      {/* </div> */}
        <p className=' border-black border-x-8 pl-2'>Lorem ipsum dolor, 
        <RoughNotation type="highlight" show={true} color="pink" className='px-4'>
        sit amet consectetur
          </RoughNotation>
          adipisicing elit. Quaerat quisquam consequatur, accusantium necessitatibus temporibus dicta modi, error officiis, odit minus expedita veniam facilis! Soluta ab voluptates iste tempora commodi aspernatur.</p>
      </div>
    </div>
  </header>
  )
}

export default Hero