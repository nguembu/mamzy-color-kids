import './Informations.css'

const PolitiqueConfidentialite = () => {
  return (
    <div className="informations-page">
      <div className="container">
        <div className="page-header">
          <h1>🛡️ Politique de Confidentialité</h1>
          <p>Comment nous protégeons et utilisons vos données personnelles</p>
        </div>

        <div className="info-sections">
          <section className="info-section">
            <h2>📊 Données Collectées</h2>
            <div className="info-content">
              <div className="info-card">
                <h3>Informations Personnelles</h3>
                <ul>
                  <li>Nom, prénom, adresse email</li>
                  <li>Adresse de livraison et facturation</li>
                  <li>Historique des commandes</li>
                  <li>Préférences de communication</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Données Techniques</h3>
                <ul>
                  <li>Adresse IP et données de connexion</li>
                  <li>Cookies et technologies similaires</li>
                  <li>Données de navigation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>🎯 Utilisation des Données</h2>
            <div className="info-content">
              <div className="info-card">
                <ul>
                  <li>Traitement et livraison des commandes</li>
                  <li>Service client et support</li>
                  <li>Envoi d'emails marketing (avec consentement)</li>
                  <li>Amélioration de nos services</li>
                  <li>Prévention de la fraude</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>🔐 Protection des Données</h2>
            <div className="info-content">
              <div className="info-card">
                <h3>Mesures de Sécurité</h3>
                <ul>
                  <li>Chiffrement SSL des données</li>
                  <li>Serveurs sécurisés</li>
                  <li>Accès restreint au personnel autorisé</li>
                  <li>Audits réguliers de sécurité</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Vos Droits</h3>
                <ul>
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement</li>
                  <li>Droit à la portabilité</li>
                  <li>Droit d'opposition</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PolitiqueConfidentialite