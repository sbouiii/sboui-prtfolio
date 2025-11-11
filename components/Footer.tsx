import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">&lt;/&gt;</span>
                <span className="logo-name">SBOUI AZIZ</span>
              </div>
              <p className="footer-tagline">Backend Developer & Cloud Engineer</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Navigation</h4>
                <ul>
                  <li><Link href="#home">Accueil</Link></li>
                  <li><Link href="#about">À propos</Link></li>
                  <li><Link href="#skills">Compétences</Link></li>
                  <li><Link href="#projects">Projets</Link></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Technologies</h4>
                <ul>
                  <li><Link href="#skills">Node.js</Link></li>
                  <li><Link href="#skills">AWS</Link></li>
                  <li><Link href="#skills">Docker</Link></li>
                  <li><Link href="#skills">Python</Link></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Contact</h4>
                <ul>
                  <li><i className="fas fa-envelope"></i> Sboui.aziz.17@gmail.com</li>
                  <li><i className="fas fa-phone"></i> +216 23 515 087</li>
                  <li><i className="fas fa-map-marker-alt"></i> Sousse, Tunisie</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-social">
              <a href="https://github.com/sbouiii" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-stack-overflow"></i>
              </a>
            </div>
            
            <div className="footer-copyright">
              <p>&copy; 2025 SBOUI AZIZ. Tous droits réservés.</p>
              <p>Développé avec <span className="heart">❤️</span> et les technologies cloud</p>
            </div>
          </div>
          
          <div className="footer-clouds">
            <div className="footer-cloud cloud-1">
              <div className="cloud-part"></div>
              <div className="cloud-part"></div>
              <div className="cloud-part"></div>
            </div>
            <div className="footer-cloud cloud-2">
              <div className="cloud-part"></div>
              <div className="cloud-part"></div>
              <div className="cloud-part"></div>
            </div>
            <div className="footer-cloud cloud-3">
              <div className="cloud-part"></div>
              <div className="cloud-part"></div>
              <div className="cloud-part"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

