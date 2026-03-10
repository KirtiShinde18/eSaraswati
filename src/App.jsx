import React from 'react'
import Navbar from './components/Navbar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Features from './Pages/Features'
import About from './Pages/About'
import Feature from './Pages/feature'

const App = () => {
  return (
    <div className='bg-zinc-950 text-white'>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/feature' element={<Feature />} />
          <Route path='/features' element={<Features />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App