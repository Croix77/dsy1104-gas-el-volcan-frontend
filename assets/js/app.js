const productos = [
    {
        codigo: "CL001",
        nombre: "Cilindro GLP 5 kg",
        categoria: "Cilindros de Gas",
        descripcion: "Para cocina y calefacci├│n peque├▒a en hogares de bajo consumo.",
        descripcionLarga:
            "Cilindro de gas licuado de petr├│leo de 5 kg, pensado para hogares de bajo consumo. Perfecto para cocina, calefacci├│n peque├▒a o artefactos de uso ocasional. Fabricado bajo normativa vigente y con v├ílvula de seguridad.",
        precio: 6500,
        stock: 80,
        stockCritico: 10,
        imagen: "assets/img/gas-5kg.png"
    },
    {
        codigo: "CL002",
        nombre: "Cilindro GLP 11 kg",
        categoria: "Cilindros de Gas",
        descripcion: "Cilindro est├índar dom├®stico, el m├ís utilizado en los hogares.",
        descripcionLarga:
            "El cilindro m├ís utilizado en los hogares chilenos. Con 11 kg de capacidad es ideal para el consumo diario de una familia promedio, incluyendo cocina y calefacci├│n. Compatible con reguladores est├índar.",
        precio: 12000,
        stock: 200,
        stockCritico: 20,
        imagen: "assets/img/gas-11kg.png"
    },
    {
        codigo: "CL003",
        nombre: "Cilindro GLP 15 kg",
        categoria: "Cilindros de Gas",
        descripcion: "Mayor capacidad para hogares de alto consumo o locales peque├▒os.",
        descripcionLarga:
            "Cilindro de mayor capacidad, recomendado para hogares con alto consumo o locales peque├▒os. Con 15 kg de gas licuado se reduce la frecuencia de recargas y es ideal para calefacci├│n central o varios artefactos simult├íneos.",
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
            "Cilindro industrial de 45 kg. Uso comercial: restaurantes, talleres y calefacci├│n de locales. Pensado para clientes comerciales con alto consumo de gas licuado.",
        precio: 45000,
        stock: 30,
        stockCritico: 5,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "RG001",
        nombre: "Regulador dom├®stico est├índar",
        categoria: "Reguladores",
        descripcion: "Regulador de 1 etapa para cilindros de 5, 11 y 15 kg.",
        descripcionLarga:
            "Regulador de 1 etapa para cilindros de 5, 11 y 15 kg. Presi├│n de salida de 28 mbar. Compatible con los reguladores y mangueras est├índar del mercado.",
        precio: 8990,
        stock: 45,
        stockCritico: 8,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "RG002",
        nombre: "Regulador de alta presi├│n",
        categoria: "Reguladores",
        descripcion: "Para cocinas industriales o equipos de mayor consumo.",
        descripcionLarga:
            "Regulador de alta presi├│n para cocinas industriales o equipos de mayor consumo. Presi├│n regulable seg├║n la necesidad del artefacto conectado.",
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
            "Regulador dual con dos salidas. Permite conectar dos artefactos simult├íneamente al mismo cilindro, ideal para hogares con varios equipos a gas.",
        precio: 14990,
        stock: 18,
        stockCritico: 4,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "MG001",
        nombre: "Manguera gas 1.5 m",
        categoria: "Mangueras y Conexiones",
        descripcion: "Manguera flexible homologada con di├ímetro interior de 9 mm.",
        descripcionLarga:
            "Manguera flexible homologada de 1.5 metros. Di├ímetro interior de 9 mm. Compatible con reguladores est├índar, ideal para distancias cortas entre el cilindro y el artefacto.",
        precio: 3990,
        stock: 80,
        stockCritico: 15,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "MG002",
        nombre: "Manguera gas 3 m",
        categoria: "Mangueras y Conexiones",
        descripcion: "Manguera larga cuando el artefacto est├í alejado del cilindro.",
        descripcionLarga:
            "Manguera larga de 3 metros para instalaciones donde el artefacto est├í alejado del cilindro. Flexible y homologada con las normas de seguridad vigentes.",
        precio: 6990,
        stock: 50,
        stockCritico: 10,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "MG003",
        nombre: "Abrazadera met├ílica",
        categoria: "Mangueras y Conexiones",
        descripcion: "Abrazadera de acero para asegurar conexiones.",
        descripcionLarga:
            "Abrazadera de acero para asegurar la conexi├│n manguera-regulador y manguera-artefacto. Elemento de seguridad esencial en toda instalaci├│n de gas.",
        precio: 990,
        stock: 200,
        stockCritico: 30,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "MG004",
        nombre: "Kit conexi├│n completo",
        categoria: "Mangueras y Conexiones",
        descripcion: "Regulador + manguera 1.5 m + abrazaderas para instalar un cilindro.",
        descripcionLarga:
            "Kit con todo lo necesario para instalar un cilindro nuevo: regulador, manguera de 1.5 metros y abrazaderas. Ahorra tiempo y asegura una instalaci├│n correcta.",
        precio: 12990,
        stock: 25,
        stockCritico: 5,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "AC001",
        nombre: "Carro porta cilindro 11/15 kg",
        categoria: "Accesorios",
        descripcion: "Carro met├ílico con ruedas para transportar cilindros.",
        descripcionLarga:
            "Carro met├ílico con ruedas para transportar cilindros de 11 y 15 kg dentro del hogar con seguridad y sin esfuerzo.",
        precio: 12990,
        stock: 20,
        stockCritico: 4,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "AC002",
        nombre: "Tapa protectora para v├ílvula",
        categoria: "Accesorios",
        descripcion: "Tapa de pl├ístico ABS para proteger la v├ílvula en el transporte.",
        descripcionLarga:
            "Tapa de pl├ístico ABS para proteger la v├ílvula del cilindro durante el transporte o almacenamiento. Evita da├▒os y mantiene la v├ílvula limpia.",
        precio: 1490,
        stock: 60,
        stockCritico: 12,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "AC003",
        nombre: "Detector de gas a bater├¡a",
        categoria: "Accesorios",
        descripcion: "Sensor electroqu├¡mico con alarma ante fugas de gas GLP o metano.",
        descripcionLarga:
            "Detector de gas a bater├¡a con sensor electroqu├¡mico. Alarma sonora y visual ante fuga de gas GLP o metano. Elemento de seguridad recomendado para todos los hogares.",
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
        mostrarAviso("Lo sentimos, este producto est├í agotado.", "error");
        return;
    }

    const productoEnCarrito = carrito.find(
        (producto) => producto.codigo === codigo
    );

    if (productoEnCarrito) {
        if (productoEnCarrito.cantidad < productoSeleccionado.stock) {
            productoEnCarrito.cantidad++;
            mostrarAviso(productoSeleccionado.nombre + " a├▒adido al carrito.", "exito");
        } else {
            mostrarAviso(
                "Stock m├íximo disponible alcanzado para " + productoSeleccionado.nombre + ".",
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
        mostrarAviso(productoSeleccionado.nombre + " a├▒adido al carrito.", "exito");
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
                ? `<p class="etiqueta-stock critico">┬íSolo quedan ${producto.stock}!</p>`
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
                    ${agotado ? "Agotado" : "A├▒adir al carrito"}
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
            <a href="productos.html" class="boton">Volver al cat├ílogo</a>
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
                            ? `<p class="alerta-stock-critico">┬íQuedan pocas unidades!</p>`
                            : ""
                    }
                </div>

                <button
                    type="button"
                    class="boton-agregar"
                    data-codigo="${producto.codigo}"
                    ${stockInsuficiente ? "disabled" : ""}
                >
                    A├▒adir al carrito
                </button>

                <a href="productos.html" class="enlace-volver">&larr; Volver al cat├ílogo</a>
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


// =========================================
// menu hamburguesa
// =========================================

var botonMenu = document.getElementById('menuHamburguesa');
var navegacion = document.getElementById('navegacion');

if (botonMenu) {
    botonMenu.addEventListener('click', function () {
        navegacion.classList.toggle('abierto');
        botonMenu.classList.toggle('activo');
    });
}


// =========================================
// pagina pedido
// =========================================

var formularioPedido = document.getElementById('formulario-pedido');

if (formularioPedido) {

    var tarjetasProducto = document.querySelectorAll('.tarjeta-producto');
    var radiosProducto = document.querySelectorAll('input[name="producto"]');

    // dejar en blanco el error de un campo
    function limpiarError(campo) {
        document.getElementById('error-' + campo).textContent = '';
    }

    // marcar la tarjeta del cilindro que se eligio
    for (var i = 0; i < tarjetasProducto.length; i++) {
        tarjetasProducto[i].addEventListener('click', function () {
            for (var j = 0; j < tarjetasProducto.length; j++) {
                tarjetasProducto[j].classList.remove('seleccionado');
            }
            this.classList.add('seleccionado');
            limpiarError('producto');
            actualizarResumen();
        });
    }

    // saber que cilindro esta marcado
    function productoElegido() {
        for (var i = 0; i < radiosProducto.length; i++) {
            if (radiosProducto[i].checked) {
                return radiosProducto[i].value;
            }
        }
        return null;
    }

    // validar el nombre
    function validarNombre() {
        var nombre = document.getElementById('nombre').value.trim();
        var error = document.getElementById('error-nombre');

        if (nombre == '') {
            error.textContent = 'Ingresa tu nombre.';
            return false;
        }
        if (nombre.length < 3) {
            error.textContent = 'El nombre debe tener al menos 3 letras.';
            return false;
        }
        if (/\d/.test(nombre)) {
            error.textContent = 'El nombre no puede tener numeros.';
            return false;
        }

        error.textContent = '';
        return true;
    }

    // validar el telefono
    function validarTelefono() {
        var telefono = document.getElementById('telefono').value.trim();
        var error = document.getElementById('error-telefono');

        if (telefono == '') {
            error.textContent = 'Ingresa tu numero de telefono.';
            return false;
        }
        if (telefono.length != 9 || telefono.charAt(0) != '9' || isNaN(telefono)) {
            error.textContent = 'Ingresa 9 digitos empezando con 9.';
            return false;
        }

        error.textContent = '';
        return true;
    }

    // validar la direccion
    function validarDireccion() {
        var direccion = document.getElementById('direccion').value.trim();
        var error = document.getElementById('error-direccion');

        if (direccion == '') {
            error.textContent = 'Ingresa tu direccion.';
            return false;
        }
        if (direccion.length < 10) {
            error.textContent = 'La direccion es muy corta.';
            return false;
        }

        error.textContent = '';
        return true;
    }

    // validar que se eligio un cilindro
    function validarProducto() {
        var error = document.getElementById('error-producto');

        if (productoElegido() == null) {
            error.textContent = 'Selecciona un cilindro.';
            return false;
        }

        error.textContent = '';
        return true;
    }

    // validar la cantidad
    function validarCantidad() {
        var cantidadTexto = document.getElementById('cantidad').value.trim();
        var error = document.getElementById('error-cantidad');

        if (cantidadTexto == '') {
            error.textContent = 'Indica la cantidad.';
            return false;
        }

        var cantidad = Number(cantidadTexto);

        if (cantidad < 1 || cantidad > 20) {
            error.textContent = 'La cantidad debe estar entre 1 y 20.';
            return false;
        }

        error.textContent = '';
        return true;
    }

    // validar las observaciones
    function validarObservaciones() {
        var error = document.getElementById('error-observaciones');

        if (document.getElementById('observaciones').value.trim().length > 200) {
            error.textContent = 'Maximo 200 caracteres.';
            return false;
        }

        error.textContent = '';
        return true;
    }

    // actualizar el resumen del pedido
    function actualizarResumen() {
        var producto = productoElegido();

        if (producto != null) {
            document.getElementById('resumen-producto').textContent = producto;
        } else {
            document.getElementById('resumen-producto').textContent = 'Sin seleccionar';
        }

        var cantidad = document.getElementById('cantidad').value.trim();

        if (cantidad != '') {
            document.getElementById('resumen-cantidad').textContent = cantidad;
        }

        var direccion = document.getElementById('direccion').value.trim();

        if (direccion != '') {
            document.getElementById('resumen-direccion').textContent = direccion;
        }
    }

    // quitar el error al escribir de nuevo
    document.getElementById('nombre').addEventListener('input', function () {
        limpiarError('nombre');
    });

    document.getElementById('telefono').addEventListener('input', function () {
        limpiarError('telefono');
    });

    document.getElementById('direccion').addEventListener('input', function () {
        limpiarError('direccion');
        actualizarResumen();
    });

    document.getElementById('cantidad').addEventListener('input', function () {
        limpiarError('cantidad');
        actualizarResumen();
    });

    document.getElementById('observaciones').addEventListener('input', function () {
        limpiarError('observaciones');
        document.getElementById('contador-observaciones').textContent = this.value.length;
    });

    // crear el numero del pedido
    function generarNumeroPedido() {
        var numero = Math.floor(Math.random() * 9000) + 1000;
        return 'GV-' + new Date().getFullYear() + '-' + numero;
    }

    // enviar el formulario
    formularioPedido.addEventListener('submit', function (evento) {
        evento.preventDefault();

        var correcto = true;

        if (!validarNombre()) correcto = false;
        if (!validarTelefono()) correcto = false;
        if (!validarDireccion()) correcto = false;
        if (!validarProducto()) correcto = false;
        if (!validarCantidad()) correcto = false;
        if (!validarObservaciones()) correcto = false;

        if (!correcto) {
            document.getElementById('mensaje-exito').classList.remove('visible');
            return;
        }

        var numero = generarNumeroPedido();

        document.getElementById('mensaje-exito').innerHTML =
            'Pedido ' + numero + ' registrado. Recibiras tu ' + productoElegido() +
            ' en tu domicilio. <a href="seguimiento.html?numero=' + numero +
            '">Ver seguimiento</a>';

        document.getElementById('mensaje-exito').classList.add('visible');

        formularioPedido.reset();

        for (var i = 0; i < tarjetasProducto.length; i++) {
            tarjetasProducto[i].classList.remove('seleccionado');
        }

        actualizarResumen();
    });
}


// =========================================
// pagina seguimiento
// =========================================

var formularioSeguimiento = document.getElementById('formulario-seguimiento');

if (formularioSeguimiento) {

    var etiquetasEstados = ['Recibido', 'Asignado', 'En camino', 'Entregado'];
    var textosEstados = [
        'Tu pedido fue recibido, pronto se le asignara un repartidor.',
        'Un repartidor fue asignado a tu entrega.',
        'El repartidor va en camino a tu domicilio.',
        'Tu pedido fue entregado. Gracias por preferirnos!'
    ];
    var horasEstimadas = [
        'Durante el dia',
        'Salida en 1 hora aprox.',
        'Llegada en 30 min aprox.',
        'Entregado'
    ];
    var repartidores = ['Miguel', 'Alejandro', 'Carlos'];

    var posicionActual = 0;
    var numeroActual = '';

    // validar el formato del numero
    function validarNumero() {
        var numero = document.getElementById('numero-pedido').value.trim().toUpperCase();
        var error = document.getElementById('error-numero');

        if (numero == '') {
            error.textContent = 'Ingresa el numero de tu pedido.';
            return null;
        }

        if (!/^GV-\d{4}-\d{4}$/.test(numero)) {
            error.textContent = 'El formato es GV-2026-1234.';
            return null;
        }

        error.textContent = '';
        return numero;
    }

    // pintar los estados en la linea de tiempo
    function mostrarEstado(indice) {
        posicionActual = indice;

        document.getElementById('numero-mostrado').textContent = numeroActual;
        document.getElementById('estado-actual').textContent = etiquetasEstados[indice];
        document.getElementById('hora-estimada').textContent = horasEstimadas[indice];
        document.getElementById('descripcion-estado').textContent = textosEstados[indice];

        if (indice == 0) {
            document.getElementById('repartidor').textContent = 'Por asignar';
        } else {
            document.getElementById('repartidor').textContent =
                repartidores[(numeroActual.length + indice) % 3];
        }

        var elementos = document.querySelectorAll('.estado');

        for (var i = 0; i < elementos.length; i++) {
            elementos[i].classList.remove('activo');
            elementos[i].classList.remove('completado');

            if (i < indice) {
                elementos[i].classList.add('completado');
            } else if (i == indice) {
                elementos[i].classList.add('activo');
            }
        }

        // al llegar a "entregado" ya no se puede seguir
        document.getElementById('boton-avanzar').disabled = (indice >= 3);
    }

    // hacer la consulta del pedido
    function consultar() {
        var numero = validarNumero();

        if (numero == null) {
            document.getElementById('resultado-seguimiento').hidden = true;
            return;
        }

        numeroActual = numero;

        // el estado inicial se elige al azar para la simulacion
        posicionActual = Math.floor(Math.random() * 4);

        mostrarEstado(posicionActual);
        document.getElementById('resultado-seguimiento').hidden = false;
    }

    // boton para pasar al siguiente estado
    document.getElementById('boton-avanzar').addEventListener('click', function () {
        if (posicionActual < 3) {
            mostrarEstado(posicionActual + 1);
        }
    });

    document.getElementById('numero-pedido').addEventListener('input', function () {
        document.getElementById('error-numero').textContent = '';
        this.value = this.value.toUpperCase();
    });

    formularioSeguimiento.addEventListener('submit', function (evento) {
        evento.preventDefault();
        consultar();
    });

    // si viene un numero en la url, la pagina lo consulta sola
    var numeroUrl = location.search.split('numero=')[1];

    if (numeroUrl) {
        document.getElementById('numero-pedido').value = numeroUrl;
        consultar();
    }
}
