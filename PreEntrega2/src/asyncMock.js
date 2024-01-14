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
        src: "https://nubishops.com.ar/tools/thumb.php?im=https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/andes_ipa_1000x2048_f9c0fb04-5564-499b-b7df-3e65e3bb9c9c_grande1-834bfca25342359ea215914720299753-480-0.png",
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

export const getDetailedProduct = (id) =>{
    return new Promise((resolve) => {
        setTimeout(resolve(products.find(prod => prod.id === id)), 500)
    })
}