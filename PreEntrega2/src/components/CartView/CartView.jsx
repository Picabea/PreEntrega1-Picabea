import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem.jsx"
import classes from "./CartView.module.css"
import LeyendaCartView from '../LeyendaCartView/LeyendaCartView.jsx'
const CartView = () => {

    const { cart } = useCart()
    const { total } = useCart()

    return(
        <>
        <div className={classes.cartView}>
            <LeyendaCartView/>
            <section>
                {cart.map((prod) => {
                    return(
                    <CartItem key={prod.id} producto={prod}/>
                    )
                })}
            </section>
            <section className={classes.precioTotal}>
                <h2>Total: {total}</h2>
            </section>
            <Link to="/checkout">
                Checkout
            </Link>
        </div>
        
        </>
    )
}

export default CartView