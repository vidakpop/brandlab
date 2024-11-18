import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home' 
import About from './pages/About'


const App = () => {
  return (
    <Router>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />        

      </Routes>


    </Router>
   
  )
}

export default App
