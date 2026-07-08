function initPageAnimations() {
    if (typeof gsap === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    initRevealTitles();
    initStaggerCards();
    initImageReveal();
    initFadeUpSections();
    initParallax();
}

function initRevealTitles() {
    const titles = document.querySelectorAll('.reveal-title, h1.reveal, h2.reveal');
    if (!titles.length) return;
    
    titles.forEach(title => {
        const text = title.textContent;
        title.innerHTML = '';
        title.style.overflow = 'hidden';
        title.style.display = 'inline-block';
        
        const span = document.createElement('span');
        span.textContent = text;
        span.style.display = 'inline-block';
        title.appendChild(span);
        
        gsap.from(span, {
            yPercent: 120,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    const pageTitles = document.querySelectorAll('h1.page-title, .page-header h1');
    pageTitles.forEach(title => {
        const text = title.textContent;
        title.innerHTML = '';
        title.style.overflow = 'hidden';
        title.style.display = 'block';
        title.style.textAlign = title.style.textAlign || 'center';
        
        const inner = document.createElement('div');
        inner.style.display = 'inline-block';
        inner.style.overflow = 'hidden';
        
        const span = document.createElement('span');
        span.textContent = text;
        span.style.display = 'inline-block';
        inner.appendChild(span);
        title.appendChild(inner);
        
        gsap.from(span, {
            yPercent: 120,
            duration: 1.4,
            ease: 'power4.out',
            delay: 0.2
        });
        
        gsap.from(title, {
            scaleY: 0.8,
            duration: 1,
            ease: 'power3.out',
            delay: 0.1
        });
    });
}

function initStaggerCards() {
    const cardGrids = document.querySelectorAll('.card-grid, .game-list, .anime-list, .vocaloid-list, .drama-list, .feature-cards, .card-container');
    if (!cardGrids.length) return;
    
    cardGrids.forEach(grid => {
        const cards = grid.children;
        if (!cards.length) return;
        
        gsap.from(cards, {
            y: 80,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
                trigger: grid,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

function initImageReveal() {
    const images = document.querySelectorAll('.img-reveal, .reveal-img');
    if (!images.length) return;
    
    images.forEach(img => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.overflow = 'hidden';
        wrapper.style.display = 'inline-block';
        wrapper.style.width = '100%';
        wrapper.style.height = '100%';
        
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
        
        gsap.set(img, {
            scale: 1.2,
            opacity: 0
        });
        
        gsap.to(img, {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: wrapper,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
        
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(136, 220, 220, 0.3)';
        overlay.style.transformOrigin = 'left';
        wrapper.appendChild(overlay);
        
        gsap.from(overlay, {
            scaleX: 1,
            duration: 1,
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: wrapper,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    const cardImages = document.querySelectorAll('.game-card img, .anime-card img, .vocaloid-card img, .drama-card img');
    cardImages.forEach(img => {
        gsap.set(img, { scale: 1 });
        img.addEventListener('mouseenter', () => {
            gsap.to(img, { scale: 1.08, duration: 0.6, ease: 'power2.out' });
        });
        img.addEventListener('mouseleave', () => {
            gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' });
        });
    });
}

function initFadeUpSections() {
    const sections = document.querySelectorAll('.fade-section, .section-fade, .intro-section, .content-section');
    if (!sections.length) return;
    
    sections.forEach(section => {
        gsap.from(section, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    const introBoxes = document.querySelectorAll('.game-intro, .vocaloid-intro, .anime-intro, .drama-intro, .intro-box');
    introBoxes.forEach(box => {
        gsap.from(box, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: box,
                start: 'top 88%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax, .parallax-bg');
    if (!parallaxElements.length) return;
    
    parallaxElements.forEach(el => {
        gsap.to(el, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
}

function initHeroAnimation() {
    if (typeof gsap === 'undefined') return;
    
    const heroTitle = document.querySelector('.hero-title, .welcome-content h1');
    const heroSubtitle = document.querySelector('.hero-subtitle, .welcome-content p');
    const heroCards = document.querySelectorAll('.hero-cards .feature-card, .features .feature-card');
    
    const tl = gsap.timeline({ delay: 0.3 });
    
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.innerHTML = '';
        heroTitle.style.overflow = 'hidden';
        heroTitle.style.display = 'inline-block';
        
        const span = document.createElement('span');
        span.textContent = text;
        span.style.display = 'inline-block';
        heroTitle.appendChild(span);
        
        tl.from(span, {
            yPercent: 120,
            duration: 1.2,
            ease: 'power4.out'
        }, 0.2);
        
        tl.from(heroTitle, {
            scaleY: 0.7,
            duration: 1,
            ease: 'power3.out'
        }, 0.1);
    }
    
    if (heroSubtitle) {
        tl.from(heroSubtitle, {
            y: 30,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out'
        }, 0.8);
    }
    
    if (heroCards.length) {
        tl.from(heroCards, {
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.15
        }, 1.1);
    }
    
    return tl;
}

function initNavAnimation() {
    if (typeof gsap === 'undefined') return;
    
    const nav = document.querySelector('.top');
    const logo = document.querySelector('#Logo');
    const navItems = document.querySelectorAll('.top .dropdown');
    
    const tl = gsap.timeline();
    
    if (nav) {
        tl.from(nav, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, 0.5);
    }
    
    if (logo) {
        tl.from(logo, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, 0.8);
    }
    
    if (navItems.length) {
        tl.from(navItems, {
            y: -20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.08
        }, 0.9);
    }
    
    return tl;
}

function initFooterAnimation() {
    if (typeof gsap === 'undefined') return;
    
    const footer = document.querySelector('.footer');
    if (!footer) return;
    
    const footerSections = footer.children;
    
    gsap.from(footerSections, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    });
}
