document.addEventListener('DOMContentLoaded', function() {
    const dynamicPages = [
        { url: 'about.html', text: 'About Us' },
        { url: 'contact.html', text: 'Contact Us' }
    ];

    const navLinks = document.querySelector('.nav-links');
    const dropdownSection = document.querySelector('.dropdown-section');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    // Initialize navigation
    function initNavigation() {
        // Add dynamic pages to navigation
        dynamicPages.forEach(page => {
            const navItem = createNavItem(page);
            navLinks.appendChild(navItem);
        });
        adjustNavigation();
    }

    // Create navigation item
    function createNavItem(page) {
        const item = document.createElement('a');
        item.href = page.url;
        item.className = 'nav-item';
        item.textContent = page.text;
        return item;
    }

    // Responsive adjustment
    function adjustNavigation() {
        const header = document.querySelector('.header');
        const logoWidth = document.querySelector('.logo').offsetWidth;
        const availableSpace = header.offsetWidth - logoWidth - 100;

        // Clear dropdown
        dropdownSection.innerHTML = '';

        // Check which items fit
        let usedWidth = navLinks.offsetWidth;
        Array.from(navLinks.children).forEach((item, index) => {
            if(index === 0) return; // Skip Home button
            
            if(usedWidth > availableSpace) {
                dropdownSection.prepend(item.cloneNode(true));
                navLinks.removeChild(item);
            }
        });

        // Always show hamburger menu on mobile
        if(window.innerWidth <= 768) {
            Array.from(navLinks.children).forEach((item, index) => {
                if(index !== 0) { // Keep only Home button
                    dropdownSection.prepend(item.cloneNode(true));
                    navLinks.removeChild(item);
                }
            });
        }
    }

    // Toggle dropdown
    hamburgerIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.dropdown-content').style.display = 
            document.querySelector('.dropdown-content').style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if(!e.target.closest('.hamburger-menu')) {
            document.querySelector('.dropdown-content').style.display = 'none';
        }
    });

    window.addEventListener('resize', adjustNavigation);
    initNavigation();
});
