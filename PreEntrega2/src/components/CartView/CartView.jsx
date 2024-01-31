import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem.jsx"
import classes from "./CartView.module.css"

const CartView = () => {

    const { cart } = useCart()
    const { total } = useCart()

    return(
        <>
        <div className={classes.cartView}>
            <div className={classes.leyenda}>
                <p>Producto</p>
                <div>
                    <p>Cantidad</p>
                    <p>Precio</p>
                </div>
                
            </div>
            <section>
                {cart.map((prod) => {
                    return(
                    <CartItem key={prod.id} producto={prod}/>
                    )
                })}
            </section>
                
            <section>
                <h2>{total}</h2>
            </section>
            <Link to="/checkout">
                Checkout
            </Link>
        </div>
        
        </>
    )
}

export default CartView