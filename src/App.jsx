import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './App.scss'

export default function App() {
  return (
    <div className="card-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}


