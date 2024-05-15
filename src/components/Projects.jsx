import React from 'react';
import fp1 from '../assets/fp1.png'
import fp2 from '../assets/fp2.png'
import fp3 from '../assets/fp3.png'
import fp4 from '../assets/fp4.png'
import ps from '../assets/ps.png'


const Projects = () => {
  return (
   
    <div className='border-b border-neutral-900 pd-4 mt-56 mb-28'>
                   <div id='pro'></div>
                          <section className="relative h-screen overflow-hidden flex">
                    <div className=" absolute w-full h-3/4 top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed flex items-center justify-center"  
                         style={{ backgroundImage: `url(https://cdni.iconscout.com/illustration/premium/thumb/young-boy-write-content-on-seo-10056684-8157881.png)` }}>
                      <h2 className='text-center text-6xl text-black h-1.9 w-1.9 font-bold z-10'>My Projects</h2> <br></br>
                      
                    </div>
                  </section>

{/* 
                  <div  className='my-56'>
                     <h3 className='font-sherif text-center text-2xl'>📲"CARD-CONNECT AND FURNISH" : Augmented Reality App🔆</h3>
                     <div className='text-center flex justify-center my-36'>
                     <div class="max-w-sm rounded overflow-hidden shadow-lg">
                           <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                           <div class="px-6 py-4">
                             <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                             <p class="text-gray-700 text-base">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                             </p>
                           </div>
                           <div class="px-6 pt-4 pb-2">
                             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                           </div>
                      </div>
                     </div>

                  </div> */}

                  <h3 className='font-sherif text-center text-2xl'>🔎"PATH FINDER AND MAZE SOLVER ROBOT"</h3>
                  
                  <div className='flex justify-center my-20'> 
      


                                    <section>
                                      <p class="text-center mb-9 font-mono text-xl underline  decoration-solid ">
                                      A Path Finding Robot that finds the
                                      path out of a given maze using the Wall
                                      Following Algorithm
                                      </p>
                                    <p  className='flex justify-center '>
                                      
                                   <span  class="italic hover:not-italic font-semibold mx-6">Dynamic Obstacle Avoidance</span>
                                   <span  class="italic hover:not-italic font-semibold mx-6"> Demonstrate Seamless Wall-Following Behavior</span>
                                   <span  class="italic hover:not-italic font-semibold mx-6">Robust Sensor Integration</span>
                                    </p>
                                   <a href=""> <p class="text-center mt-7 text-sm hover:text-blue-500 underline hover:decoration-dashed"> Click here for more</p> </a>
                                      
                                     <div class=" 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto h-svh flex flex-col justify-center">

                                       <div class="flex flex-col sm:flex-row mx-auto">
                                      
                                       <a href="#_"><img src={fp1} class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a>
                                       <a href="#_"> <img src={fp3} class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a>
                                       <a href="#_"> <img src={fp4} class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a>
                                       <a href="#_"> <img src={fp2} class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_"/> </a>
   
                                      </div> 
                                        
                                     </div>
                                    </section>                                                                      
                         

                  </div>  
                  


                  <div>


                       <div>
                       
                       <div class="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center ">
                       <h3 className='font-sherif text-center text-2xl mb-20'>👤"TANISH": Portfolio Website📄</h3> 
                          <div data-theme="teal" class="mx-auto max-w-6xl">
                            <h2 class="sr-only">Featured case study</h2>
                            <section class="font-sans text-white">
                              <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
                                <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                                  <div class="h-full">
                                    <article class="h-full">
                                      <div class="h-full">
                                        <img class="h-full object-cover " src={ps} width="780" height="462" alt='""' typeof="foaf:Image" />
                                        <a href=''><div className='text-center mt-8 hover:text-blue-500'>Github Repo</div> </a>
                                      </div>
                                    </article>
                                  </div>
                                </div>
                                <div class="p-6 bg-grey">
                                  <div class="leading-relaxed">
                                    <h2 class="leading-tight text-4xl font-bold">My Portfolio</h2>
                                    <p class="mt-4"></p>
                                    <p class="mt-4">Unleash the power of my creativity, built with cutting-edge tech! Delve into a curated selection of projects. Crafted with ReactJS for a dynamic experience.  Tailwind CSS ensures clean design, while Framer Motion brings each project to life with captivating animations. Detailed descriptions offer a glimpse into my problem-solving approach. I'm constantly seeking innovative challenges.  This is your one-stop shop to explore my potential, whether you're seeking inspiration or a collaborative partner. Let's connect !!!</p>
                                    <p className='text-blue-400'><a class="mt-4 button button--secondary" href="https://inviqa.com/cxcon-experience-transformation">Explore more !!!</a></p>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                         </div>
                    
                        
                       </div>


                  </div>



                  <h3 className='font-sherif text-center text-2xl mt-11'>🧋"KOE - THE KAFE " :  The Cafe's Website☕</h3> 
                  <div className='text-center mt-10'>
                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Click Here to view
                  </span>
                  </button> 
                   

                  </div>
    </div>
  )
}

export default Projects
