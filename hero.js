// Hero Section Interactions
const actionBtn = document.querySelector('.action-button');
const infoCard = document.querySelector('.info-card');

// Desktop Hover Effect
actionBtn.addEventListener('mouseenter', () => {
    if(window.innerWidth > 768) {
        infoCard.style.display = 'block';
    }
});

// Mobile Click Effect
actionBtn.addEventListener('click', () => {
    if(window.innerWidth <= 768) {
        infoCard.style.display = infoCard.style.display === 'block' ? 'none' : 'block';
    }
});

// Hide Card on Mouse Leave
document.querySelector('.content-box').addEventListener('mouseleave', () => {
    if(window.innerWidth > 768) {
        infoCard.style.display = 'none';
    }
});
