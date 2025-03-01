// Sticky Header Functionality
window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});

// Navigation Logic
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.nav-button').forEach(btn => 
            btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Hamburger Menu Logic
document.querySelector('.hamburger-menu').addEventListener('click', function(e) {
    e.stopPropagation();
    this.querySelector('.dropdown-content').style.display = 
        this.querySelector('.dropdown-content').style.display === 'block' ? 'none' : 'block';
});
