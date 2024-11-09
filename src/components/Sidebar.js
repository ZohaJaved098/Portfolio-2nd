import React, { useState } from 'react'
import {FaHome ,FaInfo, FaCogs, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-scroll';

function Sidebar() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div 
      className={` fixed z-50 h-screen ${isEnabled ? 'w-52' : 'w-20'} transition-all duration-500 ease-in-out flex flex-col justify-center`} 
      onMouseEnter={() => setIsEnabled(true)}
      onMouseLeave={() => setIsEnabled(false)}
    >
      {/* <div className='hidden max-sm:flex' ></div> sidebar icon for mobile size on click open fullwidth sidebar */}
      <div className='flex flex-col justify-center gap-10 items-start h-full p-5 pt-10'>
        <Link to="home" smooth={true} duration={500} className='flex gap-5 justify-around items-center w-full link_underline '>
          <span className='rounded-full bg-white p-3'>
            <FaHome className='w-5 h-5 text-[#3f3f3e]' />
          </span>
          {isEnabled && <p className='text-[#3f3f3e] font-bold text-lg'>Home</p>}
        </Link >
        <Link to="about" smooth={true} duration={500} className='flex gap-5 justify-around items-center w-full link_underline '>
          <span className='rounded-full bg-white p-3'>
            <FaInfo className='w-5 h-5 text-[#3f3f3e]' />
          </span>
          {isEnabled && <p className='text-[#3f3f3e] font-bold text-lg'>About Me</p>}
        </Link >
        <Link to="projects" smooth={true} duration={500} className='flex gap-5 justify-around items-center w-full link_underline'>
          <span className='rounded-full bg-white p-3'>
            <FaCogs className='w-6 h-6 text-[#3f3f3e]' />
          </span>
          {isEnabled && <p className='text-[#3f3f3e] font-bold text-lg'>Projects</p>}
        </Link >
        <Link to="contact" smooth={true} duration={500} className='flex gap-5 justify-around items-center w-full link_underline'>
          <span className='rounded-full bg-white p-3'>
            <FaEnvelope className='w-5 h-5 text-[#3f3f3e]' />
          </span>
          {isEnabled && <p className='text-[#3f3f3e] font-bold text-lg'>Contact Me</p>}
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
