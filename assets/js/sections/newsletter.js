// Lógica específica para la sección de newsletter

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Formulario enviado exitosamente!');
        });
    });
});
