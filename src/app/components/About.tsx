import React from 'react'
import Link from 'next/link'
const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded w-[25rem]  h-[30rem] mx-auto"
        alt="hero"
        src="basit1.jpg"
        width={100}
        height={50}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About ME
        
        <div className='bg-blue-500 font-bold w-[163px] h-[4px]'></div>
      </h1>
      <p className="mb-8 leading-relaxed">
        I am Hafiz Abdul Basit and i am a student of class XII also i am a current student of GIAIC at Governor house sindh
        Welcome , where shopping meets convenience! Founded with a vision to revolutionize the online shopping experience, we bring you a user-friendly platform offering a diverse range of products, from fashion and electronics to daily essentials.
<br />
Our mission is simple: to provide our customers with high-quality products at affordable prices, all from trusted sellers. We believe in making online shopping easy, secure, and enjoyable, with a focus on excellent customer service, fast delivery, and seamless transactions.
      </p>
      <div className="flex justify-center">
        <Link href={"#contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        contact
        </button>
        </Link>
        <a href="#skill">
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          skills
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
