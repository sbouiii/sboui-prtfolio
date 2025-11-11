'use client'

import { useEffect, useRef } from 'react'

export default function Experience() {
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([])

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

    timelineItemsRef.current.forEach((item) => {
      if (item) {
        item.classList.add('fade-in')
        observer.observe(item)
      }
    })

    return () => {
      timelineItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  const experiences = [
    {
      period: '2023 - Présent',
      title: 'Développeur Backend & Cloud Engineer',
      company: 'Freelance & Projets personnels',
      description: 'Développement d\'architectures cloud-native et optimisation des performances backend. Spécialisé dans les technologies modernes et les solutions évolutives.',
      tasks: [
        'Développement d\'APIs REST avec Node.js et Python',
        'Architecture microservices avec Docker et Kubernetes',
        'Intégration de services cloud AWS et Azure',
        'Mise en place de pipelines CI/CD avec GitHub Actions',
        'Optimisation des performances et scalabilité des applications',
      ],
    },
    {
      period: '2021 - 2023',
      title: 'Développeur Backend',
      company: 'Projets académiques & Formation',
      description: 'Développement d\'APIs REST et GraphQL pour des applications web et mobiles. Apprentissage des technologies cloud et optimisation des bases de données.',
      tasks: [
        'Développement d\'APIs Node.js et Python',
        'Optimisation des requêtes SQL et NoSQL',
        'Apprentissage des services cloud AWS',
        'Implémentation de systèmes d\'authentification JWT',
        'Développement de microservices avec Express et FastAPI',
      ],
    },
    {
      period: '2019 - 2021',
      title: 'Développeur Full-Stack',
      company: 'Formation & Projets personnels',
      description: 'Développement d\'applications web complètes avec focus sur le backend. Apprentissage des bonnes pratiques et des technologies modernes.',
      tasks: [
        'Développement d\'applications web complètes',
        'Apprentissage des frameworks modernes (React, Vue.js)',
        'Formation aux bonnes pratiques de développement',
        'Maîtrise des bases de données relationnelles et NoSQL',
        'Intégration de services tiers et APIs externes',
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Expérience professionnelle</h2>
          <p className="section-subtitle">Mon parcours et mes réalisations</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item"
              ref={(el) => {
                timelineItemsRef.current[index] = el
              }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <ul>
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

