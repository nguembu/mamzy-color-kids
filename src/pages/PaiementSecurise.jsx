import './Informations.css'

const PaiementSecurise = () => {
  return (
    <div className="informations-page">
      <div className="container">
        <div className="page-header">
          <h1>🔒 Paiement Sécurisé</h1>
          <p>Vos transactions sont 100% sécurisées avec les dernières technologies de cryptage</p>
        </div>

        <div className="info-sections">
          <section className="info-section">
            <h2>💳 Moyens de Paiement Acceptés</h2>
            <div className="info-content">
              <div className="info-card">
                <h3>Cartes Bancaires</h3>
                <div className="payment-methods">
                  <div className="payment-method">Visa</div>
                  <div className="payment-method">Mastercard</div>
                  <div className="payment-method">American Express</div>
                </div>
              </div>
              
              <div className="info-card">
                <h3>Paiements en Ligne</h3>
                <div className="payment-methods">
                  <div className="payment-method">PayPal</div>
                  <div className="payment-method">Apple Pay</div>
                  <div className="payment-method">Google Pay</div>
                </div>
              </div>
              
              <div className="info-card">
                <h3>Autres Options</h3>
                <div className="payment-methods">
                  <div className="payment-method">Virement Bancaire</div>
                  <div className="payment-method">Chèque</div>
                </div>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>🛡️ Sécurité des Paiements</h2>
            <div className="info-content">
              <div className="info-card">
                <h3>Protection des Données</h3>
                <p>Tous nos paiements sont 100% sécurisés grâce à :</p>
                <ul>
                  <li><strong>Chiffrement SSL 256 bits</strong> - Protection des données</li>
                  <li><strong>Certification 3D Secure</strong> - Double authentification</li>
                  <li><strong>Conformité PCI DSS</strong> - Norme internationale</li>
                  <li><strong>Aucune donnée bancaire stockée</strong> sur nos serveurs</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Garanties</h3>
                <ul>
                  <li>Surveillance 24h/24 des transactions</li>
                  <li>Détection des fraudes en temps réel</li>
                  <li>Remboursement en cas de fraude avérée</li>
                  <li>Support dédié pour tout problème de paiement</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>❓ Questions Fréquentes</h2>
            <div className="faq-content">
              <div className="faq-item">
                <h3>Mes données bancaires sont-elles en sécurité ?</h3>
                <p>Absolument ! Nous utilisons le cryptage SSL et ne stockons jamais vos données bancaires. Toutes les transactions passent par des plateformes de paiement agréées.</p>
              </div>
              
              <div className="faq-item">
                <h3>Que faire en cas de problème de paiement ?</h3>
                <p>Contactez notre service client au 01 23 45 67 89 ou par email à support@mamzycolorkids.fr. Nous résoudrons le problème dans les plus brefs délais.</p>
              </div>
              
              <div className="faq-item">
                <h3>Puis-je payer en plusieurs fois ?</h3>
                <p>Oui, nous proposons le paiement en 3 ou 4 fois sans frais à partir de 100 € d'achat avec notre partenaire PayPal.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PaiementSecurise