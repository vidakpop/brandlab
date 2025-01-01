import React from 'react'
import { motion } from 'framer-motion'

const ProfileSection = () => {
  return (
    <div
        id='profile'
        className='max-w-7xl mx-auto px-6 py-20 text-center bg-white'
    >
        <motion.h2 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className="text-4xl font-bold mb-6">
                Meet Imelda Mugambi
        </motion.h2>
        <motion.div 
            initial={{opacity:0,scale:0.9}}
            animate={{opacity:1,scale:1}}
            transition={{duration:1}}
            className='text-lg text-gray-700'>
         <p className='mb-4'>
         Imelda Mugambi, the visionary behind IMELDA BRAND LAB, is a dynamic and
         driven individual with a passion for branding and digital innovation.
         </p>

        </motion.div>

    </div>
  )
}

export default ProfileSection