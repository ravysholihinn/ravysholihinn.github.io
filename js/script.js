// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing animation for hero title
function typeWriter(element, text, delay = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Scroll animations
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

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to section headers
    document.querySelectorAll('.section-header').forEach(header => {
        header.classList.add('fade-in');
        observer.observe(header);
    });

    // Add slide-in animations to cards
    document.querySelectorAll('.skill-card, .project-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Add animations to about section
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');
    
    if (aboutText) {
        aboutText.classList.add('slide-in-left');
        observer.observe(aboutText);
    }
    
    if (aboutImage) {
        aboutImage.classList.add('slide-in-right');
        observer.observe(aboutImage);
    }

    // Add animations to contact section
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    
    if (contactInfo) {
        contactInfo.classList.add('slide-in-left');
        observer.observe(contactInfo);
    }
    
    if (contactForm) {
        contactForm.classList.add('slide-in-right');
        observer.observe(contactForm);
    }
});

// Skill progress bar animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target;
            const width = skillBar.getAttribute('data-width');
            setTimeout(() => {
                skillBar.style.width = width;
            }, 500);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully! I will get back to you soon.', 'success');
        this.reset();
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 4px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#4CAF50';
            break;
        case 'error':
            notification.style.backgroundColor = '#f44336';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ff9800';
            break;
        default:
            notification.style.backgroundColor = '#2196F3';
    }
    
    // Add to body
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}, 5000);
}

// Modal functions for project details
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});// Notification system
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Parallax effect for hero section only
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        const speed = scrolled * 0.5;
        hero.style.transform = `translateY(${speed}px)`;
    } else if (hero) {
        // Reset transform when scrolled past hero
        hero.style.transform = 'translateY(0px)';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    // Hide loading screen if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
    
    // Add loaded class to body
    document.body.classList.add('loaded');
});

// Theme toggle functionality (optional)
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }
}

// Initialize theme toggle if element exists
document.addEventListener('DOMContentLoaded', initThemeToggle);

// Cursor trail effect (optional enhancement)
function createCursorTrail() {
    const trail = [];
    const trailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY });
        
        if (trail.length > trailLength) {
            trail.shift();
        }
        
        // Remove existing trail dots
        document.querySelectorAll('.cursor-trail').forEach(dot => dot.remove());
        
        // Create new trail dots
        trail.forEach((point, index) => {
            const dot = document.createElement('div');
            dot.className = 'cursor-trail';
            dot.style.cssText = `
                position: fixed;
                width: ${Math.max(1, index)}px;
                height: ${Math.max(1, index)}px;
                background: rgba(108, 92, 231, ${index / trailLength});
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${point.x}px;
                top: ${point.y}px;
                transform: translate(-50%, -50%);
            `;
            document.body.appendChild(dot);
            
            // Remove dot after animation
            setTimeout(() => {
                if (dot.parentNode) {
                    dot.remove();
                }
            }, 500);
        });
    });
}

// Initialize cursor trail on desktop devices
if (window.innerWidth > 768) {
    // createCursorTrail(); // Uncomment to enable cursor trail
}

// Performance optimization: Debounce scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(() => {
    // Scroll-dependent functions go here
}));

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent body scroll
        
        // Add click outside to close functionality
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal(modalId);
            }
        });
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore body scroll
    }
}

// Certificate Modal Functionality
function openCertificateModal(certificateId) {
    const certificateData = {
        'critical-thinking': {
            title: 'Critical Thinking Certification',
            issuer: 'Professional Development Institute',
            date: '2023',
            description: 'This comprehensive certification program focused on developing advanced critical thinking skills for improving quality of life through objective analysis and effective problem-solving methodologies. The course covered logical reasoning, analytical thinking, decision-making processes, and practical application of critical thinking in real-world scenarios.',
            skills: ['Information Analysis', 'Problem Solving', 'Decision Making', 'Logical Reasoning', 'Analytical Thinking'],
            image: 'Sertifikat/Berpikir Kritis  Meningkatkan Kualitas Hidup dengan berpikir kritis/BerpikirKritis  Meningkatkan KualitasHidup denganberpikir kritis.png',
            hours: '40 Hours',
            status: 'Verified'
        },
        'html-css': {
            title: 'HTML & CSS Bootcamp',
            issuer: 'Web Development Institute',
            date: '2023',
            description: 'Comprehensive training program covering HTML5 and CSS3 fundamentals for modern web development. The bootcamp included responsive design principles, CSS Grid and Flexbox, semantic HTML, accessibility best practices, and industry-standard coding conventions.',
            skills: ['HTML5', 'CSS3', 'Responsive Design', 'CSS Grid', 'Flexbox', 'Web Accessibility'],
            image: 'Sertifikat/HTMLDANCSS.png',
            hours: '60 Hours',
            status: 'Verified'
        },
        'javascript-jquery': {
            title: 'JavaScript & jQuery Mastery',
            issuer: 'Advanced Programming Institute',
            date: '2023',
            description: 'Advanced training program in JavaScript programming and jQuery library for dynamic web development. Covered ES6+ features, DOM manipulation, event handling, AJAX, asynchronous programming, and modern JavaScript frameworks integration.',
            skills: ['JavaScript ES6+', 'jQuery', 'DOM Manipulation', 'AJAX', 'Async Programming', 'Event Handling'],
            image: 'Sertifikat/Javascript dan Jquery/Javascript dan Jquery.png',
            hours: '80 Hours',
            status: 'Verified'
        },
        'solid-principles': {
            title: 'SOLID Programming Principles',
            issuer: 'Software Engineering Academy',
            date: '2023',
            description: 'Comprehensive certification focusing on SOLID principles for software engineering. The program covered Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion principles for writing maintainable, scalable, and clean code.',
            skills: ['SOLID Principles', 'Clean Code', 'Software Architecture', 'Design Patterns', 'Object-Oriented Programming'],
            image: 'Sertifikat/Sertifikat Belajar Prinsip Pemograman SOLID/SertifikatBelajar PrinsipPemogramanSOLID-1.png',
            hours: '50 Hours',
            status: 'Verified'
        },
        'bootstrap-sass': {
            title: 'Bootstrap & SASS Mastery',
            issuer: 'Frontend Development Institute',
            date: '2023',
            description: 'Specialized training in Bootstrap framework and SASS preprocessor for efficient front-end development. The course covered Bootstrap components, grid system, customization, SASS variables, mixins, functions, and modern CSS architecture patterns.',
            skills: ['Bootstrap 5', 'SASS/SCSS', 'CSS Architecture', 'Component Design', 'Frontend Development'],
            image: 'Sertifikat/boostrap dan sass/boostrap dan sass-1.png',
            hours: '45 Hours',
            status: 'Verified'
        },
        'mncta-certification': {
            title: 'MNCTA Cybersecurity Certification',
            issuer: 'Managed Network & Cybersecurity Institute',
            date: '2024',
            description: 'Professional certification program covering comprehensive network security and cybersecurity threat analysis. The curriculum included network security protocols, threat detection and analysis, incident response procedures, security frameworks, and hands-on cybersecurity tools and techniques.',
            skills: ['Network Security', 'Threat Analysis', 'Incident Response', 'Security Frameworks', 'Cybersecurity Tools', 'Risk Assessment'],
            image: 'Sertifikat/SERTIFIKAT MNCTA/SERTIFIKAT MNCTA-1.png',
            hours: '120 Hours',
            status: 'Verified'
        }
    };

    const data = certificateData[certificateId];
    if (!data) return;

    // Create modal content
    const modalHTML = `
        <div id="certificateModal" class="certificate-modal" style="display: block;">
            <div class="certificate-modal-content">
                <div class="certificate-modal-header">
                    <h2>${data.title}</h2>
                    <span class="certificate-modal-close">&times;</span>
                </div>
                <div class="certificate-modal-body">
                    <div class="certificate-modal-image">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <div class="certificate-modal-details">
                        <div class="certificate-modal-info">
                            <div class="info-item">
                                <i class="fas fa-university"></i>
                                <span><strong>Issuer:</strong> ${data.issuer}</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-calendar-alt"></i>
                                <span><strong>Date:</strong> ${data.date}</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-clock"></i>
                                <span><strong>Duration:</strong> ${data.hours}</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-check-circle"></i>
                                <span><strong>Status:</strong> ${data.status}</span>
                            </div>
                        </div>
                        <div class="certificate-modal-description">
                            <h3>Description</h3>
                            <p>${data.description}</p>
                        </div>
                        <div class="certificate-modal-skills">
                            <h3>Skills Acquired</h3>
                            <div class="modal-skills-list">
                                ${data.skills.map(skill => `<span class="modal-skill-tag">${skill}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove existing modal if any
    const existingModal = document.getElementById('certificateModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';

    // Add close functionality
    const modal = document.getElementById('certificateModal');
    const closeBtn = modal.querySelector('.certificate-modal-close');
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
        document.body.style.overflow = 'auto';
    });

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close certificate modal
        const certificateModal = document.getElementById('certificateModal');
        if (certificateModal) {
            certificateModal.remove();
            document.body.style.overflow = 'auto';
        }
        
        // Close all open modals
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Initialize modal close buttons
document.addEventListener('DOMContentLoaded', function() {
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
});

console.log('Portfolio website loaded successfully! 🚀');
