import React from 'react'
import './Projects.css'

import portfolio from '../assets/portfolio.webp'
import guessword from '../assets/guessword.png'
import tictactoe from '../assets/tictactoe.png'
const Projects = () => {
  
  function creatediv(){
    let i=0
    for(i=0;i<10;i++){
      let compl=document.createElement('div')
      compl.innerHTML=`Hello this is ${i}`
      document.getElementById('divtotarget').appendChild(compl)
    }
  }
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
          <div id='divtotarget' className='flex flex-col items-center'>
              
              <img className={imgcss} src={tictactoe} alt="Nothing" />

              
              <p className='text-sm md:text-xl font-bold my-2 md:my-4'>Tic-Tac-Toe game built with Javascript, HTML and CSS</p>
              <section>
              <button onClick={()=>{window.open(linksto[12], '_blank');}}>Live Demo</button>
              <button onClick={()=>{window.open(linksto[11], '_blank');}}>View Source</button>
              </section>

          </div>
          
          <div id='divtotarget' className='flex flex-col items-center'>
              
              <img className={imgcss} src={guessword} alt="Nothing" />

              
              <p className='text-sm md:text-xl font-bold my-2 md:my-4'>Guess The Word game built with core javascript.</p>
              <section>
              <button onClick={()=>{window.open(linksto[22], '_blank');}}>Live Demo</button>
              <button onClick={()=>{window.open(linksto[21], '_blank');}}>View Source</button>
              </section>

          </div>
          <div id='divtotarget' className='flex flex-col items-center'>
              
              <img className={imgcss} src={portfolio} alt="Nothing" />

              
              <p className='text-sm md:text-xl font-bold my-2 md:my-4'>Portfolio webapp built with REACT-JS and Tailwind CSS.</p>
              <section>
              <button onClick={scrolltop}>Live Demo</button>
              <button onClick={()=>{window.open(linksto[32], '_blank');}}>View Source</button>
              </section>

          </div>
          
        </div>
        
      </div>

    </div>
  )
}

export default Projects
