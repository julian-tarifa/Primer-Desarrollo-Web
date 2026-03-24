function calcularPrecioFinal(producto){
    let precioSinFormato = Math.round(producto.precioOriginal * (1 - producto.descuento/100))
    return formatearPrecio(precioSinFormato)
    
}

function formatearPrecio(precio) {
    return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0
    }).format(precio);
}

// FUNCION QUE INSERTA LOS PRODUCTOS EN OFERTA AL HTML
function generarHTMLCard(productoOferta){
    let rutaImagen = "../Imagenes/" + productoOferta.variantes[0].imagenes[0]
    return `
    <article class="main-ofertas__producto">
        <div class="main-ofertas__producto-contenedor-imagen">
            <img class="main-ofertas__producto-imagen-portada" src="${rutaImagen}" alt="Imagen de ${productoOferta.nombre}">
            <span class="main-ofertas__producto-descuento">-${productoOferta.descuento}%</span>
        </div>
        <div class="main-ofertas__producto-info">
            <div class="main-ofertas__producto-precios">
                <span class="main-ofertas__precio-anterior">${formatearPrecio(productoOferta.precioOriginal)}</span>
                <span class="main-ofertas__precio-con-descuento">${calcularPrecioFinal(productoOferta)}</span>
            </div>
            <h3 class="main-ofertas__producto-nombre">${productoOferta.nombre}</h3>
            <span class="main-ofertas__producto-categoria">${productoOferta.categoria}</span>
            <span class="main-ofertas__producto-genero">${productoOferta.variantes[0].genero}</span>
        </div>
    </article>
    `
}

const seccionOfertas = document.querySelector(".main-ofertas__lista-productos")
const productosOferta = productos.filter(producto => producto.descuento > 0)
console.log("Productos en oferta:", productosOferta.length)
console.log(productosOferta)

let htmlAcumulado = ""
for (let i = 0; i < productosOferta.length; i++){
    htmlAcumulado += generarHTMLCard(productosOferta[i])
}
seccionOfertas.innerHTML = htmlAcumulado

