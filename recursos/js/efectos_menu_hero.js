function esEscritorio() {
    return window.innerWidth > 800;
}

// 1️⃣ Menú sticky con sombra elegante
window.addEventListener("scroll", () => {
    if (!esEscritorio()) return;

    const menu = document.querySelector(".menu");
    if (window.scrollY > 50) {
        menu.classList.add("menu-sombra");
    } else {
        menu.classList.remove("menu-sombra");
    }
});

// 2️⃣ Animación de entrada del hero (igual que antes)
document.addEventListener("DOMContentLoaded", () => {
    const titular = document.querySelector(".titular");
    titular.classList.add("animar-titular");
});

// 3️⃣ Parallax elegante (desplazamiento y opacidad)
window.addEventListener("scroll", () => {
    if (!esEscritorio()) return;

    const header = document.querySelector("header");
    let scrollY = window.scrollY;

    // Movimiento sutil de la imagen (parallax)
    header.style.backgroundPositionY = `${scrollY * 0.4}px`;

    // Opacidad para un efecto moderno
    header.style.opacity = `${1 - scrollY / 800}`;
});
