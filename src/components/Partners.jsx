import React from 'react'
import { motion } from 'framer-motion'
import fallbackLogo from '../assets/GPS_logo.svg'

function Partners() {
  // Import any files matching LOGO_1.svg to LOGO_10.svg from assets using Vite's import.meta.glob
  const matchedLogos = import.meta.glob('../assets/LOGO_*.svg', { eager: true, import: 'default' })
  const logoEntries = Object.entries(matchedLogos)
    .sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }))
    .map(([, src]) => src)

  const partnerLogos = logoEntries.length > 0 ? logoEntries : Array(10).fill(fallbackLogo)
  const repeated = Array(3).fill(null).flatMap(() => partnerLogos)

  return (
    <section className="section partners">
      <div className="marquee">
        <motion.div
          className="marquee-track"
          initial={{ x: '-50%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {repeated.map((logoSrc, index) => (
            <div key={`partner-${index}`} className="partner-card">
              <img src={logoSrc} alt={`Logo socio ${index + 1}`} className="partner-logo" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Partners


