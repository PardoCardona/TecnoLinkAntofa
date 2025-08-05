// recursos/js/modal.js
const productos = document.querySelectorAll('.producto');
const modal = document.getElementById('modal-producto');
const cerrar = document.querySelector('.cerrar');
const modalImagen = document.getElementById('modal-imagen');
const modalNombre = document.getElementById('modal-nombre');
const modalDescripcion = document.getElementById('modal-descripcion');
const modalPrecio = document.getElementById('modal-precio');

productos.forEach(producto => {
    producto.addEventListener('click', () => {
        modalImagen.src = producto.querySelector('img').src;
        modalNombre.textContent = producto.dataset.nombre;
        modalDescripcion.textContent = producto.dataset.descripcion;
        modalPrecio.textContent = producto.dataset.precio;
        modal.style.display = 'flex';
    });
});

cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
