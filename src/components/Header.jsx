import React from 'react'
import '../App.scss'
import ProfilePicture from './ProfilePicture'
import emailIcon from '../assets/icons/Mail-Icon.svg'
import linkedinIcon from '../assets/icons/LinkedIn-Icon.svg'

export default function Header() {
  return (
    <div className='header-container'>
      <ProfilePicture />
      <div className='header-text-container'>
        <h1>Shivam Agarwal</h1>
        <h3>Software Developer</h3>
        <p>shivamagarwamarch@gmail.com</p>
      </div>
      <div className='header-social-container'>
        <button className='header-social-button email-button'>
          <img src={emailIcon} alt="Email Icon"/>
          <span className='header-social-button-text header-social-button-text-email'>Email</span>
        </button>
        <button className='header-social-button linkedin-button'>
          <img src={linkedinIcon} alt="LinkedIn Icon"/>
          <span className='header-social-button-text header-social-button-text-linkedin'>LinkedIn</span>
        </button>
      </div>
    </div>
  )
}