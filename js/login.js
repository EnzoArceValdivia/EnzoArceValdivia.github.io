// Definir usuarios y contraseñas
const users = [
    { user: "admin", pass: "pass" },
    { user: "carmelocusco", pass: "carmelo2024" }
    // Agrega más usuarios si es necesario
];

// Definir usuarios y sus páginas correspondientes
const userPages = {
    "admin": "/clients/base/componentes/componentes.html",
    "carmelocusco": "/clients/y2u8f5r7/componentes/componentes.html"
    // Agrega más usuarios y páginas si es necesario
};

// Obtener el formulario de inicio de sesión
const loginForm = document.getElementById("formlogin");

// Agregar un evento de escucha para el envío del formulario
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de usuario y contraseña ingresados por el usuario
    const user = document.getElementById("inputUser").value;
    const pass = document.getElementById("inputPass").value;

    // Verificar si las credenciales coinciden con algún usuario
    const userPage = userPages[user];

    // Si se encuentra un usuario con las credenciales correctas, redirigirlo a la página correspondiente
    // de lo contrario, mostrar un mensaje de error
    const userObj = users.find(u => u.user === user && u.pass === pass);
    if (userPage && userObj) {
        window.location.href = userPage;
    } else {
        alert("¡Credenciales incorrectas! Inténtalo de nuevo.");
    }
});
