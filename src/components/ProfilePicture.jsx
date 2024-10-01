import React from 'react'
import profilePicture from '../assets/Profile-Picture.png'
import '../App.scss'

export default function ProfilePicture() {
  return (
    <div className='profile-picture-container'>
      <img src={profilePicture} alt="Profile Picture"/>
    </div>
  )
}