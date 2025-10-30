import './Header.css'

const Header = ({ isCompact }) => {
  return (
    <header className={`header ${isCompact ? 'compact' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <div className="logo-img">
              <img 
                src="/mamzy-logo.png" 
                alt="MAMZY COLOR'KIDS" 
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="logo-fallback">MCK</div>
            </div>
            <div className="logo-text-container">
              <div className="logo-text">MAMZY COLOR'KIDS</div>
              <div className="logo-tagline">L'enfance au cœur de la créativité</div>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#apropos">À Propos</a></li>
            <li><a href="#produits">Produits</a></li>
            <li><a href="#atouts">Nos Atouts</a></li>
            <li><a href="#avis">Avis</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          {/* Menu mobile */}
          <div className="mobile-menu">
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className="mobile-nav">
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#apropos">À Propos</a></li>
                <li><a href="#produits">Produits</a></li>
                <li><a href="#atouts">Nos Atouts</a></li>
                <li><a href="#avis">Avis</a></li>
                <li><a href="#contact">Contact</a></li>
                            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header