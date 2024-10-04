import React, { useEffect } from 'react'
import Devicon from '../assets/webdev.png'
import { motion } from 'framer-motion'

import gsap from 'gsap'


const Myinfo = () => {
  useEffect(()=>{
    
    gsap.from('.mytext',{y:"20vh",opacity:0,duration:1,ease:"easeInOut",delay:0.7})
  }
  ,[])
  

  return (
    
    <div className='wholediv flex-col md:flex-row flex mt-4 md:mt-16 justify-start md:justify-between items-center pt-1 px-4 md:p-10'>
      <motion.img initial={{opacity:0}} animate={{opacity:1}}
      transition={{ease:"easeInOut",duration:1,delay:0.5}}
      className='mb-[20px] w-[300px] md:w-[450px] lg:w-[600px]' src={Devicon} alt="Nothing" />
      <div
      
      className='text-center md:text-left'>
        <h1
        className='font-bold text-xl md:text-3xl'>
          {["Hello👋","I'm Nikhil Thakur","A Full Stack Developer🧑‍💻"].map((name,index)=>{
            return <motion.span
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ease:"easeInOut",duration:0.7,delay:0.5+index*0.5}}
            >{name}<br></br></motion.span>
          })}
          
          
          </h1>
        <h1 className='mytext max-w-[630px] text-[15px] md:text-xl mt-10'>I specialize in building responsive and interactive web applications using the MERN stack (MongoDB, Express, React, Node.js) and Next.js. With experience in both front-end and back-end development, I can handle all aspects of web development. If you have a project in mind or just want to say hello, feel free to get in touch.</h1>
        <motion.button initial={{y:"20vh",opacity:0}} animate={{y:"0",opacity:1}} transition={{ease:"easeInOut",duration:1,delay:0.5}}  onClick={()=>{
          window.open('https://www.linkedin.com/in/nikhildocode/', '_blank');
        }} className='h-10 w-[200px] text-xl mt-10 my-4 md:h-14 md:w-[300px] bg-[#1b0606] text-white rounded-[20px] hover:bg-[white] hover:text-black hover:border-black hover:border-2'>Get in touch</motion.button>
      </div>
      
    </div>
  )
}

export default Myinfo

