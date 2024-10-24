"use client;"

import Link from 'next/link'

import React from 'react'




const Hero = () =>{
  return (
    <div >
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image custom-image bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I AM A FULL STACK WEB DEVELOPER
        <br className="hidden lg:inline-block" />
  
 

      

      </h1>
      <div className=' w-[100px] h-[4px] bg-blue-500 font-extrabold   '></div>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          skills
        </button>

        <Link href={"#contact"}>
        <button className="ml-4 inline-flex  z-50 sticky top-0 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
         contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2">
      <img
        className="object-cover object-center mx-auto w-[25rem] "
        alt="hero"
        src="basit.jpg " 
        width={500}
        height={300}
      />

    </div>
  </div>
</section>
    </div>
  )
}

export default Hero

