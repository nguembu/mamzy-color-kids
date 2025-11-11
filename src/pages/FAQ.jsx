import './Informations.css'

const FAQ = () => {
  const faqItems = [
    {
      question: "Quels sont les délais de fabrication des produits personnalisés ?",
      answer: "La plupart de nos produits standards sont expédiés sous 24-48h. Les produits personnalisés peuvent prendre 3-5 jours ouvrés selon la complexité de la personnalisation."
    },
    {
      question: "Proposez-vous des produits adaptés aux enfants de moins de 3 ans ?",
      answer: "Oui, nous avons une gamme spéciale 'Premiers Pas Créatifs' adaptée aux enfants de 18 mois à 3 ans, avec des produits conformes aux normes de sécurité les plus strictes."
    },
    {
      question: "Les produits sont-ils fabriqués avec des matériaux écologiques ?",
      answer: "Absolument ! Tous nos produits sont fabriqués avec des matériaux recyclés, du papier FSC et des encres végétales. Nous sommes engagés dans une démarche éco-responsable."
    },
    {
      question: "Puis-je commander en gros pour mon école ou mon association ?",
      answer: "Oui, nous proposons des tarifs préférentiels pour les commandes en volume. Contactez-nous à pro@mamzycolorkids.fr pour un devis personnalisé."
    },
    {
      question: "Comment nettoyer les cahiers de coloriage ?",
      answer: "Nos cahiers sont conçus avec un papier résistant. Pour le nettoyage, utilisez un chiffon légèrement humide. Évitez les produits chimiques qui pourraient altérer les couleurs."
    },
    {
      question: "Proposez-vous des ateliers créatifs ?",
      answer: "Oui ! Nous organisons régulièrement des ateliers créatifs en ligne et en présentiel. Inscrivez-vous à notre newsletter pour être informé des prochaines dates."
    }
  ]

  return (
    <div className="informations-page">
      <div className="container">
        <div className="page-header">
          <h1>❓ FAQ - Questions Fréquentes</h1>
          <p>Trouvez rapidement des réponses à vos questions sur MAMZY COLOR'KIDS</p>
        </div>

        <div className="info-sections">
          <section className="info-section">
            <div className="faq-content">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="info-section">
            <h2>📞 Vous ne trouvez pas votre réponse ?</h2>
            <div className="info-content">
              <div className="info-card">
                <h3>Contactez notre équipe</h3>
                <p>Notre équipe créative se fera un plaisir de vous répondre dans les plus brefs délais.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>📧 Email :</strong> contact@mamzycolorkids.fr</p>
                  <p><strong>📞 Téléphone :</strong> +237 6 99 58 42 78</p>
                  <p><strong>🕒 Horaires :</strong> Lun-Ven 9h-18h</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default FAQ