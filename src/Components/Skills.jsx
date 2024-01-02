import React, { useState } from 'react'
import cssico from '../assets/css3.gif'
import htmlico from '../assets/html5.gif'
import jsico from '../assets/js.gif'
import gitico from '../assets/git.gif'
import vsico from '../assets/vscode.webp'
import reactico from '../assets/react.gif'
const Skills = () => {
    const [hoverid, sethoverid] = useState(1);
    const skilldetails={
      "hf06":"Proficient in HTML, I create structured and accessible web content using tags for elements like headings and links. Incorporating CSS and JavaScript enhances the overall design and functionality of the web pages.",
      "hf05":"With a solid grasp of CSS, I skillfully style and design web content, ensuring a visually appealing and cohesive presentation. Leveraging CSS properties, I customize layouts, colors, and typography to enhance the overall user experience.",
      "hf02":"I possess hands-on experience with JavaScript, proficiently developing interactive and dynamic features for web applications. Leveraging my skills in event handling, DOM manipulation, and asynchronous programming, I enhance user interactions.",
      "hf03":"I effectively utilize Git for version control, ensuring a systematic and collaborative approach to managing code repositories. With expertise in branching, merging, and tracking changes, I streamline the development process and facilitate efficient collaboration within a team.",
      "hf04":"Having a command of Visual Studio Code, I efficiently navigate and edit code, utilizing its rich features and extensions for a seamless development experience. With proficiency in debugging and version control integrations, I enhance productivity in software development projects.",
      "hf01":'Possessing in-depth knowledge of React, I architect scalable and efficient web applications with reusable components, ensuring a modular and maintainable codebase. My expertise extends to state management and component lifecycle, enabling optimal performance and a seamless user interface in React-based projects.'
    }

    function setthestate(x){
      sethoverid(x)
    }
    const skilldiv='p-1 md:p-4 lg:p-0 w-[17%] h-[70px] md:h-40 flex items-center justify-center'

    const skillbelow='w-[17%] h-2 md:h-4'
    const skcolor='bg-[#0d2f67] rounded-[10px]'
    const skhovercolor=['bg-[#191964ad]','bg-[#191964ad] rounded-t-[15px] md:rounded-t-[20px]']
    


  return (
    <div className='px-2 md:px-10'>
      <div className='flex flex-col items-center justify-around'>
        <div className='font-bold text-2xl py-6 md:py-8'>Skills & Tools</div>
        
        <div className='w-full'>
          <div className='flex items-center w-full justify-around gap-1'>
              <div onMouseOver={()=>{setthestate(1)}} className={`${hoverid===1?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-[40px] md:w-24' src={reactico} alt="" /></div>
              <div onMouseOver={()=>{setthestate(2)}} className={`${hoverid===2?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-[40px] md:w-24' src={jsico} alt="" /></div>
              <div onMouseOver={()=>{setthestate(3)}} className={`${hoverid===3?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-[40px] md:w-24' src={gitico} alt="" /></div>
              <div onMouseOver={()=>{setthestate(4)}} className={`${hoverid===4?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-[40px] md:w-24' src={vsico} alt="" /></div>
              <div onMouseOver={()=>{setthestate(5)}} className={`${hoverid===5?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-[40px] md:w-24' src={cssico} alt="" /></div>
              <div onMouseOver={()=>{setthestate(6)}} className={`${hoverid===6?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-[40px] md:w-24' src={htmlico} alt="" /></div>
          </div>
          <div className='flex items-center w-full justify-around gap-1'>
            <div className={`${skillbelow} ${hoverid===1?skhovercolor[0]:'bg-white'}`}></div>
            <div className={`${skillbelow} ${hoverid===2?skhovercolor[0]:'bg-white'}`}></div>
            <div className={`${skillbelow} ${hoverid===3?skhovercolor[0]:'bg-white'}`}></div>
            <div className={`${skillbelow} ${hoverid===4?skhovercolor[0]:'bg-white'}`}></div>
            <div className={`${skillbelow} ${hoverid===5?skhovercolor[0]:'bg-white'}`}></div>
            <div className={`${skillbelow} ${hoverid===6?skhovercolor[0]:'bg-white'}`}></div>

        </div>

        </div>
        
        <div style={{border:'2px solid black'}} className={`h-[200px] md:min-h-[300px] w-full flex items-center justify-center rounded-lg text-[13px] md:text-2xl font-bold text-center p-3 md:px-16`}>{skilldetails["hf0"+hoverid]}</div>

      </div>

    </div>
  )
}

export default Skills
