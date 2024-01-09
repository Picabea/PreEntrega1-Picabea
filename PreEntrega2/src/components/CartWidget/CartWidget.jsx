import classes from './CartWidget.module.css'
import cart from './assets/cart.svg'

const CartWidget = () => {
    return(
        <div className={classes.div}>
            <img src={cart} alt="" className={classes.cart}/>
            <b className={classes.items}>0</b>
        </div>
        

    )
}

export default CartWidget