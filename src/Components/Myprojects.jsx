import React from 'react'
import './Projects.css'

import portfolio from '../assets/portfolio.webp'
import guessword from '../assets/guessword.png'
import tictactoe from '../assets/tictactoe.png'
import Cardproject from './Cardproject'
const Projects = () => {

  function scrolltop(){
    document.documentElement.scrollTop = 0;
  }

  const linksto ={
    11:'https://github.com/NIKHIL7154/TIC-TAC-TOE-GAME',
    12:'https://nikhil7154.github.io/TIC-TAC-TOE-GAME/',
    21:'https://github.com/NIKHIL7154/Guess-The-Word-JS',
    22:'https://nikhil7154.github.io/Guess-The-Word-JS/',
    32:'https://github.com/NIKHIL7154/Portfolio-ReactJs'
  }

  const imgcss='h-[250px] md:h-[25vw] rounded-xl md:rounded-2xl'

  return (
    <div className='py-2 md:py-7 md:m-10 m-2 mt-6 flex flex-col items-center justify-center rounded-md md:rounded-3xl border-2 md:border-[3px] border-[#000]'>
      <p className='mb-[15px] md:mb-[40px] font-bold text-xl md:text-2xl'>Stuff I've Built</p>


      <div className='w-[90%] md:w-[80%] flex items-center justify-center'>
        <div id='projectcarry' className='grid-cols-1 md:grid-cols-2 grid gap-4 md:gap-12'>
          <Cardproject />
          
        </div>
        
      </div>

    </div>
  )
}

export default Projects
