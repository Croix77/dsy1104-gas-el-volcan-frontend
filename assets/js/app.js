const productos = [
    {
        codigo: "CL001",
        nombre: "Cilindro GLP 5 kg",
        categoria: "Cilindros de Gas",
        descripcion: "Ideal para cocina y calefacción pequeña.",
        descripcionLarga:
            "Cilindro de gas licuado de petróleo de 5 kg, pensado para hogares de bajo consumo. Perfecto para cocina, calefacción pequeña o artefactos de uso ocasional. Fabricado bajo normativa vigente y con válvula de seguridad.",
        precio: 6500,
        stock: 80,
        stockCritico: 10,
        imagen: "assets/img/gas-5kg.png"
    },
    {
        codigo: "CL002",
        nombre: "Cilindro GLP 11 kg",
        categoria: "Cilindros de Gas",
        descripcion: "Cilindro estándar para el hogar.",
        descripcionLarga:
            "El cilindro más utilizado en los hogares chilenos. Con 11 kg de capacidad es ideal para el consumo diario de una familia promedio, incluyendo cocina y calefacción. Compatible con reguladores estándar.",
        precio: 12000,
        stock: 200,
        stockCritico: 20,
        imagen: "assets/img/gas-11kg.png"
    },
    {
        codigo: "CL003",
        nombre: "Cilindro GLP 15 kg",
        categoria: "Cilindros de Gas",
        descripcion: "Mayor capacidad para hogares de alto consumo.",
        descripcionLarga:
            "Cilindro de mayor capacidad, recomendado para hogares con alto consumo o locales pequeños. Con 15 kg de gas licuado se reduce la frecuencia de recargas y es ideal para calefacción central o varios artefactos simultáneos.",
        precio: 16000,
        stock: 90,
        stockCritico: 15,
        imagen: "assets/img/gas-15kg.png"
    }
];

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const contadorCarrito = document.querySelector("#contador-carrito");

    if (!contadorCarrito) {
        return;
    }

    const cantidadTotal = carrito.reduce(function (total, producto) {
        return total + producto.cantidad;
    }, 0);

    contadorCarrito.textContent = cantidadTotal;
}

function agregarAlCarrito(codigo) {
    const productoSeleccionado = productos.find(
        (producto) => producto.codigo === codigo
    );

    if (!productoSeleccionado) {
        return;
    }

    const productoEnCarrito = carrito.find(
        (producto) => producto.codigo === codigo
    );

    if (productoEnCarrito) {
        if (productoEnCarrito.cantidad < productoSeleccionado.stock) {
            productoEnCarrito.cantidad++;
        }
    } else {
        carrito.push({
            codigo: productoSeleccionado.codigo,
            nombre: productoSeleccionado.nombre,
            descripcion: productoSeleccionado.descripcion,
            precio: productoSeleccionado.precio,
            imagen: productoSeleccionado.imagen,
            cantidad: 1
        });
    }

    guardarCarrito();
}

function mostrarProductos() {
    const listaProductos = document.querySelector("#lista-productos");

    if (!listaProductos) {
        return;
    }

    listaProductos.innerHTML = "";

    for (const producto of productos) {
        listaProductos.innerHTML += `
            <article class="tarjeta-producto">
                <a
                    class="enlace-detalle"
                    href="detalle-producto.html?codigo=${producto.codigo}"
                    aria-label="Ver detalle de ${producto.nombre}"
                >
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h2>${producto.nombre}</h2>
                    <p>${producto.descripcion}</p>
                    <p class="precio">$${producto.precio.toLocaleString("es-CL")}</p>
                </a>
                <button
                    type="button"
                    class="boton-agregar"
                    data-codigo="${producto.codigo}"
                >
                    Añadir al carrito
                </button>
            </article>
        `;
    }
}

function mostrarDetalleProducto() {
    const zonaDetalle = document.querySelector("#detalle-producto");

    if (!zonaDetalle) {
        return;
    }

    const parametros = new URLSearchParams(window.location.search);
    const codigo = parametros.get("codigo");
    const producto = productos.find((item) => item.codigo === codigo);

    if (!producto) {
        zonaDetalle.innerHTML = `
            <p class="mensaje-aviso">
                No encontramos el producto solicitado.
            </p>
            <a href="productos.html" class="boton">Volver al catálogo</a>
        `;
        return;
    }

    const stockInsuficiente = producto.stock === 0 || producto.stock <= 0;

    zonaDetalle.innerHTML = `
        <article class="detalle-producto">
            <div class="detalle-producto-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="detalle-producto-info">
                <p class="categoria">${producto.categoria}</p>
                <h1>${producto.nombre}</h1>
                <p class="precio">$${producto.precio.toLocaleString("es-CL")}</p>
                <p class="descripcion-larga">${producto.descripcionLarga}</p>

                <div class="detalle-stock">
                    ${
                        stockInsuficiente
                            ? `<p class="alerta-stock">Producto agotado por el momento.</p>`
                            : `<p>Stock disponible: ${producto.stock} unidades</p>`
                    }
                    ${
                        producto.stock > 0 && producto.stock <= producto.stockCritico
                            ? `<p class="alerta-stock-critico">¡Quedan pocas unidades!</p>`
                            : ""
                    }
                </div>

                <button
                    type="button"
                    class="boton-agregar"
                    data-codigo="${producto.codigo}"
                    ${stockInsuficiente ? "disabled" : ""}
                >
                    Añadir al carrito
                </button>

                <a href="productos.html" class="enlace-volver">&larr; Volver al catálogo</a>
            </div>
        </article>
    `;
}

function obtenerTotalCarrito() {
    return carrito.reduce(function (total, producto) {
        return total + producto.precio * producto.cantidad;
    }, 0);
}

function mostrarCarrito() {
    const zonaCarrito = document.querySelector("#contenido-carrito");
    const zonaResumen = document.querySelector("#resumen-carrito");
    const carritoVacio = document.querySelector("#carrito-vacio");

    if (!zonaCarrito) {
        return;
    }

    const tieneProductos = carrito.length > 0;

    if (carritoVacio) {
        carritoVacio.style.display = tieneProductos ? "none" : "block";
    }
    if (zonaResumen) {
        zonaResumen.style.display = tieneProductos ? "block" : "none";
    }

    if (!tieneProductos) {
        zonaCarrito.innerHTML = "";
        return;
    }

    zonaCarrito.innerHTML = "";

    for (const producto of carrito) {
        zonaCarrito.innerHTML += `
            <article class="fila-carrito">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="info-fila">
                    <h2>${producto.nombre}</h2>
                    <p>$${producto.precio.toLocaleString("es-CL")} c/u</p>
                </div>
                <div class="cantidad-carrito">
                    <button
                        type="button"
                        class="boton-cantidad"
                        data-codigo="${producto.codigo}"
                        data-accion="restar"
                        aria-label="Reducir cantidad de ${producto.nombre}"
                    >&minus;</button>
                    <span data-rol="cantidad">${producto.cantidad}</span>
                    <button
                        type="button"
                        class="boton-cantidad"
                        data-codigo="${producto.codigo}"
                        data-accion="sumar"
                        aria-label="Aumentar cantidad de ${producto.nombre}"
                    >+</button>
                </div>
                <p class="precio subtotal-fila">
                    $${(producto.precio * producto.cantidad).toLocaleString("es-CL")}
                </p>
                <button
                    type="button"
                    class="boton-quitar"
                    data-codigo="${producto.codigo}"
                    aria-label="Quitar ${producto.nombre} del carrito"
                >Quitar</button>
            </article>
        `;
    }

    const subtotal = document.querySelector("#subtotal-carrito");
    const total = document.querySelector("#total-carrito");

    if (subtotal) {
        subtotal.textContent = "$" + obtenerTotalCarrito().toLocaleString("es-CL");
    }
    if (total) {
        total.textContent = "$" + obtenerTotalCarrito().toLocaleString("es-CL");
    }
}

function cambiarCantidad(codigo, accion) {
    const productoEnCarrito = carrito.find((producto) => producto.codigo === codigo);
    const productoCatalogo = productos.find((producto) => producto.codigo === codigo);

    if (!productoEnCarrito) {
        return;
    }

    if (accion === "restar") {
        productoEnCarrito.cantidad--;
        if (productoEnCarrito.cantidad <= 0) {
            const indice = carrito.indexOf(productoEnCarrito);
            carrito.splice(indice, 1);
        }
    } else if (accion === "sumar") {
        if (!productoCatalogo || productoEnCarrito.cantidad < productoCatalogo.stock) {
            productoEnCarrito.cantidad++;
        }
    }

    guardarCarrito();
    mostrarCarrito();
}

function quitarDelCarrito(codigo) {
    const indice = carrito.findIndex((producto) => producto.codigo === codigo);

    if (indice !== -1) {
        carrito.splice(indice, 1);
        guardarCarrito();
        mostrarCarrito();
    }
}

function vaciarCarrito() {
    carrito.length = 0;
    guardarCarrito();
    mostrarCarrito();
}

const listaProductos = document.querySelector("#lista-productos");

if (listaProductos) {
    listaProductos.addEventListener("click", function (event) {
        const boton = event.target.closest(".boton-agregar");
        if (!boton) {
            return;
        }
        agregarAlCarrito(boton.dataset.codigo);
    });
}

const zonaDetalle = document.querySelector("#detalle-producto");

if (zonaDetalle) {
    zonaDetalle.addEventListener("click", function (event) {
        const boton = event.target.closest(".boton-agregar");
        if (!boton) {
            return;
        }
        agregarAlCarrito(boton.dataset.codigo);
    });
}

const contenidoCarrito = document.querySelector("#contenido-carrito");

if (contenidoCarrito) {
    contenidoCarrito.addEventListener("click", function (event) {
        const botonCantidad = event.target.closest(".boton-cantidad");

        if (botonCantidad) {
            cambiarCantidad(botonCantidad.dataset.codigo, botonCantidad.dataset.accion);
            return;
        }

        const botonQuitar = event.target.closest(".boton-quitar");

        if (botonQuitar) {
            quitarDelCarrito(botonQuitar.dataset.codigo);
        }
    });
}

const botonVaciar = document.querySelector("#boton-vaciar");

if (botonVaciar) {
    botonVaciar.addEventListener("click", vaciarCarrito);
}

mostrarProductos();
mostrarDetalleProducto();
mostrarCarrito();
actualizarContadorCarrito();
