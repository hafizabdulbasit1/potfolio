import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

const Skill = () => {
  return (
    <div id='skill'>
      <section className="text-gray-600 body-font bg-gray-100 ">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-3xl font-bold title-font text-center text-gray-900 mb-20">
      SKILLS
      <br className="hidden sm:block" />
      My Skills
    </h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      {/* Skills */}
      {/* html */}
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
        <FaHtml5  className='w-8 h-8 rounded'/>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
            HTML
          </h2>
         <div className='h-1 w-full relative bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded w-[100%]'></div>
         </div>
         <p className='font-bold text-blue-500 text-right '>100%</p>
          
        </div>
      </div>

{/* css */}

      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
        <FaCss3Alt />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
        CSS
          </h2>
         <div className='h-1 w-full relative bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded w-[70%]'></div>
         </div>
         <p className='font-bold text-blue-500 text-right '>70%</p>
          
        </div>
      </div>

{/* js */}


      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
        <IoLogoJavascript />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
        JS
          </h2>
         <div className='h-1 w-full relative bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded w-[50%]'></div>
         </div>
         <p className='font-bold text-blue-500 text-right '>50%</p>
          
        </div>
      </div>


      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
        <FaPython />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
        python
          </h2>
         <div className='h-1 w-full relative bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded w-[40%]'></div>
         </div>
         <p className='font-bold text-blue-500 text-right '>40%</p>
          
        </div>
      </div>


      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
        <SiTypescript />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
        typescript
          </h2>
         <div className='h-1 w-full relative bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded w-[80%]'></div>
         </div>
         <p className='font-bold text-blue-500 text-right '>80%</p>
          
        </div>
      </div>


      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
        <FaWordpress />
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
        wordpres
          </h2>
         <div className='h-1 w-full relative bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded w-[65%]'></div>
         </div>
         <p className='font-bold text-blue-500 text-right '>65%</p>
          
        </div>
      </div>






      
    </div>
  </div>
</section>

    </div>
  )
}

export default Skill
