import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

function formatThousandDots(value) {
  return Math.round(value).toLocaleString('es-ES')
}

function Counter({ to, duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(latest),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return (
    <span ref={ref} aria-live="polite" aria-label={`${to}`}>
      {formatThousandDots(display)}
    </span>
  )
}

const items = [
  { label: 'CLIENTES', value: 1689 },
  { label: 'EQUIPOS INSTALADOS', value: 3981 },
  { label: 'EQUIPOS ACTIVOS', value: 3269 },
]

function Stats() {
  return (
    <section className="section stats" id="stats">
      <div className="stats-band" aria-hidden />
      <div className="container stats-grid">
        {items.map((item, idx) => (
          <motion.div
            key={item.label}
            className="stat-card"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
          >
            <div className="stat-value">
              <Counter to={item.value} />
            </div>
            <div className="stat-label">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats


