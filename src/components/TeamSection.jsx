import { div, section } from 'framer-motion/client'
import React from 'react'
import imelda from '../assets/imelda1.jpg'
import patience from '../assets/PATIENCE.jpeg'
import evelyne from '../assets/EVE.jpeg'
import sue from '../assets/SUE.jpeg'
const TeamSection = () => {
    const teamMenbers=[
        {
            name:'Imelda Mugambi',
            position:'Founder & CEO',
            linkedin:'https://www.linkedin.com/in/imelda-mugambi-digitalconsultant',
            photo:imelda,
        },
        
        {
            name:'Patience Njeri',
            position:'Finance Lead',
            linkedin:'https://www.linkedin.com/in/patience-njeri-0b4316291',
            photo:patience,
        },
        {
            name:'Susan Nungari Kabochi',
            position:'PR and Marketing Specialist',
            linkedin:'https://www.linkedin.com/in/susan-kabochi-5154a1237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
            photo:sue,
        },
        {
            name:'Imelda Mugambi',
            position:'Creative Lead',
            linkedin:'https://www.linkedin.com/in/imeldamugambi/',
            photo:'',
        },
        {
            name:'Evelyne Kioko',
            position:'Community Manager / Moderator',
            linkedin:'https://linkedin.com/in/evelyne-kioko-eventmoderator',
            photo:evelyne,
        },
        {
            name:'Davis Ngetich',
            position:'The Nerd Geek',
            linkedin:'https://www.linkedin.com/in/davis-ngetich-690b6521b',
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
                    <div key={index}
                         className='group relative bg-white bg-opacity-10 p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 ease-in-out hover:scale-105'

                    >
                        <div className='relative overflow-hidden rounded-full h-40 w-40 mx-auto mb-6'>
                            <img src={member.photo} alt={`${member.name}'s photo`} 
                                className='object-cover w-full h-full rounded-full group-hover:rotate-12 group-hover:scale-110 transition-transform duration-700'
                            />

                        </div>
                        <h3 className='text-2xl font-semibold text-white text-center mb-2'>
                            {member.name}
                        </h3>
                        <p className='text-blue-400 text-center mb-4'>
                            {member.position}
                        </p>
                        <a href={member.linkedin}
                           target='_blank'
                           rel='noopener noreferrer'
                           className='block text-center text-sm text-gray-300 hover:text-blue-500 transition-colors'
                        >
                            View LinkedIn Profile
                        </a>
                        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500'>

                        </div>

                    </div>
                ))} 

            </div>

        </div>

    </section>
  )
}

export default TeamSection