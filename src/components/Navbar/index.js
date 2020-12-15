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

import {NavLink} from 'react-router-dom'
import './Nav.css'

const Navbar = ({ toggle }) => {
    return (
       <>
        <Nav>
             <NavbarContainer>
                 <Link >
                 <NavLogo>
                     <NavLink exact to="/">
                     <img src={logo} alt="Logo" width="80" height="80"/>
                     </NavLink>
                 </NavLogo>
                 </Link>
                 <MobileIcon onClick={toggle}>
                     <FaBars/>
                 </MobileIcon>
                 <NavMenu>
                        <NavItem>
                        <NavLinks>
                            <NavLink activeClassName="selected" exact to="/">Home</NavLink>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks>
                            <NavLink activeClassName="selected" exact to="/about"> About Us</NavLink>
                           </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks >
                            <NavLink activeClassName="selected"  exact to="/technology">Our Technology</NavLink>
                            </NavLinks>
                         </NavItem>
                         <NavItem>
                         <NavLinks>
                             <NavLink activeClassName="selected"  exact to="/orthokeratology">
                             Orthokeratology
                             </NavLink>
                             </NavLinks>
                         </NavItem>
                         <NavItem>
                         <NavLinks activeClassName="selected" to="/contact">
                             <NavLink to="/contact">
                             Contact Us
                             </NavLink>
                            </NavLinks>
                         </NavItem>
                     
                         <NavItem>
                         <NavLinks to="/booking">
                         <Button class="btn primary">
                             <NavLink to="/booking">
                             Book an Appointment
                             </NavLink>
                             </Button>
                         </NavLinks>
                         </NavItem>
                    
                 </NavMenu>
             </NavbarContainer>
        </Nav>
       </>
    )
}

export default Navbar;
