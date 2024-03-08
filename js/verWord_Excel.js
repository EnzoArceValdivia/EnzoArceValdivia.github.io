document.addEventListener("DOMContentLoaded", function() {
    const botonesVisualizarDoc = document.querySelectorAll(".open-word, .open-excel");

    // Función para abrir el documento de Word o Excel en Google Docs Viewer
    function abrirDocumento(docSrc) {
        // Generar la URL del documento en Google Docs Viewer
        var viewerUrl = "https://docs.google.com/viewer?url=" + encodeURIComponent(docSrc);
        // Abrir el documento en una nueva pestaña
        window.open(viewerUrl, "_blank");
    }

    // Agregar eventos a los botones "Visualizar Word" y "Visualizar Excel"
    botonesVisualizarDoc.forEach(function(boton) {
        boton.addEventListener("click", function() {
            // Obtener la ruta del documento asignada al botón actual
            var docSrc = this.getAttribute('data-src');
            // Abrir el documento de Word o Excel en Google Docs Viewer
            abrirDocumento(docSrc);
        });
    });
});
