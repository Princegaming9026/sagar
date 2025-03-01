document.addEventListener('DOMContentLoaded', function() {
    const dynamicLinks = [
        { url: 'about.html', text: 'About Us' },
        { url: 'contact.html', text: 'Contact Us' }
    ];

    const navLinks = document.querySelector('.nav-links');
    const hamburgerDropdown = document.querySelector('.dropdown-content');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    // Initialize dynamic navigation
    function initNavigation() {
        // Add dynamic links to navigation
        dynamicLinks.forEach(link => {
            const navItem = document.createElement('a');
            navItem.href = link.url;
            navItem.className = 'nav-item';
            navItem.textContent = link.text;
            navLinks.appendChild(navItem);
        });

        adjustNavigation();
    }

    // Responsive navigation adjustment
    function adjustNavigation() {
        const header = document.querySelector('.header');
        const logoWidth = document.querySelector('.logo').offsetWidth;
        const availableSpace = header.offsetWidth - logoWidth - 120; // 120px for hamburger and padding

        let usedSpace = 0;
        const itemsToMove = [];
        
        Array.from(navLinks.children).forEach((item, index) => {
            if(index === 0) return; // Skip Home button
            usedSpace += item.offsetWidth;
        });

        // Check which items need to move to dropdown
        dynamicLinks.forEach((link, index) => {
            const item = navLinks.children[index + 1]; // +1 to skip Home button
            if(usedSpace > availableSpace) {
                itemsToMove.push(item);
                usedSpace -= item.offsetWidth;
            }
        });

        // Move items to dropdown
        itemsToMove.reverse().forEach(item => {
            navLinks.removeChild(item);
            hamburgerDropdown.insertBefore(item, hamburgerDropdown.firstChild);
        });

        // Always show hamburger menu
        document.querySelector('.hamburger-menu').style.display = 'flex';
    }

    // Event listeners
    window.addEventListener('resize', adjustNavigation);
    hamburgerIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        if(!e.target.closest('.nav-links') && !e.target.closest('.hamburger-menu')) {
            navLinks.classList.remove('active');
        }
    });

    // Initial setup
    initNavigation();
});
