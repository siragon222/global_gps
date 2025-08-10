import React from 'react'
import { motion } from 'framer-motion'
import gpsLogo from '../assets/GPS_logo.svg'

function Header() {
  return (
    <header className="site-header">
      <motion.div
        className="container header-inner"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-bar">
          <a href="#home" className="brand" aria-label="Global GPS Monitoring">
            <img src={gpsLogo} alt="Global GPS Monitoring" className="brand-logo" />
          </a>
        </div>
      </motion.div>
    </header>
  )
}

export default Header


