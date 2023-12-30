import React, { useState } from 'react'
import cssico from '../assets/css3.gif'
import htmlico from '../assets/html5.gif'
import jsico from '../assets/js.gif'
import gitico from '../assets/git.gif'
import vsico from '../assets/vscode.webp'
const Skills = () => {
    const [hoverid, sethoverid] = useState(2);
    const skilldetails={
      "hf01":"I uses html",
      "hf02":"I uses css",
      "hf03":"I uses js",
      "hf04":"git is used by me",
      "hf05":"vscode ka king hoon bhai",

    }

    function setthestate(x){
      sethoverid(x)
    }
    const skilldiv='p-8 w-[20%] h-40 flex items-center justify-center'

    const skillbelow='w-[20%] h-4'
    const skcolor='bg-[rgb(0,0,0)] rounded-[20px]'
    const skhovercolor=['bg-[#ddedae]','bg-[#24fc3ab0] rounded-t-[20px]']
    


  return (
    <div className='px-10'>
      <div className='flex flex-col items-center justify-around'>
        <div className='font-bold text-2xl py-8'>Skills</div>
        <div className='flex items-center w-full justify-center gap-1'>
            <div onMouseOver={()=>{setthestate(1)}} className={`${hoverid===1?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-24' src={htmlico} alt="" /></div>
            <div onMouseOver={()=>{setthestate(2)}} className={`${hoverid===2?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-24' src={cssico} alt="" /></div>
            <div onMouseOver={()=>{setthestate(3)}} className={`${hoverid===3?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-24' src={gitico} alt="" /></div>
            <div onMouseOver={()=>{setthestate(4)}} className={`${hoverid===4?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-24' src={jsico} alt="" /></div>
            <div onMouseOver={()=>{setthestate(5)}} className={`${hoverid===5?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-24' src={vsico} alt="" /></div>
        </div>
        <div className='flex items-center w-full justify-around gap-1'>
          <div className={`${skillbelow} ${hoverid===1?skhovercolor[0]:'bg-white'}`}></div>
          <div className={`${skillbelow} ${hoverid===2?skhovercolor[0]:'bg-white'}`}></div>
          <div className={`${skillbelow} ${hoverid===3?skhovercolor[0]:'bg-white'}`}></div>
          <div className={`${skillbelow} ${hoverid===4?skhovercolor[0]:'bg-white'}`}></div>
          <div className={`${skillbelow} ${hoverid===5?skhovercolor[0]:'bg-white'}`}></div>

        </div>
        <div className={`${skhovercolor[0]} h-[200px] w-full flex items-center justify-center text-2xl font-bold`}>{skilldetails["hf0"+hoverid]}</div>

      </div>

    </div>
  )
}

export default Skills
