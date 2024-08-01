document.addEventListener('DOMContentLoaded', () => {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const cards = testimonialContainer.children;
    const cardCount = cards.length;

    for (let i = 0; i < cardCount; i++) {
        const clone = cards[i].cloneNode(true);
        testimonial - container.appendChild(clone);
    }

});
// nav dropdown

let nav = document.querySelector('nav');
let navOverlay = document.getElementById('nav-overlay');
let dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    let dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdown.addEventListener('mouseenter', () => {
        dropdownContent.style.display = 'block';
        navOverlay.style.display = 'block';
        nav.style.backgroundColor = 'rgba(64, 25, 109, 0)'; // Ensure it's transparent or use a color if needed
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdownContent.style.display = 'none';
        navOverlay.style.display = 'none';
        nav.style.backgroundColor = '#fff'; // Reset to original color
    });
});
