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

import logo from '../images/logo.png'

const Navbar = () => {
    return (
       <>
        <Nav>
             <NavbarContainer>
                 <NavLogo>
                     <img src={logo} alt="Logo" width="100" height="100"/>
                 </NavLogo>
                 <MobileIcon>
                     <FaBars/>
                 </MobileIcon>
                 <NavMenu>
                        <NavItem>
                        <NavLinks to="home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="about">About Us</NavLinks>
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
