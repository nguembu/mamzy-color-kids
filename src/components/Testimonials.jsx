import { useState, useEffect } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Ma fille adore les cahiers de coloriage MAMZY COLOR'KIDS. Les dessins sont originaux et les couleurs sont magnifiques. Je recommande vivement!",
      author: "Sophie, maman de Léa (5 ans)",
      rating: 5
    },
    {
      id: 2,
      text: "Le kit créatif animaux a captivé mon fils pendant des heures. La qualité des matériaux est exceptionnelle et durable.",
      author: "Thomas, papa de Noah (7 ans)",
      rating: 5
    },
    {
      id: 3,
      text: "Enfin des produits créatifs qui respectent l'environnement! Mes jumeaux adorent et moi j'apprécie l'engagement écologique.",
      author: "Marie, maman de Jade et Jules (6 ans)",
      rating: 4
    },
    {
      id: 4,
      text: "Service client exceptionnel et produits de grande qualité. Ma petite fille ne veut plus utiliser autre chose!",
      author: "Claire, grand-mère de Emma (4 ans)",
      rating: 5
    },
    {
      id: 5,
      text: "Les designs sont adaptés à l'âge des enfants et stimulent vraiment leur créativité. Un excellent investissement!",
      author: "David, papa de Lucas (8 ans)",
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ))
  }

  return (
    <section id="avis" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Ce que disent nos clients</h2>
        <div className="testimonials-container">
          <button className="carousel-btn prev" onClick={prevTestimonial}>
            ‹
          </button>
          
          <div className="testimonials-carousel">
            <div 
              className="testimonials-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`testimonial ${index === currentIndex ? 'active' : ''}`}
                >
                  <div className="testimonial-content">
                    <div className="rating">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">{testimonial.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-btn next" onClick={nextTestimonial}>
            ›
          </button>
        </div>
        
        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials