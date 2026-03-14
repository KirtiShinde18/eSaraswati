

import React, { Suspense, lazy } from 'react'
import Navbar from '../components/Navbar'
import About from './About'
import CursorGlow from './CursorGlow'
import Privacy from './Privacy'
import Contact from './Contact'
import Features from './Features'
import Facts from './Facts'
import Hero from './Hero'

// const Hero = lazy(() => import('./Hero'))

const Home = () => (
  <div className="h-full overflow-auto grid-bg">

    
    <Navbar />
    <Suspense fallback={<div className="h-screen"></div>}>
      <Hero />
    </Suspense>

    <About />
    <Features />
    <Facts/>
    <Contact />
    <Privacy />

  </div>
)

export default Home