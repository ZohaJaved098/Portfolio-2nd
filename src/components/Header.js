import React from 'react'

const Header = () => {
  return (
    <div id='home' className='h-screen w-screen flex'>
      <div className='w-1/2 h-screen relative'>
        <img
          src="/me_in_blob.png"
          alt="png by pngtree"
          className='w-[450px] h-[430px] absolute top-32 right-28 z-10 animate-float'
        />
        <a href='/Zoha Javed Front-end Developer.pdf' download="/Zoha Javed Front-end Developer.pdf" target='_blank' class="cursor-pointer bg-[#fdfdfd] h-20 w-20 p-5 absolute top-48 right-28 rounded-full z-20 transition-all duration-300 ease-in-out hover:w-24 hover:h-24 text-sm hover:text-lg">
          <p className='text-center flex flex-col items-center gap-0 '>
            Download
            <b>CV</b>
          </p>
        </a>
      </div>
      <div className='w-1/2 h-screen relative' >
        <img src="/curve.png" alt="" className='h-full' />
        <div className='flex flex-col justify-center gap-5 text-center absolute top-40 left-80 text-white tracking-widest' >
          <h1 className='text-7xl font-bold' >Hi!</h1>
          <h2 className='text-5xl' >I'm <br /> Zoha Javed</h2>
          <p className='text-2xl leading-relaxed' >Front-End Developer now, <br /> Full-Stack enthusiast <br /><b className='text-3xl'>Soon!</b></p>
        </div>
        <div className='absolute right-0' >
          <div className='w-20 h-2 bg-white absolute bottom-[80px] right-0' />
          <div className='w-40 h-2 bg-white absolute bottom-[50px] right-0' />
          <div className='w-60 h-2 bg-white absolute bottom-[20px] right-0' />
        </div>
      </div>
      <div className="w-full h-1 absolute bottom-0 z-10 gradient_1" ></div>
    </div>
  )
}

export default Header