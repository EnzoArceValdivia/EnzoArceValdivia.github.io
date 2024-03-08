// document.addEventListener("DOMContentLoaded", function() {
//     const pdfContainer = document.getElementById("pdfContainer");
//     const botonesVisualizarPDF = document.querySelectorAll(".button");

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
//         embedElement.setAttribute("width", "130%"); // Ajuste de ancho
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

// document.addEventListener("DOMContentLoaded", function() {
//     const pdfContainer = document.getElementById("pdfContainer");
//     const botonesVisualizarDocumento = document.querySelectorAll(".button");

//     // Función para mostrar los botones "Visualizar Documento"
//     function mostrarBotonesVisualizarDocumento() {
//         botonesVisualizarDocumento.forEach(function(boton) {
//             boton.style.display = "inline-flex";
//         });
//     }

//     // Función para ocultar los botones "Visualizar Documento"
//     function ocultarBotonesVisualizarDocumento() {
//         botonesVisualizarDocumento.forEach(function(boton) {
//             boton.style.display = "none";
//         });
//     }

//     // Función para mostrar el documento y los botones "Cerrar" y "Descargar"
//     function mostrarDocumento(src, tipo) {
//         // Crear un elemento adecuado para mostrar el documento
//         var embedElement;
//         if (tipo === 'pdf') {
//             // Para PDF, usar un elemento <embed>
//             embedElement = document.createElement("embed");
//             embedElement.setAttribute("type", "application/pdf");
//         } else if (tipo === 'word') {
//             // Para Word, usar un elemento <iframe>
//             embedElement = document.createElement("iframe");
//             embedElement.setAttribute("type", "application/msword");
//         } else if (tipo === 'excel') {
//             // Para Excel, usar un elemento <iframe>
//             embedElement = document.createElement("iframe");
//             embedElement.setAttribute("type", "application/vnd.ms-excel");
//         }

//         // Establecer los atributos comunes del elemento
//         embedElement.setAttribute("src", src);
//         embedElement.setAttribute("width", "100%");
//         embedElement.setAttribute("height", "600px");
//         embedElement.style.paddingTop = "10px"; // Ajuste de padding-top

//         // Limpiar el contenido del contenedor de documento antes de agregar el nuevo documento
//         pdfContainer.innerHTML = "";
//         // Agregar el elemento adecuado al contenedor de documento
//         pdfContainer.appendChild(embedElement);

//         // Crear el botón "Cerrar"
//         var botonCerrar = document.createElement("button");
//         botonCerrar.textContent = "Cerrar";
//         botonCerrar.classList.add("button");
//         botonCerrar.classList.add("button-close");
//         botonCerrar.addEventListener("click", function() {
//             // Ocultar el contenedor de documento y los botones "Cerrar" y "Descargar"
//             pdfContainer.innerHTML = "";
//             mostrarBotonesVisualizarDocumento();
//             this.remove(); // Remover el botón "Cerrar" actual
//             botonDescargar.remove(); // Remover el botón "Descargar" actual
//         });

//         // Crear el botón "Descargar"
//         var botonDescargar = document.createElement("button");
//         botonDescargar.textContent = "Descargar";
//         botonDescargar.classList.add("button");
//         botonDescargar.classList.add("button-download");
//         botonDescargar.setAttribute("data-src", src);
//         botonDescargar.addEventListener("click", function() {
//             // Obtener la ruta del documento asignada al botón
//             var docSrc = this.getAttribute('data-src');
//             // Descargar el documento
//             window.open(docSrc, "_blank");
//         });

//         // Insertar los botones "Cerrar" y "Descargar" antes del contenedor de documento
//         pdfContainer.insertAdjacentElement("beforebegin", botonCerrar);
//         pdfContainer.insertAdjacentElement("beforebegin", botonDescargar);
//     }

//     // Agregar eventos a los botones "Visualizar Documento"
//     botonesVisualizarDocumento.forEach(function(boton) {
//         boton.addEventListener("click", function() {
//             // Ocultar los botones "Visualizar Documento" al hacer clic en uno
//             ocultarBotonesVisualizarDocumento();
//             // Obtener la ruta del documento asignada al botón actual
//             var docSrc = this.getAttribute('data-src');
//             // Obtener el tipo de documento
//             var tipo = this.getAttribute('data-tipo');
//             // Mostrar el documento y los botones "Cerrar" y "Descargar"
//             mostrarDocumento(docSrc, tipo);
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const pdfContainer = document.getElementById("pdfContainer");
    const botonesVisualizarDocumento = document.querySelectorAll(".button");

    // Función para mostrar los botones "Visualizar Documento"
    function mostrarBotonesVisualizarDocumento() {
        botonesVisualizarDocumento.forEach(function(boton) {
            boton.style.display = "inline-flex";
        });
    }

    // Función para ocultar los botones "Visualizar Documento"
    function ocultarBotonesVisualizarDocumento() {
        botonesVisualizarDocumento.forEach(function(boton) {
            boton.style.display = "none";
        });
    }

    // Función para mostrar el documento y los botones "Cerrar" y "Descargar"
    function mostrarDocumento(src, tipo) {
        var embedElement;

        if (tipo === 'pdf') {
            embedElement = document.createElement("embed");
            embedElement.setAttribute("type", "application/pdf");
        } else if (tipo === 'word') {
            // Visualizar documento de Word utilizando Google Docs
            window.open("https://docs.google.com/viewer?url=" + encodeURIComponent(src), "_blank");
            return;
        } else if (tipo === 'excel') {
            // Visualizar documento de Excel utilizando Google Sheets
            window.open("https://docs.google.com/viewer?url=" + encodeURIComponent(src), "_blank");
            return;
        }

        embedElement.setAttribute("src", src);
        embedElement.setAttribute("width", "100%");
        embedElement.setAttribute("height", "600px");
        embedElement.style.paddingTop = "10px";

        pdfContainer.innerHTML = "";
        pdfContainer.appendChild(embedElement);

        var botonCerrar = document.createElement("button");
        botonCerrar.textContent = "Cerrar";
        botonCerrar.classList.add("button");
        botonCerrar.classList.add("button-close");
        botonCerrar.addEventListener("click", function() {
            pdfContainer.innerHTML = "";
            mostrarBotonesVisualizarDocumento();
            this.remove();
            botonDescargar.remove();
        });

        var botonDescargar = document.createElement("button");
        botonDescargar.textContent = "Descargar";
        botonDescargar.classList.add("button");
        botonDescargar.classList.add("button-download");
        botonDescargar.setAttribute("data-src", src);
        botonDescargar.addEventListener("click", function() {
            var docSrc = this.getAttribute('data-src');
            window.open(docSrc, "_blank");
        });

        pdfContainer.insertAdjacentElement("beforebegin", botonCerrar);
        pdfContainer.insertAdjacentElement("beforebegin", botonDescargar);
    }

    // Agregar eventos a los botones "Visualizar Documento"
    botonesVisualizarDocumento.forEach(function(boton) {
        boton.addEventListener("click", function() {
            ocultarBotonesVisualizarDocumento();
            var docSrc = this.getAttribute('data-src');
            var tipo = this.getAttribute('data-tipo');
            mostrarDocumento(docSrc, tipo);
        });
    });
});
