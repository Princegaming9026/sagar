// Splash Screen
setTimeout(() => {
    document.querySelector('.splash-screen').style.display = 'none';
}, 2500);

// Hamburger Menu Toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target)) {
        hamburgerMenu.classList.remove('active');
    }
});

// Responsive menu handling
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburgerMenu.classList.remove('active');
    }
});
