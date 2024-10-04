import { motion } from 'framer-motion'
import React from 'react'

const Navbar = () => {
  
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}}
    transition={{duration:0.5,ease:"easeInOut",delay:0.5}}
    className='h-[50px] md:h-[60px] bg-[rgb(255,255,255)] flex justify-center items-center rounded-b-[30px] drop-shadow-2xl'>
        <h3 className='font-bold text-[rgb(0,0,0)] text-[17px] md:text-2xl'>NIKHIL THAKUR</h3>
    </motion.div>
  )
}

export default Navbar
