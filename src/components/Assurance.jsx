import React from 'react'
import { motion } from 'framer-motion'
import icon1 from '../assets/icon_1.webp'
import icon2 from '../assets/icon_2.webp'
import icon3 from '../assets/icon_3.webp'
import icon4 from '../assets/icon_4.webp'

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
          <div className="eyebrow">Beneficios</div>
          <h2 className="assurance-title">
            Tu flota bajo control. <span className="text-red">Tu tranquilidad</span> asegurada.
          </h2>
          <p className="assurance-lead">
            En Global GPS Monitoring te ofrecemos mucho más que un sistema de rastreo: te damos el poder de actuar antes que sea demasiado tarde.
          </p>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon" aria-hidden>
                <img src={icon1} alt="Ícono beneficio 1" className="benefit-icon-img" />
              </div>
              <div className="benefit-label">Ubicación en tiempo real</div>
            </div>
            <div className="benefit">
              <div className="benefit-icon" aria-hidden>
                <img src={icon2} alt="Ícono beneficio 2" className="benefit-icon-img" />
              </div>
              <div className="benefit-label">Alertas ilimitadas</div>
            </div>
            <div className="benefit">
              <div className="benefit-icon" aria-hidden>
                <img src={icon3} alt="Ícono beneficio 3" className="benefit-icon-img" />
              </div>
              <div className="benefit-label">Geocercas</div>
            </div>
            <div className="benefit">
              <div className="benefit-icon" aria-hidden>
                <img src={icon4} alt="Ícono beneficio 4" className="benefit-icon-img" />
              </div>
              <div className="benefit-label">Apagado remoto</div>
            </div>
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
          {(() => {
            const whatsappNumber = '573144686437'
            const whatsappText = encodeURIComponent('Hola, quisiera solicitar mi cotización ¡ahora!')
            const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappText}`
            return (
              <div className="assurance-cta">
                <a
                  className="neon-button premium cta"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  solicita tu cotización ¡ahora!
                </a>
              </div>
            )
          })()}
        </motion.article>
      </div>
    </section>
  )
}

export default Assurance


