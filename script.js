document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger-menu');
    const navContainer = document.querySelector('.nav-container');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    hamburger.addEventListener('click', () => {
        navContainer.classList.toggle('active');
        dropdownMenu.style.display = navContainer.classList.contains('active') ? 'block' : 'none';
    });

    // More Button Interaction
    const moreButton = document.querySelector('.more-button');
    const infoBox = document.querySelector('.info-box');

    moreButton.addEventListener('click', () => {
        infoBox.style.display = infoBox.style.display === 'none' ? 'block' : 'none';
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.appear-animation').forEach((element) => {
        observer.observe(element);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Button Hover Effects
    document.querySelectorAll('.nav-button, .section-button').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'blue';
            button.style.borderColor = 'blue';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'transparent';
            button.style.borderColor = 'yellow';
        });
    });
});
