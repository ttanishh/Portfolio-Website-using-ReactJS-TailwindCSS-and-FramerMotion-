import React from 'react'
import Navbar from './components/Navbar'
import Tanish from './components/Tanish'
import About from './components/About'
import Tech from './components/Tech'
// import Ach from './components/Ach'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Kafe from './components/Kafe'





const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] h-screen'>
      <div className='fixed top-0 -z h-full'></div>
      <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24'></div>
      <div className='container mx-auto px-8'>      
        <Navbar/>
        <Tanish/>
        <About/>
        <Tech/>
        <Projects/>
        <Kafe/>
        {/* <Ach/>         */}
        <Contact/>
      </div>  
    </div>
  )
}

export default App