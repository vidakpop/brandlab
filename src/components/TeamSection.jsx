import { section } from 'framer-motion/client'
import React from 'react'

const TeamSection = () => {
    const teamMenbers=[
        {
            name:'Imelda Mugambi',
            position:'Founder & CEO',
            linkedin:'https://www.linkedin.com/in/imeldamugambi/',
            photo:"",
        },
        {
            name:'Imelda Mugambi',
            position:'Creative Lead',
            linkedin:'https://www.linkedin.com/in/imeldamugambi/',
            photo:"",
        },
        {
            name:'Imelda Mugambi',
            position:'Finance Lead',
            linkedin:'https://www.linkedin.com/in/imeldamugambi/',
            photo:"",
        },
        {
            name:'Imelda Mugambi',
            position:'PR and Marketing Specialist',
            linkedin:'https://www.linkedin.com/in/imeldamugambi/', 
            photo:"",
        },
        {
            name:'Imelda Mugambi',
            position:'Community Manager / Moderator',
            linkedin:'https://www.linkedin.com/in/imeldamugambi/',
            photo:"",
        },
        {
            name:'Imelda Mugambi',
            position:'The Nerd Geek',
            linkedin:'https://www.linkedin.com/in/imeldamugambi/',
            photo:"",
        },
    ]
  return (
    <section className='bg-gradient-to-br from -black via-gray-900 to-blue-900 py-16'>
        <div className='container mx-auto px-6'>
            <h2 className='text-4xl md:text-5xl font-bold text-white text-center mb-12'>
                Meet Our Team
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-10'>
                {teamMenbers.map((member,index)=>(
                    
                ))} 

            </div>

        </div>

    </section>
  )
}

export default TeamSection