import React, { useState } from 'react'
import Devicon from '../assets/webdev.png'
const Myinfo = () => {
  const [togglee, settogglee] = useState(true);
  

  return (

    <div className='flex-col md:flex-row flex mt-4 md:mt-16 justify-start md:justify-between items-center pt-1 px-4 md:p-10'>
      {togglee ? <img className='mb-[20px] w-[300px] md:w-[450px] lg:w-[600px]' src={Devicon} alt="Nothing" /> : <></>}
      <div className='text-center md:text-left'>
        <h1 className='font-bold text-xl md:text-3xl'>Hello👋<br></br>I'm{togglee} Nikhil Thakur<br></br>A Full Stack Developer🧑‍💻</h1>
        <h1 className='max-w-[630px] text-[15px] md:text-xl mt-10'>I specialize in building responsive and interactive web applications using HTML, CSS, Javascript 
        and React-JS. I have experience working with React and other web development
        frameworks. If you have a project in mind or just want to say hello, feel free to get in
        touch.</h1>
        <button onClick={()=>{
          settogglee(!togglee)
        }} className='h-10 w-[200px] text-xl mt-10 my-4 md:h-14 md:w-[300px] bg-[#1b0606] text-white rounded-[20px] hover:bg-[white] hover:text-black hover:border-black hover:border-2'>Get in touch</button>
      </div>
      {togglee ?<></> :<img className='w-[300px] md:w-[450px] lg:w-[600px]' src={Devicon} alt="Nothing" />}

    </div>
  )
}

export default Myinfo

