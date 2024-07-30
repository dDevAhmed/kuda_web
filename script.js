// testimonail carousel
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.testimonial-container');
    const cards = carousel.children;
    const cardCount = cards.length;

    for (let i = 0; i < cardCount; i++) {
        const clone = cards[i].cloneNode(true);
        carousel.appendChild(clone);
    }
});