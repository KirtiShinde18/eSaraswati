import React from 'react'
import Navbar from './components/Navbar'
import Hero from './Pages/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Features from './Pages/Features'
import CursorGlow from './Pages/CursorGlow'
import About from './Pages/About'
// import { Route } from 'lucide-react'

const App = () => {
  return <>
  <div className='bg-zinc-950 text-white'>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/features' element={<Features />} />
            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
  </div>
  </>
}

export default App