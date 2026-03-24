    // FUNCION QUE ACTUALIZA EL CONTADOR DE PRODUCTOS EN EL CARRITO DE COMPRAS
function actualizarContador(){
    const contenedorContador = document.querySelector(".header__contador-carrito")
    if(!contenedorContador) return
    let contadorProductos = 0
    productosEnCarrito.forEach(producto => {
        contadorProductos += producto.cantidad
    })
    contenedorContador.innerHTML = contadorProductos
}

// FUNCION QUE FORMATEA EL PRECIO A VALOR DE LA MONEDA
function formatearPrecio(precio) {
    return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0
    }).format(precio);
}

// FUNCION QUE CALCULA EL PRECIO FINAL CONSIDERANDO EL DESCUENTO DEL PRODUCTO SIN FORMATO DE DINERO
function transformarPrecio(producto){
    let preciosNumero = Math.round(producto.precioOriginal * (1 - producto.descuento/100))
    return preciosNumero
}

// FUNCION QUE CALCULA EL PRECIO FINAL CON FORMATO (Global helper)
function calcularPrecioFinal(producto){
    let precioSinFormato = Math.round(producto.precioOriginal * (1 - producto.descuento/100))
    return formatearPrecio(precioSinFormato)
}

// FUNCION QUE BUSCA UN PRODUCTO EN LA BASE DE DATOS GLOBAL
function buscadorDeProducto(producto) {
    // Asumimos que 'productos' existe globalmente desde productos.js
    return typeof productos !== 'undefined' ? productos.find(p => p.id === producto.id) : null
}

// FUNCION QUE AGREGA EL PRODUCTO AL CARRITO DE COMPRAS
function agregarAlCarrito(datosNuevos) {
    let itemExistente = productosEnCarrito.find(item => 
        item.id === datosNuevos.id && 
        item.color === datosNuevos.color && 
        item.talle === datosNuevos.talle
    )
    if (itemExistente) {
        itemExistente.cantidad += datosNuevos.cantidad
    } else {
        // Usamos {...objeto} para crear una copia nueva y que no se bugee
        productosEnCarrito.push({ ...datosNuevos });
    }
    alert("¡Producto agregado al carrito con éxito! ✨")
    actualizarContador()
    guardarEnCarrito()
}

// FUNCION QUE ELIMINA PRODUCTOS DEL CARRITO
function eliminarDelCarrito(producto){
    productosEnCarrito = productosEnCarrito.filter(item => {
        return item.id !== producto.id || item.color !== producto.color || item.talle !== producto.talle
    })
    renderizarCarrito()
    actualizarContador()
    guardarEnCarrito()
    const btnFinalizar = document.querySelector(".modal-carrito__btn-finalizar")
    if(btnFinalizar && productosEnCarrito.length === 0){
        btnFinalizar.disabled = true
    }
}

// FUNCION QUE RENDERIZA EL CARRITO DE COMPRAS
function renderizarCarrito(){
    if (!modalCarrito) return;
    
    const contenidoCarrito = modalCarrito.querySelector(".modal-carrito__contenido")
    const totalCompra = modalCarrito.querySelector(".modal-carrito__total-compra")
    const btnFinalizar = modalCarrito.querySelector(".modal-carrito__btn-finalizar")
    
    contenidoCarrito.innerHTML = ""
    let totalGeneral = 0
    
    if(productosEnCarrito.length === 0) {
        contenidoCarrito.innerHTML = "<p>Tu carrito está vacío</p>"
        if(btnFinalizar) btnFinalizar.disabled = true
        if(totalCompra) totalCompra.innerHTML = ""
        return
    } else {
        if(btnFinalizar) btnFinalizar.disabled = false
    }
    
    productosEnCarrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad
        totalGeneral += subtotal
        const fila = document.createElement("div")
        fila.classList.add("modal-carrito__item")
        fila.innerHTML = `
            <p class="modal-carrito__item-nombre"><strong>${producto.nombre}</strong></p>
            <p class="modal-carrito__item-talle-color">Talle: ${producto.talle} | Color: ${producto.color}</p>
            <p class="modal-carrito__item-precio">${producto.cantidad} x $${producto.precio} = <strong>$${subtotal}</strong></p>
            <button class="modal-carrito__btn-eliminar" data-id="${producto.id}" data-talle="${producto.talle}" data-color="${producto.color}">
                🗑️ Eliminar
            </button>
            <hr>
        `
        const btnEliminar = fila.querySelector(".modal-carrito__btn-eliminar")
        btnEliminar.addEventListener("click", () =>{
            eliminarDelCarrito(producto)
        })
        contenidoCarrito.appendChild(fila)
    })
    if(totalCompra) totalCompra.innerHTML = `Total de la compra: $${totalGeneral}`
}

// FUNCION QUE LIMPIA TODOS LOS ELEMENTOS DEL CARRITO
function vaciarCarrito(){
    productosEnCarrito = []
    renderizarCarrito()
    actualizarContador()
    guardarEnCarrito()
}

// FUNCION QUE GUARDA EL CONTENIDO DEL CARRITO EN LOCALSTORAGE
function guardarEnCarrito() {
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}

// FUNCION QUE CIERRA EL MODAL DEL CARRITO
function cerrarModalCarrito(){
    if(modalCarrito) modalCarrito.classList.remove("active")
}

// FUNCION QUE PIDE DATOS DEL USUARIO Y CONFIRMA LA COMPRA
function finalizarCompra(){
    const resumenProductos = document.querySelector(".resumen-productos")
    const resumenTotal = document.querySelector(".resumen-total")
    if (!resumenProductos || !resumenTotal) return;

    resumenProductos.innerHTML = ""
    let totalCompra = 0
    productosEnCarrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad
        // Intentamos buscar el producto completo para la imagen, si no existe usamos un placeholder
        const productoActual = buscadorDeProducto(producto)
        const pathBase = `/Ejercicios/E-Commerce/Imagenes/`
        const imagenSrc = productoActual ? pathBase + productoActual.variantes[0].imagenes[0] : "/Ejercicios/E-Commerce/logo.png"
        
        const imagen = document.createElement("img")
        const fila = document.createElement("div")
        totalCompra += subtotal
        imagen.src = imagenSrc
        imagen.classList.add("seccion-checkout__item-imagen")
        fila.classList.add("seccion-checkout__item")
        fila.innerHTML = `
            <p class="seccion-checkout__item-nombre"><strong>${producto.nombre}</strong></p>
            <p class="seccion-checkout__item-talle-color">Talle: ${producto.talle} | Color: ${producto.color}</p>
            <p class="seccion-checkout__item-precio">${producto.cantidad} x $${producto.precio} = <strong>$${subtotal}</strong></p>
        `
        fila.prepend(imagen)
        resumenProductos.appendChild(fila)
    })
    resumenTotal.innerHTML = `Total de la compra: $${totalCompra}`
}

// FUNCIONES DE AUTENTICACION
function cerrarModalLogIn(){
    if(modalLogIn) {
        modalLogIn.classList.remove("active")
        const form = modalLogIn.querySelector("form")
        if(form) form.reset()
    }
}

function actualizarInterfazLogin() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"))
    const logInIcon = document.getElementById("header__icon-login")
    if (!logInIcon) return;

    if (usuario) {
        logInIcon.innerHTML = "logout"
        logInIcon.title = "Cerrar Sesión"
        logInIcon.classList.add("btn-logout")
        logInIcon.onclick = () => {
            cerrarSesion()
        }
    } else {
        logInIcon.innerHTML = "login"
        logInIcon.title = "Iniciar Sesión"
        logInIcon.classList.remove("btn-logout")
        logInIcon.onclick = () => {
            if(modalLogIn) modalLogIn.classList.add("active")
        }
    }
}

function cerrarSesion() {
    localStorage.removeItem("usuarioLogueado")
    alert("Has cerrado sesión correctamente.")
    actualizarInterfazLogin()
}


// ------------------------------- //
// DECLARACION DE VARIABLES //

const menuButton = document.getElementById("header__menu-button")
const nav = document.querySelector(".header__nav")
const categoriasButton = document.getElementById("header__nav-item-categoria")
const subMenu = document.querySelector(".header__submenu")
const subMenuItems = document.querySelectorAll(".header__submenu-item")
const modalCarrito = document.getElementById("modal-carrito")
const modalLogIn = document.getElementById("modal-log-in")
const carritoCompras = document.getElementById("header__icon-cart")
const btnVaciarCarrito = document.querySelector(".modal-carrito__btn-vaciar")
const btnFinalizar = document.querySelector(".modal-carrito__btn-finalizar")
const formularioLogin = document.querySelector(".modal-log-in__formulario")
const btnCancelarLogIn = document.querySelector(".btn-login-cancelar")

// VARIABLES CHECKOUT
const seccionCheckout = document.getElementById("seccion-checkout")
const btnVolverAlCatalogo = document.querySelector(".btn-volver-carrito")
const formularioCheckout = document.querySelector(".seccion-checkout__formulario")
const btnConfirmarCheckout = document.querySelector(".btn-confirmar")
const seccionMain = document.querySelector(".main") // Para ocultar el contenido principal al ir al checkout

const usuarioPrueba = {
    email: "admin@aat.com",
    password: "1234"
}

let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || []
actualizarContador()
actualizarInterfazLogin()

// DECLARACION DE EVENTOS

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active")
    if(!nav.classList.contains("active")){
        const todosLosMenus = nav.querySelectorAll(".header__submenu, .header__submenu-anidado")
        todosLosMenus.forEach(sub => {
            sub.classList.remove("active")
        })
    }
})

categoriasButton.addEventListener("click", (e) => {
    e.stopPropagation() // ← Evita que el click suba a categoriasButton
    subMenu.classList.toggle("active")
})

subMenuItems.forEach(item => { // ← forEach para cada item
    item.addEventListener("click", (e) => {
        e.stopPropagation(); // ← Evita que el click suba a categoriasButton
        item.querySelector(".header__submenu-anidado").classList.toggle("active")
    })
})

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        cerrarModalLogIn()
        cerrarModalCarrito()
    }
})

// EVENTOS GLOBALES (Carrito, Login, Checkout)
if (carritoCompras) {
    carritoCompras.addEventListener("click", () => {
        if(modalCarrito) {
            modalCarrito.classList.toggle("active")
            renderizarCarrito()
        }
    })
}

if (modalCarrito) {
    modalCarrito.addEventListener("click", (event) => {
        if(event.target === modalCarrito) {
            cerrarModalCarrito()
        }
    })
}

if (btnVaciarCarrito) {
    btnVaciarCarrito.addEventListener("click", () => vaciarCarrito())
}

if (modalLogIn) {
    modalLogIn.addEventListener("click", (e) => {
        if (e.target === modalLogIn) cerrarModalLogIn()
    })
}

if (btnCancelarLogIn) {
    btnCancelarLogIn.addEventListener("click", () => cerrarModalLogIn())
}

if (formularioLogin) {
    formularioLogin.addEventListener("submit", (e) => {
        e.preventDefault()
        const datos = new FormData(e.target)
        const emailIngresado = datos.get("email")
        const passIngresada = datos.get("password")
        if (emailIngresado === usuarioPrueba.email && passIngresada === usuarioPrueba.password) {
            localStorage.setItem("usuarioLogueado", JSON.stringify({ email: emailIngresado }))
            alert("¡Bienvenido de nuevo!")
            cerrarModalLogIn()
            actualizarInterfazLogin()
        } else {
            alert("Usuario o contraseña incorrectos. Intente nuevamente.");
        }
    })
}

if (btnFinalizar) {
    btnFinalizar.addEventListener("click", () => {
        if(seccionMain) seccionMain.classList.add("hidden")
        cerrarModalCarrito()
        if(seccionCheckout) {
            seccionCheckout.classList.remove("hidden")
            finalizarCompra()
        }
    })
}

if (btnVolverAlCatalogo) {
    btnVolverAlCatalogo.addEventListener("click", () => {
        if(seccionMain) seccionMain.classList.remove("hidden")
        if(seccionCheckout) seccionCheckout.classList.add("hidden")
    })
}

if (formularioCheckout) {
    formularioCheckout.addEventListener("submit", (e) =>{
        e.preventDefault()
        btnConfirmarCheckout.disabled = true
        btnConfirmarCheckout.textContent = "Procesando..."
        setTimeout(() => {
            vaciarCarrito() // Usa la funcion vaciarCarrito que tambien guarda y actualiza
            alert(`¡Pago Aprobado! Muchas gracias por su compra.`)
            formularioCheckout.reset()
            btnConfirmarCheckout.textContent = "Confirmar Compra"
            if(seccionCheckout) seccionCheckout.classList.add("hidden")
            if(seccionMain) seccionMain.classList.remove("hidden")
            btnConfirmarCheckout.disabled = false
        }, 3000)
    })
}