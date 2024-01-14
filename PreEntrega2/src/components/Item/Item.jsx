import classes from "./item.module.css"

const Item = ({producto}) => {
    return(
        <div className={classes.itemContainer}>
            <img src={producto.src}/>
            <h3>{producto.tipoBebida} {producto.variedad} {producto.marca} {producto.contenido}</h3>
            <b>{producto.precio}</b>
            <button>Ver detalles</button>
        </div>
    )
    
}

export default Item