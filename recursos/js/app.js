// recursos/js/app.js
const botones = document.querySelectorAll('.btn-whatsapp');
const numeroWhatsApp = '56989149422'; // Tu número sin el +

botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();

        const producto = boton.closest('.producto');
        const nombre = producto.dataset.nombre;
        const precio = producto.dataset.precio;

        
        const mensaje = `[TecnoLink Antofa] Hola, quiero comprar el producto: ${nombre} (${precio}). ¿Está disponible?`;

        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, '_blank');
    });
});
