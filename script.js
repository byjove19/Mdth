      // Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const body = document.body;

        // Check for saved theme preference or use preferred color scheme
        const savedTheme = localStorage.getItem('theme') || 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        // Apply the saved theme
        if (savedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

        // Toggle theme on button click
        themeToggle.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.setAttribute('data-theme', 'light');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            }
        });

        // Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const sideMenu = document.getElementById('sideMenu');
        const cancelIcon = document.getElementById('cancelIcon');

        hamburger.addEventListener('click', () => {
            sideMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        cancelIcon.addEventListener('click', () => {
            sideMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.side-menu .nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                sideMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Testimonial Slider
        const testimonialSlider = document.querySelector('.testimonial-slider');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        let currentSlide = 0;

        function updateSlider() {
            testimonialSlider.scrollTo({
                left: currentSlide * 380,
                behavior: 'smooth'
            });
        }

        prevBtn.addEventListener('click', () => {
            currentSlide = Math.max(0, currentSlide - 1);
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            const maxSlides = Math.floor(testimonialSlider.scrollWidth / 380) - 1;
            currentSlide = Math.min(maxSlides, currentSlide + 1);
            updateSlider();
        });

        // Course Slider Indicators
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                document.querySelector('.indicator.active').classList.remove('active');
                indicator.classList.add('active');
                document.querySelector('.courses-slider').scrollTo({
                    left: index * 350,
                    behavior: 'smooth'
                });
            });
        });

        // Animate elements on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.icon-box, .course-card, .testimonial-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animated elements
        document.querySelectorAll('.icon-box, .course-card, .testimonial-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
  