import './Informations.css'

const Informations = () => {
  return (
    <div className="informations-page">
      <div className="container">
        <div className="page-header">
          <h1>Informations</h1>
          <p>Toutes les informations pratiques pour vos commandes MAMZY COLOR'KIDS</p>
        </div>

        <div className="info-sections">
          <section className="info-section">
            <h2>📦 Livraison & Retours</h2>
            <div className="info-content">
              <div className="info-card">
                <h3>Délais de Livraison</h3>
                <ul>
                  <li><strong>France Métropolitaine:</strong> 2-3 jours ouvrés</li>
                  <li><strong>Europe:</strong> 5-7 jours ouvrés</li>
                  <li><strong>International:</strong> 7-14 jours ouvrés</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Frais de Livraison</h3>
                <ul>
                  <li><strong>Livraison standard:</strong> 4,90 €</li>
                  <li><strong>Livraison express:</strong> 9,90 €</li>
                  <li><strong>Offerte</strong> à partir de 50 € d'achat</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Politique de Retours</h3>
                <p>Vous disposez de 30 jours pour retourner un article non utilisé dans son emballage d'origine.</p>
                <ul>
                  <li>Retours gratuits sous 14 jours</li>
                  <li>Remboursement sous 5 jours ouvrés</li>
                  <li>Échange possible sous 48h</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>🔒 Paiement Sécurisé</h2>
            <div className="info-content">
              <div className="info-card">
                <h3>Moyens de Paiement Acceptés</h3>
                <div className="payment-methods">
                  <div className="payment-method">💳 Carte Bancaire</div>
                  <div className="payment-method">📱 PayPal</div>
                  <div className="payment-method">🍎 Apple Pay</div>
                  <div className="payment-method">Ⓜ️ Virement Bancaire</div>
                </div>
              </div>
              
              <div className="info-card">
                <h3>Sécurité des Paiements</h3>
                <p>Tous nos paiements sont 100% sécurisés grâce à :</p>
                <ul>
                  <li>Chiffrement SSL 256 bits</li>
                  <li>Certification 3D Secure</li>
                  <li>Conformité PCI DSS</li>
                  <li>Aucune donnée bancaire stockée</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>📄 Conditions Générales</h2>
            <div className="info-content">
              <div className="info-card">
                <h3>Conditions d'Utilisation</h3>
                <p>En utilisant notre site, vous acceptez nos conditions générales de vente.</p>
                <ul>
                  <li>Âge minimum requis : 18 ans</li>
                  <li>Prix en euros TTC</li>
                  <li>Droit de rétractation de 14 jours</li>
                  <li>Garantie légale de conformité de 2 ans</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Propriété Intellectuelle</h3>
                <p>Tous les contenus (designs, textes, images) sont la propriété exclusive de MAMZY COLOR'KIDS.</p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>🛡️ Politique de Confidentialité</h2>
            <div className="info-content">
              <div className="info-card">
                <h3>Protection des Données</h3>
                <p>Nous nous engageons à protéger vos données personnelles conformément au RGPD.</p>
                <ul>
                  <li>Données collectées uniquement pour la finalité du service</li>
                  <li>Droit d'accès, de modification et de suppression</li>
                  <li>Pas de revente à des tiers</li>
                  <li>Chiffrement des données sensibles</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>❓ FAQ - Questions Fréquentes</h2>
            <div className="faq-content">
              <div className="faq-item">
                <h3>Quels sont les délais de fabrication ?</h3>
                <p>La plupart de nos produits sont expédiés sous 24-48h. Les produits personnalisés peuvent prendre 3-5 jours ouvrés.</p>
              </div>
              
              <div className="faq-item">
                <h3>Proposez-vous des produits personnalisés ?</h3>
                <p>Oui ! Contactez-nous pour discuter de votre projet personnalisé. Nous adorons créer des produits uniques.</p>
              </div>
              
              <div className="faq-item">
                <h3>Les produits sont-ils adaptés à quel âge ?</h3>
                <p>Nos produits sont conçus pour les enfants de 3 à 12 ans, avec des gammes adaptées à chaque tranche d'âge.</p>
              </div>
              
              <div className="faq-item">
                <h3>Utilisez-vous des matériaux écologiques ?</h3>
                <p>Absolument ! Tous nos produits sont fabriqués avec des matériaux recyclés et respectueux de l'environnement.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Informations