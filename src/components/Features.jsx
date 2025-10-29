import './Features.css'

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "🎨",
      title: "Créativité Développée",
      description: "Nos produits sont conçus pour stimuler l'imagination et la créativité des enfants."
    },
    {
      id: 2,
      icon: "🧠",
      title: "Apprentissage Ludique",
      description: "Les enfants apprennent tout en s'amusant avec nos activités éducatives."
    },
    {
      id: 3,
      icon: "🌿",
      title: "Matériaux Écologiques",
      description: "Tous nos produits sont fabriqués avec des matériaux respectueux de l'environnement."
    },
    {
      id: 4,
      icon: "👶",
      title: "Adapté à Tous les Âges",
      description: "Nous proposons des produits adaptés aux différentes tranches d'âge."
    }
  ]

  return (
    <section id="atouts" className="features">
      <div className="container">
        <h2 className="section-title">Nos Atouts</h2>
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card visible">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features