const elements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); // reset animation
        }
    });
}, { threshold: 0.3 });

elements.forEach(el => observer.observe(el));