// Animación de entrada para el título principal
window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('header h1');
    if (title) {
        title.style.opacity = 0;
        title.style.transform = 'translateY(-30px)';
        setTimeout(() => {
            title.style.transition = 'opacity 1s, transform 1s';
            title.style.opacity = 1;
            title.style.transform = 'translateY(0)';
        }, 200);
    }
});

