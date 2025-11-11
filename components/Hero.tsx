'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Salut, je suis</span>
              <span className="name">SBOUI AZIZ</span>
              <span className="title">FULL STACK & Cloud Engineer</span>
            </h1>
            <p className="hero-description">
              Passionné par le développement backend robuste et les solutions cloud évolutives. 
              Je crée des architectures performantes et sécurisées pour des applications modernes.
            </p>
            <div className="hero-buttons">
              <Link href="#projects" className="btn btn-primary">
                <span>Voir mes projets</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link href="#contact" className="btn btn-secondary">
                <span>Me contacter</span>
                <i className="fas fa-envelope"></i>
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
                <div className="window-title">backend.js</div>
              </div>
              <div className="window-content">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="code-text">
                    <span className="keyword">const</span> 
                    <span className="variable"> express</span> 
                    <span className="operator"> =</span> 
                    <span className="function"> require</span>
                    <span className="bracket">(</span>
                    <span className="string">'express'</span>
                    <span className="bracket">)</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="code-text">
                    <span className="keyword">const</span> 
                    <span className="variable"> app</span> 
                    <span className="operator"> =</span> 
                    <span className="function"> express</span>
                    <span className="bracket">()</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="code-text">
                    <span className="comment">// Architecture cloud-native</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="code-text">
                    <span className="function">app</span>
                    <span className="bracket">.</span>
                    <span className="function">listen</span>
                    <span className="bracket">(</span>
                    <span className="number">3000</span>
                    <span className="bracket">)</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="code-text">
                    <span className="comment">// AWS Lambda + Docker</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">6</span>
                  <span className="code-text">
                    <span className="keyword">const</span> 
                    <span className="variable"> aws</span> 
                    <span className="operator"> =</span> 
                    <span className="function"> require</span>
                    <span className="bracket">(</span>
                    <span className="string">'aws-sdk'</span>
                    <span className="bracket">)</span>
                  </span>
                </div>
              </div>
              <div className="code-rain">
                <div className="rain-drop">const</div>
                <div className="rain-drop">API</div>
                <div className="rain-drop">cloud</div>
                <div className="rain-drop">server</div>
                <div className="rain-drop">data</div>
                <div className="rain-drop">AWS</div>
                <div className="rain-drop">Docker</div>
                <div className="rain-drop">Node</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bg">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="cloud-elements">
          <div className="cloud cloud-1">
            <div className="cloud-part"></div>
            <div className="cloud-part"></div>
            <div className="cloud-part"></div>
          </div>
          <div className="cloud cloud-2">
            <div className="cloud-part"></div>
            <div className="cloud-part"></div>
            <div className="cloud-part"></div>
          </div>
          <div className="data-flow">
            <div className="data-packet"></div>
            <div className="data-packet"></div>
            <div className="data-packet"></div>
          </div>
          <div className="server-icons">
            <div className="server-icon">
              <i className="fas fa-server"></i>
            </div>
            <div className="server-icon">
              <i className="fas fa-database"></i>
            </div>
            <div className="server-icon">
              <i className="fas fa-cloud"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

