import { BusinessCenter, ContactSupport, MilitaryTech, SupportAgentOutlined } from '@mui/icons-material'
import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
            <MilitaryTech className='about_icon' />
            <h3 className="about_title">
                Experience
            </h3>
            <span className="about_subtitle">
                3 Years Working
            </span>
        </div>

        <div className="about_box">
            <BusinessCenter className='about_icon' />
            <h3 className="about_title">
                Completed
            </h3>
            <span className="about_subtitle">
                10 + Projects
            </span>
        </div>

        <div className="about_box">
            <SupportAgentOutlined className='about_icon' />
            <h3 className="about_title">
                Support
            </h3>
            <span className="about_subtitle">
                Online Monday - Friday
            </span>
        </div>
    </div>
  )
}

export default Info