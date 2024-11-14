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
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #333;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #f39c12;
  }
`;




export default Navbar