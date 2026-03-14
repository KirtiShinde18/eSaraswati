import React from 'react'
import CursorGlow from './CursorGlow'
import CountUp from 'react-countup'

const Facts = () => {
  return <>
    <section className="py-25 md:py-32 px-6 text-white min-h-screen">
        {/* <CursorGlow /> */}
  
      <div className="max-w-7xl mx-auto text-center">
        {/* heading  */}
        <h1 className="sm:text-5xl text-4xl md:text-7xl font-bold mb-10 leading-tight font-display">
          <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
            Facts
          </span>
        </h1>

        <p className='text-sm md:text-2xl'>The purpose of this software is to change the education world using the technology and to fulfill this purpose we burn the midnight oil and today here is we:</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-20">
          <div>
            <CountUp end={274} duration={1.5} className="text-green-400 text-2xl md:text-5xl font-bold" />
            <p className="mt-2">Clients</p>
          </div>
          
          <div>
            <CountUp end={31879} duration={1.5} className="text-green-400 text-2xl md:text-5xl font-bold" />
            <p className="mt-2">Students Enrolled in Software</p>
          </div>
          
          <div>
            <CountUp end={1364} duration={1.5} className="text-green-400 text-2xl md:text-5xl font-bold" />
            <p className="mt-2">Hours Of Support</p>
          </div>
          
          <div>
            <CountUp end={18} duration={1.5} className="text-green-400 text-2xl md:text-5xl font-bold" />
            <p className="mt-2">Skilled Professionals</p>
          </div>
        </div>

        <p className='text-sm md:text-2xl mt-15'>
          Thanks to your contribution, when you use our services, you have contributed to achieve these goals together and many will benefit.
        </p>
        
      </div>

    </section>
  
      
  
  </>
}

export default Facts