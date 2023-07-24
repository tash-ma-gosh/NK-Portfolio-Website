import React from 'react';
import InstagramIcon  from '@mui/icons-material/Instagram';
import LinkedInIcon  from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <p>Other Digital Places I Occupy:</p>
        <div className='socialMedia'>
           <LinkedInIcon />
           <GitHubIcon />
           <InstagramIcon /> 
           <EmailOutlinedIcon /> 
        </div>
        <div className='credits'>
          <p>Designed and Coded by <a href="https://github.com/tash-ma-gosh/NK-Portfolio-Website" target="_blank">Me</a>!</p>
          <p>Illustration by <a href='https://panotenu.com' target='_blank'>Panote Nuchprayoon </a>&lt;3</p>
        </div>
    </div>
  )
}

export default Footer;