import {useState} from "react"
import classes from "./ItemCount.module.css"

const ItemCount = ({stock, initial, onAdd, onRemove, producto}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div>
            <div className={classes.firstDiv}>
                <button onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd({...producto, quantity: quantity})} disabled={!stock}>Agregar al carrito</button>
                <button onClick={() => onRemove(producto)}></button>
            </div>
        </div>
    )
}

export default ItemCount