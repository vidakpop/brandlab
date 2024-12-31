import React from 'react'
import {motion} from 'framer-motion'
import {ReactTyped as Typed} from 'react-typed'


const HeroSection = () => {
  return (
    <div id='hero' 
         className='bg-gradient-to-r from purple-500 to indigo-600 text-white h-screen flex items-center justify-center px-4 text-center'>
       <motion.div 
           initial={{opacity:0,y:-50}}
           animate={{opacity:1,y:0}}
           transition={{duration:1}}
       >
         <h1 className='text-5xl font-bold mb-4'>
            Welcome to <span className='text-yellow-300'> IMELDA BRAND LAB</span>

         </h1>
        <Typed
             strings={[
              'Empowering Brands',
              'Elevating Careers',
              'Transforming Lives',
             ]}
             typefSpeed={40}
             backSpeed={50}
             loop 
             className='text-xl font-light'  
        />
        <p className='mt-4 text-lg'>
          Your teusted patner in brand consultancy and career transformation.
        </p>
        <motion.button 
            whileHover={{scale:1.1}}
            className='mt-6 px-6 py-2 bg-yellow-400 rounded-full text-black font-semibold shadow-lg'
            >
          Get Started
        </motion.button>

       </motion.div>
    </div>
  )
}

export default HeroSection