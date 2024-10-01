import React from 'react'
import '../App.scss'


export default function MainContent() {
  return (
    <div className='main-content-container'>
      <div className='main-content-about-container'>
        <h2>About</h2>
        <p>I am a software developer with a interest in solving problems, and tinkering with new technologies. My interests lies particularly in frontend development, and UI design.</p>
      </div>
      <div className='main-content-interests-container'>
        <h2>Interests</h2>
        <p>Coffee, Reading, Swimming, and Chess!</p>
      </div>
    </div>
  )
}