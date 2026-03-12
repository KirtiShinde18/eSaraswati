

import React, { Suspense, lazy } from 'react'
import Navbar from '../components/Navbar'
import About from './About'
import CursorGlow from './CursorGlow'
import Featuress from './Featuress'

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
      <Featuress/>

    </div>
  )
}

export default Home