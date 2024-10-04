import React from 'react'
import Navbar from './Components/Navbar';
import Myinfo from './Components/Myinfo';
import Skills from './Components/Skills';

import Footer from './Components/Footer';

import Myprojects from './Components/Myprojects';


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const App = () => {
  
  gsap.registerPlugin(ScrollTrigger) 


  return (
    <div>
    <Navbar />
    <Myinfo />
    <Skills />
    <Myprojects />
    <Footer />
    </div>
  )
}

export default App
