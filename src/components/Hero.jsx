import React from 'react'
import { motion } from 'framer-motion'
import heroVideo from '../assets/hero_video.mp4'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-layout">
        <div className="hero-content">
          <motion.h1 className="hero-title" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05, duration: 0.7, ease: 'easeOut' }}>
            <span className="hero-line">Control <span className="text-red">total</span></span>
            <span className="hero-line">y <span className="text-red">seguridad</span></span>
            <span className="hero-line">en la palma de tu mano</span>
          </motion.h1>
          <motion.p className="hero-sub" initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15, duration: 0.6 }}>
            Con Global Monitors GPS tienes control total 24/7 desde tu celular, con rastreo en tiempo real.
          </motion.p>
          <motion.div className="hero-cta" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }}>
            <motion.a
              className="neon-button premium"
              href="http://plataforma.globalgps.com.co/Login"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              PLATAFORMA PREMIUM
            </motion.a>
            <motion.a
              className="neon-button gold"
              href="https://serversgps.com/login"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              PLATAFORMA GOLD
            </motion.a>
          </motion.div>
        </div>
        {/* video moved to background for seamless blending */}
      </div>
      <div className="hero-visual" aria-hidden>
        <motion.video
          className="hero-bg-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div className="orb" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="grid ripple" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} />
      </div>
    </section>
  )
}

export default Hero


