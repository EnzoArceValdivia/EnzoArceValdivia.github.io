// document.addEventListener("DOMContentLoaded", function() {
//     const botonesVisualizarPDF = document.querySelectorAll(".open-pdf");

//     // Función para redirigir a la página del visor de PDF con el PDF especificado
//     function redirigirAVisorPDF(pdfSrc) {
//         window.open("visorpdf.html?pdf=" + encodeURIComponent(pdfSrc), "_blank");
//     }

//     // Agregar eventos a los botones "Visualizar PDF"
//     botonesVisualizarPDF.forEach(function(boton) {
//         boton.addEventListener("click", function() {
//             // Obtener la ruta del PDF asignada al botón actual
//             var pdfSrc = this.getAttribute('data-src');
//             // Redirigir a la página del visor de PDF con el PDF especificado
//             redirigirAVisorPDF(pdfSrc);
//         });
//     });
// });
///////////////////////////

// document.addEventListener("DOMContentLoaded", function() {
//     const botonesVisualizarPDF = document.querySelectorAll(".open-pdf");

//     // Agregar eventos a los botones "Visualizar PDF"
//     botonesVisualizarPDF.forEach(function(boton) {
//         boton.addEventListener("click", function() {
//             // Obtener el nombre del PDF asignado al botón actual
//             var pdfName = this.getAttribute('data-src');
//             // Construir la URL del visorPDF.html con el nombre del PDF
//             var visorUrl = `visorPDF.html?pdf=${pdfName}`;
//             // Abrir el visor del PDF en una nueva pestaña
//             window.open(visorUrl, '_blank');
//         });
//     });
// });
//////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const botonesVisualizarPDF = document.querySelectorAll(".open-pdf");

    botonesVisualizarPDF.forEach(function(boton) {
        boton.addEventListener("click", function() {
            var pdfName = this.getAttribute('data-src');
            var visorUrl = `visorPDF.html?pdf=${pdfName}`;
            window.open(visorUrl, '_blank');
        });
    });
});
