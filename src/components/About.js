import React from 'react'

const About = () => {
  return (
    <div id='about' className='h-screen w-screen relative' >
      <div className=' w-full h-full absolute top-14 left-60' >
          <h1 className='text-5xl tracking-wider leading-relaxed font-bold text-[#3f3f3e] text-left' >About Me</h1>
      </div>
      <img src="/leaf.png" alt="" className='absolute top-5 right-5 w-60 h-60 ' />
      <div className='text-[#373f3e] absolute top-44 left-80 leading-normal tracking-wider text-2xl space-y-10 w-3/5' >
          <p>
          Hi, I'm Zoha Javed, a <b>front-end developer</b> with a passion for creating responsive, user-centric web applications.
          </p>
          <p><b>Skilled</b> in HTML, CSS, Tailwind CSS, JavaScript, React, and Next.js, I build solutions that enhance user experience across devices.</p> 
          <p> With <b>experience</b> in deploying projects on Vercel and integrating APIs, my work focuses on performance and accessibility.</p>
          <p>I recently completed my <b>Bachelor's</b> in Computer Science from Lahore College for Women University, Lahore.</p>
      </div>
      
    </div>
  )
}

export default About
