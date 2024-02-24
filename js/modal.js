let btnlogin = document.querySelector("#btnLogin");
let btnClose = document.querySelector("#closeModal");
let modal = document.querySelector(".modal");

btnlogin.addEventListener("click", (event) => {
    modal.classList.toggle("modal--hidden")
} )

btnClose.addEventListener("click", (event) => {
    modal.classList.toggle("modal--hidden")
} )

let btnCopiado = document.querySelector("#btnLoginCopiado");
btnCopiado.addEventListener("click", (event) => {
    modal.classList.toggle("modal--hidden");
});