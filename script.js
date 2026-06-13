document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Preloader ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        gsap.to(preloader, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
                preloader.style.display = 'none';
                initScrollAnimations();
            }
        });
    });

    // --- 2. Custom Cursor (Google Material Ripple Vibe) ---
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power3.out" });
    });

    // Hover effect on interactables
    const links = document.querySelectorAll('a, button, .icon-box, .close-modal');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(follower, { 
                scale: 1.6, 
                backgroundColor: 'rgba(255,69,0,0.1)', 
                borderColor: 'transparent',
                duration: 0.3 
            });
            gsap.to(cursor, { scale: 0.5, duration: 0.3 });
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(follower, { 
                scale: 1, 
                backgroundColor: 'transparent', 
                borderColor: 'rgba(255, 69, 0, 0.5)',
                duration: 0.3 
            });
            gsap.to(cursor, { scale: 1, duration: 0.3 });
        });
    });

    // --- 3. Navigation & Mobile Menu ---
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
        // Triggers the floating pill nav
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        // Hamburger Simple Animation
        hamburger.classList.toggle('toggle');
        const lines = hamburger.children;
        if(hamburger.classList.contains('toggle')) {
            gsap.to(lines[0], {y: 8, rotation: 45, duration: 0.3});
            gsap.to(lines[1], {opacity: 0, duration: 0.3});
            gsap.to(lines[2], {y: -8, rotation: -45, duration: 0.3});
        } else {
            gsap.to(lines[0], {y: 0, rotation: 0, duration: 0.3});
            gsap.to(lines[1], {opacity: 1, duration: 0.3});
            gsap.to(lines[2], {y: 0, rotation: 0, duration: 0.3});
        }
    });

    // --- 4. Three.js 3D Hero Setup ---
    const canvas = document.getElementById('hero-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1200;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 12;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Particle Material
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xFFFFFF, // Pure white for better contrast
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    camera.position.z = 3;

    // Mouse Interaction for 3D
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    });

    // Animation Loop
    const clock = new THREE.Clock();
    const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // Auto rotation
        particlesMesh.rotation.y = elapsedTime * 0.03;

        // Fluid Mouse rotation
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;
        
        particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
    };
    tick();

    // Resize Handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // --- 5. Project Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if(filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    gsap.to(card, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.2)", display: 'block' });
                } else {
                    gsap.to(card, { scale: 0.9, opacity: 0, duration: 0.3, display: 'none' });
                }
            });
        });
    });

    // --- 6. Modal Logic ---
    const modal = document.getElementById('project-modal');
    const openModalBtns = document.querySelectorAll('.open-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'flex';
            // Smooth float-up entrance
            gsap.fromTo('.modal-content', 
                { y: 60, opacity: 0, scale: 0.95 }, 
                { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
            );
            gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        });
    });

    const closeModal = () => {
        gsap.to('.modal-content', { y: 40, opacity: 0, scale: 0.95, duration: 0.3, ease: "power2.in" });
        gsap.to(modal, { opacity: 0, duration: 0.3, delay: 0.1, onComplete: () => { modal.style.display = 'none'; }});
    };

    closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- 7. GSAP Scroll Animations ---
    gsap.registerPlugin(ScrollTrigger);

    function initScrollAnimations() {
        // Hero Elements
        gsap.from('.hero-title', { y: 40, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.1 });
        gsap.from('.hero-subtitle', { y: 20, opacity: 0, duration: 1, ease: "power3.out", delay: 0.3 });
        gsap.from('.hero-content .btn-primary', { y: 20, opacity: 0, duration: 1, ease: "power3.out", delay: 0.5 });

        // Sections Fade In
        const sections = document.querySelectorAll('.section-padding');
        sections.forEach(sec => {
            gsap.from(sec.querySelector('.container'), {
                scrollTrigger: {
                    trigger: sec,
                    start: "top 85%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Skills Progress Bars
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: '#skills',
                    start: "top 75%",
                },
                width: width,
                duration: 1.5,
                ease: "power3.out"
            });
        });

        // Timeline Animation
        const timelineItems = document.querySelectorAll('.timeline-item');
        gsap.from(timelineItems, {
            scrollTrigger: {
                trigger: '.timeline',
                start: "top 85%",
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });
    }

    // --- 8. Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(name && email && message) {
            formStatus.textContent = "Message sent successfully!";
            formStatus.style.color = "#28a745"; // Success green
            formStatus.style.marginTop = "15px";
            formStatus.style.fontWeight = "500";
            contactForm.reset();
            
            setTimeout(() => {
                gsap.to(formStatus, {opacity: 0, duration: 0.5, onComplete: () => {
                    formStatus.textContent = "";
                    formStatus.style.opacity = 1;
                }});
            }, 3000);
        }
    });
});