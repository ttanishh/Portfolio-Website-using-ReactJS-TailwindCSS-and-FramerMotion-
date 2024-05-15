import React from 'react'
import aboutimg from "../assets/tanish1.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { SiGeeksforgeeks } from 'react-icons/si';

const About = () => {
  return (
    <div className='mt-20' id='about'>
      <section className="relative h-screen overflow-hidden flex">
        <div className=" absolute w-full h-3/4 top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed flex items-center justify-center"  
             style={{ backgroundImage: `url(https://cdni.iconscout.com/illustration/premium/thumb/man-coder-programming-on-computer-10109574-8226923.png?f=webp)` }}>
          <h2 className='text-center text-6xl text-black h-1.9 w-1.9 font-bold z-10 '>About Me</h2> <br></br>          
        </div>
      </section>
      <section className="h-[500px] px-10">
        <div className='border-b border-neutral-900 mb-10'>
          <div className='flex flex-wrap'>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
              <div className='flex items-center justify-center'>
                <img className='rounded-2xl' src={aboutimg} alt='img_about'/>
              </div>
            </motion.div>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
             className='w-full lg:w-1/2'>
              <div className='flex justify-center lg:justify-start'>
                <p className='font-mono text-xl mx-5 my-6 max-w-xl py-3 font-light tracking-tighter'>{ABOUT_TEXT}  <br></br> 
                <br></br> <br></br> <a href='https://leetcode.com/u/tp66182303/'> <SiLeetcode className="text-7xl text-orange-400 hover:text-white"/>  </a>
                <br></br> <a href='https://www.geeksforgeeks.org/user/ttanishh/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user'> <SiGeeksforgeeks className="text-7xl text-green-400 hover:text-white"/> </a>
                </p>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default About
