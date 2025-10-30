// src/components/AnimatedCard3D.jsx
import { motion } from 'framer-motion'
import './AnimatedCard3D.css'

const AnimatedCard3D = ({ children, className = '', intensity = 1 }) => {
  const cardVariants = {
    initial: {
      rotateX: 0,
      rotateY: 0,
      scale: 1
    },
    hover: {
      rotateX: 5 * intensity,
      rotateY: -5 * intensity,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  return (
    <motion.div
      className={`card-3d-enhanced ${className}`}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      <div className="card-3d-content">
        {children}
      </div>
      <div className="card-3d-shadow"></div>
    </motion.div>
  )
}

export default AnimatedCard3D