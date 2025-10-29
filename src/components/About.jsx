import './About.css'

const About = () => {
  return (
    <section id="apropos" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">À Propos de MAMZY COLOR'KIDS</h2>
            <div className="about-description">
              <p className="lead">
                <strong>MAMZY COLOR'KIDS</strong> est une entreprise individuelle camerounaise née d'un constat simple 
                et fondamental : chaque enfant mérite de développer sa créativité dans un environnement ludique et éducatif.
              </p>
              
              <div className="mission-vision">
                <div className="mission-card">
                  <div className="icon">🎯</div>
                  <h3>Notre Mission</h3>
                  <p>
                    Offrir aux enfants camerounais et africains des produits créatifs de qualité qui stimulent 
                    l'imagination, développent les compétences cognitives et cultivent le plaisir d'apprendre 
                    à travers le coloriage et le dessin.
                  </p>
                </div>
                
                <div className="vision-card">
                  <div className="icon">🔮</div>
                  <h3>Notre Vision</h3>
                  <p>
                    Devenir la référence en matière de produits créatifs pour enfants en Afrique Centrale, 
                    en rendant accessible à tous les enfants des outils pédagogiques qui éveillent leur 
                    potentiel créatif et leur curiosité naturelle.
                  </p>
                </div>
              </div>

              <div className="values-section">
                <h3>Nos Valeurs</h3>
                <div className="values-grid">
                  <div className="value-item">
                    <div className="value-icon">🌿</div>
                    <h4>Éco-responsabilité</h4>
                    <p>Des produits fabriqués avec des matériaux respectueux de l'environnement</p>
                  </div>
                  
                  <div className="value-item">
                    <div className="value-icon">👶</div>
                    <h4>Adaptation</h4>
                    <p>Des produits conçus spécifiquement pour les enfants africains</p>
                  </div>
                  
                  <div className="value-item">
                    <div className="value-icon">🎨</div>
                    <h4>Créativité</h4>
                    <p>Stimuler l'imagination et l'expression artistique dès le plus jeune âge</p>
                  </div>
                  
                  <div className="value-item">
                    <div className="value-icon">📚</div>
                    <h4>Éducation</h4>
                    <p>Allier plaisir et apprentissage à travers des activités ludiques</p>
                  </div>
                </div>
              </div>

              <div className="story-section">
                <h3>Notre Histoire</h3>
                <p>
                  Fondée en 2023 à Yaoundé, MAMZY COLOR'KIDS est née de la passion pour l'éducation 
                  créative et du désir de contribuer au développement des enfants camerounais. 
                  Notre fondatrice, convaincue que la créativité est une compétence essentielle 
                  pour le futur, a décidé de créer des produits qui allient tradition africaine 
                  et modernité pédagogique.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers de distribuer nos produits dans tout le Cameroun 
                  et travaillons chaque jour à élargir notre impact pour toucher le plus d'enfants possible.
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Enfants inspirés</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Produits différents</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Villes desservies</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Clients satisfaits</div>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3>Notre Engagement Local</h3>
          <div className="engagement-grid">
            <div className="engagement-item">
              <div className="engagement-icon">🇨🇲</div>
              <h4>Fabriqué pour l'Afrique</h4>
              <p>Des produits adaptés au contexte et à la culture africaine</p>
            </div>
            
            <div className="engagement-item">
              <div className="engagement-icon">🤝</div>
              <h4>Commerce Local</h4>
              <p>Nous soutenons l'économie camerounaise et les artisans locaux</p>
            </div>
            
            <div className="engagement-item">
              <div className="engagement-icon">🌍</div>
              <h4>Impact Social</h4>
              <p>Une partie de nos bénéfices est reinvestie dans des projets éducatifs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About