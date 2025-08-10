import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Seguridad Total en Tiempo Real',
    text:
      'Monitorea vehículos y colaboradores al instante con ubicación precisa 24/7. Actúa rápidamente ante cualquier imprevisto gracias al botón de pánico y apagado remoto.',
  },
  {
    title: 'Reacción Inmediata ante Riesgos',
    text:
      'Activa el apagado remoto en situaciones de emergencia o robo, y protege a tu personal con el botón de pánico. Respuesta rápida que puede hacer la diferencia.',
  },
  {
    title: 'Control Total desde Cualquier Lugar',
    text:
      'Gestiona tu flota y equipo desde cualquier dispositivo. Acceso multiplataforma las 24 horas del día, sin restricciones ni complicaciones.',
  },
  {
    title: 'Reportes Automáticos para Decisiones Inteligentes',
    text:
      'Obtén informes detallados y personalizados sobre recorridos, tiempos de parada, uso del vehículo y más. Toma decisiones estratégicas con datos precisos.',
  },
]

function Solutions() {
  const matchedIcons = import.meta.glob('../assets/icon_*.svg', { eager: true, import: 'default' })
  const iconSrcs = Object.entries(matchedIcons)
    .sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }))
    .map(([, src]) => src)

  return (
    <section id="solutions" className="section solutions">
      <div className="container">
        <h2 className="section-title">Nuestras Soluciones</h2>
        <div className="cards">
          {items.map((card, idx) => (
            <motion.article
              key={card.title}
              className="solution-card"
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(20,40,90,0.45)' }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <div className="solution-icon">
                {iconSrcs[idx] && (
                  <img
                    src={iconSrcs[idx]}
                    alt={`Ícono ${idx + 1}`}
                    className="solution-icon-img"
                  />
                )}
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions


