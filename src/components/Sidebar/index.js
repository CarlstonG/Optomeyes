import React from 'react'
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarWrapper,
        SidebarLink    
    } from './SidebarElements' 


const Sidebar = () => {
    return (
       <SidebarContainer>
           <Icon>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
                    <SidebarLink to="home">
                    Home
                    </SidebarLink>
                    <SidebarLink to="about">
                    About Us
                   </SidebarLink>
                   <SidebarLink to="technology">
                   Our Technology
                   </SidebarLink>
                   <SidebarLink to="orthokeratology">
                   Orthokeratology
                   </SidebarLink>
                   <SidebarLink to="contact">
                   Contact Us
                   </SidebarLink>
                   <SidebarLink to="book">
                   Book an Appointment
                   </SidebarLink>
           </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar
