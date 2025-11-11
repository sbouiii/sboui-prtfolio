'use client'

import { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const contactItemsRef = useRef<HTMLDivElement[]>([])

  // Animation fade-in pour les items de contact
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    contactItemsRef.current.forEach((item) => {
      if (item) {
        item.classList.add('fade-in')
        observer.observe(item)
      }
    })

    return () => {
      contactItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      showNotification('Message envoyé avec succès!', 'success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 2000)
  }

  const showNotification = (message: string, type: string) => {
    const notification = document.createElement('div')
    notification.className = `notification notification-${type}`
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
      </div>
    `
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#10b981' : '#3b82f6'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `
    document.body.appendChild(notification)

    setTimeout(() => {
      notification.style.transform = 'translateX(0)'
    }, 100)

    setTimeout(() => {
      notification.style.transform = 'translateX(100%)'
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification)
        }
      }, 300)
    }, 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contactez-moi</h2>
          <p className="section-subtitle">Prêt à collaborer ? Discutons de votre projet</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div
              className="contact-item"
              ref={(el) => {
                if (el) contactItemsRef.current[0] = el
              }}
            >
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>Sboui.aziz.17@gmail.com</p>
              </div>
            </div>
            <div
              className="contact-item"
              ref={(el) => {
                if (el) contactItemsRef.current[1] = el
              }}
            >
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>Téléphone</h3>
                <p>+216 23 515 087</p>
              </div>
            </div>
            <div
              className="contact-item"
              ref={(el) => {
                if (el) contactItemsRef.current[2] = el
              }}
            >
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h3>Localisation</h3>
                <p>Sousse, Cité Riadh, 4023</p>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/sbouiii" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder=" "
              />
              <label htmlFor="name">Nom complet</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder=" "
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder=" "
              />
              <label htmlFor="subject">Sujet</label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder=" "
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
              <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

