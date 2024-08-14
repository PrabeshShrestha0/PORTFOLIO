// script.js
document.addEventListener('alpine:init', () => {
    Alpine.data('portfolio', () => ({
        skillProgress() {
            document.querySelectorAll('.skill-bar').forEach(skill => {
                const width = skill.getAttribute('data-skill');
                skill.querySelector('.progress').style.width = width + '%';
            });
        }
    }));
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
