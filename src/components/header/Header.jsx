import { AccountTree, Close, ContactSupport, DesignServices, Home, MenuOutlined, Person, Work } from '@mui/icons-material'
import React, { useState } from 'react'
import './Header.css'
import { Avatar } from '@mui/material'
import ProfilePic from "../../assets/profile.jpg"

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        //  when the scrolling is above 200 viewport Height, add the show_scroll className to the scrollup element
        if (this.scrollY >= 80) header.classList.add("show_header");
        else header.classList.remove("show_header");
      });

    const [ toggle, setToggle ] = useState(false)
    const [ activeNav, setActiveNav ] = useState("#home")
  return (
    <header className='header'>
        <nav className='nav container flexCenterSpaceBtwn'>
            <a href="index.html" className='nav_logo'>
                <Avatar alt='Owallah' src={ProfilePic} />
            </a>

            <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? 'nav_link active-link flexColCenter' : 'nav_link flexColCenter'}>
                            <div className="nav_icon">
                                <Home />
                            </div>
                             Home
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? 'nav_link active-link flexColCenter' : 'nav_link flexColCenter'}>
                        <div className="nav_icon">
                            <Person /> 
                            </div>
                            About
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? 'nav_link active-link flexColCenter' : 'nav_link flexColCenter'}>
                        <div className="nav_icon">
                            <Work className='nav_icon' /> 
                            </div>
                            Skills
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? 'nav_link active-link flexColCenter' : 'nav_link flexColCenter'}>
                        <div className="nav_icon">
                            <DesignServices className='nav_icon' /> 
                            </div>
                            Services
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? 'nav_link active-link flexColCenter' : 'nav_link flexColCenter'}>
                        <div className="nav_icon">
                            <AccountTree className='nav_icon' /> 
                            </div>
                            Portfolio
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'nav_link active-link flexColCenter' : 'nav_link flexColCenter'}>
                        <div className="nav_icon">
                            <ContactSupport className='nav_icon' /> 
                            </div>
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="nav_close" onClick={() => {setToggle(false)}}>
                    <Close />
                </div>
                
            </div>

            <div className="nav_toggle" onClick={() => {setToggle(!toggle)}}>
                <MenuOutlined />
            </div>
        </nav>
    </header>
  )
}

export default Header