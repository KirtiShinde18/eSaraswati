

import React, { Suspense, lazy } from 'react'
import Navbar from '../components/Navbar'
import About from './About'
import CursorGlow from './CursorGlow'
import Privacy from './Privacy'
import Contact from './Contact'
import Features from './Features'

const HeroGreen = lazy(() => import('./HeroGreen'))

const Home = () => (
  <div className="h-full overflow-auto grid-bg">

    <CursorGlow />
    <Navbar />

    <Suspense fallback={<div className="h-screen"></div>}>
      <HeroGreen />
    </Suspense>

    <About />
    <Features />
    <Contact />
    <Privacy />

  </div>
)

export default Home