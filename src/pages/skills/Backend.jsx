import { VerifiedOutlined } from '@mui/icons-material'
import React from 'react'

const Backend = () => {
  return (
    <div className="skills_content">
            <h3 className="skills_title">Backend Development</h3>
            <div className="skills_box flexCenter">
                <div className="skills_group">
                <div className="skills_data">
                    <VerifiedOutlined className='badge_check' />
    
                    <div>
                        <h3 className="skills_name">Ruby on Rails</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
    
                <div className="skills_data">
                    <VerifiedOutlined className='badge_check' />
    
                    <div>
                        <h3 className="skills_name">NodeJs</h3>
                        <span className="skills_level">Beginner</span>
                    </div>
                </div>
    
                <div className="skills_data">
                    <VerifiedOutlined className='badge_check' />
    
                    <div>
                        <h3 className="skills_name">Python</h3>
                        <span className="skills_level">Beginner</span>
                    </div>
                </div>
                </div>
    
                <div className="skills_group">
                <div className="skills_data">
                    <VerifiedOutlined className='badge_check' />
    
                    <div>
                        <h3 className="skills_name">PostgreSQL</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
    
                <div className="skills_data">
                    <VerifiedOutlined className='badge_check' />
    
                    <div>
                        <h3 className="skills_name">Firebase</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
    
                <div className="skills_data">
                    <VerifiedOutlined className='badge_check' />
    
                    <div>
                        <h3 className="skills_name">mySQL</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Backend