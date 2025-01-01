import React from 'react'
import { motion } from 'framer-motion'

const TheMergerSection = () => {
    const cohorts = [
        {
            title: "April Cohort",
            description: "Community Approach, LinkedIn Posting Challenge, Mentorship, Review",
          },
          {
            title: "August Cohort",
            description: "Community Approach, LinkedIn Posting Challenge, Mentorship, Review",
          },
          {
            title: "December Cohort",
            description: "Community Approach, LinkedIn Posting Challenge, Mentorship, Review",
          },
    ]
  return  (
    <div id='merger' className='max-w-7xl mx-auto px-6 py-20'>
        <h2 className='text-4xl font-bold text-center mb-10'>
            The Merger
        </h2>
        <div className='grid md:grid-cols-3 gap-6'>
            {cohorts.map((cohort,index)=>(
                <motion.div 
                    key={index}
                    className='bg-white p-6 rounded-lg shadow-lg'
                    whileHover={{scale:1.05}}
                >
                    <h3 className='text-2xl font-bold mb-4'>{cohort.title}</h3>
                    <p className='text-gray-700'>{cohort.description}</p>
                </motion.div>
            ))}

        </div>

    </div>
  )
}
 
export default TheMergerSection