import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Navbar = () => {
  return (
    <Nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/services'}>Services</NavLink>
        <NavLink to={'/portfolio'}>Portfolio</NavLink>
        <NavLink to={'/blog'}>Blog</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
    </Nav>
  )
}

export default Navbar