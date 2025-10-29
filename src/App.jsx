import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
  const [theme, setTheme] = useState('light')
  const [isHeaderCompact, setIsHeaderCompact] = useState(false)

  useEffect(() => {
    // Animation au défilement - seulement pour les éléments non visibles initialement
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    // Observer seulement les éléments qui n'ont pas déjà la classe visible
    const elementsToAnimate = document.querySelectorAll('.product-card:not(.visible), .feature-card:not(.visible), .testimonial:not(.visible)');
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
    <>
      <Hero />
       <About />
      <Products />
      <Features />
      <Testimonials />
      <Contact />
    </>
  )

  return (
    <Router>
      <div className="App">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Header isCompact={isHeaderCompact} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/informations" element={<Informations />} />
            <Route path="/livraison-retours" element={<LivraisonRetours />} />
            <Route path="/paiement-securise" element={<PaiementSecurise />} />
            <Route path="/conditions-generales" element={<ConditionsGenerales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App