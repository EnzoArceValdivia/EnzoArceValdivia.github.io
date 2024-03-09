// document.addEventListener("DOMContentLoaded", function() {
//     const pdfContainer = document.getElementById("pdfContainer");
//     const botonesVisualizarPDF = document.querySelectorAll(".open-pdf");

//     // Función para mostrar los botones "Visualizar PDF"
//     function mostrarBotonesVisualizarPDF() {
//         botonesVisualizarPDF.forEach(function(boton) {
//             boton.style.display = "inline-flex";
//         });
//     }

//     // Función para ocultar los botones "Visualizar PDF"
//     function ocultarBotonesVisualizarPDF() {
//         botonesVisualizarPDF.forEach(function(boton) {
//             boton.style.display = "none";
//         });
//     }

//     // Función para mostrar el PDF y los botones "Cerrar" y "Descargar"
//     function mostrarPDF(pdfSrc) {
//         // Crear un elemento <embed> para mostrar el PDF
//         var embedElement = document.createElement("embed");
//         embedElement.setAttribute("src", pdfSrc);
//         embedElement.setAttribute("type", "application/pdf");
//         embedElement.setAttribute("width", "100%"); // Ajuste de ancho
//         embedElement.setAttribute("height", "600px");
//         embedElement.style.paddingTop = "10px"; // Ajuste de padding-top
//         // Limpiar el contenido del contenedor de PDF antes de agregar el nuevo PDF
//         pdfContainer.innerHTML = "";
//         // Agregar el elemento <embed> al contenedor de PDF
//         pdfContainer.appendChild(embedElement);

//         // Crear el botón "Cerrar"
//         var botonCerrar = document.createElement("button");
//         botonCerrar.textContent = "Cerrar";
//         botonCerrar.classList.add("button");
//         botonCerrar.classList.add("button-close");
//         botonCerrar.addEventListener("click", function() {
//             // Ocultar el contenedor de PDF y los botones "Cerrar" y "Descargar"
//             pdfContainer.innerHTML = "";
//             mostrarBotonesVisualizarPDF();
//             this.remove(); // Remover el botón "Cerrar" actual
//             botonDescargar.remove(); // Remover el botón "Descargar" actual
//         });

//         // Crear el botón "Descargar"
//         var botonDescargar = document.createElement("button");
//         botonDescargar.textContent = "Descargar";
//         botonDescargar.classList.add("button");
//         botonDescargar.classList.add("button-download");
//         botonDescargar.setAttribute("data-src", pdfSrc);
//         botonDescargar.addEventListener("click", function() {
//             // Obtener la ruta del PDF asignada al botón
//             var pdfSrc = this.getAttribute('data-src');
//             // Descargar el PDF
//             window.open(pdfSrc, "_blank");
//         });

//         // Insertar los botones "Cerrar" y "Descargar" antes del contenedor de PDF
//         pdfContainer.insertAdjacentElement("beforebegin", botonCerrar);
//         pdfContainer.insertAdjacentElement("beforebegin", botonDescargar);
//     }

//     // Agregar eventos a los botones "Visualizar PDF"
//     botonesVisualizarPDF.forEach(function(boton) {
//         boton.addEventListener("click", function() {
//             // Ocultar los botones "Visualizar PDF" al hacer clic en uno
//             ocultarBotonesVisualizarPDF();
//             // Obtener la ruta del PDF asignada al botón actual
//             var pdfSrc = this.getAttribute('data-src');
//             // Mostrar el PDF y los botones "Cerrar" y "Descargar"
//             mostrarPDF(pdfSrc);
//         });
//     });
// });


// ///////////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function() {
//     const pdfContainer = document.getElementById("pdfContainer");
//     const botonesVisualizarPDF = document.querySelectorAll(".open-pdf");

//     // Función para mostrar los botones "Visualizar PDF"
//     function mostrarBotonesVisualizarPDF() {
//         botonesVisualizarPDF.forEach(function(boton) {
//             boton.style.display = "inline-flex";
//         });
//     }

//     // Función para ocultar los botones "Visualizar PDF"
//     function ocultarBotonesVisualizarPDF() {
//         botonesVisualizarPDF.forEach(function(boton) {
//             boton.style.display = "none";
//         });
//     }

//     // Función para mostrar el PDF y el botón "Cerrar"
//     function mostrarPDF(pdfSrc) {
//         // Crear un elemento <embed> para mostrar el PDF
//         var embedElement = document.createElement("embed");
//         embedElement.setAttribute("src", pdfSrc);
//         embedElement.setAttribute("type", "application/pdf");
//         embedElement.setAttribute("width", "100%"); // Ajuste de ancho
//         embedElement.setAttribute("height", "600px");
//         embedElement.style.paddingTop = "10px"; // Ajuste de padding-top
//         // Limpiar el contenido del contenedor de PDF antes de agregar el nuevo PDF
//         pdfContainer.innerHTML = "";
//         // Agregar el elemento <embed> al contenedor de PDF
//         pdfContainer.appendChild(embedElement);

//         // Crear el botón "Cerrar"
//         var botonCerrar = document.createElement("button");
//         botonCerrar.textContent = "Cerrar";
//         botonCerrar.classList.add("button");
//         botonCerrar.classList.add("button-close");
//         botonCerrar.addEventListener("click", function() {
//             // Ocultar el contenedor de PDF y mostrar los botones "Visualizar PDF"
//             pdfContainer.innerHTML = "";
//             mostrarBotonesVisualizarPDF();
//             this.remove(); // Remover el botón "Cerrar" actual
//         });

//         // Insertar el botón "Cerrar" antes del contenedor de PDF
//         pdfContainer.insertAdjacentElement("beforebegin", botonCerrar);
//     }

//     // Agregar eventos a los botones "Visualizar PDF"
//     botonesVisualizarPDF.forEach(function(boton) {
//         boton.addEventListener("click", function() {
//             // Ocultar los botones "Visualizar PDF" al hacer clic en uno
//             ocultarBotonesVisualizarPDF();
//             // Obtener la ruta del PDF asignada al botón actual
//             var pdfSrc = this.getAttribute('data-src');
//             // Mostrar el PDF y el botón "Cerrar"
//             mostrarPDF(pdfSrc);
//         });
//     });
// });


/////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const botonesVisualizarPDF = document.querySelectorAll(".open-pdf");

    // Función para abrir el PDF en una nueva pestaña
    function abrirPDFenNuevaPestana(pdfSrc) {
        window.open(pdfSrc, "_blank");
    }

    // Agregar eventos a los botones "Visualizar PDF"
    botonesVisualizarPDF.forEach(function(boton) {
        boton.addEventListener("click", function() {
            // Obtener la ruta del PDF asignada al botón actual
            var pdfSrc = this.getAttribute('data-src');
            // Abrir el PDF en una nueva pestaña
            abrirPDFenNuevaPestana(pdfSrc);
        });
    });
});
