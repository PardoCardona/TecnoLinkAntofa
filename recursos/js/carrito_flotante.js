document.addEventListener("DOMContentLoaded", () => {
    const botonesCarrito = document.querySelectorAll('.btn-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const vaciarCarrito = document.getElementById('vaciar-carrito');
    const finalizarWhatsApp = document.getElementById('finalizar-whatsapp');
    const numeroWhatsApp = '56989149422';
    const btnFlotante = document.getElementById('btn-flotante-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    const carritoDiv = document.getElementById('carrito');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        let total = 0;
        let cantidadTotal = 0;

        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio} (x${item.cantidad})`;
            listaCarrito.appendChild(li);
            total += item.precio * item.cantidad;
            cantidadTotal += item.cantidad;
        });

        totalCarrito.textContent = total.toLocaleString();
        contadorCarrito.textContent = cantidadTotal;
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    botonesCarrito.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const producto = e.target.closest('.producto');
            const id = producto.dataset.id;
            const nombre = producto.dataset.nombre;
            const precio = parseFloat(producto.dataset.precio);
            const imagen = producto.dataset.imagen;

            const existe = carrito.find(item => item.id === id);

            if (existe) {
                existe.cantidad++;
            } else {
                carrito.push({ id, nombre, precio, imagen, cantidad: 1 });
            }

            actualizarCarrito();
        });
    });

    vaciarCarrito.addEventListener('click', () => {
        carrito = [];
        actualizarCarrito();
    });

    finalizarWhatsApp.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert("Tu carrito está vacío");
            return;
        }

        let mensaje = "Hola, quiero comprar:\n";
        carrito.forEach(item => {
            mensaje += `${item.nombre} x${item.cantidad} - $${item.precio}\n`;
        });
        mensaje += `\nTotal: $${totalCarrito.textContent}`;

        window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`, '_blank');
    });

    // 🔹 Mostrar / Ocultar carrito con la burbuja
    btnFlotante.addEventListener('click', () => {
        if (carritoDiv.style.display === 'block' || carritoDiv.style.display === '') {
            carritoDiv.style.display = 'none';
        } else {
            carritoDiv.style.display = 'block';
        }
    });

    actualizarCarrito();
});
