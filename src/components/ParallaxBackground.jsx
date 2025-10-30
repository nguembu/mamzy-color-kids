import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './ParallaxBackground.css'

const ParallaxBackground = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.1])

  return (
    <motion.div 
      ref={ref} 
      className="parallax-container"
      style={{ opacity }}
    >
      <motion.div
        className="parallax-layer layer-1"
        style={{ y: y1 }}
      />
      <motion.div
        className="parallax-layer layer-2"
        style={{ y: y2 }}
      />
    </motion.div>
  )
}

export default ParallaxBackground