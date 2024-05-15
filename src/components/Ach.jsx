import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'


const Ach = () => {
  return (
  
    <div id="ach" class=" z-0 rounded-lg transition-all duration-300 hover:scale-110 bg-[url(https://wallpaper.dog/large/5539532.jpg)] bg-no-repeat bg-cover bg-center border-dashed border-2 border-sky-500 ">
    <div className='border-b border-neutral-900 pb-4'>
       <motion.h2
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y:-100}}
       transition={{duration:0.75}}
       className='mb-20 mt-36 text-center text-4xl brightness-100 font-mono font-extrabold animate-pulse'>🎯Achievements🏆</motion.h2>
       <div>
          {EXPERIENCES.map((experience, index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                whileInView={{opacity:1, x:0 }}
                initial={{opacity: 0, x:-100}}
                transition={{duration:1}}
                className='w-full lg:w-1/4'>
                    <p>{experience.year}</p>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className='w-full max-w-xl lg:3/4'>
                    <h4 className='mb-3 font-semibold'>{experience.role} - <span className='text-sm text-purple-100'> {experience.company}</span></h4>
                    <p className='mb-5 text-neutral-400'>{experience.description}</p>
                </motion.div>
            </div>
          ))}
       </div>
       </div>
    </div>
  )
}

export default Ach
