import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaUnity } from 'react-icons/fa6'
import { FaNodeJs } from 'react-icons/fa'
import { SiArduino, SiPython } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { FaC } from 'react-icons/fa6'
import { CgCPlusPlus } from 'react-icons/cg'
import { SiCsharp } from 'react-icons/si'
import { DiPython } from 'react-icons/di'
import { DiJavascript } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
import { TbSql } from 'react-icons/tb'
import { animate, motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: {y:-10},
  animate: {
    y: [10,-10],
    transition :{
      duration: duration,
      ease : "linear",
      repeat : Infinity,
      repeatType : "reverse",

    }
  }
})

const Tech = () => {
  return (
   
    <div className='borber-b border-neutral-100 '  > 
     <div id='tech' className='pb-40'>
     </div>
       <motion.h2 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y:-100}}
       transition={{duration:1.5}}
       className='my-20 text-center text-4xl'>Technologies</motion.h2>
       <div className='flex flex-wrap items-center justify-center gap-5'>

       <div className="animate-pulse rounded-2xl border-4 border-neutral-300 p-4 cursor-pointer group" style={{ position: 'relative' }}>
      <RiReactjsLine className="text-7xl text-cyan-400" />
      <div className="font-bold text-2xl text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:duration-300 bg-black">
        ReactJs
      </div>
      </div>

          <div className="animate-pulse rounded-2xl border-4 border-neutral-300 p-4 cursor-pointer group" style={{ position: 'relative' }}>
      <FaNodeJs className="text-7xl text-green-400" />
      <div className="font-bold text-2xl text-green-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:duration-300 bg-black">
        Node.js
      </div>
    </div>
    
    <div className="animate-pulse rounded-2xl border-4 border-neutral-300 p-4 cursor-pointer group" style={{ position: 'relative' }}>
      <FaUnity className="text-7xl text-white" />
      <div className="font-bold text-2xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:duration-300 bg-black">
        Unity Game Engine
      </div>
    </div>
    
    <div className="animate-pulse rounded-2xl border-4 border-neutral-300 p-4 cursor-pointer group" style={{ position: 'relative' }}>
      <SiTailwindcss className="text-7xl text-blue-400" />
      <div className="font-bold text-2xl text-blue-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:duration-300 bg-black">
        Tailwind CSS
      </div>
    </div>
    
    <div className="animate-pulse rounded-2xl border-4 border-neutral-300 p-4 cursor-pointer group" style={{ position: 'relative' }}>
      <SiArduino className="text-7xl text-cyan-200" />
      <div className="font-bold text-2xl text-cyan-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:duration-300 bg-black">
        Arduino
      </div>
    </div>
    
    <div className="animate-pulse rounded-2xl border-4 border-neutral-300 p-4 cursor-pointer group" style={{ position: 'relative' }}>
      <FiFigma className="text-7xl text-orange-400" />
      <div className="font-bold text-2xl text-orange-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:duration-300 bg-black">
        Figma
      </div>
    </div>


       </div>

       <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Languages Known</motion.h2>
       <div className='flex flex-wrap items-center justify-center gap-5'>

         <div className='animate-bounce rounded-2xl border-4 border-neutral-300 p-4' >
            <FaC className='text-7xl text-blue-800'/> 
         </div>
   

         <div className='animate-bounce rounded-2xl border-4 border-neutral-300 p-4' >
            <CgCPlusPlus className='text-7xl text-blue-500'/>
         </div>

         <div className='animate-bounce rounded-2xl border-4 border-neutral-300 p-4' >
            <SiCsharp className='text-7xl text-purple-400'/>
         </div>

         <div className='animate-bounce rounded-2xl border-4 border-neutral-300 p-4' >
            <DiPython className='text-7xl text-yellow-200'/>
         </div>

         <div className='animate-bounce rounded-2xl border-4 border-neutral-300 p-4'>
            <DiJavascript className='text-7xl text-yellow-500'/>
         </div>

         <div className='animate-bounce rounded-2xl border-4 border-neutral-300 p-4' >
            <TbSql className='text-7xl text-green-500'/>
         </div>



       </div>
    </div>

         
  )
}

export default Tech
