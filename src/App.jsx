import React from 'react'
import Navbar from './components/Navbar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Features from './Pages/Features'
import Featuress from './Pages/Featuress'
import About from './Pages/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-zinc-950 text-white'>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/featuress' element={<Featuress />} />
          <Route path='/features' element={<Features />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>

        <Footer/>
      </HashRouter>
    </div>
  )
}

export default App