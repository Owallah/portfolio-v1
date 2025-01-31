import { GitHub, Instagram, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material'
import './Home.css'

const Social = () => {
  return (
    <div className='home_socials'>
        <a href="https://x.com/ElkinTradingKe" className="home_social_icon" target='_blank'>
            <Twitter />
        </a>

        <a href="https://github.com/Owallah" className="home_social_icon" target='_blank'>
            <GitHub />
        </a>

        <a href="https://www.instagram.com/the.nazarite.1/" className="home_social_icon" target='_blank'>
            <Instagram />
        </a>

        <a href="https://wa.me/+254702896093" className="home_social_icon" target='_blank'>
            <WhatsApp />
        </a>

        <a href="https://www.linkedin.com/in/michael-johnson-8a6a08176/" className="home_social_icon" target='_blank'>
            <LinkedIn />
        </a>

        
    </div>
  )
}

export default Social