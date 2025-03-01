document.addEventListener('DOMContentLoaded', function() {
    const navItems = [
        { id: 'home', text: 'Home' },
        { id: 'about', text: 'About Us' },
        { id: 'contact', text: 'Contact Us' },
        { id: 'privacy', text: 'Privacy Policy' },
        { id: 'terms', text: 'Terms & Conditions' }
    ];

    const header = document.querySelector('.header');
    const navLinks = document.querySelector('.nav-links');
    const hamburgerDropdown = document.querySelector('.dropdown-content');
    const pages = document.querySelectorAll('.page');
    
    // Initialize navigation
    function initNavigation() {
        // Clear existing items
        navLinks.innerHTML = '';
        hamburgerDropdown.innerHTML = '';

        // Create all nav items
        navItems.forEach(item => {
            const link = document.createElement('a');
            link.href = `#${item.id}`;
            link.className = 'nav-item';
            link.textContent = item.text;
            link.dataset.target = item.id;
            
            if(item.id === 'home') {
                link.classList.add('active');
                navLinks.appendChild(link);
            } else {
                hamburgerDropdown.appendChild(link);
            }
        });

        adjustNavigation();
    }

    // Responsive navigation adjustment
    function adjustNavigation() {
        const headerWidth = header.offsetWidth;
        const logoWidth = document.querySelector('.logo').offsetWidth;
        const hamburgerWidth = document.querySelector('.hamburger-menu').offsetWidth;
        const availableSpace = headerWidth - logoWidth - hamburgerWidth - 80; // 80px for padding

        let usedSpace = 0;
        const itemsToMove = [];
        
        Array.from(navLinks.children).forEach((item, index) => {
            if(index === 0) return; // Skip Home item
            usedSpace += item.offsetWidth;
        });

        Array.from(hamburgerDropdown.children).reverse().forEach(item => {
            const itemWidth = item.offsetWidth;
            if(usedSpace + itemWidth < availableSpace) {
                usedSpace += itemWidth;
                itemsToMove.push(item);
            }
        });

        itemsToMove.forEach(item => {
            hamburgerDropdown.removeChild(item);
            navLinks.insertBefore(item, navLinks.lastElementChild);
        });
    }

    // Page switching logic
    function switchPage(targetId) {
        pages.forEach(page => {
            page.classList.remove('active');
            if(page.id === targetId) page.classList.add('active');
        });
        
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if(item.dataset.target === targetId) item.classList.add('active');
        });
    }

    // Event listeners
    window.addEventListener('resize', adjustNavigation);
    
    document.addEventListener('click', function(e) {
        if(e.target.closest('.nav-item')) {
            e.preventDefault();
            const targetId = e.target.dataset.target;
            switchPage(targetId);
        }
    });

    // Initial setup
    initNavigation();
    switchPage('home');
});
