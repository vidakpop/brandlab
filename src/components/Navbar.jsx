import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full bg-black bg-opacity-50 z-50'>
      <div className='max-w-7xl mx-auto px-6 py-6 flex justify-between items-center'>
        <h1 className='text-white text-2xl font-bold'>
          IMELDA BRAND LAB
        </h1>
        <ul className='hidden md:flex space-x-6 text-white'> 
        <li>
          <Link to='hero' smooth duration={500} className='hover:underline'>
              Home
          </Link>
        </li>

        </ul>
      </div>

    </nav>
  )
}

export default Navbar