document.addEventListener("DOMContentLoaded", function() {
    const openModalButtons = document.querySelectorAll(".open-modal");
    const closeModalButton = document.getElementById("closeModal");
    const pdfModal = document.getElementById("pdfModal");
    const pdfViewer = document.getElementById("pdfViewer");

    openModalButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Obtener la ruta del documento asociada al botón actual
            const pdfSrc = button.getAttribute("data-src");
            // Cambiar la URL del visor de PDF con la ruta del documento
            pdfViewer.src = pdfSrc;
            pdfModal.classList.remove("modal--hidden");
        });
    });

    closeModalButton.addEventListener("click", function() {
        pdfModal.classList.add("modal--hidden");
        // Detener la carga del PDF al cerrar el modal
        pdfViewer.src = "";
    });
});
