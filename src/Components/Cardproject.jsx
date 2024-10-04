import React, { useEffect } from 'react'
/* import reactlogo from '../assets/reactlogo.png'
import jslogo from '../assets/jslogo.webp'
import firebaselogo from '../assets/firebase.webp'
 */
import gsap from 'gsap'
const Cardproject = (props) => {
  const {details}=props
  
  const classforGSAP=Math.floor(Math.random()*10000)
  useEffect(() => {
    gsap.to(`.db12${classforGSAP}`,{
      opacity:0,
      scale:0.9,
      scrollTrigger:{
        trigger:`.db12${classforGSAP}`,
        start:'top 10%',
        end:'bottom 10%',
        //markers:true,
        scrub:true,
        
      }
    })

  },[])
    
    const imgcss='h-[180px] md:h-[25vw] rounded-xl md:rounded-2xl'
    const imglink=details.Imagelink
    
  return (
    <div id='divtotarget' className={`flex flex-col items-center sticky top-5 db12${classforGSAP}`}>
              
              <img className={imgcss} src={imglink} alt="Nothing" />

              {/* <section className='py-2 mt-2 flex bottom-[25%] items-center justify-around w-[100%]'>
              <img className='h-[50px] w-[50px]' src={firebaselogo} alt="" />
              <img className='h-[40px] w-[40px]' src={reactlogo} alt="" />
              <img className='h-[40px] w-[40px]' src={jslogo} alt="" />
              </section> */}

              <h1 className='w-full mt-4 text-lg md:text-xl font-bold text-left'>{details.Name}</h1>
              <p className='w-full text-sm md:text-xl text-left my-2 md:my-4'>{details.Details}</p>
              <section>
                
              <button onClick={()=>{
                if(details.Livedemo==='within'){
                  document.documentElement.scrollTop = 0;
                }else{
                  window.open(details.Livedemo, '_blank');
                }
              }}>Live Demo</button>
              <button onClick={()=>{window.open(details.Source, '_blank');}}>View Source</button>
              </section>

    </div>
  )
}

export default Cardproject
