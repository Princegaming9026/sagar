document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');

    // Toggle mobile menu
    hamburgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        this.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if(navLinks.classList.contains('active') && !e.target.closest('.nav-links')) {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('open');
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active class
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            
            // Close mobile menu after click
            if(window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Responsive adjustments
    window.addEventListener('resize', function() {
        if(window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });

    // Initial setup
    function adjustLayout() {
        if(window.innerWidth <= 768) {
            const homeButton = document.querySelector('.nav-item:first-child');
            if(!navLinks.contains(homeButton)) {
                navLinks.prepend(homeButton);
            }
        }
    }
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});
