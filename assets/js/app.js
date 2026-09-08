const productos = [
    {
        codigo: "CL001",
        nombre: "Cilindro GLP 5 kg",
        categoria: "Cilindros de Gas",
        descripcion: "Para cocina y calefacción pequeña en hogares de bajo consumo.",
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
        descripcion: "Cilindro estándar doméstico, el más utilizado en los hogares.",
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
        descripcion: "Mayor capacidad para hogares de alto consumo o locales pequeños.",
        descripcionLarga:
            "Cilindro de mayor capacidad, recomendado para hogares con alto consumo o locales pequeños. Con 15 kg de gas licuado se reduce la frecuencia de recargas y es ideal para calefacción central o varios artefactos simultáneos.",
        precio: 16000,
        stock: 90,
        stockCritico: 15,
        imagen: "assets/img/gas-15kg.png"
    },
    {
        codigo: "CL004",
        nombre: "Cilindro GLP 45 kg",
        categoria: "Cilindros de Gas",
        descripcion: "Cilindro industrial para restaurantes, talleres y locales.",
        descripcionLarga:
            "Cilindro industrial de 45 kg. Uso comercial: restaurantes, talleres y calefacción de locales. Pensado para clientes comerciales con alto consumo de gas licuado.",
        precio: 45000,
        stock: 30,
        stockCritico: 5,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "RG001",
        nombre: "Regulador doméstico estándar",
        categoria: "Reguladores",
        descripcion: "Regulador de 1 etapa para cilindros de 5, 11 y 15 kg.",
        descripcionLarga:
            "Regulador de 1 etapa para cilindros de 5, 11 y 15 kg. Presión de salida de 28 mbar. Compatible con los reguladores y mangueras estándar del mercado.",
        precio: 8990,
        stock: 45,
        stockCritico: 8,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "RG002",
        nombre: "Regulador de alta presión",
        categoria: "Reguladores",
        descripcion: "Para cocinas industriales o equipos de mayor consumo.",
        descripcionLarga:
            "Regulador de alta presión para cocinas industriales o equipos de mayor consumo. Presión regulable según la necesidad del artefacto conectado.",
        precio: 18990,
        stock: 12,
        stockCritico: 3,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "RG003",
        nombre: "Regulador dual (2 salidas)",
        categoria: "Reguladores",
        descripcion: "Permite conectar dos artefactos al mismo cilindro.",
        descripcionLarga:
            "Regulador dual con dos salidas. Permite conectar dos artefactos simultáneamente al mismo cilindro, ideal para hogares con varios equipos a gas.",
        precio: 14990,
        stock: 18,
        stockCritico: 4,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "MG001",
        nombre: "Manguera gas 1.5 m",
        categoria: "Mangueras y Conexiones",
        descripcion: "Manguera flexible homologada con diámetro interior de 9 mm.",
        descripcionLarga:
            "Manguera flexible homologada de 1.5 metros. Diámetro interior de 9 mm. Compatible con reguladores estándar, ideal para distancias cortas entre el cilindro y el artefacto.",
        precio: 3990,
        stock: 80,
        stockCritico: 15,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "MG002",
        nombre: "Manguera gas 3 m",
        categoria: "Mangueras y Conexiones",
        descripcion: "Manguera larga cuando el artefacto está alejado del cilindro.",
        descripcionLarga:
            "Manguera larga de 3 metros para instalaciones donde el artefacto está alejado del cilindro. Flexible y homologada con las normas de seguridad vigentes.",
        precio: 6990,
        stock: 50,
        stockCritico: 10,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "MG003",
        nombre: "Abrazadera metálica",
        categoria: "Mangueras y Conexiones",
        descripcion: "Abrazadera de acero para asegurar conexiones.",
        descripcionLarga:
            "Abrazadera de acero para asegurar la conexión manguera-regulador y manguera-artefacto. Elemento de seguridad esencial en toda instalación de gas.",
        precio: 990,
        stock: 200,
        stockCritico: 30,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "MG004",
        nombre: "Kit conexión completo",
        categoria: "Mangueras y Conexiones",
        descripcion: "Regulador + manguera 1.5 m + abrazaderas para instalar un cilindro.",
        descripcionLarga:
            "Kit con todo lo necesario para instalar un cilindro nuevo: regulador, manguera de 1.5 metros y abrazaderas. Ahorra tiempo y asegura una instalación correcta.",
        precio: 12990,
        stock: 25,
        stockCritico: 5,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "AC001",
        nombre: "Carro porta cilindro 11/15 kg",
        categoria: "Accesorios",
        descripcion: "Carro metálico con ruedas para transportar cilindros.",
        descripcionLarga:
            "Carro metálico con ruedas para transportar cilindros de 11 y 15 kg dentro del hogar con seguridad y sin esfuerzo.",
        precio: 12990,
        stock: 20,
        stockCritico: 4,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "AC002",
        nombre: "Tapa protectora para válvula",
        categoria: "Accesorios",
        descripcion: "Tapa de plástico ABS para proteger la válvula en el transporte.",
        descripcionLarga:
            "Tapa de plástico ABS para proteger la válvula del cilindro durante el transporte o almacenamiento. Evita daños y mantiene la válvula limpia.",
        precio: 1490,
        stock: 60,
        stockCritico: 12,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "AC003",
        nombre: "Detector de gas a batería",
        categoria: "Accesorios",
        descripcion: "Sensor electroquímico con alarma ante fugas de gas GLP o metano.",
        descripcionLarga:
            "Detector de gas a batería con sensor electroquímico. Alarma sonora y visual ante fuga de gas GLP o metano. Elemento de seguridad recomendado para todos los hogares.",
        precio: 19990,
        stock: 8,
        stockCritico: 2,
        imagen: "assets/img/producto-generico.svg"
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

function mostrarAviso(mensaje, tipo) {
    const avisoExistente = document.querySelector(".aviso-feedback");

    if (avisoExistente) {
        avisoExistente.remove();
    }

    const aviso = document.createElement("div");
    aviso.className = "aviso-feedback " + (tipo || "exito");
    aviso.textContent = mensaje;
    document.body.appendChild(aviso);

    setTimeout(function () {
        aviso.remove();
    }, 2500);
}

function agregarAlCarrito(codigo) {
    const productoSeleccionado = productos.find(
        (producto) => producto.codigo === codigo
    );

    if (!productoSeleccionado) {
        return;
    }

    if (productoSeleccionado.stock <= 0) {
        mostrarAviso("Lo sentimos, este producto está agotado.", "error");
        return;
    }

    const productoEnCarrito = carrito.find(
        (producto) => producto.codigo === codigo
    );

    if (productoEnCarrito) {
        if (productoEnCarrito.cantidad < productoSeleccionado.stock) {
            productoEnCarrito.cantidad++;
            mostrarAviso(productoSeleccionado.nombre + " añadido al carrito.", "exito");
        } else {
            mostrarAviso(
                "Stock máximo disponible alcanzado para " + productoSeleccionado.nombre + ".",
                "error"
            );
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
        mostrarAviso(productoSeleccionado.nombre + " añadido al carrito.", "exito");
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
        const agotado = producto.stock <= 0;
        const stockCritico = !agotado && producto.stock <= producto.stockCritico;
        const etiquetaStock = agotado
            ? `<p class="etiqueta-stock agotado">Agotado</p>`
            : stockCritico
                ? `<p class="etiqueta-stock critico">¡Solo quedan ${producto.stock}!</p>`
                : "";

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
                    ${etiquetaStock}
                </a>
                <button
                    type="button"
                    class="boton-agregar"
                    data-codigo="${producto.codigo}"
                    ${agotado ? "disabled" : ""}
                >
                    ${agotado ? "Agotado" : "Añadir al carrito"}
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
