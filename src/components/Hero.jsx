import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section id="accueil" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Libérez la créativité de vos enfants
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Découvrez notre collection unique conçue pour stimuler l'imagination des enfants de tous âges
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#produits"
              className="btn hero-btn"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(255, 209, 102, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>✨ Découvrir nos produits</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Éléments flottants 3D */}
        <motion.div
          className="floating-shape shape-1"
          animate={floatAnimation}
        />
        
        <motion.div
          className="floating-shape shape-2"
          animate={{
            y: [0, 15, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
        />

        <motion.div
          className="floating-shape shape-3"
          animate={{
            y: [0, -15, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }
          }}
        />
      </div>
    </section>
  )
}

export default Hero