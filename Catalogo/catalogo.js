// DECLARACION DE FUNCIONES //

    // NOTA: calcularPrecioFinal, transformarPrecio y formatearPrecio AHORA ESTAN EN main.js

    // FUNCION QUE CIERRA EL MODAL Y LIMPIA LOS FILTROS SELECCIONADOS
function cerrarTodo() {
    modalFiltros.classList.remove("active")
    contenedorCategoria.forEach((contenedor) => {
        if(contenedor)
        contenedor.classList.remove("active")
    })
}

    // FUNCION QUE ACTUALIZA APLICA LOS FILTROS AL CATALOGO
function actualizarProductos(listaFiltros, valorOrden){
    let productosFiltrados = listaFiltros.length === 0 
        ? [...productos]
        : productos.filter(p => listaFiltros.includes(p.subcategoria.toLowerCase()));
    const contador = document.querySelector(".main-catalogo__contador-productos")
    contador.innerHTML = `<h3 class="main-catalogo__cantidad-productos">${productosFiltrados.length} productos.</h3>`
    let htmlAcumulado = ""
    if (valorOrden === "precio-asc"){
        productosFiltrados.sort((a,b) => transformarPrecio(a) - transformarPrecio(b))
    } else if (valorOrden === "precio-desc"){
        productosFiltrados.sort((a,b) => transformarPrecio(b) - transformarPrecio(a))
    } else if (valorOrden === "nombre"){
        productosFiltrados.sort((a,b) => a.nombre.localeCompare(b.nombre))
    }
    
    if(productosFiltrados.length === 0){
        htmlAcumulado = `
        <div class="main-catalogo__sin-resultados">
            <p>No hay productos disponibles con esos filtros.</p>
            <button onclick="limpiarFiltros()">Ver todos los productos</button>
        </div>
        `
    } else {
        for (let i = 0; i < productosFiltrados.length; i++){
            htmlAcumulado += generarHTMLCard(productosFiltrados[i])
        }
    }
    seccionCatalogo.innerHTML = htmlAcumulado
}

    // FUNCION QUE LIMPIA LOS FILTROS SELECCIONADOS
function limpiarFiltros(){
    filtrosActivos = [];
    // Desmarcamos todos los checkboxes en el HTML
    checkBoxes.forEach(cb => {
        cb.checked = false;
    });
    // Volvemos a renderizar el catálogo completo
    actualizarProductos(filtrosActivos, ordenActivo);
}

    // FUNCION QUE INSERTA LOS PRODUCTOS EN OFERTA AL HTML
function generarHTMLCard(producto){
    let rutaImagen = "/Ejercicios/E-Commerce/Imagenes/" + producto.variantes[0].imagenes[0]
    if (producto.descuento < 1){
    return `
    <article class="main-catalogo__producto" data-id="${producto.id}">
        <div class="main-catalogo__producto-contenedor-imagen">
            <img class="main-catalogo__producto-imagen-portada" src="${rutaImagen}" alt="Imagen de ${producto.nombre}">
        </div>
        <div class="main-catalogo__producto-info">
            <div class="main-catalogo__producto-precios">
                <span class="main-catalogo__precio-con-descuento">${formatearPrecio(producto.precioOriginal)}</span>
            </div>
            <h3 class="main-catalogo__producto-nombre">${producto.nombre}</h3>
            <span class="main-catalogo__producto-categoria">${producto.categoria}</span>
            <span class="main-catalogo__producto-genero">${producto.variantes[0].genero}</span>
        </div>
    </article>
    `
    } else {
        return `
    <article class="main-catalogo__producto" data-id="${producto.id}">
        <div class="main-catalogo__producto-contenedor-imagen">
            <img class="main-catalogo__producto-imagen-portada" src="${rutaImagen}" alt="Imagen de ${producto.nombre}">
            <span class="main-catalogo__producto-descuento">-${producto.descuento}%</span>
        </div>
        <div class="main-catalogo__producto-info">
            <div class="main-catalogo__producto-precios">
                <span class="main-catalogo__precio-anterior">${formatearPrecio(producto.precioOriginal)}</span>
                <span class="main-catalogo__precio-con-descuento">${calcularPrecioFinal(producto)}</span>
            </div>
            <h3 class="main-catalogo__producto-nombre">${producto.nombre}</h3>
            <span class="main-catalogo__producto-categoria">${producto.categoria}</span>
            <span class="main-catalogo__producto-genero">${producto.variantes[0].genero}</span>
        </div>
    </article>
    `
    }
}

    // FUNCION QUE ABRE EL MODAL DE PRODUCTO
function abrirModalCompra(producto) {
    modalComprar.classList.add("active")
    let htmlModal = `
        <div class="modal-comprar__galeria">
            <img class="modal-comprar__galeria-foto-principal" id="foto-principal" src="../logo.png" alt="">
            <div class="modal-comprar__galeria-miniaturas" id="miniaturas"></div>
        </div>

        <div class="modal-comprar__detalles">
            <h2 class="modal-comprar__detalles-titulo">${producto.nombre}</h2>
            <p class="modal-comprar__detalles-precio">${producto.descripcion}</p>
            <div class="modal-comprar__selector-colores">
                <span>Colores: </span>
                <div class="modal-comprar__detalles-colores">

                </div>
            </div>
            <div class="modal-comprar__selector-talles">
                <span>Talles: </span>
                <div class="modal-comprar__detalles-talles">

                </div>
            </div>
            <div class="modal-comprar__selector-cantidad">
                <span class="modal-comprar__cantidad">Cantidad: </span>
                <input type="number" id="cantidad-input" min="1" value="1">
                <span class="modal-comprar__stock-disponible"></span>
            </div>
            <button class="modal-comprar__enviar" id="btn-agregar-carrito" type="submit">Agregar</button>
        </div>
    `
    modalComprarContenido.innerHTML = htmlModal
    // A CONTINUACION EL CODIGO PARA CREAR LOS BOTONES DE COLORES (PODRIA HACERSE EN UNA FUNCION APARTE)
    const contenedorColores = modalComprarContenido.querySelector(".modal-comprar__detalles-colores")
    const coloresUnicos = [...new Set(producto.variantes.map(p => p.color))]
    coloresUnicos.forEach(color => {
        const btnColor = document.createElement("button")
        btnColor.textContent = color
        btnColor.classList.add("modal-comprar__btn-color")
        btnColor.addEventListener("click", () => {
            generarTalles(producto, color)
            const elementosFiltrados = producto.variantes.filter(e => e.color === color)
            console.log("a continuacion el array para renderizar imagenes al cambiar color de producto")
            console.log(elementosFiltrados[0].imagenes)
            renderizarImagenes(elementosFiltrados[0].imagenes)
        })
        contenedorColores.appendChild(btnColor)
    })
    // LLAMADO A FUNCION QUE CARGA LOS TALLES
    generarTalles(producto, coloresUnicos[0])
    // LLAMADO A FUNCION QUE CARGA LAS FOTOS EN LA GALERIA
    console.log("imagenes para renderizar por defecto")
    console.log(producto.variantes[0].imagenes)
    renderizarImagenes(producto.variantes[0].imagenes)
    // A CONTINUACION EL CODIGO PARA VALIDAR DATOS Y AGREGAR AL CARRITO
    const btnAgregarCarrito = document.getElementById("btn-agregar-carrito")
    btnAgregarCarrito.addEventListener("click", () => {
        validarDatos(producto)
    })
}

    // FUNCION QUE GENERA LA GALERIA DE IMAGENES
function renderizarImagenes(listaImagenes){
    const pathBase = `/Ejercicios/E-Commerce/Imagenes/`
    const fotoPrincipal = document.getElementById("foto-principal")
    const miniaturas = document.getElementById("miniaturas")
    miniaturas.innerHTML = ""
    fotoPrincipal.src = pathBase + listaImagenes[0]
    listaImagenes.forEach(foto => {
        const miniatura = document.createElement("img")
        miniatura.src = pathBase + foto
        miniatura.classList.add("modal-comprar__miniatura")
        miniatura.addEventListener("click", () => {
            fotoPrincipal.src = pathBase + foto
        })
        miniaturas.appendChild(miniatura)
    })
}

    // FUNCION QUE GENERA LOS BOTONES DE LOS TALLES
function generarTalles(producto, color){
    const contenedorTalles = modalComprarContenido.querySelector(".modal-comprar__detalles-talles")
    const contenedorCantidad = modalComprarContenido.querySelector(".modal-comprar__stock-disponible")
    const inputCantidad = document.getElementById("cantidad-input")
    contenedorTalles.innerHTML = ""
    contenedorCantidad.innerHTML = ""
    inputCantidad.value = 1
    const elementosFiltrados = producto.variantes.filter(t => t.color === color)
    const talles = elementosFiltrados.map(p => p.talle)
    console.log("Los talles son: ", talles)
    seleccionActual.id = producto.id
    seleccionActual.nombre = producto.nombre
    seleccionActual.color = color
    seleccionActual.precio = transformarPrecio(producto)
    seleccionActual.talle = null
    elementosFiltrados.forEach(elemento => {
        const btnTalle = document.createElement("button")
        btnTalle.textContent = elemento.talle
        btnTalle.classList.add("modal-comprar__btn-talle")
        if(elemento.stock === 0){
            btnTalle.disabled = true
            btnTalle.classList.add("sin-stock")
        }
        btnTalle.addEventListener("click", () => {
            const todosLosTalles = contenedorTalles.querySelectorAll(".modal-comprar__btn-talle")
            todosLosTalles.forEach(btn => btn.classList.remove("selected"))
            btnTalle.classList.add("selected")
            seleccionActual.talle = elemento.talle
            console.log("Talle seleccionado: ", seleccionActual.talle)

            const inputCantidad = document.getElementById("cantidad-input")
            inputCantidad.max = elemento.stock
            inputCantidad.value = 1
            let avisoStock = `Stock disponible: ${elemento.stock}`
            contenedorCantidad.innerHTML = avisoStock
        })
        contenedorTalles.appendChild(btnTalle)
    })
    console.log(seleccionActual)
}

    // FUNCION QUE VALIDA LOS VALORES ANTES DE AGREGAR AL CARRITO
function validarDatos(producto){
    const inputCantidad = document.getElementById("cantidad-input")
    const cantidadSeleccionada = parseInt(inputCantidad.value)
    const varianteElegida = producto.variantes.find(v => v.color === seleccionActual.color && v.talle === seleccionActual.talle)
    if (!seleccionActual.talle) {
        alert("No se ha seleccionado el talle. Por favor, elija uno para continuar.")
        return
    }else if (cantidadSeleccionada <= 0 || isNaN(cantidadSeleccionada)) {
        alert("Ha ingresado un valor no válido. Por favor, ingrese un valor válido para continuar")
        return
    }else if (cantidadSeleccionada > varianteElegida.stock){
        alert("No hay stock suficiente para la cantidad solicitada.")
        return
    }else {
        seleccionActual.cantidad = cantidadSeleccionada
        console.log("Agregando al carrito: ", seleccionActual)
        agregarAlCarrito(seleccionActual)
    }
}

// ------------------------------- //
// DECLARACION DE VARIABLES //

let filtrosActivos = []
let ordenActivo = "orden"
let seleccionActual = {
    id: null,
    nombre: null,
    color: null,
    talle: null,
    cantidad: 1,
    precio: null,
}

// NOTA: Las variables relacionadas al DOM del catalogo se mantienen, las globales (header/modales) se quitan
const seccionCatalogo = document.querySelector(".main-catalogo__lista-productos")
console.log("Productos:", productos.length)
console.log(productos)
const modalFiltros = document.getElementById("modal-filtros")
const modalOrdenar = document.getElementById("modal-ordenar")
const modalComprar = document.getElementById("modal-comprar")
const btnAbrirFiltros = document.getElementById("btn-filtros-mobile")
const btnAbrirOrdenar = document.getElementById("btn-ordenar-mobile")
const btnCerrarFiltros = document.querySelector(".modal-filtros__cerrar")
const btnAplicarFiltros = document.querySelector(".modal-filtros__aplicar")
const btnCerrarOrdenar = document.querySelector(".modal-ordenar__cerrar")
const btnAplicarOrden = document.querySelector(".modal-ordenar__aplicar")
const btnCerrarModalComprar = document.querySelector(".modal-comprar__btn-cerrar")
const desplegableCategoria = document.querySelectorAll(".modal-filtros__seccion-categoria")
const contenedorCategoria = document.querySelectorAll(".modal-filtros__seccion-contenedor")
const checkBoxes = document.querySelectorAll(".modal-filtros__seccion-contenedor input")
const modalComprarContenido = document.querySelector(".modal-comprar__contenido")
const iconoDescuento = document.querySelector(".main-catalogo__producto-descuento")

// DECLARACION DE EVENTOS
btnAbrirFiltros.addEventListener("click", () => {
    modalFiltros.classList.add("active")
})
btnAbrirOrdenar.addEventListener("click", () => {
    modalOrdenar.classList.add("active")
})
btnCerrarFiltros.addEventListener("click", () => {
    modalFiltros.classList.remove("active")
    contenedorCategoria.forEach((contenedor) => {
        if(contenedor)
        contenedor.classList.remove("active")
    })
})
btnCerrarOrdenar.addEventListener("click", () => {
    modalOrdenar.classList.remove("active")
})
btnAplicarFiltros.addEventListener("click", () => {
    modalFiltros.classList.remove("active")
    contenedorCategoria.forEach((categoria) => {
        if(categoria)
        categoria.classList.remove("active")
    })
    let array = []
    checkBoxes.forEach((cb) => {
        if(cb.checked){
            array.push(cb.value)
        }
    })
    filtrosActivos = array
    actualizarProductos(array, ordenActivo)
})
btnAplicarOrden.addEventListener("click", () => {
    modalOrdenar.classList.remove("active")
})
desplegableCategoria.forEach((categoria) => {
    categoria.addEventListener("click", (e) => {
        e.stopPropagation()
        let contenido = categoria.querySelector(".modal-filtros__seccion-contenedor")
        if (contenido){
            contenido.classList.toggle("active")
        }
    })
})
contenedorCategoria.forEach((elemento) => {
    elemento.addEventListener("click", (e) =>{
        e.stopPropagation()
    })
})
btnAplicarOrden.addEventListener("click", () => {
    const seleccionado = document.querySelector('input[name="orden"]:checked')
    const tipoOrden = seleccionado ? seleccionado.value : null
    ordenActivo = tipoOrden
    if (tipoOrden) {
        actualizarProductos(filtrosActivos, tipoOrden);
    }
})
seccionCatalogo.addEventListener("click", (e) => {
    const tarjeta = e.target.closest(".main-catalogo__producto")
    if(!tarjeta) return
    const idProducto = parseInt(tarjeta.dataset.id)
    const productoParaModal = productos.find(p => (p.id === idProducto))
    console.log("Modal del producto: ", idProducto)
    if(!productoParaModal) return
    abrirModalCompra(productoParaModal)
})
btnCerrarModalComprar.addEventListener("click", () => {
    modalComprar.classList.remove("active")
})

// MAIN DEL JAVASCRIPT
let htmlAcumulado = ""
for (let i = 0; i < productos.length; i++){
    htmlAcumulado += generarHTMLCard(productos[i])
}
seccionCatalogo.innerHTML = htmlAcumulado
