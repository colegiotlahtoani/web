// Funcionalidad para el dropdown (opcional, ya funciona con CSS)
document.addEventListener('DOMContentLoaded', function() {
    // Puedes agregar interacciones adicionales aquí
    console.log('Sitio cargado correctamente');
});

// Ejemplo: Galería interactiva (ampliable)
function initGallery() {
    const galleryItems = document.querySelectorAll('.grid-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            // Lógica para mostrar la sección correspondiente
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

initGallery();