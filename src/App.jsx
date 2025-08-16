import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Solutions from './components/Solutions.jsx'
import TechTabs from './components/TechTabs.jsx'
import LayersGrid from './components/LayersGrid.jsx'
import Partners from './components/Partners.jsx'
import Footer from './components/Footer.jsx'
import Assurance from './components/Assurance.jsx'
import Stats from './components/Stats.jsx'
import ShowcaseVideo from './components/ShowcaseVideo.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import FloatingPDF from './components/FloatingPDF.jsx'

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Partners />
        <Assurance />
        <ShowcaseVideo />
        <Stats />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingPDF />
    </div>
  )
}

export default App
