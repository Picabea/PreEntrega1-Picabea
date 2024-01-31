import { useState } from "react"
import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount.jsx"
import { useCart } from "../../context/CartContext.jsx"

const ItemDetail = ({producto}) => {
    
    const [quantity, setQuantity] = useState(0)
    // const value = useCart(Context)
    
    const { addItemToCart, removeItemFromCart } = useCart()
    return(
        <div className={classes.itemDetail}>
            
            <img src={import.meta.env.BASE_URL + producto.src} alt="" />
            <div>
                <h2>{producto.tipoBebida} {producto.variedad} {producto.marca} {producto.contenido}</h2>
                <p>{producto.descripcion}</p>
                <p>Contiene una graduacion alcoholica de {producto.graduacion}</p>
                <b>{producto.precio}</b>
                <ItemCount initial={1} stock={10} onAdd={addItemToCart} onRemove={removeItemFromCart} producto={producto}/>
            </div>
        </div>
    )
}

export default ItemDetail