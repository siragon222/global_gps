import React, { useState } from 'react'
import { motion } from 'framer-motion'

const tabs = ['Áreas de Experticia', 'Stack Tecnológico', 'Blockchain', 'Aplicaciones']

function TechTabs() {
  const [active, setActive] = useState(1)
  return (
    <section className="section tech-tabs">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Tecnología de última generación para tu empresa
        </motion.h2>
        <div className="tabs">
          {tabs.map((t, i) => (
            <motion.button
              key={t}
              className={`tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              {t}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechTabs


