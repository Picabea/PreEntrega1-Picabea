

const ItemDetail = ({src, tipoBebida, variedad, marca, contenido, descripcion, graduacion, precio}) => {

    return(
        <div>
            <img src={src} alt="" />
            <h4>{tipoBebida} {variedad} {marca} {contenido}</h4>
            <p>{descripcion}</p>
            <p>Contiene una graduacion alcoholica de {graduacion}</p>
            <b>{precio}</b>
        </div>
    )
}

export default ItemDetail