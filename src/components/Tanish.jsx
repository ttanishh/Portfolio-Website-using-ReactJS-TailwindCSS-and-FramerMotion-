import React from 'react'
import { HERO_CONTENT } from '../constants';
import profilpic from '../assets/tanish6.jpg';
import { motion } from "framer-motion";

const container = (delay) => ({
   hidden: {x:-100, opacity:0},
   visible :{
      x:0,
      opacity: 1,
      transition:{duration:0.5, delay: delay},
   },
})
 


const Tanish = () => {
  return (
    <div className='border-b border-neutral-900  lg:mb-35 mb-20' id="top">
       <div className='flex flex-wrap pb-26'>
          <div className='w-full lg:w-1/2'>
             <div className='flex flex-col items-center lg:items-start'>
                 <motion.h1 
                 variants={container(0)}
                 initial= "hidden"
                 animate = "visible"
                 
               className='pb-7 text-6xl  tracking-tight lg:mt-16 lg:text-8xl'>Tanish Panchal</motion.h1>
                 <motion.span
                  variants={container(0.5)}
                  initial= "hidden"
                  animate = "visible"

                 
                 className='animate-pulse mx-5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Developer</motion.span>
                 <motion.p
                  variants={container(1)}
                  initial= "hidden"
                  animate = "visible"
                 className='font-mono text-xl mx-5 max-w-xl py-3 font-light tracking-tighter'>
                    {HERO_CONTENT}
                 </motion.p>
                 <motion.div
                   variants={container(1.5)}
                   initial= "hidden"
                   animate = "visible"
                 className='mt-8 npm i' class="animate-pulse animate-infinite animate-duration-1000">
                   <a href='https://drive.google.com/file/d/1wZWAZmKWEdh8RKDUgtJe1tffibSOn6BY/view?usp=sharing'>
                  <button class=" mx-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">                   
                     <span class=" font-sans tracking-widest font-black relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Resume
                    </span>
                  </button>
                  </a>
                 </motion.div>
             </div>
          </div>
          <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                 <motion.img
                   initial={{X:100, opacity:0}}
                   animate={{X:0, opacity:1}}
                   transition={{duration:1, delay:1.7 }}
                 src={profilpic} alt='tanish   '/>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Tanish


