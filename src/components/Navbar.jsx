import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Navbar = () => {
  return (
    <Nav>
        <NavLink to={'/'}>Home</NavLink>
    </Nav>
  )
}

export default Navbar