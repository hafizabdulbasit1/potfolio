import React from 'react'
import Link from 'next/link'

const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-600 body-font top-0 sticky bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        PROJECTS
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        These are my personal project i made these project using next.js and tailwind.css Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, consequatur.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/3 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="p2.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              E-COMMERCE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              e-cOMMERCE PROJECT
            </h1>
            <p className="leading-relaxed">
             tHIS IS MY FIRST E-COMMERCE WEB AND IT IS A COMPOSURE OF NEXT.JS.
            </p>
            <Link href={"https://jareer-next-js-figma-website.netlify.app"} target='blank'>
            <p className="leading-relaxed font-bold">
               view project 
               </p></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/3 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center border-black"
            src="P5.PNG"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE FOOD PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              FOOD
            </h1>
            
            <p className="leading-relaxed">
               tHIS IS MY FIRST FOOD ORDERING WEB AND IT IS A COMPOSURE OF NEXT.JS.
            </p>
            <Link href={"https://use-ai-seven.vercel.app/"} target='blank'>
            <p className="leading-relaxed font-bold">
               view project 
               </p></Link>
            
          </div>
        </div>
        
      </div>
     
    
      <div className="lg:w-1/3 sm:w-1/3 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="p3.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              GRAPHICS PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              GRAPHICS
            </h1>
            <p className="leading-relaxed">
            THIS IS MY FIRST GRAPHICS  WEB AND IT IS A COMPOSURE OF NEXT.JS TS.
            </p>
            <Link href={"https://photography-website-lyart.vercel.app/"} target='blank'>
            <p className="leading-relaxed font-bold">
               view project 
               </p></Link>
          </div>
          {/* line */}
          
        </div>
      </div>
    </div>

  </div>

  <div className=' w-[10 0%] h-[4px] px-24 bg-blue-500 font-extrabold text-center justify-center items-center  '></div>
</section>

    </div>
  )
}

export default Project
