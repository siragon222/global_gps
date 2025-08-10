import React from 'react'
import { motion } from 'framer-motion'

const layers = [
  { name: 'Protocol Layer' },
  { name: 'Application Layer' },
  { name: 'Network Layer' },
  { name: 'Infrastructure Layer' },
  { name: 'Services & Components' },
]

function LayersGrid() {
  return (
    <section className="section layers-grid">
      <div className="container grid">
        {layers.map((l, i) => (
          <motion.div
            key={l.name}
            className="layer-tile"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05, duration: 0.45 }}
            whileHover={{ y: -4 }}
          >
            <div className="glow" />
            <span>{l.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default LayersGrid


