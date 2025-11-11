'use client'

import { useEffect, useState, useRef } from 'react'
import { GitHubRepo, fetchGitHubRepos, getRepoLanguages } from '@/lib/github'

interface ProjectWithLanguages extends GitHubRepo {
  languages: string[]
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectWithLanguages[]>([])
  const [loading, setLoading] = useState(true)
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    async function loadProjects() {
      setLoading(true)
      try {
        console.log('Loading projects from GitHub...')
        const repos = await fetchGitHubRepos('sbouiii')
        console.log('Repos fetched:', repos.length)
      
        if (repos.length === 0) {
          console.warn('No repositories found. This could be due to:')
          console.warn('1. All repos are forks')
          console.warn('2. All repos contain "portfolio" in the name')
          console.warn('3. API rate limiting')
          console.warn('4. Username might be incorrect')
        }
        
        // Fetch languages for each repo
        const projectsWithLanguages = await Promise.all(
          repos.map(async (repo) => {
            try {
              const languages = await getRepoLanguages(repo.languages_url)
              return { ...repo, languages }
            } catch (error) {
              console.error(`Error fetching languages for ${repo.name}:`, error)
              return { ...repo, languages: repo.language ? [repo.language] : [] }
            }
          })
        )
        
        setProjects(projectsWithLanguages)
        console.log('Projects loaded:', projectsWithLanguages.length)
      } catch (error) {
        console.error('Error loading projects:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadProjects()
  }, [])

  // Animation fade-in pour les cartes de projets
  useEffect(() => {
    if (loading || projects.length === 0) return

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

    projectCardsRef.current.forEach((card) => {
      if (card) {
        card.classList.add('fade-in')
        observer.observe(card)
      }
    })

    return () => {
      projectCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [projects, loading])

  const getLanguageIcon = (language: string) => {
    const icons: Record<string, string> = {
      'JavaScript': 'fab fa-js',
      'TypeScript': 'fab fa-js-square',
      'Python': 'fab fa-python',
      'Java': 'fab fa-java',
      'HTML': 'fab fa-html5',
      'CSS': 'fab fa-css3-alt',
      'React': 'fab fa-react',
      'Node.js': 'fab fa-node-js',
      'Docker': 'fab fa-docker',
      'AWS': 'fab fa-aws',
    }
    return icons[language] || 'fas fa-code'
  }

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Projets récents</h2>
            <p className="section-subtitle">Découvrez mes réalisations les plus marquantes</p>
          </div>
          <div className="projects-grid">
            <div className="projects-loading" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem' }}>
              <div className="loading-spinner">
                <i className="fas fa-spinner fa-spin" style={{ fontSize: '3rem', color: 'var(--primary-color)' }}></i>
              </div>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Chargement des projets depuis GitHub...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projets récents</h2>
          <p className="section-subtitle">Découvrez mes réalisations les plus marquantes</p>
        </div>
        <div className="projects-grid">
          {projects.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem' }}>
              <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <i className="fas fa-code-branch" style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}></i>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Aucun projet trouvé</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Les projets sont récupérés automatiquement depuis GitHub. 
                  Vérifiez que vous avez des repositories publics qui ne sont pas des forks.
                </p>
                <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    <strong>Vérifications :</strong>
                  </p>
                  <ul style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textAlign: 'left', listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>
                      Le username GitHub est correct : <code style={{ background: 'var(--bg-secondary)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>sbouiii</code>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>
                      Les repositories sont publics
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>
                      Les repositories ne sont pas des forks
                    </li>
                    <li>
                      <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}></i>
                      Les repositories ne contiennent pas "portfolio" dans le nom
                    </li>
                  </ul>
                </div>
                <a 
                  href="https://github.com/sbouiii?tab=repositories" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ marginTop: '1.5rem', display: 'inline-flex' }}
                >
                  <span>Voir mes repositories GitHub</span>
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          ) : (
            projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                ref={(el) => {
                  if (el) projectCardsRef.current[index] = el
                }}
              >
                <div className="project-image">
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.homepage && (
                        <a 
                          href={project.homepage} 
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                      <a 
                        href={project.html_url} 
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.name.replace(/-/g, ' ').replace(/_/g, ' ')}</h3>
                  <p>
                    {project.description || 'Projet développé avec les technologies modernes.'}
                  </p>
                  <div className="project-tech">
                    {project.languages.length > 0 ? (
                      project.languages.map((lang) => (
                        <span key={lang} className="tech-tag">
                          {lang}
                        </span>
                      ))
                    ) : project.language ? (
                      <span className="tech-tag">{project.language}</span>
                    ) : (
                      <span className="tech-tag">Code</span>
                    )}
                  </div>
                  <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <span><i className="fas fa-star"></i> {project.stargazers_count}</span>
                    <span><i className="fas fa-code-branch"></i> {project.forks_count}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

