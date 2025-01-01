import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home' 
import About from './pages/About'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProfileSection from './components/ProfileSection'
import TheMergerSection from './components/TheMergerSection'
import ServicesSection from './components/ServicesSection'

const App = () => {
  return (
    <div className='bg-gray-50 text-gray-900'> 
    
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProfileSection />
      <TheMergerSection />  
      <ServicesSection />
      


    </div>
   
  )
}

export default App
