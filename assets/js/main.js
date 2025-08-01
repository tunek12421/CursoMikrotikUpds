function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const isOpen = answer.style.display === 'block';
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'none';
    });
    document.querySelectorAll('.faq-question').forEach(question => {
        question.classList.remove('active');
    });
    if (!isOpen) {
        answer.style.display = 'block';
        element.classList.add('active');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Formulario enviado exitosamente!');
    });
});

document.querySelectorAll('.btn').forEach(btn => {
    if (btn.textContent.includes('Añadir al carrito')) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.textContent = '✅ Añadido';
            this.style.background = '#4caf50';
            setTimeout(() => {
                this.textContent = '📋 Añadir al carrito';
                this.style.background = '';
            }, 2000);
        });
    }
});
