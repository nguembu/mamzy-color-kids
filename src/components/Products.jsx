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
      image: "/mam1.jpg",
      imageText: "🎨 Magique"
    },
    {
      id: 2,
      title: "Kit Créatif Animaux",
      description: "Un ensemble complet pour créer et colorier des animaux fantastiques. Inclut des pochoirs, des autocollants et un guide d'activités.",
      price: "2500 FCFA",
      image: "/color.jpeg",
      imageText: "🐾 Animaux"
    },
    {
      id: 3,
      title: "Livre de Conte avec coloriage ",
      description: "Un livre avec des histoires instructif et des dessins  pour laisser libre cours à l'imagination des jeunes artistes.",
      price: "4000 FCFA",
      image: "/mam3.jpg",
      imageText: "📘 Géant"
    },
    {
      id: 4,
      title: "Coffret Artiste en Herbe",
      description: "Tout le nécessaire pour initier votre enfant aux joies du dessin et de la couleur. Parfait pour les débutants.",
      price: "10000 FCFA",
      image: "/mam8.png",
      imageText: "🎨 Pro"
    },
    {
      id: 5,
      title: "Cahier d'Activités Éducatives",
      description: "Des jeux éducatifs et des coloriages qui développent la motricité fine et les compétences cognitives des enfants, parfait pour apprendre l'anglais.",
      price: "3000 FCFA",
      image: "/mam2.jpg", // Vous pouvez réutiliser ou ajouter d'autres images
      imageText: "📚 Éducatif"
    },
    {
      id: 6,
      title: "Set de Crayons Écologiques",
      description: "12 crayons de couleur fabriqués à partir de matériaux recyclés. Couleurs vibrantes et respectueuses de l'environnement.",
      price: "2500 FCFA",
      image: "/mam6.png", // Vous pouvez réutiliser ou ajouter d'autres images
      imageText: "✏️ Écolo"
    },
    {
      id: 7,
      title: "Coloring & Tracing Book",
      description: "Un livre de coloriage et de traçage axé sur les légumes et les fruits pour apprendre tout en s'amusant.",
      price: "3000 FCFA",
      image: "/mam4.jpg", // Vous pouvez réutiliser ou ajouter d'autres images
      imageText: " 🍎🥦Fruits & Légumes"
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
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
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