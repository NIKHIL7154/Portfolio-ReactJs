import React from 'react'
import Navbar from './Components/Navbar';
import Myinfo from './Components/Myinfo';
import Skills from './Components/Skills';

import Footer from './Components/Footer';

import Myprojects from './Components/Myprojects';

const App = () => {
  return (
    <>
    <Navbar />
    
    <Myinfo />
    <Skills />
    <Myprojects />

    <Footer />
    </>
  )
}

export default App
