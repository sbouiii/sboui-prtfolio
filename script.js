// ===== PORTFOLIO JAVASCRIPT =====
// Modern ES6+ JavaScript with smooth animations and interactions

class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupScrollAnimations();
        this.setupNavigation();
        this.setupCounters();
        this.setupSkillBars();
        this.setupFormHandling();
        this.setupTypingEffect();
        this.setupParallaxEffects();
    }

    // ===== EVENT LISTENERS =====
    setupEventListeners() {
        // Mobile navigation toggle
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Window scroll events
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });

        // Window resize events
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    // ===== SCROLL ANIMATIONS =====
    setupScrollAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Add fade-in class to elements that should animate
        const animateElements = document.querySelectorAll('.about-card, .skill-category, .project-card, .timeline-item, .contact-item');
        animateElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }

    // ===== NAVIGATION =====
    setupNavigation() {
        const navbar = document.getElementById('navbar');
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const updateActiveNavLink = () => {
            let current = '';
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        };

        // Update active nav link on scroll
        window.addEventListener('scroll', updateActiveNavLink);
    }

    // ===== COUNTER ANIMATIONS =====
    setupCounters() {
        const counters = document.querySelectorAll('.stat-number');

        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        };

        // Intersection Observer for counters
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // ===== SKILL BARS =====
    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');

        const animateSkillBar = (skillBar) => {
            const width = skillBar.getAttribute('data-width');
            skillBar.style.width = `${width}%`;
        };

        // Intersection Observer for skill bars
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBar(entry.target);
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(skillBar => {
            skillObserver.observe(skillBar);
        });
    }

    // ===== FORM HANDLING =====
    setupFormHandling() {
        const contactForm = document.querySelector('.contact-form');

        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(contactForm);
            });

            // Add floating label effect
            const formGroups = contactForm.querySelectorAll('.form-group');
            formGroups.forEach(group => {
                const input = group.querySelector('input, textarea');
                const label = group.querySelector('label');

                if (input && label) {
                    input.addEventListener('focus', () => {
                        group.classList.add('focused');
                    });

                    input.addEventListener('blur', () => {
                        if (!input.value) {
                            group.classList.remove('focused');
                        }
                    });
                }
            });
        }
    }

    handleFormSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Show success message
            this.showNotification('Message envoyé avec succès!', 'success');

            // Reset form
            form.reset();
            form.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('focused');
            });

            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        // Add styles
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
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // ===== TYPING EFFECT =====
    setupTypingEffect() {
        const typingElements = document.querySelectorAll('.typing-text');

        typingElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.borderRight = '2px solid #6366f1';

            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    // Remove cursor after typing is complete
                    setTimeout(() => {
                        element.style.borderRight = 'none';
                    }, 1000);
                }
            };

            // Start typing effect when element is visible
            const typingObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        typeWriter();
                        typingObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            typingObserver.observe(element);
        });
    }

    // ===== PARALLAX EFFECTS =====
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.floating-shapes .shape');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            parallaxElements.forEach((element, index) => {
                const speed = (index + 1) * 0.1;
                element.style.transform = `translateY(${rate * speed}px)`;
            });
        });
    }

    // ===== SCROLL HANDLERS =====
    handleScroll() {
        const navbar = document.getElementById('navbar');
        const scrolled = window.scrollY > 50;

        if (navbar) {
            navbar.classList.toggle('scrolled', scrolled);
        }
    }

    handleResize() {
        // Handle responsive adjustments
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');

        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
}

// ===== UTILITY FUNCTIONS =====
class Utils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// ===== CUSTOM CURSOR =====
class CustomCursor {
    constructor() {
        this.cursor = null;
        this.init();
    }

    init() {
        if (window.innerWidth > 768) {
            this.createCursor();
            this.setupEventListeners();
        }
    }

    createCursor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: #6366f1;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(this.cursor);
    }

    setupEventListeners() {
        document.addEventListener('mousemove', (e) => {
            if (this.cursor) {
                this.cursor.style.left = e.clientX - 10 + 'px';
                this.cursor.style.top = e.clientY - 10 + 'px';
            }
        });

        // Scale cursor on hover
        const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (this.cursor) {
                    this.cursor.style.transform = 'scale(1.5)';
                }
            });

            el.addEventListener('mouseleave', () => {
                if (this.cursor) {
                    this.cursor.style.transform = 'scale(1)';
                }
            });
        });
    }
}

// ===== PARTICLE SYSTEM =====
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.init();
    }

    init() {
        this.createCanvas();
        this.createParticles();
        this.animate();
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around screen
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main portfolio functionality
    new Portfolio();

    // Initialize custom cursor (desktop only)
    if (window.innerWidth > 768) {
        new CustomCursor();
    }

    // Initialize particle system
    new ParticleSystem();

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// ===== PERFORMANCE OPTIMIZATIONS =====
// Debounce scroll events for better performance
const debouncedScrollHandler = Utils.debounce(() => {
    // Handle scroll events here
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Preload critical images
const preloadImages = () => {
    const imageUrls = [
        // Add any critical image URLs here
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

// Call preload function
preloadImages();
