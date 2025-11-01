import { image } from 'framer-motion/m';
import './Products.css'
import ParallaxBackground from './ParallaxBackground';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Cahier de Coloriage Magique",
      description: "Un cahier interactif avec des dessins qui se colorent de manière magique au contact des crayons spéciaux. Stimule la créativité et l'émerveillement.",
      price: "2000 FCFA",
      color1: "#FF6B8B",
      color2: "#FF8FA3",
      imageText: "🎨 Magique"
    },
    {
      id: 2,
      title: "Kit Créatif Animaux",
      description: "Un ensemble complet pour créer et colorier des animaux fantastiques. Inclut des pochoirs, des autocollants et un guide d'activités.",
      price: "2500 FCFA",
      color1: "#4ECDC4",
      color2: "#6AD4CD",
      imageText: "🐾 Animaux",
      image:"/color.jpeg"
    },
    {
      id: 3,
      title: "Album à Dessins Géant",
      description: "Un album format géant avec 100 pages de papier qualité premium pour laisser libre cours à l'imagination des jeunes artistes.",
      price: "4000 FCFA",
      color1: "#FFD166",
      color2: "#FFD980",
      imageText: "📘 Géant"
    },
    {
      id: 4,
      title: "Coffret Artiste en Herbe",
      description: "Tout le nécessaire pour initier votre enfant aux joies du dessin et de la couleur. Parfait pour les débutants.",
      price: "10000 FCFA",
      color1: "#2A2D34",
      color2: "#40444D",
      imageText: "🎨 Pro"
    },
    {
      id: 5,
      title: "Cahier d'Activités Éducatives",
      description: "Des jeux éducatifs et des coloriages qui développent la motricité fine et les compétences cognitives des enfants.",
      price: "3000 FCFA",
      color1: "#FF6B8B",
      color2: "#4ECDC4",
      imageText: "📚 Éducatif"
    },
    {
      id: 6,
      title: "Set de Crayons Écologiques",
      description: "12 crayons de couleur fabriqués à partir de matériaux recyclés. Couleurs vibrantes et respectueuses de l'environnement.",
      price: "1500 FCFA",
      color1: "#4ECDC4",
      color2: "#FFD166",
      imageText: "✏️ Écolo"
    }
  ]

  const handleOrder = (productId, productTitle) => {
    alert(`Commande passée pour : ${productTitle}!\n\nNous vous contacterons dans les plus brefs délais pour finaliser votre commande.`);
  }

  const handleLearnMore = (productTitle, productDescription) => {
    alert(`${productTitle}\n\n${productDescription}\n\nCaractéristiques :\n• Matériaux écologiques\n• Adapté aux enfants 3-8 ans\n• Livraison gratuite\n• Satisfait ou remboursé`);
  }

  return (
    <section id="produits">
      <div className="container">
        <h2 className="section-title">Nos Produits Créatifs</h2>
        <p className="section-subtitle">
          Découvrez notre collection exclusive conçue pour développer la créativité et l'imagination des enfants
        </p>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card visible">
              <div className="product-img">
                <div 
                  className="product-image-content"
                  style={{ 
                    background: `linear-gradient(135deg, ${product.color1}, ${product.color2})`
                  }}
                >
                  {product.imageText}
                </div>
                <div className="product-overlay">
                  <button 
                    className="product-overlay-btn learn-more-btn"
                    onClick={() => handleLearnMore(product.title, product.description)}
                  >
                    ℹ️ Détails
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-features">
                  <span className="feature-tag">🎨 Créatif</span>
                  <span className="feature-tag">👶 3-8 ans</span>
                  <span className="feature-tag">🌿 Écologique</span>
                </div>
                <div className="product-footer">
                  <div className="product-price">{product.price}</div>
                  <button 
                    className="order-btn"
                    onClick={() => handleOrder(product.id, product.title)}
                  >
                    <span className="btn-icon">🛒</span>
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="products-cta">
          <h3>Vous ne trouvez pas ce que vous cherchez ?</h3>
          <p>Contactez-nous pour une création sur mesure adaptée aux besoins de votre enfant.</p>
          <a href="#contact" className="btn secondary-btn">Demander un produit personnalisé</a>
        </div>
      </div>
    </section>
  )
}

export default Products