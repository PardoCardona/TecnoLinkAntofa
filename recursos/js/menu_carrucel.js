// recursos/js/ui.js

// Inicializar el carrusel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 4 }
        }
    });

    // Menú hamburguesa responsive
    $('.menu-icon').click(function() {
        $('header nav').slideToggle();
    });
});

const menuToggle = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  menuToggle.querySelector('i').classList.toggle('fa-bars');
  menuToggle.querySelector('i').classList.toggle('fa-times');
});

