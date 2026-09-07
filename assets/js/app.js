const productos = [
    {
        codigo: "CL001",
        nombre: "Cilindro GLP 5 kg",
        descripcion: "Ideal para cocina y calefacción pequeña.",
        precio: 6500,
        stock: 80,
        imagen: "assets/img/gas-5kg.png"
    },
    {
        codigo: "CL002",
        nombre: "Cilindro GLP 11 kg",
        descripcion: "Cilindro estándar para el hogar.",
        precio: 12000,
        stock: 200,
        imagen: "assets/img/gas-11kg.png"
    },
    {
        codigo: "CL003",
        nombre: "Cilindro GLP 15 kg",
        descripcion: "Mayor capacidad para hogares de alto consumo.",
        precio: 16000,
        stock: 90,
        imagen: "assets/img/gas-15kg.png"
    }
];

function mostrarProductos() {
    const listaProductos = document.querySelector("#lista-productos");

    if (!listaProductos) {
        return;
    }

    listaProductos.innerHTML = "";

    for (const producto of productos) {
        listaProductos.innerHTML += `
            <article class="tarjeta-producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio.toLocaleString("es-CL")}</p>
                <p>Stock disponible: ${producto.stock}</p>
                <button type="button">Añadir al carrito</button>
            </article>
        `;
    }
}

mostrarProductos();