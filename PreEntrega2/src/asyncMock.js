const products = [
    {
        id: 1,
        tipoBebida: "Cerveza",
        marca: "Quilmes",
        variedad: "Clásica",
        descripcion: "La cerveza Quilmes Clásica es una bebida refrescante con un sabor equilibrado, perfecta para disfrutar en cualquier ocasión.",
        precio: 150,
        src: "https://static.wixstatic.com/media/02a2e8_89b9e036b2334359813689861496deaf~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/02a2e8_89b9e036b2334359813689861496deaf~mv2.png",
        graduacion: "4.9%",
        contenido: "355ml",
        stock: 10
    },
    {
        id: 2,
        tipoBebida: "Cerveza",
        marca: "Patagonia",
        variedad: "Hoppy Lager",
        descripcion: "La cerveza Patagonia Hoppy Lager es conocida por su sabor lupulado y su aroma floral, brindando una experiencia intensa y deliciosa.",
        precio: 250,
        src: "https://tusuper.com.ar/image/cache/catalog/P2020/Bebidas/Cerveza%20Patagonia%20Hoppy%20Lager%20730ml-800x800.png",
        graduacion: "6.7%",
        contenido: "355ml",
        stock: 10
    },
    {
        id: 3,
        tipoBebida: "Cerveza",
        marca: "Antares",
        variedad: "Red Ale",
        descripcion: "La cerveza Antares Red Ale destaca por sus notas caramelizadas y tostadas, ofreciendo un perfil maltoso y equilibrado.",
        precio: 180,
        src: "https://mefisto.com.ar/pub/media/catalog/product/cache/6b1c09900b407c50fce2db5e66ebc123/c/e/cerveza_antares_scotch.png",
        graduacion: "5.5%",
        contenido: "500ml",
        stock: 10
    },
    {
        id: 4,
        tipoBebida: "Cerveza",
        marca: "Andes Origen",
        variedad: "Indian Pale Ale",
        descripcion: "La cerveza Andes Origen Indian Pale Ale es conocida por su amargor característico y sus aromas frutales, creando una experiencia única.",
        precio: 200,
        src: "https://dcdn.mitiendanube.com/stores/001/721/112/products/sin-titulo-431-c2946f540b70538c9416284860983366-1024-1024.png",
        graduacion: "6.9%",
        contenido: "473ml",
        stock: 10
    },
    {
        id: 5,
        tipoBebida: "Cerveza",
        marca: "Brahma",
        variedad: "Session IPA",
        descripcion: "La cerveza Brahma Session IPA es una opción ligera con notas cítricas, perfecta para disfrutar en momentos relajados.",
        precio: 180,
        src: "https://atomoconviene.com/atomo-ecommerce/65501-home_default/cerveza-brahma-amarilla-473-cc--.jpg",
        graduacion: "3.5%",
        contenido: "355ml",
        stock: 10
    },
    {
        id: 6,
        tipoBebida: "Vodka",
        marca: "Smirnoff",
        Variedad: "",
        descripcion: "El vodka Smirnoff es reconocido por su suavidad y pureza. Ideal para preparar una amplia variedad de cócteles clásicos.",
        precio: 4000,
        src: "https://www.goldenacrewines.co.uk/wp-content/uploads/2020/04/Smirnoff-1-litre-%C2%A320.49.png",
        graduacion: "40%",
        contenido: "700ml",
        stock: 10
    },
    {
        id: 7,
        tipoBebida: "Vodka",
        marca: "Sernova",
        variedad: "Frutos Rojos",
        descripcion: "El vodka Sernova con sabor a frutos rojos añade una deliciosa y frutal dimensión a tus cócteles favoritos.",
        precio: 5000,
        src: "https://dcdn.mitiendanube.com/stores/001/721/112/products/sin-titulo-1811-e5f5190f9d30fe229116588485990033-1024-1024.png",
        graduacion: "25%",
        contenido: "750ml",
        stock: 10
    },
    {
        id: 8,
        tipoBebida: "Vodka",
        marca: "Absolut",
        variedad: "Raspberry",
        descripcion: "El vodka Absolut con sabor a frambuesa agrega un toque afrutado y vibrante a tus mezclas, perfecto para cocktails creativos.",
        precio: 12000,
        src: "https://bzsgrupobebidas.com.ar/wp-content/uploads/2018/02/vodka-rasp.png",
        graduacion: "41%",
        contenido: "1l",
        stock: 10
    },
    {
        id: 9,
        tipoBebida: "Ron",
        marca: "Havana Club",
        variedad: "Añejo 7 años",
        descripcion: "El ron Havana Club Añejo 7 años es conocido por su suavidad y complejidad, con notas de frutas secas y vainilla.",
        precio: 3500,
        src: "https://www.vinasa.mx/wp-content/uploads/2021/11/Havana-Club-7-anos-Ron.png",
        graduacion: "40%",
        contenido: "700ml",
        stock: 10
    },
    {
        id: 10,
        tipoBebida: "Ron",
        marca: "Zacapa",
        variedad: "Centenario 23",
        descripcion: "El ron Zacapa Centenario 23 es conocido por su suavidad y ricos sabores a caramelo, chocolate y frutas tropicales.",
        precio: 5000,
        src: "https://liquorlodge.ca/cdn/shop/files/ronzacapa_23_800x.png?v=1686003011",
        graduacion: "40%",
        contenido: "750ml",
        stock: 10
    },
    {
        id: 11,
        tipoBebida: "Ron",
        marca: "Appleton Estate",
        variedad: "Reserve Blend",
        descripcion: "El ron Appleton Estate Reserve Blend ofrece una mezcla armoniosa de sabores a nuez, caramelo y especias.",
        precio: 4500,
        src: "https://siralbertwhisky.com/wp-content/uploads/2021/04/CAM043.png",
        graduacion: "40%",
        contenido: "750ml",
        stock: 10
    },
    {
        id: 12,
        tipoBebida: "Aperitivo",
        marca: "Campari",
        variedad: "Bitter",
        descripcion: "El aperitivo Campari es conocido por su sabor amargo y sus notas de hierbas y especias. Ideal para cócteles refrescantes.",
        precio: 2500,
        src: "https://www.delgadoseleccion.com/wp-content/uploads/2023/05/CAMPARI-700ML.png",
        graduacion: "25%",
        contenido: "700ml",
        stock: 10
    },
    {
        id: 13,
        tipoBebida: "Aperitivo",
        marca: "Aperol",
        variedad: "Bitter",
        descripcion: "El Aperol es un aperitivo italiano conocido por su color naranja brillante y su sabor refrescante con toques cítricos.",
        precio: 2200,
        src: "https://productionbhsstorage.blob.core.windows.net/cms-media-storage/assets/medium_3224_799cd81dc5.png",
        graduacion: "11%",
        contenido: "1000ml",
        stock: 10
    },
    {
        id: 14,
        tipoBebida: "Aperitivo",
        marca: "Martini",
        variedad: "Rosso",
        descripcion: "El vermouth Martini Rosso es apreciado por su sabor dulce y especiado, perfecto para cócteles clásicos como el Negroni.",
        precio: 1800,
        src: "https://acdn.mitiendanube.com/stores/001/448/812/products/aperitivo-81-66c2d71d30fe31557416336087409998-1024-1024.png",
        graduacion: "15%",
        contenido: "750ml",
        stock: 10
    },
    {
        id: 15,
        tipoBebida: "Aperitivo",
        marca: "Lillet",
        variedad: "Blanc",
        descripcion: "El aperitivo Lillet Blanc es conocido por su frescura y elegancia, con notas de cítricos y flores blancas.",
        precio: 2800,
        src: "https://www.emporiofreicaneca.com.br/wp-content/uploads/2019/04/lillet.png",
        graduacion: "17%",
        contenido: "750ml",
        stock: 10
    }
]
// const [rones, setRones] = useState(["Havana Club", "Ron de prueba"])
// const [aperitivos, setAperitivos] = useState(["Campari", "Vermouth Rosso", "Vermouth Branco"])
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(producto => producto.tipoBebida === productCategory))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(producto => producto.id === Number(productId)))
        }, 1000)
    })
}