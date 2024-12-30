import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home' 
import About from './pages/About'
import HeroSection from './components/HeroSection'


const App = () => {
  return (
    <div>
    
      <Navbar />
      <HeroSection />
      


    </div>
   
  )
}

export default App
