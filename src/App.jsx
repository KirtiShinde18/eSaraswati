import React from 'react'
import Navbar from './components/Navbar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './components/Footer'
import Privacy from './Pages/Privacy'
import Contact from './Pages/Contact'
import Features from './Pages/Features'




const App = () => {
  return (
    <div className='bg-zinc-950 text-white'>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>

        <Footer/>
      </HashRouter>
    </div>
  )
}

export default App