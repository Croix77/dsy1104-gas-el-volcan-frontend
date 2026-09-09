const productos = [
    {
        codigo: "CL001",
        nombre: "Cilindro GLP 5 kg",
        categoria: "Cilindros de Gas",
        descripcion: "Para cocina y calefaccionn pequeña en hogares de bajo consumo.",
        descripcionLarga:
            "Cilindro de gas licuado de petroleo de 5 kg, pensado para hogares de bajo consumo. Perfecto para cocina, calefaccion pequeña o artefactos de uso ocasional. Fabricado bajo normativa vigente y con valvula de seguridad.",
        precio: 6500,
        stock: 80,
        stockCritico: 10,
        imagen: "assets/img/gas-5kg.png"
    },
    {
        codigo: "CL002",
        nombre: "Cilindro GLP 11 kg",
        categoria: "Cilindros de Gas",
        descripcion: "Cilindro estandar domestico, el mas utilizado en los hogares.",
        descripcionLarga:
            "El cilindro mas utilizado en los hogares chilenos. Con 11 kg de capacidad es ideal para el consumo diario de una familia promedio, incluyendo cocina y calefaccion. Compatible con reguladores estandar.",
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
            "Cilindro de mayor capacidad, recomendado para hogares con alto consumo o locales pequeños. Con 15 kg de gas licuado se reduce la frecuencia de recargas y es ideal para calefaccion central o varios artefactos simultaneos.",
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
            "Cilindro industrial de 45 kg. Uso comercial: restaurantes, talleres y calefaccion de locales. Pensado para clientes comerciales con alto consumo de gas licuado.",
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
            "Regulador de 1 etapa para cilindros de 5, 11 y 15 kg. Presion de salida de 28 mbar. Compatible con los reguladores y mangueras estandar del mercado.",
        precio: 8990,
        stock: 45,
        stockCritico: 8,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "RG002",
        nombre: "Regulador de alta presion",
        categoria: "Reguladores",
        descripcion: "Para cocinas industriales o equipos de mayor consumo.",
        descripcionLarga:
            "Regulador de alta presion para cocinas industriales o equipos de mayor consumo. Presion regulable segun la necesidad del artefacto conectado.",
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
            "Regulador dual con dos salidas. Permite conectar dos artefactos simultaneamente al mismo cilindro, ideal para hogares con varios equipos a gas.",
        precio: 14990,
        stock: 18,
        stockCritico: 4,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "MG001",
        nombre: "Manguera gas 1.5 m",
        categoria: "Mangueras y Conexiones",
        descripcion: "Manguera flexible homologada con diametro interior de 9 mm.",
        descripcionLarga:
            "Manguera flexible homologada de 1.5 metros. Diametro interior de 9 mm. Compatible con reguladores estandar, ideal para distancias cortas entre el cilindro y el artefacto.",
        precio: 3990,
        stock: 80,
        stockCritico: 15,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "MG002",
        nombre: "Manguera gas 3 m",
        categoria: "Mangueras y Conexiones",
        descripcion: "Manguera larga cuando el artefacto esta alejado del cilindro.",
        descripcionLarga:
            "Manguera larga de 3 metros para instalaciones donde el artefacto esta alejado del cilindro. Flexible y homologada con las normas de seguridad vigentes.",
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
            "Abrazadera de acero para asegurar la conexion manguera-regulador y manguera-artefacto. Elemento de seguridad esencial en toda instalacion de gas.",
        precio: 990,
        stock: 200,
        stockCritico: 30,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "MG004",
        nombre: "Kit conexion completo",
        categoria: "Mangueras y Conexiones",
        descripcion: "Regulador + manguera 1.5 m + abrazaderas para instalar un cilindro.",
        descripcionLarga:
            "Kit con todo lo necesario para instalar un cilindro nuevo: regulador, manguera de 1.5 metros y abrazaderas. Ahorra tiempo y asegura una instalacion correcta.",
        precio: 12990,
        stock: 25,
        stockCritico: 5,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "AC001",
        nombre: "Carro porta cilindro 11/15 kg",
        categoria: "Accesorios",
        descripcion: "Carro metalico con ruedas para transportar cilindros.",
        descripcionLarga:
            "Carro metalico con ruedas para transportar cilindros de 11 y 15 kg dentro del hogar con seguridad y sin esfuerzo.",
        precio: 12990,
        stock: 20,
        stockCritico: 4,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "AC002",
        nombre: "Tapa protectora para valvula",
        categoria: "Accesorios",
        descripcion: "Tapa de plastico ABS para proteger la valvula en el transporte.",
        descripcionLarga:
            "Tapa de plastico ABS para proteger la valvula del cilindro durante el transporte o almacenamiento. Evita daños y mantiene la valvula limpia.",
        precio: 1490,
        stock: 60,
        stockCritico: 12,
        imagen: "assets/img/producto-generico.svg"
    },
    {
        codigo: "AC003",
        nombre: "Detector de gas a bateria",
        categoria: "Accesorios",
        descripcion: "Sensor electroquimico con alarma ante fugas de gas GLP o metano.",
        descripcionLarga:
            "Detector de gas a bateria con sensor electroquimico. Alarma sonora y visual ante fuga de gas GLP o metano. Elemento de seguridad recomendado para todos los hogares.",
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


// =========================================
// menu hamburguesa
// =========================================


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

// =========================================
// menu hamburguesa
// =========================================
var menuHamburguesa = document.getElementById("menuHamburguesa");
var menuPrincipal = document.getElementById("menuPrincipal");

if (menuHamburguesa && menuPrincipal) {

    menuHamburguesa.addEventListener("click", function () {

        menuPrincipal.classList.toggle("menu-abierto");

        var menuAbierto =
            menuPrincipal.classList.contains("menu-abierto");

        menuHamburguesa.setAttribute(
            "aria-expanded",
            menuAbierto
        );

    });

}

// =========================
// FORMULARIO DE CONTACTO
// =========================

var formularioContacto = document.getElementById("formulario-contacto");

if (formularioContacto) {

    var nombreContacto = document.getElementById("nombre");
    var correoContacto = document.getElementById("correo");
    var telefonoContacto = document.getElementById("telefono");
    var asuntoContacto = document.getElementById("asunto");
    var mensajeContacto = document.getElementById("mensaje");

    var errorNombre = document.getElementById("error-nombre");
    var errorCorreo = document.getElementById("error-correo");
    var errorTelefono = document.getElementById("error-telefono");
    var errorAsunto = document.getElementById("error-asunto");
    var errorMensaje = document.getElementById("error-mensaje");

    var mensajeExito = document.getElementById("mensaje-exito");

    formularioContacto.addEventListener("submit", function (event) {

        event.preventDefault();

        var formularioValido = true;

        // Limpiar mensajes anteriores
        errorNombre.textContent = "";
        errorCorreo.textContent = "";
        errorTelefono.textContent = "";
        errorAsunto.textContent = "";
        errorMensaje.textContent = "";
        mensajeExito.textContent = "";

        var nombre = nombreContacto.value.trim();
        var correo = correoContacto.value.trim();
        var telefono = telefonoContacto.value.trim();
        var asunto = asuntoContacto.value;
        var mensaje = mensajeContacto.value.trim();

        // Validar nombre
        if (nombre === "") {
            errorNombre.textContent = "Ingresa tu nombre.";
            formularioValido = false;
        } else if (nombre.length < 3) {
            errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
            formularioValido = false;
        }

        // Validar correo
        var expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (correo === "") {
            errorCorreo.textContent = "Ingresa tu correo electrónico.";
            formularioValido = false;
        } else if (!expresionCorreo.test(correo)) {
            errorCorreo.textContent = "Ingresa un correo electrónico válido.";
            formularioValido = false;
        }

        // Validar teléfono
        var expresionTelefono = /^[0-9]{9}$/;

        if (telefono !== "" && !expresionTelefono.test(telefono)) {
            errorTelefono.textContent =
                "El teléfono debe contener 9 números.";
            formularioValido = false;
        }

        // Validar asunto
        if (asunto === "") {
            errorAsunto.textContent = "Selecciona un asunto.";
            formularioValido = false;
        }

        // Validar mensaje
        if (mensaje === "") {
            errorMensaje.textContent = "Escribe tu mensaje.";
            formularioValido = false;
        } else if (mensaje.length < 10) {
            errorMensaje.textContent =
                "El mensaje debe tener al menos 10 caracteres.";
            formularioValido = false;
        }

        // Si todo está correcto
        if (formularioValido) {

            mensajeExito.textContent =
                "Mensaje enviado correctamente. Nos pondremos en contacto contigo.";

            formularioContacto.reset();
        }

    });

}

// =========================================
// validacion de correo permitido
// =========================================

function correoPermitido(correo) {
    var dominio = correo.split('@')[1];
    return dominio === 'duoc.cl' ||
        dominio === 'profesor.duoc.cl' ||
        dominio === 'gmail.com';
}

// =========================================
// validacion de RUN (digito verificador)
// =========================================

function validarRun(run) {
    var partes = run.split('-');

    if (partes.length != 2) {
        return false;
    }

    var cuerpo = partes[0].replace(/\./g, '');
    var dvIngresado = partes[1].toUpperCase();

    if (!/^\d{7,8}$/.test(cuerpo)) {
        return false;
    }

    var serie = [3, 2, 7, 6, 5, 4, 3, 2];
    var suma = 0;

    for (var i = 0; i < cuerpo.length; i++) {
        suma += parseInt(cuerpo.charAt(cuerpo.length - 1 - i)) * serie[i];
    }

    var resto = 11 - (suma % 11);
    var dvCalculado;

    if (resto == 11) {
        dvCalculado = '0';
    } else if (resto == 10) {
        dvCalculado = 'K';
    } else {
        dvCalculado = String(resto);
    }

    return dvIngresado === dvCalculado;
}

// =========================================
// pagina login
// =========================================

var formularioLogin = document.getElementById('formulario-login');

if (formularioLogin) {

    // validar el correo
    function validarCorreoLogin() {
        var correo = document.getElementById('correo-login').value.trim();
        var error = document.getElementById('error-correo-login');

        if (correo == '') {
            error.textContent = 'Ingresa tu correo.';
            return false;
        }

        if (!correoPermitido(correo)) {
            error.textContent = 'El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.';
            return false;
        }

        error.textContent = '';
        return true;
    }

    // validar la clave
    function validarClaveLogin() {
        var clave = document.getElementById('clave-login').value;
        var error = document.getElementById('error-clave-login');

        if (clave == '') {
            error.textContent = 'Ingresa tu contrasena.';
            return false;
        }

        if (clave.length < 4 || clave.length > 10) {
            error.textContent = 'La contrasena debe tener entre 4 y 10 caracteres.';
            return false;
        }

        error.textContent = '';
        return true;
    }

    // entrar al panel
    function entrarAlPanel() {
        var correo = document.getElementById('correo-login').value.trim();

        var usuario = {
            nombre: correo.split('@')[0],
            correo: correo
        };

        localStorage.setItem('usuarioActivo', JSON.stringify(usuario));

        window.location.href = 'panel.html';
    }

    document.getElementById('correo-login').addEventListener('input', function () {
        document.getElementById('error-correo-login').textContent = '';
    });

    document.getElementById('clave-login').addEventListener('input', function () {
        document.getElementById('error-clave-login').textContent = '';
    });

    formularioLogin.addEventListener('submit', function (evento) {
        evento.preventDefault();

        var correcto = true;

        if (!validarCorreoLogin()) correcto = false;
        if (!validarClaveLogin()) correcto = false;

        if (!correcto) {
            return;
        }

        entrarAlPanel();
    });
}

// =========================================
// pagina registro
// =========================================

var formularioRegistro = document.getElementById('formulario-registro');

if (formularioRegistro) {

    // validar el nombre
    function validarNombreRegistro() {
        var nombre = document.getElementById('nombre-registro').value.trim();
        var error = document.getElementById('error-nombre-registro');

        if (nombre == '') {
            error.textContent = 'Ingresa tu nombre.';
            return false;
        }

        if (nombre.split(' ').length < 2) {
            error.textContent = 'Ingresa nombre y apellido.';
            return false;
        }

        error.textContent = '';
        return true;
    }

    // validar el run
    function validarRunRegistro() {
        var run = document.getElementById('run-registro').value.trim();
        var error = document.getElementById('error-run-registro');

        if (run == '') {
            error.textContent = 'Ingresa tu RUN.';
            return false;
        }

        if (!validarRun(run)) {
            error.textContent = 'El RUN no es valido.';
            return false;
        }

        error.textContent = '';
        return true;
    }

    // validar el correo
    function validarCorreoRegistro() {
        var correo = document.getElementById('correo-registro').value.trim();
        var error = document.getElementById('error-correo-registro');

        if (correo == '') {
            error.textContent = 'Ingresa tu correo.';
            return false;
        }

        if (!correoPermitido(correo)) {
            error.textContent = 'El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.';
            return false;
        }

        error.textContent = '';
        return true;
    }

    // validar la clave
    function validarClaveRegistro() {
        var clave = document.getElementById('clave-registro').value;
        var error = document.getElementById('error-clave-registro');

        if (clave == '') {
            error.textContent = 'Ingresa una contrasena.';
            return false;
        }

        if (clave.length < 4 || clave.length > 10) {
            error.textContent = 'La contrasena debe tener entre 4 y 10 caracteres.';
            return false;
        }

        error.textContent = '';
        return true;
    }

    // confirmar la clave
    function validarClaveConfirmar() {
        var clave = document.getElementById('clave-registro').value;
        var confirmar = document.getElementById('clave-confirmar').value;
        var error = document.getElementById('error-clave-confirmar');

        if (confirmar == '') {
            error.textContent = 'Repite tu contrasena.';
            return false;
        }

        if (clave != confirmar) {
            error.textContent = 'Las contrasenas no coinciden.';
            return false;
        }

        error.textContent = '';
        return true;
    }

    // guardar la cuenta y entrar al panel
    function guardarCuenta() {
        var nombre = document.getElementById('nombre-registro').value.trim();
        var run = document.getElementById('run-registro').value.trim();
        var correo = document.getElementById('correo-registro').value.trim();

        var lista = JSON.parse(localStorage.getItem('usuarios') || '[]');

        var yaExiste = false;

        for (var i = 0; i < lista.length; i++) {
            if (lista[i].correo == correo) {
                yaExiste = true;
            }
        }

        if (yaExiste) {
            document.getElementById('mensaje-registro').textContent =
                'Ese correo ya esta registrado.';
            return false;
        }

        lista.push({
            nombre: nombre,
            run: run,
            correo: correo
        });

        localStorage.setItem('usuarios', JSON.stringify(lista));

        var usuario = {
            nombre: nombre,
            correo: correo,
            run: run
        };

        localStorage.setItem('usuarioActivo', JSON.stringify(usuario));

        window.location.href = 'panel.html';
    }

    document.getElementById('nombre-registro').addEventListener('input', function () {
        document.getElementById('error-nombre-registro').textContent = '';
    });

    document.getElementById('run-registro').addEventListener('input', function () {
        document.getElementById('error-run-registro').textContent = '';
    });

    document.getElementById('correo-registro').addEventListener('input', function () {
        document.getElementById('error-correo-registro').textContent = '';
    });

    document.getElementById('clave-registro').addEventListener('input', function () {
        document.getElementById('error-clave-registro').textContent = '';
    });

    document.getElementById('clave-confirmar').addEventListener('input', function () {
        document.getElementById('error-clave-confirmar').textContent = '';
    });

    formularioRegistro.addEventListener('submit', function (evento) {
        evento.preventDefault();

        var correcto = true;

        if (!validarNombreRegistro()) correcto = false;
        if (!validarRunRegistro()) correcto = false;
        if (!validarCorreoRegistro()) correcto = false;
        if (!validarClaveRegistro()) correcto = false;
        if (!validarClaveConfirmar()) correcto = false;

        if (!correcto) {
            return;
        }

        guardarCuenta();
    });
}

// =========================================
// pagina panel
// =========================================

var panelUsuario = document.getElementById('panel-nombre');

if (panelUsuario) {

    var usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo') || 'null');

    if (usuarioActivo) {
        document.getElementById('panel-nombre').textContent = usuarioActivo.nombre;
        document.getElementById('panel-correo').textContent = usuarioActivo.correo;
        document.getElementById('panel-run').textContent = usuarioActivo.run || '-';
    }

    document.getElementById('boton-cerrar-sesion').addEventListener('click', function () {
        localStorage.removeItem('usuarioActivo');
        window.location.href = 'login.html';
    });
}