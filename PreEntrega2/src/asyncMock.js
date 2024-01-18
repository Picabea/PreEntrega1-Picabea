const products = [
    {
        id: 1,
        tipoBebida: "Cerveza",
        marca: "Quilmes",
        variedad: "Clásica",
        descripcion: "La cerveza Quilmes Clásica es una bebida refrescante con un sabor equilibrado, perfecta para disfrutar en cualquier ocasión.",
        precio: 800,
        src: "quilmes.webp",
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
        precio: 1200,
        src: "patagoniaHoppyLager.png",
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
        precio: 980,
        src: "antaresRedAle.png",
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
        precio: 990,
        src: "andesIpa.png",
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
        precio: 600,
        src: "brahmaSessionIpa.jpg",
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
        src: "smirnoff.png",
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
        src: "sernovaFrutosRojos.png",
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
        src: "absolutRaspberry.png",
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
        precio: 13400,
        src: "havanaAñejo.png",
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
        precio: 26200,
        src: "zacapaCentenario.webp",
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
        precio: 6700,
        src: "appletonReserveBlend.png",
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
        precio: 5100,
        src: "campari.png",
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
        precio: 4300,
        src: "aperol.jpeg",
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
        precio: 3800,
        src: "martiniRosso.png",
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
        precio: 3200,
        src: "lilletBlanc.png",
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