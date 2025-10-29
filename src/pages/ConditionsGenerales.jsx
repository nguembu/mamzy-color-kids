import './Informations.css'

const ConditionsGenerales = () => {
  return (
    <div className="informations-page">
      <div className="container">
        <div className="page-header">
          <h1>📄 Conditions Générales de Vente</h1>
          <p>Les conditions générales régissant les ventes sur MAMZY COLOR'KIDS</p>
        </div>

        <div className="info-sections">
          <section className="info-section">
            <h2>📋 Article 1 - Objet</h2>
            <div className="info-content">
              <div className="info-card">
                <p>Les présentes conditions générales de vente régissent les ventes de produits de la société MAMZY COLOR'KIDS, 
                SAS au capital de 50 000 €, immatriculée au RCS de Paris sous le numéro 123 456 789.</p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>🛒 Article 2 - Prix</h2>
            <div className="info-content">
              <div className="info-card">
                <ul>
                  <li>Les prix sont indiqués en euros toutes taxes comprises (TTC)</li>
                  <li>Les frais de livraison sont indiqués clairement avant la validation de commande</li>
                  <li>MAMZY COLOR'KIDS se réserve le droit de modifier ses prix à tout moment</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>📦 Article 3 - Commande</h2>
            <div className="info-content">
              <div className="info-card">
                <ul>
                  <li>La validité de la commande est subordonnée à l'acceptation des CGV</li>
                  <li>Un email de confirmation est envoyé après validation de la commande</li>
                  <li>MAMZY COLOR'KIDS se réserve le droit d'annuler toute commande anormale</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>🔄 Article 4 - Droit de Rétractation</h2>
            <div className="info-content">
              <div className="info-card">
                <p>Conformément à l'article L.221-18 du code de la consommation, vous disposez d'un délai de 30 jours 
                pour exercer votre droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.</p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>⚖️ Article 5 - Garanties</h2>
            <div className="info-content">
              <div className="info-card">
                <ul>
                  <li>Garantie légale de conformité de 2 ans</li>
                  <li>Garantie des vices cachés</li>
                  <li>Assistance technique incluse</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ConditionsGenerales