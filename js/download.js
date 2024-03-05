document.addEventListener("DOMContentLoaded", function() {
    const openModalButtons = document.querySelectorAll(".open-modal");
    const closeModalButton = document.getElementById("closeModal");
    const pdfModal = document.getElementById("pdfModal");
    const pdfContainer = document.getElementById("pdfContainer");

    openModalButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const pdfSrc = button.getAttribute("data-src");
            loadPDF(pdfSrc);
            pdfModal.classList.remove("modal--hidden");
        });
    });

    closeModalButton.addEventListener("click", function() {
        pdfModal.classList.add("modal--hidden");
        pdfContainer.innerHTML = ""; // Limpiar el contenido del contenedor de PDF al cerrar el modal
    });

    function loadPDF(pdfSrc) {
        pdfContainer.innerHTML = ""; // Limpiar el contenido del contenedor de PDF antes de cargar un nuevo documento
        PDFJS.getDocument(pdfSrc).promise.then(function(pdf) {
            pdf.getPage(1).then(function(page) {
                const scale = 1.5;
                const viewport = page.getViewport({ scale: scale });
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext).promise.then(function() {
                    pdfContainer.appendChild(canvas);
                });
            });
        });
    }
});
