// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {

    var contenedorAnimacion = document.getElementById('animacionFondo');

    // Ocultar el contenedor después de 10 segundos
    setTimeout(function() {
        contenedorAnimacion.style.opacity = '0';
        setTimeout(function() {
            contenedorAnimacion.style.display = 'none';
        }, 1000);  // Espera 1 segundo para que la transición de opacidad se complete antes de ocultar el contenedor
    }, 5000);  // 5 segundos

    

});