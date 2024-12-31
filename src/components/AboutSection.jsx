import React from 'react'
import { motion } from 'framer-motion'
const AboutSection = () => {
  return (
    <div
        id='about'
        className='nax-w-7xl mx-auto px-6 py-20 text-center bg-gray-100'
    >
        <motion.h2
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className='text-4xl font-bold mb-6'
        >
            About Imelda
        </motion.h2>
        <p className='text-lg text-gray-700'>
        Imelda is a passionate consultant dedicated to empowering individuals and
        businesses to achieve their fullest potential. With expertise in digital
        strategy, brand consulting, and content creation, Imelda has transformed
        countless brands and careers.
        </p>

    </div>
  )
}

export default AboutSection