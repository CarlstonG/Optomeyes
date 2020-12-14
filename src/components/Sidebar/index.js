import React from 'react'
import {SidebarContainer,
        Icon,
        SidebarMenu,
        CloseIcon,
        SidebarWrapper,
        SidebarLink    
    } from './SidebarElements' 


const Sidebar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
               <SidebarLink to="home" onClick={toggle}>
                    Home
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                    About Us
                   </SidebarLink>
                   <SidebarLink to="technology" onClick={toggle}>
                   Our Technology
                   </SidebarLink>
                   <SidebarLink to="orthokeratology" onClick={toggle}>
                   Orthokeratology
                   </SidebarLink>
                   <SidebarLink to="contact" onClick={toggle}>
                   Contact Us
                   </SidebarLink>
                   <SidebarLink to="book" onClick={toggle}>
                   Book an Appointment
                   </SidebarLink>
               </SidebarMenu>
           </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar
