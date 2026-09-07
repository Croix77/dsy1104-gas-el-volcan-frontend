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