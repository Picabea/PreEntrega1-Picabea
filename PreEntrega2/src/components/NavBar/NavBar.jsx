import classes from './NavBar.module.css'
import Button from '../Button/Button.jsx'
import logo from './assets/ron-daLogo.png'
import CartWidget from '../CartWidget/CartWidget.jsx'


const NavBar = () => {
    return(
    <nav className={classes.nav}>
        <section>
            <div>
                <h1 className={classes.nombrePagina}>Bebidas Ron-da</h1>
                <img src={logo} alt="" className={classes.logo}/>
            </div>
            <div>
                <Button className={classes.alignCenter} texto="Todo"/>
                <Button className={classes.alignCenter} texto="Vodka"/>
                <Button className={classes.alignCenter} texto="Cervezas"/>
                <Button className={classes.alignCenter} texto="Ron"/>
                <Button className={classes.alignCenter} texto="Aperitivos"/>
            </div>
        </section>
        <CartWidget/>
        
    </nav>
    )
}

export default NavBar