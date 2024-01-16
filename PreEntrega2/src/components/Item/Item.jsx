import classes from "./item.module.css"
import { Link } from "react-router-dom"
const Item = ({producto}) => {
    return(
        <div className={classes.itemContainer}>
            <img src={producto.src}/>
            <h3>{producto.tipoBebida} {producto.variedad} {producto.marca} {producto.contenido}</h3>
            <b>${producto.precio}</b>
            <Link to={`/item/${producto.id}`} className={classes.link}>Ver detalles</Link>
        </div>
    )
    
}

export default Item