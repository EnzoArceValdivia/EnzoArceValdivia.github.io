document.addEventListener("DOMContentLoaded", function() {
    const botonesVisualizarDoc = document.querySelectorAll(".open-word, .open-excel");

    // Función para abrir el documento de Word o Excel en una nueva pestaña
    function abrirDocumento(docSrc) {
        window.open(docSrc, "_blank");
    }

    // Agregar eventos a los botones "Visualizar Word" y "Visualizar Excel"
    botonesVisualizarDoc.forEach(function(boton) {
        boton.addEventListener("click", function() {
            // Obtener la ruta del documento asignada al botón actual
            var docSrc = this.getAttribute('data-src');
            // Abrir el documento de Word o Excel en una nueva pestaña
            abrirDocumento(docSrc);
        });
    });
});
