import React from 'react'
import '../App.scss'
import twitterIcon from '../assets/icons/Twitter-Icon.svg'
import facebookIcon from '../assets/icons/Facebook-Icon.svg'
import instagramIcon from '../assets/icons/Instagram-Icon.svg'
import githubIcon from '../assets/icons/GitHub-Icon.svg'

export default function Footer() {
  return (
    <div className='footer-container'>
      <img src={twitterIcon} alt="Twitter Icon" className='footer-icon'/>
      <img src={facebookIcon} alt="Facebook Icon" className='footer-icon'/>
      <img src={instagramIcon} alt="Instagram Icon" className='footer-icon'/>
      <img src={githubIcon} alt="Github Icon" className='footer-icon'/>
    </div>
  )
} 