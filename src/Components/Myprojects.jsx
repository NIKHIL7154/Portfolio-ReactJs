import React, { useEffect, useState } from 'react'
import './Projects.css'


import {app} from '../fbconfig'
import {collection,getFirestore,getDocs ,query,orderBy} from "firebase/firestore";
import Cardproject from './Cardproject'
const Projects = () => {
  const db= getFirestore(app)

  const [holder, setholder]=useState()
  useEffect(() => {
    const myquery= query(collection(db,'portfolio'),orderBy('Order','asc'))
      getDocs(myquery).then(async (data)=>{
        let myarray=[]
        
        await data.forEach((doc)=>{

          let docdata=doc.data()
          myarray.push(<Cardproject key={docdata.Order} details={docdata}/>)
          
        })
        setholder(myarray)

      }).catch((err)=>{
        console.log(err)
      })
  }, [db]);

  

  
  return (
    <div className='py-2 md:py-7 md:m-10 m-2 mt-6 flex flex-col items-center justify-center rounded-md md:rounded-3xl border-2 md:border-[3px] border-[#000] '>
      <p className='mb-[15px] md:mb-[40px] font-bold text-xl md:text-2xl'>Stuff I've Built</p>


      <div className='w-[90%] md:w-[80%] flex items-center justify-center'>
        <div id='projectcarry' className='grid-cols-1 md:grid-cols-2 grid gap-4 md:gap-12 '>
          {holder}
          
        </div>
          {/* <div className='overflow-y-scroll h-[60vh]'>
            {holder}
          </div> */}
          
        

        
      </div>
    
    </div>
  )
}

export default Projects
