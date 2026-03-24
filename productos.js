const producto1 = {
    id: 1,
    sku: "JRD-CAM-RT3-001",
    nombre: "Campera Jordan Essentials",
    precioOriginal: 120000,
    descuento: 20,
    ofertaHasta: "2025-02-27",
    categoria: "Indumentaria",
    subcategoria: "Campera",
    marca: "Jordan",
    peso: "780g",
    descripcion: "Esta es una campera ideal para el invierno, con cierres sellados térmicamente y con capucha desmontable",
    material: "100% Poliéster con relleno sintético",
    variantes: [
        { genero: "Hombre", talle: "S", color: "Marron/Blanco/Negro", stock: 2, imagenes: ["campera-jordan-essentials-h-detalle-mbn.jpg", "campera-jordan-essentials-h-espalda-mbn.jpg", "campera-jordan-essentials-h-frente-mbn.jpg"] },
        { genero: "Hombre", talle: "M", color: "Marron/Blanco/Negro", stock: 5, imagenes: ["campera-jordan-essentials-h-detalle-mbn.jpg", "campera-jordan-essentials-h-espalda-mbn.jpg", "campera-jordan-essentials-h-frente-mbn.jpg"] },
        { genero: "Hombre", talle: "L", color: "Marron/Blanco/Negro", stock: 10, imagenes: ["campera-jordan-essentials-h-detalle-mbn.jpg", "campera-jordan-essentials-h-espalda-mbn.jpg", "campera-jordan-essentials-h-frente-mbn.jpg"] },
        { genero: "Hombre", talle: "XL", color: "Marron/Blanco/Negro", stock: 7, imagenes: ["campera-jordan-essentials-h-detalle-mbn.jpg", "campera-jordan-essentials-h-espalda-mbn.jpg", "campera-jordan-essentials-h-frente-mbn.jpg"] },
    ]
};

const producto2 = {
    id: 2,
    sku: "JRD-ZAP-AJL1-H-001",
    nombre: "Air Jordan 1 Low Hombre",
    precioOriginal: 240000,
    descuento: 0,
    ofertaHasta: "",
    categoria: "Calzado",
    subcategoria: "Zapatilla",
    marca: "Jordan",
    peso: "420g",
    descripcion: "Inspirados en los originales que se lanzaron en 1985, los Air Jordan 1 Low ofrecen un estilo clásico impecable que se ve familiar, pero siempre viene renovado.",
    material: "Cuero auténtico y suela de goma sólida",
    variantes: [
        { genero: "Hombre", talle: "8", color: "Negro/Blanco/Gris", stock: 1, imagenes: ["air-jordan-1-low-h-perfil-color-nbg.jpg", "air-jordan-1-low-h-superior-color-nbg.jpg", "air-jordan-1-low-h-atras-color-nbg.jpg"] },
        { genero: "Hombre", talle: "8.5", color: "Negro/Blanco/Gris", stock: 0, imagenes: ["air-jordan-1-low-h-perfil-color-nbg.jpg", "air-jordan-1-low-h-superior-color-nbg.jpg", "air-jordan-1-low-h-atras-color-nbg.jpg"] },
        { genero: "Hombre", talle: "9", color: "Negro/Blanco/Gris", stock: 4, imagenes: ["air-jordan-1-low-h-perfil-color-nbg.jpg", "air-jordan-1-low-h-superior-color-nbg.jpg", "air-jordan-1-low-h-atras-color-nbg.jpg"] },
        { genero: "Hombre", talle: "9.5", color: "Negro/Blanco/Gris", stock: 3, imagenes: ["air-jordan-1-low-h-perfil-color-nbg.jpg", "air-jordan-1-low-h-superior-color-nbg.jpg", "air-jordan-1-low-h-atras-color-nbg.jpg"] },
        { genero: "Hombre", talle: "10", color: "Negro/Blanco/Gris", stock: 9, imagenes: ["air-jordan-1-low-h-perfil-color-nbg.jpg", "air-jordan-1-low-h-superior-color-nbg.jpg", "air-jordan-1-low-h-atras-color-nbg.jpg"] },
        { genero: "Hombre", talle: "10.5", color: "Negro/Blanco/Gris", stock: 4, imagenes: ["air-jordan-1-low-h-perfil-color-nbg.jpg", "air-jordan-1-low-h-superior-color-nbg.jpg", "air-jordan-1-low-h-atras-color-nbg.jpg"] },
        { genero: "Hombre", talle: "11", color: "Negro/Blanco/Gris", stock: 5, imagenes: ["air-jordan-1-low-h-perfil-color-nbg.jpg", "air-jordan-1-low-h-superior-color-nbg.jpg", "air-jordan-1-low-h-atras-color-nbg.jpg"] },
        { genero: "Hombre", talle: "11.5", color: "Negro/Blanco/Gris", stock: 3, imagenes: ["air-jordan-1-low-h-perfil-color-nbg.jpg", "air-jordan-1-low-h-superior-color-nbg.jpg", "air-jordan-1-low-h-atras-color-nbg.jpg"] },
        { genero: "Hombre", talle: "8", color: "Vela/Gris/Cáñamo/Rojo", stock: 0, imagenes: ["air-jordan-1-low-h-perfil-color-vgcr.jpg", "air-jordan-1-low-h-superior-color-vgcr.jpg", "air-jordan-1-low-h-atras-color-vgcr.jpg"] },
        { genero: "Hombre", talle: "8.5", color: "Vela/Gris/Cáñamo/Rojo", stock: 2, imagenes: ["air-jordan-1-low-h-perfil-color-vgcr.jpg", "air-jordan-1-low-h-superior-color-vgcr.jpg", "air-jordan-1-low-h-atras-color-vgcr.jpg"] },
        { genero: "Hombre", talle: "9", color: "Vela/Gris/Cáñamo/Rojo", stock: 4, imagenes: ["air-jordan-1-low-h-perfil-color-vgcr.jpg", "air-jordan-1-low-h-superior-color-vgcr.jpg", "air-jordan-1-low-h-atras-color-vgcr.jpg"] },
        { genero: "Hombre", talle: "9.5", color: "Vela/Gris/Cáñamo/Rojo", stock: 3, imagenes: ["air-jordan-1-low-h-perfil-color-vgcr.jpg", "air-jordan-1-low-h-superior-color-vgcr.jpg", "air-jordan-1-low-h-atras-color-vgcr.jpg"] },
        { genero: "Hombre", talle: "10", color: "Vela/Gris/Cáñamo/Rojo", stock: 8, imagenes: ["air-jordan-1-low-h-perfil-color-vgcr.jpg", "air-jordan-1-low-h-superior-color-vgcr.jpg", "air-jordan-1-low-h-atras-color-vgcr.jpg"] },
        { genero: "Hombre", talle: "10.5", color: "Vela/Gris/Cáñamo/Rojo", stock: 5, imagenes: ["air-jordan-1-low-h-perfil-color-vgcr.jpg", "air-jordan-1-low-h-superior-color-vgcr.jpg", "air-jordan-1-low-h-atras-color-vgcr.jpg"] },
    ]
};

const producto3 = {
    id: 3,
    sku: "JRD-ZAP-AJL1-M-001",
    nombre: "Air Jordan 1 Low SE Mujer",
    precioOriginal: 275000,
    descuento: 0,
    ofertaHasta: "",
    categoria: "Calzado",
    subcategoria: "Zapatilla",
    marca: "Jordan",
    peso: "420g",
    descripcion: "Siempre a la moda, siempre con estilo. Al igual que los originales que debutaron en el 85, esta edición especial de los AJ1 Low ofrece un look clásico e impecable, y una comodidad duradera.",
    material: "Cuero auténtico, entresuela de espuma suave y suela de goma sólida",
    variantes: [
        { genero: "Mujer", talle: "6", color: "Azul gastado/Marrón claro goma/Vela/Blanco", stock: 2, imagenes: ["air-jordan-1-low-se-m-perfil-color-amvb.jpg", "air-jordan-1-low-se-m-superior-color-amvb.jpg", "air-jordan-1-low-se-m-atras-color-amvb.jpg"] },
        { genero: "Mujer", talle: "6.5", color: "Azul gastado/Marrón claro goma/Vela/Blanco", stock: 1, imagenes: ["air-jordan-1-low-se-m-perfil-color-amvb.jpg", "air-jordan-1-low-se-m-superior-color-amvb.jpg", "air-jordan-1-low-se-m-atras-color-amvb.jpg"] },
        { genero: "Mujer", talle: "7", color: "Azul gastado/Marrón claro goma/Vela/Blanco", stock: 0, imagenes: ["air-jordan-1-low-se-m-perfil-color-amvb.jpg", "air-jordan-1-low-se-m-superior-color-amvb.jpg", "air-jordan-1-low-se-m-atras-color-amvb.jpg"] },
        { genero: "Mujer", talle: "7.5", color: "Azul gastado/Marrón claro goma/Vela/Blanco", stock: 0, imagenes: ["air-jordan-1-low-se-m-perfil-color-amvb.jpg", "air-jordan-1-low-se-m-superior-color-amvb.jpg", "air-jordan-1-low-se-m-atras-color-amvb.jpg"] },
        { genero: "Mujer", talle: "8", color: "Azul gastado/Marrón claro goma/Vela/Blanco", stock: 4, imagenes: ["air-jordan-1-low-se-m-perfil-color-amvb.jpg", "air-jordan-1-low-se-m-superior-color-amvb.jpg", "air-jordan-1-low-se-m-atras-color-amvb.jpg"] },
        { genero: "Mujer", talle: "8.5", color: "Azul gastado/Marrón claro goma/Vela/Blanco", stock: 3, imagenes: ["air-jordan-1-low-se-m-perfil-color-amvb.jpg", "air-jordan-1-low-se-m-superior-color-amvb.jpg", "air-jordan-1-low-se-m-atras-color-amvb.jpg"] },
        { genero: "Mujer", talle: "9", color: "Azul gastado/Marrón claro goma/Vela/Blanco", stock: 3, imagenes: ["air-jordan-1-low-se-m-perfil-color-amvb.jpg", "air-jordan-1-low-se-m-superior-color-amvb.jpg", "air-jordan-1-low-se-m-atras-color-amvb.jpg"] },
        { genero: "Mujer", talle: "9.5", color: "Azul gastado/Marrón claro goma/Vela/Blanco", stock: 3, imagenes: ["air-jordan-1-low-se-m-perfil-color-amvb.jpg", "air-jordan-1-low-se-m-superior-color-amvb.jpg", "air-jordan-1-low-se-m-atras-color-amvb.jpg"] },
        { genero: "Mujer", talle: "7", color: "Marrón verdoso claro/Cáñamo/Vela", stock: 7, imagenes: ["air-jordan-1-low-se-m-perfil-color-mcv.jpg", "air-jordan-1-low-se-m-superior-color-mcv.jpg", "air-jordan-1-low-se-m-atras-color-mcv.jpg"] },
        { genero: "Mujer", talle: "7.5", color: "Marrón verdoso claro/Cáñamo/Vela", stock: 12, imagenes: ["air-jordan-1-low-se-m-perfil-color-mcv.jpg", "air-jordan-1-low-se-m-superior-color-mcv.jpg", "air-jordan-1-low-se-m-atras-color-mcv.jpg"] },
        { genero: "Mujer", talle: "8", color: "Marrón verdoso claro/Cáñamo/Vela", stock: 9, imagenes: ["air-jordan-1-low-se-m-perfil-color-mcv.jpg", "air-jordan-1-low-se-m-superior-color-mcv.jpg", "air-jordan-1-low-se-m-atras-color-mcv.jpg"] },
        { genero: "Mujer", talle: "8.5", color: "Marrón verdoso claro/Cáñamo/Vela", stock: 5, imagenes: ["air-jordan-1-low-se-m-perfil-color-mcv.jpg", "air-jordan-1-low-se-m-superior-color-mcv.jpg", "air-jordan-1-low-se-m-atras-color-mcv.jpg"] },
        { genero: "Mujer", talle: "9", color: "Marrón verdoso claro/Cáñamo/Vela", stock: 4, imagenes: ["air-jordan-1-low-se-m-perfil-color-mcv.jpg", "air-jordan-1-low-se-m-superior-color-mcv.jpg", "air-jordan-1-low-se-m-atras-color-mcv.jpg"] },
        { genero: "Mujer", talle: "9.5", color: "Marrón verdoso claro/Cáñamo/Vela", stock: 1, imagenes: ["air-jordan-1-low-se-m-perfil-color-mcv.jpg", "air-jordan-1-low-se-m-superior-color-mcv.jpg", "air-jordan-1-low-se-m-atras-color-mcv.jpg"] },
    ]
};

const producto4 = {
    id: 4,
    sku: "JRD-PAN-JBF-H-001",
    nombre: "Jordan Brooklyn Fleece",
    precioOriginal: 130000,
    descuento: 20,
    ofertaHasta: "2025-02-27",
    categoria: "Indumentaria",
    subcategoria: "Pantalón",
    marca: "Jordan",
    peso: "600g",
    descripcion: "Tersos por fuera, con bucles sin cepillar por dentro, estos pantalones de French Terry de densidad media son suficientemente transpirables para usarlos todo el año.",
    material: "Cuerpo: 80% algodón, 20% poliéster. Interior de los bolsillos: 100% algodón.",
    variantes: [
        { genero: "Hombre", talle: "S", color: "Carbono jaspeado/Blanco", stock: 10, imagenes: ["jordan-brooklyn-fleece-h-frente.webp", "jordan-brooklyn-fleece-h-reverso.webp", "jordan-brooklyn-fleece-h-detalle.webp"] },
        { genero: "Hombre", talle: "M", color: "Carbono jaspeado/Blanco", stock: 8, imagenes: ["jordan-brooklyn-fleece-h-frente.webp", "jordan-brooklyn-fleece-h-reverso.webp", "jordan-brooklyn-fleece-h-detalle.webp"] },
        { genero: "Hombre", talle: "L", color: "Carbono jaspeado/Blanco", stock: 5, imagenes: ["jordan-brooklyn-fleece-h-frente.webp", "jordan-brooklyn-fleece-h-reverso.webp", "jordan-brooklyn-fleece-h-detalle.webp"] },
    ]
};

const producto5 = {
    id: 5,
    sku: "NIKE-CAL-NU-M-001",
    nombre: "Nike Universa",
    precioOriginal: 200000,
    descuento: 20,
    ofertaHasta: "2025-02-27",
    categoria: "Indumentaria",
    subcategoria: "Pantalón",
    marca: "Nike",
    peso: "400g",
    descripcion: "Mejoramos el diseño de nuestros Calzas Universa para ofrecer un acabado suave y ayudar a disimular el sudor, gracias a su parte frontal sin costuras y tecnología que oculta la humedad.",
    material: "77% poliéster, 23% spandex",
    variantes: [
        { genero: "Mujer", talle: "S", color: "Negro/Antracita/Gris humo oscuro", stock: 1, imagenes: ["nike-universa-m-frente-negro.webp", "nike-universa-m-reverso-negro.webp", "nike-universa-m-detalle-negro.webp"] },
        { genero: "Mujer", talle: "M", color: "Negro/Antracita/Gris humo oscuro", stock: 8, imagenes: ["nike-universa-m-frente-negro.webp", "nike-universa-m-reverso-negro.webp", "nike-universa-m-detalle-negro.webp"] },
        { genero: "Mujer", talle: "L", color: "Negro/Antracita/Gris humo oscuro", stock: 3, imagenes: ["nike-universa-m-frente-negro.webp", "nike-universa-m-reverso-negro.webp", "nike-universa-m-detalle-negro.webp"] },
        { genero: "Mujer", talle: "S", color: "Azul marino/Obsidiana oscuro", stock: 4, imagenes: ["nike-universa-m-frente-azul.avif", "nike-universa-m-reverso-azul.avif", "nike-universa-m-detalle-azul.avif"] },
        { genero: "Mujer", talle: "M", color: "Azul marino/Obsidiana oscuro", stock: 9, imagenes: ["nike-universa-m-frente-azul.avif", "nike-universa-m-reverso-azul.avif", "nike-universa-m-detalle-azul.avif"] },
        { genero: "Mujer", talle: "L", color: "Azul marino/Obsidiana oscuro", stock: 2, imagenes: ["nike-universa-m-frente-azul.avif", "nike-universa-m-reverso-azul.avif", "nike-universa-m-detalle-azul.avif"] },
        { genero: "Mujer", talle: "S", color: "Verde marino/Verde menta", stock: 2, imagenes: ["nike-universa-m-frente-verde.avif", "nike-universa-m-reverso-verde.avif", "nike-universa-m-detalle-verde.avif"] },
        { genero: "Mujer", talle: "M", color: "Verde marino/Verde menta", stock: 6, imagenes: ["nike-universa-m-frente-verde.avif", "nike-universa-m-reverso-verde.avif", "nike-universa-m-detalle-verde.avif"] },
        { genero: "Mujer", talle: "L", color: "Verde marino/Verde menta", stock: 3, imagenes: ["nike-universa-m-frente-verde.avif", "nike-universa-m-reverso-verde.avif", "nike-universa-m-detalle-verde.avif"] },
    ]
};

const producto6 = {
    id: 6,
    sku: "NIKE-CAM-SK-H-001",
    nombre: "South Korea 2004 Total 90 Retro",
    precioOriginal: 210000,
    descuento: 0,
    ofertaHasta: "",
    categoria: "Indumentaria",
    subcategoria: "Campera",
    marca: "Nike",
    peso: "400g",
    descripcion: "Esta chaqueta Reissue parece sacada directamente de la bóveda. Con colores característicos, logotipos y detalles vintage, esta nueva versión rinde homenaje a Corea del Sur y a la colección Total 90 que Nike fabricó en 2004.",
    material: "Cuerpo/Forro: 100% poliéster.",
    variantes: [
        { genero: "Hombre", talle: "S", color: "Negro/Blanco/Láser", stock: 1, imagenes: ["south-korean-total-90-h-frente.webp", "south-korean-total-90-h-reverso.webp", "south-korean-total-90-h-detalle.webp"] },
        { genero: "Hombre", talle: "M", color: "Negro/Blanco/Láser", stock: 3, imagenes: ["south-korean-total-90-h-frente.webp", "south-korean-total-90-h-reverso.webp", "south-korean-total-90-h-detalle.webp"] },
        { genero: "Hombre", talle: "L", color: "Negro/Blanco/Láser", stock: 2, imagenes: ["south-korean-total-90-h-frente.webp", "south-korean-total-90-h-reverso.webp", "south-korean-total-90-h-detalle.webp"] },
        { genero: "Hombre", talle: "XL", color: "Negro/Blanco/Láser", stock: 5, imagenes: ["south-korean-total-90-h-frente.webp", "south-korean-total-90-h-reverso.webp", "south-korean-total-90-h-detalle.webp"] },
    ]
};

const producto7 = {
    id: 7,
    sku: "NIKE-CAM-GSW-H-001",
    nombre: "Golden State Warriors Courtside",
    precioOriginal: 200000,
    descuento: 35,
    ofertaHasta: "2025-03-14",
    categoria: "Indumentaria",
    subcategoria: "Campera",
    marca: "Nike",
    peso: "430g",
    descripcion: "Forrada para mayor abrigo, esta campera tipo anorak de los Warriors es esa prenda para todo y en cualquier lugar que vas a querer tener a mano. Su calce oversize te permite sumar capas en los días frescos o usarla sobre una remera cuando sube la temperatura.",
    material: "Cuerpo/Forro: 100% poliéster.",
    variantes: [
        { genero: "Hombre", talle: "S", color: "Azul enérgico/Vela", stock: 2, imagenes: ["golden-state-warriors-h-frente.png", "golden-state-warriors-h-reverso.png", "golden-state-warriors-h-detalle.png"] },
        { genero: "Hombre", talle: "M", color: "Azul enérgico/Vela", stock: 4, imagenes: ["golden-state-warriors-h-frente.png", "golden-state-warriors-h-reverso.png", "golden-state-warriors-h-detalle.png"] },
        { genero: "Hombre", talle: "L", color: "Azul enérgico/Vela", stock: 4, imagenes: ["golden-state-warriors-h-frente.png", "golden-state-warriors-h-reverso.png", "golden-state-warriors-h-detalle.png"] },
        { genero: "Hombre", talle: "XL", color: "Azul enérgico/Vela", stock: 15, imagenes: ["golden-state-warriors-h-frente.png", "golden-state-warriors-h-reverso.png", "golden-state-warriors-h-detalle.png"] },
        { genero: "Hombre", talle: "XXL", color: "Azul enérgico/Vela", stock: 2, imagenes: ["golden-state-warriors-h-frente.png", "golden-state-warriors-h-reverso.png", "golden-state-warriors-h-detalle.png"] },
    ]
};

const producto8 = {
    id: 8,
    sku: "NIKE-PAN-JFF-M-001",
    nombre: "Jordan Flight Fleece",
    precioOriginal: 170000,
    descuento: 0,
    ofertaHasta: "",
    categoria: "Indumentaria",
    subcategoria: "Pantalón",
    marca: "Nike",
    peso: "350g",
    descripcion: "El tejido Fleece supersuave convierte estos pantalones holgados en unos nuevos favoritos informales. Además, los detalles premium, como la cintura elástica, el cordón de ajuste con punteras metálicas y el parche tonal, van a hacer que te olvides de los demás joggers de tu cajón.",
    material: "85% algodón, 15% poliéster.",
    variantes: [
        { genero: "Mujer", talle: "S", color: "Blanco", stock: 2, imagenes: ["jordan-flight-fleece-m-frente.png", "jordan-flight-fleece-m-reverso.png", "jordan-flight-fleece-m-detalle.png"] },
        { genero: "Mujer", talle: "M", color: "Blanco", stock: 4, imagenes: ["jordan-flight-fleece-m-frente.png", "jordan-flight-fleece-m-reverso.png", "jordan-flight-fleece-m-detalle.png"] },
        { genero: "Mujer", talle: "L", color: "Blanco", stock: 4, imagenes: ["jordan-flight-fleece-m-frente.png", "jordan-flight-fleece-m-reverso.png", "jordan-flight-fleece-m-detalle.png"] },
        { genero: "Mujer", talle: "XL", color: "Blanco", stock: 15, imagenes: ["jordan-flight-fleece-m-frente.png", "jordan-flight-fleece-m-reverso.png", "jordan-flight-fleece-m-detalle.png"] },
    ]
};

const producto9 = {
    id: 9,
    sku: "NIKE-PAN-SCF-M-001",
    nombre: "Nike Sportswear Club Fleece",
    precioOriginal: 125000,
    descuento: 0,
    ofertaHasta: "",
    categoria: "Indumentaria",
    subcategoria: "Pantalón",
    marca: "Nike",
    peso: "350g",
    descripcion: "Los joggers Club Fleece le gustan a todo el mundo por su calidez y resistencia. Siempre suave y con el peso adecuado, es una prenda básica que te ayuda a hacer más.",
    material: "80% algodón, 20% poliéster.",
    variantes: [
        { genero: "Mujer", talle: "S", color: "Negro", stock: 3, imagenes: ["sportswear-club-fleece-m-frente.webp", "sportswear-club-fleece-m-reverso.webp", "sportswear-club-fleece-m-detalle.webp"] },
        { genero: "Mujer", talle: "M", color: "Negro", stock: 2, imagenes: ["sportswear-club-fleece-m-frente.webp", "sportswear-club-fleece-m-reverso.webp", "sportswear-club-fleece-m-detalle.webp"] },
        { genero: "Mujer", talle: "L", color: "Negro", stock: 0, imagenes: ["sportswear-club-fleece-m-frente.webp", "sportswear-club-fleece-m-reverso.webp", "sportswear-club-fleece-m-detalle.webp"] },
        { genero: "Mujer", talle: "XL", color: "Negro", stock: 5, imagenes: ["sportswear-club-fleece-m-frente.webp", "sportswear-club-fleece-m-reverso.webp", "sportswear-club-fleece-m-detalle.webp"] },
    ]
};

const producto10 = {
    id: 10,
    sku: "NIKE-REM-NS-H-001",
    nombre: "Nike Stride",
    precioOriginal: 105000,
    descuento: 0,
    ofertaHasta: "",
    categoria: "Indumentaria",
    subcategoria: "Remera",
    marca: "Nike",
    peso: "150g",
    descripcion: "Utilizamos datos proporcionados por runners como tú para actualizar nuestras prendas básicas Stride con la funcionalidad como prioridad. Esta playera ligera se diseñó para reducir el roce y mejorar la transpirabilidad para que te concentres en tu ritmo.",
    material: "100% poliéster.",
    variantes: [
        { genero: "Hombre", talle: "S", color: "Cañón", stock: 1, imagenes: ["nike-stride-h-frente-c.webp", "nike-stride-h-reverso-c.webp", "nike-stride-h-detalle-c.jpg"] },
        { genero: "Hombre", talle: "M", color: "Cañón", stock: 0, imagenes: ["nike-stride-h-frente-c.webp", "nike-stride-h-reverso-c.webp", "nike-stride-h-detalle-c.jpg"] },
        { genero: "Hombre", talle: "L", color: "Cañón", stock: 7, imagenes: ["nike-stride-h-frente-c.webp", "nike-stride-h-reverso-c.webp", "nike-stride-h-detalle-c.jpg"] },
        { genero: "Hombre", talle: "XL", color: "Cañón", stock: 8, imagenes: ["nike-stride-h-frente-c.webp", "nike-stride-h-reverso-c.webp", "nike-stride-h-detalle-c.jpg"] },
        { genero: "Hombre", talle: "S", color: "Fantasma/Jaspeado", stock: 2, imagenes: ["nike-stride-h-frente-fj.webp", "nike-stride-h-reverso-fj.webp", "nike-stride-h-detalle-fj.webp"] },
        { genero: "Hombre", talle: "M", color: "Fantasma/Jaspeado", stock: 2, imagenes: ["nike-stride-h-frente-fj.webp", "nike-stride-h-reverso-fj.webp", "nike-stride-h-detalle-fj.webp"] },
        { genero: "Hombre", talle: "L", color: "Fantasma/Jaspeado", stock: 2, imagenes: ["nike-stride-h-frente-fj.webp", "nike-stride-h-reverso-fj.webp", "nike-stride-h-detalle-fj.webp"] },
        { genero: "Hombre", talle: "XL", color: "Fantasma/Jaspeado", stock: 2, imagenes: ["nike-stride-h-frente-fj.webp", "nike-stride-h-reverso-fj.webp", "nike-stride-h-detalle-fj.webp"] },
    ]
};

const producto11 = {
    id: 11,
    sku: "JRD-REM-JF-M-001",
    nombre: "Jordan Flight",
    precioOriginal: 85000,
    descuento: 0,
    ofertaHasta: "",
    categoria: "Indumentaria",
    subcategoria: "Remera",
    marca: "Jordan",
    peso: "120g",
    descripcion: "El AJ1 es para mucho más que solo tus suelas. Demostrá tu amor por las icónicas zapatillas con una remera suave en un ajuste deliberadamente oversized.",
    material: "100% algodón.",
    variantes: [
        { genero: "Mujer", talle: "S", color: "Jade/Vela/Negro", stock: 1, imagenes: ["jordan-flight-m-frente-jvn.webp", "jordan-flight-m-reverso-jvn.webp", "jordan-flight-m-detalle-jvn.webp"] },
        { genero: "Mujer", talle: "M", color: "Jade/Vela/Negro", stock: 2, imagenes: ["jordan-flight-m-frente-jvn.webp", "jordan-flight-m-reverso-jvn.webp", "jordan-flight-m-detalle-jvn.webp"] },
        { genero: "Mujer", talle: "L", color: "Jade/Vela/Negro", stock: 3, imagenes: ["jordan-flight-m-frente-jvn.webp", "jordan-flight-m-reverso-jvn.webp", "jordan-flight-m-detalle-jvn.webp"] },
        { genero: "Mujer", talle: "XL", color: "Jade/Vela/Negro", stock: 3, imagenes: ["jordan-flight-m-frente-jvn.webp", "jordan-flight-m-reverso-jvn.webp", "jordan-flight-m-detalle-jvn.webp"] },
        { genero: "Mujer", talle: "S", color: "Negro", stock: 1, imagenes: ["jordan-flight-m-frente-n.webp", "jordan-flight-m-reverso-n.webp", "jordan-flight-m-detalle-n.webp"] },
        { genero: "Mujer", talle: "M", color: "Negro", stock: 1, imagenes: ["jordan-flight-m-frente-n.webp", "jordan-flight-m-reverso-n.webp", "jordan-flight-m-detalle-n.webp"] },
        { genero: "Mujer", talle: "L", color: "Negro", stock: 1, imagenes: ["jordan-flight-m-frente-n.webp", "jordan-flight-m-reverso-n.webp", "jordan-flight-m-detalle-n.webp"] },
        { genero: "Mujer", talle: "XL", color: "Negro", stock: 3, imagenes: ["jordan-flight-m-frente-n.webp", "jordan-flight-m-reverso-n.webp", "jordan-flight-m-detalle-n.webp"] },
    ]
};

const producto12 = {
    id: 12,
    sku: "NIKE-BUZ-NC-H-001",
    nombre: "Nike Club",
    precioOriginal: 135000,
    descuento: 30,
    ofertaHasta: "2025-03-13",
    categoria: "Indumentaria",
    subcategoria: "Buzo",
    marca: "Nike",
    peso: "420g",
    descripcion: "Esta buzo con gorro Nike Club está confeccionada con un suave tejido de French Terry. Cuenta con un ajuste clásico que está diseñado para ofrecer espacio en el cuerpo y es fácil de combinar con otras prendas.",
    material: "80-84% algodón, 16-20% poliéster.",
    variantes: [
        { genero: "Hombre", talle: "S", color: "Negro", stock: 11, imagenes: ["nike-club-h-frente-n.webp", "nike-club-h-reverso-n.webp", "nike-club-h-detalle-n.webp"] },
        { genero: "Hombre", talle: "M", color: "Negro", stock: 3, imagenes: ["nike-club-h-frente-n.webp", "nike-club-h-reverso-n.webp", "nike-club-h-detalle-n.webp"] },
        { genero: "Hombre", talle: "L", color: "Negro", stock: 7, imagenes: ["nike-club-h-frente-n.webp", "nike-club-h-reverso-n.webp", "nike-club-h-detalle-n.webp"] },
        { genero: "Hombre", talle: "XL", color: "Negro", stock: 5, imagenes: ["nike-club-h-frente-n.webp", "nike-club-h-reverso-n.webp", "nike-club-h-detalle-n.webp"] },
    ]
};

const producto13 = {
    id: 13,
    sku: "PUMA-SHO-PXSR-H-001",
    nombre: "Short Puma X Sonic Relaxed",
    precioOriginal: 90000,
    descuento: 0,
    ofertaHasta: "",
    categoria: "Indumentaria",
    subcategoria: "Short",
    marca: "Puma",
    peso: "270g",
    descripcion: "El Short Puma X Sonic Relaxed Hombre ofrece comodidad y estilo deportivo con diseño gráfico. Está confeccionado en tejido liviano que favorece el confort, mientras permite moverse con soltura. Además, su estética moderna aporta personalidad. Es ideal para uso diario o recreativo.",
    material: "100% algodón.",
    variantes: [
        { genero: "Hombre", talle: "S", color: "Azul", stock: 2, imagenes: ["puma-sonic-relax-h-frente-a.jpg", "puma-sonic-relax-h-reverso-a.jpg", "puma-sonic-relax-h-detalle-a.jpg"] },
        { genero: "Hombre", talle: "M", color: "Azul", stock: 3, imagenes: ["puma-sonic-relax-h-frente-a.jpg", "puma-sonic-relax-h-reverso-a.jpg", "puma-sonic-relax-h-detalle-a.jpg"] },
        { genero: "Hombre", talle: "L", color: "Azul", stock: 5, imagenes: ["puma-sonic-relax-h-frente-a.jpg", "puma-sonic-relax-h-reverso-a.jpg", "puma-sonic-relax-h-detalle-a.jpg"] },
        { genero: "Hombre", talle: "XL", color: "Azul", stock: 5, imagenes: ["puma-sonic-relax-h-frente-a.jpg", "puma-sonic-relax-h-reverso-a.jpg", "puma-sonic-relax-h-detalle-a.jpg"] },
    ]
};

const producto14 = {
    id: 14,
    sku: "PUMA-OJO-PLM-M-001",
    nombre: "Ojotas Puma con Plataforma Leadcat Mujer",
    precioOriginal: 70000,
    descuento: 10,
    ofertaHasta: "2025-03-13",
    categoria: "Calzado",
    subcategoria: "Ojotas",
    marca: "Puma",
    peso: "300g",
    descripcion: "Las Ojotas Puma con Plataforma Leadcat Mujer combinan estilo moderno y comodidad superior. Su diseño con plataforma aporta altura y un look audaz sin sacrificar ligereza.",
    material: "70% goma, 30% algodón.",
    variantes: [
        { genero: "Mujer", talle: "S", color: "Negro", stock: 2, imagenes: ["ojota-puma-leadcat-m-superior-n.jpg", "ojota-puma-leadcat-m-perfil-n.jpg", "ojota-puma-leadcat-m-atras-n.jpg"] },
        { genero: "Mujer", talle: "M", color: "Negro", stock: 2, imagenes: ["ojota-puma-leadcat-m-superior-n.jpg", "ojota-puma-leadcat-m-perfil-n.jpg", "ojota-puma-leadcat-m-atras-n.jpg"] },
        { genero: "Mujer", talle: "L", color: "Negro", stock: 3, imagenes: ["ojota-puma-leadcat-m-superior-n.jpg", "ojota-puma-leadcat-m-perfil-n.jpg", "ojota-puma-leadcat-m-atras-n.jpg"] },
        { genero: "Mujer", talle: "XL", color: "Negro", stock: 3, imagenes: ["ojota-puma-leadcat-m-superior-n.jpg", "ojota-puma-leadcat-m-perfil-n.jpg", "ojota-puma-leadcat-m-atras-n.jpg"] },
    ]
};

const producto15 = {
    id: 15,
    sku: "NIKE-MED-PMN-U-001",
    nombre: "Pack de Medias Nike X3 Everyday",
    precioOriginal: 20000,
    descuento: 0,
    ofertaHasta: "",
    categoria: "Accesorios",
    subcategoria: "Medias",
    marca: "Nike",
    peso: "60g",
    descripcion: "Fabricados con materiales de alta calidad, estos accesorios están compuestos por hilos suaves con tecnología Dri-FIT que mantienen tus pies secos y cómodos durante todo el día.",
    material: "Tela: Sólido: 61% algodón/36% poliéster/3% spandex. Jaspeado: 58% algodón/40% poliéster/2% spandex.",
    variantes: [
        { genero: "Unisex", talle: "S", color: "Negro", stock: 0, imagenes: ["pack-x3-medias-u-frente-n.jpg", "pack-x3-medias-u-reverso-n.jpg"] },
        { genero: "Unisex", talle: "M", color: "Negro", stock: 2, imagenes: ["pack-x3-medias-u-frente-n.jpg", "pack-x3-medias-u-reverso-n.jpg"] },
        { genero: "Unisex", talle: "L", color: "Negro", stock: 3, imagenes: ["pack-x3-medias-u-frente-n.jpg", "pack-x3-medias-u-reverso-n.jpg"] },
    ]
};

const producto16 = {
    id: 16,
    sku: "ADIDAS-MED-TCC-U-001",
    nombre: "Medias adidas Trifolio Cushion Crew 3pk",
    precioOriginal: 30000,
    descuento: 0,
    ofertaHasta: "",
    categoria: "Accesorios",
    subcategoria: "Medias",
    marca: "Adidas",
    peso: "85g",
    descripcion: "Las Medias adidas Trifolio Cushion Crew 3pk ofrecen comodidad y soporte durante todo el día. Con un diseño clásico, presentan el icónico logo y un refuerzo en el arco para mayor estabilidad.",
    material: " 65% algodón / 31% poliéster reciclado / 3% elastano / 1% nailon reciclado.",
    variantes: [
        { genero: "Unisex", talle: "M", color: "Blanco", stock: 0, imagenes: ["adidas-TCC-medias-u-superior-b.jpg", "adidas-TCC-medias-perfil-b.jpg"] },
        { genero: "Unisex", talle: "S", color: "Blanco", stock: 0, imagenes: ["adidas-TCC-medias-u-superior-b.jpg", "adidas-TCC-medias-perfil-b.jpg"] },
        { genero: "Unisex", talle: "L", color: "Blanco", stock: 3, imagenes: ["adidas-TCC-medias-u-superior-b.jpg", "adidas-TCC-medias-perfil-b.jpg"] },
        { genero: "Unisex", talle: "XL", color: "Blanco", stock: 3, imagenes: ["adidas-TCC-medias-superior-b.jpg", "adidas-TCC-medias-perfil-b.jpg"] },
    ]
};

const producto17 = {
    id: 17,
    sku: "JRD-MED-PJE-U-001",
    nombre: "Pack de Medias Jordan Everyday X6",
    precioOriginal: 55000,
    descuento: 0,
    ofertaHasta: "",
    categoria: "Accesorios",
    subcategoria: "Medias",
    marca: "Jordan",
    peso: "80g",
    descripcion: "El Pack de Medias Jordan Everyday X6 ofrece confort duradero y estilo deportivo para el uso diario. Confeccionadas con tecnología que absorbe la humedad, mantienen los pies secos y frescos.",
    material: "96% poliéster / 3% spandex / 1% nailon.",
    variantes: [
        { genero: "Unisex", talle: "S", color: "Negro", stock: 0, imagenes: ["pack-jordan-medias-every-frente-n.jpg", "pack-jordan-medias-every-perfil-n.jpg"] },
        { genero: "Unisex", talle: "M", color: "Negro", stock: 22, imagenes: ["pack-jordan-medias-every-frente-n.jpg", "pack-jordan-medias-every-perfil-n.jpg"] },
        { genero: "Unisex", talle: "L", color: "Negro", stock: 20, imagenes: ["pack-jordan-medias-every-frente-n.jpg", "pack-jordan-medias-every-perfil-n.jpg"] },
        { genero: "Unisex", talle: "XL", color: "Negro", stock: 13, imagenes: ["pack-jordan-medias-every-frente-n.jpg", "pack-jordan-medias-every-perfil-n.jpg"] },
    ]
};

const producto18 = {
    id: 18,
    sku: "NIKE-GOR-DRIFIT-U-001",
    nombre: "Gorra Nike Dri-fit Club Unisex",
    precioOriginal: 55000,
    descuento: 0,
    ofertaHasta: "",
    categoria: "Accesorios",
    subcategoria: "Gorras",
    marca: "Nike",
    peso: "180g",
    descripcion: "La Gorra Nike Dri-fit Club Unisex no es solo un accesorio. Confeccionada con poliéster de alta calidad que te brinda confort en cada uso. Esta gorra suma estilo y personalidad a todos tus outfits urbanos. Cuenta con una visera curva y un diseño listo que eleva tu look.",
    material: "100% Poliéster.",
    variantes: [
        { genero: "Unisex", talle: "M", color: "Blanco", stock: 12, imagenes: ["gorra-jordan-drifit-u-frente-b.jpg", "gorra-jordan-drifit-u-atras-b.jpg"] },
        { genero: "Unisex", talle: "L", color: "Blanco", stock: 21, imagenes: ["gorra-jordan-drifit-u-frente-b.jpg", "gorra-jordan-drifit-u-atras-b.jpg"] },
        { genero: "Unisex", talle: "XL", color: "Blanco", stock: 18, imagenes: ["gorra-jordan-drifit-u-frente-b.jpg", "gorra-jordan-drifit-u-atras-b.jpg"] },
    ]
};

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18]
// const productos = [producto1, producto2, producto3]