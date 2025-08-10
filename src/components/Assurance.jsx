import React from 'react'
import { motion } from 'framer-motion'

function Assurance() {
  return (
    <section className="section assurance">
      <div className="assurance-band" aria-hidden />
      <div className="container assurance-grid">
        <motion.div
          className="assurance-copy"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="assurance-title">
            Tu flota bajo control. <span className="gradient-text gold">Tu tranquilidad</span> asegurada.
          </h2>
          <p className="assurance-lead">
            En Global GPS Monitoring te ofrecemos mucho más que un sistema de rastreo: te damos el poder de actuar antes que sea demasiado tarde.
          </p>
          <div className="chips">
            <span className="chip">Ubicación en tiempo real</span>
            <span className="chip">Alertas ilimitadas</span>
            <span className="chip">Geocercas</span>
            <span className="chip">Apagado remoto</span>
          </div>
        </motion.div>
        <motion.article
          className="assurance-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p>
            Con nuestra tecnología avanzada, puedes localizar vehículos y personal al instante, visualizar su recorrido en tiempo real y recibir alertas ilimitadas por velocidad, encendido, salida de zonas seguras (geocercas), entre muchas otras. Todo, desde cualquier dispositivo y en cualquier momento.
          </p>
          <p>
            Además, recibirás reportes automáticos, claros y accionables, para que tomes decisiones inteligentes que impacten directamente en la eficiencia y rentabilidad de tu operación.
          </p>
        </motion.article>
      </div>
    </section>
  )
}

export default Assurance


