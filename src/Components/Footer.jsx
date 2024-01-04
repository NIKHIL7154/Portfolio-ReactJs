import React, { useEffect, useState } from 'react'

const delay = ms => new Promise(
  resolve => setTimeout(resolve,ms)
);

const Footer = () => {
    const thnks='Thanks for giving your precious time....'
    const [newmsg, setnewmsg] = useState('T');
    var count =1
    var curstr='T'

    

    useEffect(() => {
      const inter= setInterval(() => {
        curstr=curstr+thnks[count]
        if((count+1)===thnks.length){
            curstr='T'
            count=0
        }
        setnewmsg(curstr)
        count=count+1
        
      }, 100);
      return () => {
        clearInterval(inter)
      };
    }, []);
    
    
    

  return (
    <div className='text-center my-[30px] md:my-[50px]'>
      <p className='text-md md:text-2xl font-extrabold'>{newmsg}</p>
    </div>
  )
}

export default Footer
