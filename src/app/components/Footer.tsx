import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    
        <footer className=" body-font bg-black text-white ">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       <Image src="/potfolio.png" width={70} height={100} alt="nope" />
        <span className="ml-3 text-2xl text-white font-bold ">Abdul BAsit</span>
      </a>
      <p className="font-semibold text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2020 Abdul basit
        
      </p>
      <span className="inline-flex sm:ml-auto ml-3 sm:mt-0 mt-4 justify-center sm:justify-start ">
        
          
       <div className='flex'>
       <a href="https://facebook.com" target='blank'  >
       <FaFacebook className=' w-8 h-8 ml-4 hover:text-blue-600'  />
       </a>
       <a href="https://instagram.com" target='blank' >
       
       <FaInstagram  className=' w-8 h-8 ml-4 hover:text-blue-600'/>
       </a>

       <a href="https://www.youtube.com/@thekingofthewold" target='blank' >
       
       <FaYoutube className=' w-8 h-8 ml-4 hover:text-blue-600' />
       
       </a>
       </div>
      
       
       
          
       
      </span>
    </div>
  </footer>


      
   
  )
}

export default Footer
