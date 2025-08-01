// Lógica específica para la sección de FAQ
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

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq-question').forEach(q => {
        q.onclick = function() { toggleFaq(this); };
    });
});
