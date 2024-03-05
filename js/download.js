// Función para abrir el PDF en una ventana emergente
function abrirPDF(pdfSrc) {
    // Abre el PDF en una ventana emergente
    window.open(pdfSrc, "_blank", "width=800,height=600");
}

// Obtén todos los botones de descarga
var botonesDescarga = document.querySelectorAll(".button");

// Agrega un evento de clic a cada botón para llamar a la función abrirPDF
botonesDescarga.forEach(function(boton) {
    boton.addEventListener("click", function() {
        // Obtén la ruta del PDF asignada al botón actual
        var pdfSrc = this.getAttribute('data-src');
        // Llama a la función para abrir el PDF en una ventana emergente
        abrirPDF(pdfSrc);
    });
});
