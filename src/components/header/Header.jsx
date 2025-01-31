import { AccountTree, Close, ContactSupport, DesignServices, Home, MenuOutlined, Person, Work } from '@mui/icons-material'
import React, { useState } from 'react'
import './Header.css'
import { Avatar } from '@mui/material'
import ProfilePic from "../../assets/profile.jpg"

const Header = () => {
    const [ toggle, setToggle ] = useState(false)
  return (
    <header className='header'>
        <nav className='nav container flexCenterSpaceBtwn'>
            <a href="index.html" className='nav_logo'>
                <Avatar alt='Owallah' src={ProfilePic} />
            </a>

            <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="" className='nav_link active-link flexColCenter'>
                            <div className="nav_icon">
                                <Home />
                            </div>
                             Home
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="" className='nav_link flexColCenter'>
                        <div className="nav_icon">
                            <Person /> 
                            </div>
                            About
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="" className='nav_link flexColCenter'>
                        <div className="nav_icon">
                            <Work className='nav_icon' /> 
                            </div>
                            Skills
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="" className='nav_link flexColCenter'>
                        <div className="nav_icon">
                            <DesignServices className='nav_icon' /> 
                            </div>
                            Services
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="" className='nav_link flexColCenter'>
                        <div className="nav_icon">
                            <AccountTree className='nav_icon' /> 
                            </div>
                            Portfolio
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="" className='nav_link flexColCenter'>
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