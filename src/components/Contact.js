import React from 'react'
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div id='contact' className='w-screen h-screen relative' >
      <img src="/white_leaf.png" alt="" className='absolute top-40 right-5 z-0 w-[800px] scale-y-[-1] -rotate-[65deg] opacity-25 ' />
      <img src="/white_leaf.png" alt="" className='absolute top-36 left-10 z-0 w-[800px]  rotate-[58deg] opacity-25 ' />

      <div className='w-full h-full flex flex-col justify-center items-center gap-4 absolute z-10 '>
        <div className='flex flex-col items-center gap-5' >
          <h1 className='text-4xl font-bold' >Contact Info</h1>
          <div className='flex justify-around'>
            <a href='' className='rounded-full p-3 hover:p-4 active:shadow-clicked-shadow text-[#373f3e]'><FaLinkedin className='w-8 h-8'/></a>
            <a href='' className='rounded-full p-3 hover:p-4 active:shadow-clicked-shadow text-[#373f3e]'><FaWhatsapp className='w-8 h-8'/> </a>
            <a href='' className='rounded-full p-3 hover:p-4 active:shadow-clicked-shadow text-[#373f3e]'><FaGithub className='w-8 h-8'/></a>
          </div>
        </div>
        <div className='bg-[#798e8a] rounded-lg h-96 w-[55%] text-white text-lg p-7 flex justify-between gap-10' >
          <form action="" className='flex flex-col justify-evenly items-start w-1/2 gap-1'>
            <label htmlFor="name" className='relative'>
              <input type="text" name="name" id="name" placeholder='Name' className='bg-[#b6cacc] text-black p-3 rounded-lg placeholder:text-[#373f3e]' />
              <span></span>
            </label>
            <label htmlFor="email" className='relative'>
              <input type="text" name="email" id="email" placeholder='E-mail' className='bg-[#b6cacc] text-black p-3 rounded-lg placeholder:text-[#373f3e]' />
              <span></span>
            </label>
            <label htmlFor="message" className='relative'>
              <textarea type="text" name="message" id="message" placeholder='Comment' rows={3} cols={40}  className='bg-[#b6cacc] text-black p-3 rounded-lg placeholder:text-[#373f3e] ' />
              <span></span>
            </label>
            <input type="submit" value="Send Message" className='w-40 bg-[#373f3e] p-2 rounded-lg self-end transition-all duration-500 ease-in-out hover:p-3 hover:shadow-hover-box-shadow focus:shadow-clicked-shadow' />
          </form>
          <div className='flex flex-col justify-start items-end mt-12 '>
            <p className='capitalize text-right text-xl leading-relaxed' >Looking forward <br /> to <br /> new collaborations</p>
            <h3 className='capitalize text-3xl' >Let create togather!</h3>
          </div>
        </div>
        <div className=''>
          <p className='text-[#fdfdfd] text-center tracking-wider' >zohajaved.098@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact