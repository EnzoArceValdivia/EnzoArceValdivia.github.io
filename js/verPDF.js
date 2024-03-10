document.addEventListener("DOMContentLoaded", function() {
    const botonesVisualizarPDF = document.querySelectorAll(".open-pdf");

    // Función para redirigir a la página del visor de PDF con el PDF especificado
    function redirigirAVisorPDF(pdfSrc) {
        window.open("visorpdf.html?pdf=" + encodeURIComponent(pdfSrc), "_blank");
    }

    // Agregar eventos a los botones "Visualizar PDF"
    botonesVisualizarPDF.forEach(function(boton) {
        boton.addEventListener("click", function() {
            // Obtener la ruta del PDF asignada al botón actual
            var pdfSrc = this.getAttribute('data-src');
            // Redirigir a la página del visor de PDF con el PDF especificado
            redirigirAVisorPDF(pdfSrc);
        });
    });
});
