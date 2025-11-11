'use client'

import { useEffect, useRef } from 'react'

export default function About() {
  const countersRef = useRef<HTMLDivElement[]>([])
  const aboutCardsRef = useRef<HTMLDivElement[]>([])
  const statItemsRef = useRef<HTMLDivElement[]>([])

  // Animation pour les compteurs
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target as HTMLDivElement
            const target = parseInt(counter.getAttribute('data-target') || '0')
            const duration = 2000
            const increment = target / (duration / 16)
            let current = 0

            const updateCounter = () => {
              current += increment
              if (current < target) {
                counter.textContent = Math.floor(current).toString()
                requestAnimationFrame(updateCounter)
              } else {
                counter.textContent = target.toString()
              }
            }

            updateCounter()
            observer.unobserve(counter)
          }
        })
      },
      { threshold: 0.5 }
    )

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter)
    })

    return () => {
      countersRef.current.forEach((counter) => {
        if (counter) observer.unobserve(counter)
      })
    }
  }, [])

  // Animation fade-in pour les cartes et statistiques
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

    // Observer les cartes about
    aboutCardsRef.current.forEach((card) => {
      if (card) {
        card.classList.add('fade-in')
        observer.observe(card)
      }
    })

    // Observer les items de statistiques
    statItemsRef.current.forEach((item) => {
      if (item) {
        item.classList.add('fade-in')
        observer.observe(item)
      }
    })

    return () => {
      aboutCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
      statItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">À propos de moi</h2>
          <p className="section-subtitle">Découvrez mon parcours et ma passion</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <div
              className="about-card"
              ref={(el) => {
                if (el) aboutCardsRef.current[0] = el
              }}
            >
              <h3>Mon parcours</h3>
              <p>
                Développeur backend passionné avec une expertise solide dans la création 
                d'architectures robustes et évolutives. Spécialisé dans les technologies cloud 
                et les microservices, je transforme les idées complexes en solutions techniques 
                performantes. Basé à Sousse, je travaille sur des projets innovants.
              </p>
            </div>
            <div
              className="about-card"
              ref={(el) => {
                if (el) aboutCardsRef.current[1] = el
              }}
            >
              <h3>Ma mission</h3>
              <p>
                Créer des solutions backend qui non seulement répondent aux besoins actuels 
                mais qui sont également préparées pour l'avenir. Je mets l'accent sur la 
                sécurité, la performance et la maintenabilité dans chaque projet.
              </p>
            </div>
          </div>
          <div className="about-stats">
            <div
              className="stat-item"
              ref={(el) => {
                if (el) statItemsRef.current[0] = el
              }}
            >
              <div 
                className="stat-number" 
                data-target="50"
                ref={(el) => {
                  if (el) countersRef.current[0] = el
                }}
              >
                0
              </div>
              <div className="stat-label">Projets réalisés</div>
            </div>
            <div
              className="stat-item"
              ref={(el) => {
                if (el) statItemsRef.current[1] = el
              }}
            >
              <div 
                className="stat-number" 
                data-target="5"
                ref={(el) => {
                  if (el) countersRef.current[1] = el
                }}
              >
                0
              </div>
              <div className="stat-label">Années d'expérience</div>
            </div>
            <div
              className="stat-item"
              ref={(el) => {
                if (el) statItemsRef.current[2] = el
              }}
            >
              <div 
                className="stat-number" 
                data-target="100"
                ref={(el) => {
                  if (el) countersRef.current[2] = el
                }}
              >
                0
              </div>
              <div className="stat-label">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

