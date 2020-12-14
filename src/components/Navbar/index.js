import React from 'react'
import {FaBars} from 'react-icons/fa'
import 
    {Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks} from './NavbarElements'
import Button from 'react-bootstrap/Button'
import { Link }   from 'react-router-dom'
import logo from '../images/logo.png'


const Navbar = ({ toggle }) => {
    return (
       <>
        <Nav>
             <NavbarContainer>
                 <Link to="/">
                 <NavLogo>
                     <img src={logo} alt="Logo" width="100" height="100"/>
                 </NavLogo>
                 </Link>
                 <MobileIcon onClick={toggle}>
                     <FaBars/>
                 </MobileIcon>
                 <NavMenu>
                        <NavItem>
                        <NavLinks to="home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="/page1">About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="technology">Our Technology</NavLinks>
                         </NavItem>
                         <NavItem>
                         <NavLinks to="orthokeratology">Orthokeratology</NavLinks>
                         </NavItem>
                         <NavItem>
                         <NavLinks to="contact">Contact Us</NavLinks>
                         </NavItem>
                     
                         <NavItem>
                         <NavLinks to="book">
                         <Button class="btn primary">Book an Appointment</Button>
                         </NavLinks>
                         </NavItem>
                    
                 </NavMenu>
             </NavbarContainer>
        </Nav>
       </>
    )
}

export default Navbar;
