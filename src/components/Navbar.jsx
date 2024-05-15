import React from 'react'
import logo from "../assets/tplogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsDiscord } from 'react-icons/bs';

const Navbar = () => {
  
  return (

    <div style={{position:'sticky', top:'0', zIndex:'100'}} class='bg-black opacity-90 '>
      <nav className='mb-20 flex items-center justify-between '>
        <a href='#top'>
        <div className='flex flex-shrink-0 items-center'>
            <img className=' w-20 animate-pulse' src={logo} alt="logo" />
        </div>
        </a>
        <div  >

          
        <div class=" flex justify-center items-center font-sans tracking-widest font-black">
        <a href="#about"
                class=" font-bold px-6 py-3 mx-2 text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
                About
            </a>
            <a href="#tech"
                class=" font-bold px-6 py-3 mx-2 text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
                Tech-Skills
            </a>
            <a href="#pro"
                class=" font-bold px-6 py-3 mx-2 text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
                Projects
            </a>
            <a href="#ach"
                class=" font-bold px-6 py-3 mx-2 text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
                Achievements
            </a>
            <a href="#"
                class=" font-bold px-6 py-3 mx-2 text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
                More
            </a>
        </div>
         


        </div>
        <div class="m-8 flex items-center justify-center gap-4 text-2xl">
             <a href="https://www.linkedin.com/tanish2311" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
               <FaLinkedin className="social-icon hover:text-sky-500 focus:text-sky-500" />
             </a>
             <a href="https://www.github.com/ttanishh" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer">
               <FaGithub className="social-icon hover:text-purple-600 focus:text-purple-600" />
             </a>
             <a href="https://www.instagram.com/ttaniishh" aria-label="Instagram Profile" target="_blank" rel="noopener noreferrer">
               <FaInstagram className="social-icon hover:text-orange-500 focus:text-orange-500" />
             </a>
             <a href="https://www.discord.com/ttaniishh" aria-label="Instagram Profile" target="_blank" rel="noopener noreferrer">
               <BsDiscord className="social-icon hover:text-blue-800 focus:text-blue-800" />
             </a>

       </div>
      </nav>
    </div>
  )
}

export default Navbar
