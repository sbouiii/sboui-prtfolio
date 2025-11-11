'use client'

import { useEffect, useRef } from 'react'

export default function Skills() {
  const skillBarsRef = useRef<HTMLDivElement[]>([])
  const skillCategoriesRef = useRef<HTMLDivElement[]>([])

  // Animation pour les barres de compétences
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBar = entry.target as HTMLDivElement
            const width = skillBar.getAttribute('data-width') || '0'
            skillBar.style.width = `${width}%`
            observer.unobserve(skillBar)
          }
        })
      },
      { threshold: 0.5 }
    )

    skillBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar)
    })

    return () => {
      skillBarsRef.current.forEach((bar) => {
        if (bar) observer.unobserve(bar)
      })
    }
  }, [])

  // Animation pour les catégories de compétences (fade-in)
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

    skillCategoriesRef.current.forEach((category) => {
      if (category) {
        category.classList.add('fade-in')
        observer.observe(category)
      }
    })

    return () => {
      skillCategoriesRef.current.forEach((category) => {
        if (category) observer.unobserve(category)
      })
    }
  }, [])

  const skills = {
    backend: [
      { name: 'Node.js', icon: 'fab fa-node-js', width: 95 },
      { name: 'Python', icon: 'fab fa-python', width: 90 },
      { name: 'Java', icon: 'fab fa-java', width: 85 },
      { name: 'PostgreSQL', icon: 'fas fa-database', width: 90 },
      { name: 'SQL', icon: 'fas fa-database', width: 85 },
      { name: 'Laravel', icon: 'fab fa-laravel', width: 80 },
    ],
    cloud: [
      { name: 'AWS', icon: 'fab fa-aws', width: 95 },
      { name: 'Docker', icon: 'fab fa-docker', width: 90 },
      { name: 'Kubernetes', icon: 'fas fa-cubes', width: 85 },
      { name: 'Git', icon: 'fab fa-git-alt', width: 95 },
      { name: 'Firebase', icon: 'fab fa-google', width: 85 },
    ],
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Compétences techniques</h2>
          <p className="section-subtitle">Technologies et outils que je maîtrise</p>
        </div>
        <div className="cloud-network">
          <div className="network-node node-1">
            <i className="fab fa-node-js"></i>
            <span>Node.js</span>
          </div>
          <div className="network-node node-2">
            <i className="fab fa-python"></i>
            <span>Python</span>
          </div>
          <div className="network-node node-3">
            <i className="fab fa-aws"></i>
            <span>AWS</span>
          </div>
          <div className="network-node node-4">
            <i className="fab fa-docker"></i>
            <span>Docker</span>
          </div>
          <div className="network-node node-5">
            <i className="fas fa-cubes"></i>
            <span>Kubernetes</span>
          </div>
          <div className="network-node node-6">
            <i className="fas fa-database"></i>
            <span>SQL</span>
          </div>
          <div className="network-node node-7">
            <i className="fab fa-laravel"></i>
            <span>Laravel</span>
          </div>
          <div className="network-connections">
            <div className="connection connection-1"></div>
            <div className="connection connection-2"></div>
            <div className="connection connection-3"></div>
            <div className="connection connection-4"></div>
            <div className="connection connection-5"></div>
            <div className="connection connection-6"></div>
          </div>
        </div>
        <div className="skills-grid">
          <div
            className="skill-category"
            ref={(el) => {
              if (el) skillCategoriesRef.current[0] = el
            }}
          >
            <h3>Backend Development</h3>
            <div className="skill-items">
              {skills.backend.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        data-width={skill.width}
                        ref={(el) => {
                          if (el) skillBarsRef.current[index] = el
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="skill-category"
            ref={(el) => {
              if (el) skillCategoriesRef.current[1] = el
            }}
          >
            <h3>Cloud & DevOps</h3>
            <div className="skill-items">
              {skills.cloud.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        data-width={skill.width}
                        ref={(el) => {
                          if (el) skillBarsRef.current[skills.backend.length + index] = el
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

