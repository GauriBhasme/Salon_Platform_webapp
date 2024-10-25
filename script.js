window.addEventListener('scroll', () => {
    const section = document.getElementById('scroll-section');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    }
});
