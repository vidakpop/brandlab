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
         <div className='flex flex-col md:flex-row items-center md:space-x-6'>
            <img src="../assets/imelda.jpg" alt="Imelda Mugambi" className='w-40 h-40 rounded-full mb-4 md:mb-0' />
         </div>
         <p className='mb-4'>
                Imelda Mugambi, the visionary behind IMELDA BRAND LAB, is a dynamic and
                driven individual with a passion for branding and digital innovation.
         </p>
         <p className='mb-4'>
            With years of experience in resume writing, digital marketing, content
            creation, and public relations, Imelda has a track record of helping
             individuals and businesses achieve excellence. Her unique blend of
            creativity, strategy, and mentorship sets her apart as a leader in the
            field.
         </p>
         <p>
             Whether it's building a personal brand, crafting compelling content, or
            designing impactful strategies, Imelda is committed to helping her
            clients shine.
         </p>

        </motion.div>

    </div>
  )
}

export default ProfileSection