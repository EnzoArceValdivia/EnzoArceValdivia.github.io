let btnlogin = document.querySelector("#btnLogin");
let btnClose = document.querySelector("#closeModal");
let modal = document.querySelector(".modal");

btnlogin.addEventListener("click", (event) => {// Cambia "pagina_destino.html"
    window.location.href = "clients/componentes/componentes.html";// Cambia "pagina_destino.html"
});

btnlogin.addEventListener("click", (event) => {
    modal.classList.toggle("modal--hidden")
} )

btnClose.addEventListener("click", (event) => {
    modal.classList.toggle("modal--hidden")
} )