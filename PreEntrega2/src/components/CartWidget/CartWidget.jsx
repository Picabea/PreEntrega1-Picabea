import classes from './CartWidget.module.css'
import cart from './assets/cart.svg'
import { useCart } from '../../context/CartContext'
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { totalQuantity } = useCart()
    return(
        
        <div className={classes.div}>
            <Link className={classes.button} to="/cart"><img src={cart} alt="" className={classes.cart}/></Link>
            <b className={classes.items}>0</b>
            {totalQuantity}
        </div>
        

    )
}

export default CartWidget