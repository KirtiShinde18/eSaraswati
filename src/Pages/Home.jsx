import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import HeroGreen from './HeroGreen'
import Features from './Features'
import Footer from '../components/Footer'
import CursorGlow from './CursorGlow'
import About from './About'

const Home = () => {
  return <>

  <div className="h-full overflow-auto grid-bg">

  <CursorGlow/>
  <Navbar/>
  <HeroGreen/>
  <About/>
  <Features/>
  <Footer/>

  </div>
  </>
}

export default Home