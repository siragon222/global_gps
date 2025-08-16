import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/GPS_logo.svg'

function Footer() {
  return (
    <footer className="site-footer">
      <motion.div
        className="container footer-inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-col brand-col">
          <a href="#home" className="brand" aria-label="Global GPS Home">
            <img src={logo} alt="Global GPS" className="brand-logo footer-logo" />
          </a>
        </div>

        <div className="footer-col">
          <div className="contact-info">
            <h4>Oficina Principal</h4>
            <p>km 1 vía Acacias - Guamal  bodega 1 - Colombia</p>
            <p>Teléfono: +57 314 468 6437 - +57 314 201 7858</p>
            <p>Atención: 24 Horas</p>
            <p>Email: <a href="mailto:globalmonitoringgps@gmail.com">globalmonitoringgps@gmail.com</a></p>
          </div>
        </div>
        <form className="subscribe" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="tu@email.aquí" />
          <motion.button
            className="neon-button small"
            type="submit"
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
          >
            Suscribir
          </motion.button>
        </form>
      </motion.div>
      <div className="legal container">
        <small>© 2025 Global GPS Monitoring — Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer


