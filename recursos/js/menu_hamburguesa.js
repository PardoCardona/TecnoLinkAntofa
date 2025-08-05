document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.querySelector("nav");
    const iconBars = menuIcon.querySelector("i");

    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("menu-abierto");

        // Cambiar icono al abrir/cerrar
        if (nav.classList.contains("menu-abierto")) {
            iconBars.classList.remove("fa-bars");
            iconBars.classList.add("fa-times"); // X de cierre
        } else {
            iconBars.classList.remove("fa-times");
            iconBars.classList.add("fa-bars");
        }
    });
});
