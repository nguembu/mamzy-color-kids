import './Informations.css'

const LivraisonRetours = () => {
  return (
    <div className="informations-page">
      <div className="container">
        <div className="page-header">
          <h1>📦 Livraison & Retours</h1>
          <p>Toutes les informations concernant la livraison de vos commandes et notre politique de retours</p>
        </div>

        <div className="info-sections">
          <section className="info-section">
            <h2>🚚 Délais de Livraison</h2>
            <div className="info-content">
              <div className="info-card">
                <h3>France Métropolitaine</h3>
                <ul>
                  <li><strong>Livraison standard :</strong> 2-3 jours ouvrés</li>
                  <li><strong>Livraison express :</strong> 24-48h</li>
                  <li><strong>Point relais :</strong> 3-4 jours ouvrés</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Europe</h3>
                <ul>
                  <li><strong>Livraison standard :</strong> 5-7 jours ouvrés</li>
                  <li><strong>Livraison express :</strong> 3-4 jours ouvrés</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>International</h3>
                <ul>
                  <li><strong>Livraison standard :</strong> 7-14 jours ouvrés</li>
                  <li><strong>Délais variables</strong> selon la destination</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>💰 Frais de Livraison</h2>
            <div className="info-content">
              <div className="info-card">
                <h3>France Métropolitaine</h3>
                <ul>
                  <li><strong>Standard :</strong> 4,90 €</li>
                  <li><strong>Express :</strong> 9,90 €</li>
                  <li><strong>Point relais :</strong> 3,90 €</li>
                  <li><strong>Offerte</strong> à partir de 50 € d'achat</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Europe</h3>
                <ul>
                  <li><strong>Standard :</strong> 12,90 €</li>
                  <li><strong>Express :</strong> 19,90 €</li>
                  <li><strong>Offerte</strong> à partir de 100 € d'achat</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>🔄 Politique de Retours</h2>
            <div className="info-content">
              <div className="info-card">
                <h3>Droit de Rétractation</h3>
                <p>Vous disposez d'un délai de 30 jours pour retourner un article non utilisé dans son emballage d'origine.</p>
                <ul>
                  <li>Retours gratuits sous 14 jours</li>
                  <li>Remboursement sous 5 jours ouvrés</li>
                  <li>Échange possible sous 48h</li>
                </ul>
              </div>
              
              <div className="info-card">
                <h3>Procédure de Retour</h3>
                <ol>
                  <li>Connectez-vous à votre compte</li>
                  <li>Accédez à "Mes commandes"</li>
                  <li>Sélectionnez l'article à retourner</li>
                  <li>Imprimez l'étiquette de retour fournie</li>
                  <li>Déposez le colis en point relais</li>
                </ol>
              </div>
              
              <div className="info-card">
                <h3>Conditions</h3>
                <ul>
                  <li>Articles non utilisés et dans leur emballage d'origine</li>
                  <li>Étiquettes et emballages intacts</li>
                  <li>Justificatif d'achat requis</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default LivraisonRetours