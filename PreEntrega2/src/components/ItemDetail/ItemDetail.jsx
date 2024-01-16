import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount.jsx"
const ItemDetail = ({src, tipoBebida, variedad, marca, contenido, descripcion, graduacion, precio}) => {

    return(
        <div className={classes.itemDetail}>
            <img src={src} alt="" />
            <div>
                <h2>{tipoBebida} {variedad} {marca} {contenido}</h2>
                <p>{descripcion}</p>
                <p>Contiene una graduacion alcoholica de {graduacion}</p>
                <b>{precio}</b>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregagada ", quantity)}/>
            </div>
        </div>
    )
}

export default ItemDetail