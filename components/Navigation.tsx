'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#projects', label: 'Projets' },
    { href: '#experience', label: 'Expérience' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">&lt;/&gt;</span>
          <span className="logo-name">Portfolio</span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          {navLinks.map((link) => (
            <li key={link.href} className="nav-item">
              <Link 
                href={link.href} 
                className="nav-link"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </button>
          <div 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
            id="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

