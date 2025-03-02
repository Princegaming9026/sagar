// Splash Screen
setTimeout(() => {
    document.querySelector('.splash-screen').style.display = 'none';
}, 2500);

// Hamburger Menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
});

// More Button
const moreBtn = document.querySelector('.more-btn');
const hiddenContent = document.querySelector('.hidden-content');
moreBtn.addEventListener('click', () => {
    hiddenContent.classList.toggle('active');
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Section Navigation
document.querySelectorAll('.section-link').forEach(btn => {
    btn.addEventListener('click', function() {
        const sectionId = this.dataset.section;
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button Hover Effects
document.querySelectorAll('.content-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
