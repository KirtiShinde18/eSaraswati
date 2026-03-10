

import React, { Suspense, lazy } from 'react'
import Navbar from '../components/Navbar'
import About from './About'
import Features from './Features'
import Footer from '../components/Footer'
import CursorGlow from './CursorGlow'

const HeroGreen = lazy(() => import('./HeroGreen'))

const Home = () => {
  return (
    <div className="h-full overflow-auto grid-bg">

      <CursorGlow/>
      <Navbar/>

      <Suspense fallback={<div className="h-screen"></div>}>
        <HeroGreen/>
      </Suspense>

      <About/>
      <Features/>
      <Footer/>

    </div>
  )
}

export default Home