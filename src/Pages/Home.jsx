

import React, { Suspense, lazy } from 'react'
import Navbar from '../components/Navbar'
import About from './About'
import CursorGlow from './CursorGlow'
import Featuress from './Featuress'
import Privacy from './Privacy'

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
      <Privacy/>

    </div>
  )
}

export default Home