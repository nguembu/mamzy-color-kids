import { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Configuration EmailJS (à remplacer avec vos vraies clés)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ornelatindi@gmail.com'
      }

      // Envoi de l'email via EmailJS
      await emailjs.send(
        'service_85vb8dg', // Remplacez par votre Service ID
        'template_z8m6p4r', // Remplacez par votre Template ID
        templateParams,
        'yEfGRuDnPURe1rjeJ' // Remplacez par votre Public Key
      )

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Envoi d'email de confirmation à l'utilisateur
      await emailjs.send(
        'service_85vb8dg',
        'template_z8m6p4r',
        {
          to_email: formData.email,
          customer_name: formData.name
        },
        'yEfGRuDnPURe1rjeJ'
      )
      
    } catch (error) {
      console.error('Erreur envoi email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contactez-nous</h2>
        <p className="contact-subtitle">
          Une question ? Un projet personnalisé ? Nous sommes là pour vous répondre sous 24h !
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>📞 Nos Coordonnées</h3>
            <div className="contact-item">
              <strong>Email :</strong>
              <a href="mailto:ornelatindi@gmail.com">ornelatindi@gmail.com</a>
            </div>
            <div className="contact-item">
              <strong>Téléphone :</strong>
              <a href="tel:+237699584278">+237 6 99 58 42 78</a>
            </div>
            <div className="contact-item">
              <strong>Adresse :</strong>
              <span>Acacia, Yaoundé, Cameroun</span>
            </div>
            <div className="contact-item">
              <strong>Horaires :</strong>
              <span>Lun-Sam: 8h-18h</span>
            </div>
            <div className="contact-item">
              <strong>Entreprise :</strong>
              <span>Individuelle Camerounaise</span>
            </div>
            <div className="contact-item">
              <strong>Activité :</strong>
              <span>Distributeur de livres et magazines</span>
            </div>
            
            <div className="contact-assurance">
              <h4>✅ Nous nous engageons à :</h4>
              <ul>
                <li>Réponse sous 24h ouvrées</li>
                <li>Devis personnalisé gratuit</li>
                <li>Conseils créatifs sur mesure</li>
                <li>Support après-vente dédié</li>
                <li>Livraison dans tout le Cameroun</li>
              </ul>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitStatus === 'success' && (
              <div className="alert alert-success">
                ✅ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                Un email de confirmation vous a été envoyé.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="alert alert-error">
                ❌ Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Votre Nom *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  className="form-control" 
                  placeholder="Votre nom complet"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Votre Email *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className="form-control" 
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Sujet *</label>
              <select 
                id="subject"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Choisissez un sujet</option>
                <option value="Demande d'information">Demande d'information</option>
                <option value="Devis personnalisé">Devis personnalisé</option>
                <option value="Problème de commande">Problème de commande</option>
                <option value="Retour produit">Retour produit</option>
                <option value="Partenariat">Partenariat</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Votre Message *</label>
              <textarea 
                id="message"
                name="message"
                className="form-control" 
                placeholder="Décrivez-nous votre projet ou votre question..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  Envoi en cours...
                </>
              ) : (
                '📨 Envoyer le message'
              )}
            </button>
            
            <p className="form-note">
              * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact