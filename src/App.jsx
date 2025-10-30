import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import ThemeToggle from './components/ThemeToggle'
import Informations from './pages/Informations'
import LivraisonRetours from './pages/LivraisonRetours'
import PaiementSecurise from './pages/PaiementSecurise'
import ConditionsGenerales from './pages/ConditionsGenerales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import FAQ from './pages/FAQ'
import './index.css'

// Variants d'animation globaux simplifiés
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
}

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.4
}

function App() {
  const [theme, setTheme] = useState('light')
  const [isHeaderCompact, setIsHeaderCompact] = useState(false)

  useEffect(() => {
    // Animation au défilement
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    // Observer les éléments à animer
    const elementsToAnimate = document.querySelectorAll('.product-card, .feature-card, .testimonial, .value-item, .stat-card');
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });

    // Effet de header compact au défilement
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsHeaderCompact(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll)

    // Charger le thème depuis le localStorage
    const savedTheme = localStorage.getItem('mamzy-theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('mamzy-theme', newTheme)
  }

  // Composant pour la page d'accueil
  const HomePage = () => (
    <motion.div
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero />
      <About />
      <Products />
      <Features />
      <Testimonials />
      <Contact />
    </motion.div>
  )

  return (
    <Router>
      <div className="App">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Header isCompact={isHeaderCompact} />
        
        <main style={{ position: 'relative', zIndex: 1 }}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/informations" element={
                <motion.div
                  key="informations"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Informations />
                </motion.div>
              } />
              <Route path="/livraison-retours" element={
                <motion.div
                  key="livraison"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <LivraisonRetours />
                </motion.div>
              } />
              <Route path="/paiement-securise" element={
                <motion.div
                  key="paiement"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <PaiementSecurise />
                </motion.div>
              } />
              <Route path="/conditions-generales" element={
                <motion.div
                  key="conditions"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <ConditionsGenerales />
                </motion.div>
              } />
              <Route path="/politique-confidentialite" element={
                <motion.div
                  key="confidentialite"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <PolitiqueConfidentialite />
                </motion.div>
              } />
              <Route path="/faq" element={
                <motion.div
                  key="faq"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <FAQ />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App