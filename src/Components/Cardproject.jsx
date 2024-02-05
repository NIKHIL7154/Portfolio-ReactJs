import React from 'react'
import portfolio from '../assets/portfolio.webp'
import guessword from '../assets/guessword.png'
import tictactoe from '../assets/tictactoe.png'
const Cardproject = (props) => {
    const {details}=props
    const imgcss='h-[250px] md:h-[25vw] rounded-xl md:rounded-2xl'
    const linksto ={
        11:'https://github.com/NIKHIL7154/TIC-TAC-TOE-GAME',
        12:'https://nikhil7154.github.io/TIC-TAC-TOE-GAME/',
        21:'https://github.com/NIKHIL7154/Guess-The-Word-JS',
        22:'https://nikhil7154.github.io/Guess-The-Word-JS/',
        32:'https://github.com/NIKHIL7154/Portfolio-ReactJs'
      }
  return (
    <div id='divtotarget' className='flex flex-col items-center'>
              
              <img className={imgcss} src={tictactoe} alt="Nothing" />

              
              <p className='text-sm md:text-xl font-bold my-2 md:my-4'>Tic-Tac-Toe game built with Javascript, HTML and CSS</p>
              <section>
              <button onClick={()=>{window.open(linksto[12], '_blank');}}>Live Demo</button>
              <button onClick={()=>{window.open(linksto[11], '_blank');}}>View Source</button>
              </section>

    </div>
  )
}

export default Cardproject
