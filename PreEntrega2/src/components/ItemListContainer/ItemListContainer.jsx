import { useState } from "react"
import classes from "./ItemListContainer.module.css"
import vodka from "./products.json"

const ItemListContainer = (props) => {
    function Vodka(marca, saborizado, precio, imagen, graduacion, contenido){
        this.marca = marca
        this.saborizado = saborizado
        this.precio = precio
        this.imagen = imagen
        this.graduacion = graduacion
        this.contenido = contenido
    }

    const [vodkas, setVodkas] = useState(
    //     [{
    //         tipoBebida: "Vodka",
    //         marca: "Smirnoff",
    //         Variedad: "",
    //         precio: 4000,
    //         src: "https://www.goldenacrewines.co.uk/wp-content/uploads/2020/04/Smirnoff-1-litre-%C2%A320.49.png",
    //         graduacion: "40%",
    //         contenido: "700ml"
    //     },{
    //         tipoBebida: "Vodka",
    //         marca: "Sernova",
    //         Variedad: "Frutos Rojos",
    //         precio: 5000,
    //         src: "https://dcdn.mitiendanube.com/stores/001/721/112/products/sin-titulo-1811-e5f5190f9d30fe229116588485990033-1024-1024.png",
    //         graduacion: "25%",
    //         contenido: "750ml"
    //     },{
    //         tipoBebida: "Vodka",
    //         marca: "absolut",
    //         Variedad: "Raspberry",
    //         precio: 12000,
    //         src: "https://bzsgrupobebidas.com.ar/wp-content/uploads/2018/02/vodka-rasp.png",
    //         graduacion: "41%",
    //         contenido: "1l"
    //     }
    // ]
        )
    const [cervezas, setCervezas] = useState([
        {
            tipoBebida: "Cerveza",
            marca: "Quilmes",
            variedad: "Clásica",
            precio: 150,
            src: "https://static.wixstatic.com/media/02a2e8_89b9e036b2334359813689861496deaf~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/02a2e8_89b9e036b2334359813689861496deaf~mv2.png",
            graduacion: "4.9%",
            contenido: "355ml"
        },
        {
            tipoBebida: "Cerveza",
            marca: "Patagonia",
            variedad: "Hoppy Lager",
            precio: 250,
            src: "https://tusuper.com.ar/image/cache/catalog/P2020/Bebidas/Cerveza%20Patagonia%20Hoppy%20Lager%20730ml-800x800.png",
            graduacion: "6.7%",
            contenido: "355ml"
        },
        {
            tipoBebida: "Cerveza",
            marca: "Antares",
            variedad: "Red Ale",
            precio: 180,
            src: "https://mefisto.com.ar/pub/media/catalog/product/cache/6b1c09900b407c50fce2db5e66ebc123/c/e/cerveza_antares_scotch.png",
            graduacion: "5.5%",
            contenido: "500ml"
        },
        {
            tipoBebida: "Cerveza",
            marca: "Andes Origen",
            variedad: "Indian Pale Ale",
            precio: 200,
            src: "https://nubishops.com.ar/tools/thumb.php?im=https://d3ugyf2ht6aenh.cloudfront.net/stores/972/269/products/andes_ipa_1000x2048_f9c0fb04-5564-499b-b7df-3e65e3bb9c9c_grande1-834bfca25342359ea215914720299753-480-0.png",
            graduacion: "6.9%",
            contenido: "473ml"
        },
        {
            tipoBebida: "Cerveza",
            marca: "Brahma",
            variedad: "Session IPA",
            precio: 180,
            src: "https://atomoconviene.com/atomo-ecommerce/65501-home_default/cerveza-brahma-amarilla-473-cc--.jpg",
            graduacion: "3.5%",
            contenido: "355ml"
        }
    ])

    setVodkas(vodka)
    console.log(vodkas)
    const [rones, setRones] = useState(["Havana Club", "Ron de prueba"])
    const [aperitivos, setAperitivos] = useState(["Campari", "Vermouth Rosso", "Vermouth Branco"])

    const [bebidas, setBebidas] = useState([vodkas, cervezas])

    let containers = []
    //bebidas.map((bebida) => bebida.map((marca) => containers.push(<h2>{marca}</h2>)))
    bebidas.map(bebida => bebida.map((marca) => {containers.push(
        <div key={marca.marca} className={classes.itemContainer}>
            <img src={marca.src}/>
            <h3>{marca.tipoBebida} {marca.variedad} {marca.marca} {marca.contenido}</h3>
            <b>{marca.precio}</b>
        </div>
        )}))
        
    return(
        <section className={classes.itemListContainer}>
            {containers}
        </section>
    )
}

export default ItemListContainer