document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.getElementById('contactForm');
    const downloadCV = document.getElementById('downloadCV');

    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }

    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    function handleContactForm(e) {
        e.preventDefault();
        contactForm.reset();
    }

    function handleDownloadCV() {
        const link = document.createElement('a');
        link.href = 'assets/curriculo.pdf';
        link.download = 'curriculo.pdf';
        link.click();
    }

    themeToggle.addEventListener('click', toggleTheme);
    hamburger.addEventListener('click', toggleMobileMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    contactForm.addEventListener('submit', handleContactForm);
    downloadCV.addEventListener('click', (e) => {
        e.preventDefault();
        handleDownloadCV();
    });

    window.addEventListener('scroll', updateActiveNavLink);
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = document.body.getAttribute('data-theme') === 'dark'
                ? 'rgba(15, 23, 42, 0.98)'
                : 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = document.body.getAttribute('data-theme') === 'dark'
                ? 'rgba(15, 23, 42, 0.95)'
                : 'rgba(255, 255, 255, 0.95)';
        }
    });

    initTheme();
    updateActiveNavLink();
});