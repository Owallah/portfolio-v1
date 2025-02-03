import { VerifiedOutlined } from '@mui/icons-material'
import React from 'react'

const Frontend = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Frontend Development</h3>
        <div className="skills_box flexCenter">
            <div className="skills_group">
            <div className="skills_data">
                <VerifiedOutlined className='badge_check' />

                <div>
                    <h3 className="skills_name">HTML5</h3>
                    <span className="skills_level">Advanced</span>
                </div>
            </div>

            <div className="skills_data">
                <VerifiedOutlined className='badge_check' />

                <div>
                    <h3 className="skills_name">Javascript</h3>
                    <span className="skills_level">Advanced</span>
                </div>
            </div>

            <div className="skills_data">
                <VerifiedOutlined className='badge_check' />

                <div>
                    <h3 className="skills_name">ReactJs</h3>
                    <span className="skills_level">Advanced</span>
                </div>
            </div>
            </div>

            <div className="skills_group">
            <div className="skills_data">
                <VerifiedOutlined className='badge_check' />

                <div>
                    <h3 className="skills_name">React-Native</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
            </div>

            <div className="skills_data">
                <VerifiedOutlined className='badge_check' />

                <div>
                    <h3 className="skills_name">NextJs</h3>
                    <span className="skills_level">Basic</span>
                </div>
            </div>

            <div className="skills_data">
                <VerifiedOutlined className='badge_check' />

                <div>
                    <h3 className="skills_name">AngularJs</h3>
                    <span className="skills_level">Basic</span>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend