import React, { useState } from 'react'
import cssico from '../assets/css3.gif'
import htmlico from '../assets/html5.gif'
import jsico from '../assets/js.gif'
import gitico from '../assets/git.gif'
//import vsico from '../assets/vscode.webp'
import reactico from '../assets/react.gif'
import nodeico from '../assets/nodejs.gif'
const Skills = () => {
    const [hoverid, sethoverid] = useState(1);
    const skilldetails={
      "hf06":"Proficient in HTML, I create structured and accessible web content using tags for elements like headings and links. Incorporating CSS and JavaScript enhances the overall design and functionality of the web pages.",
      "hf05":"With a solid grasp of CSS, I skillfully style and design web content, ensuring a visually appealing and cohesive presentation. Leveraging CSS properties, I customize layouts, colors, and typography to enhance the overall user experience.",
      "hf03":"I have practical experience with JavaScript, using it to create interactive and dynamic features for web applications. I'm skilled in handling events, modifying the Document Object Model (DOM), and working with asynchronous programming. These skills help me improve the way users interact with web applications.",
      "hf04":"I use Git effectively for managing version control, which helps me approach code repositories in a organized and collaborative way. I'm knowledgeable about branching, merging, and tracking changes, which lets me simplify the development process and make it easier for team members to work together efficiently.",
      "hf07":"I know how to use Visual Studio Code really well. It helps me work on code and make it better. I can find my way around easily and change code quickly. There are lots of useful tools and extra things I can add to make my work even better. I'm good at fixing problems in the code and keeping track of changes. This makes it easier for me and my team to get our work done faster.",
      "hf02":"I'm skilled in using React to build web applications that are scalable, efficient, and maintainable. I understand how to manage state and handle component lifecycles, which helps me create smooth and efficient user interfaces in projects that use React.",
      "hf01":"I'm skilled in using Node.js to build scalable, efficient, and maintainable backend systems. I have a strong understanding of asynchronous programming, API development, and managing server-side operations, which allows me to create robust and high-performing applications that handle data processing and client-server communication effectively."
    }

    function setthestate(x){
      sethoverid(x)
    }
    const skilldiv='p-1 md:p-4 lg:p-0 w-[17%] h-[70px] md:h-40 flex items-center justify-center'

    const skillbelow='w-[17%] h-2 md:h-4'
    const skcolor='bg-[#0d2f67] rounded-[10px]'
    const skhovercolor=['bg-[#191964ad]','bg-[#191964ad] rounded-t-[15px] md:rounded-t-[20px]']
    


  return (
    <div data-scroll data-scroll-speed="2" className='px-2 md:px-10'>
      <div className='flex flex-col items-center justify-around'>
        <div className='font-bold text-2xl py-6 md:py-8'>Skills & Tools</div>
        
        <div className='w-full'>
          <div className='flex items-center w-full justify-around gap-1'>
              <div onMouseOver={()=>{setthestate(1)}} className={`${hoverid===1?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-[40px] md:w-24' src={nodeico} alt="" /></div>
              <div onMouseOver={()=>{setthestate(2)}} className={`${hoverid===2?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-[40px] md:w-24' src={reactico} alt="" /></div>
              <div onMouseOver={()=>{setthestate(3)}} className={`${hoverid===3?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-[40px] md:w-24' src={jsico} alt="" /></div>
              <div onMouseOver={()=>{setthestate(4)}} className={`${hoverid===4?skhovercolor[1]:skcolor} ${skilldiv}`}><img className='w-[40px] md:w-24' src={gitico} alt="" /></div>
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
