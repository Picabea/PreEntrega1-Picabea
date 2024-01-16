import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import classes from "./ItemDetailContainer.module.css"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        getProductById(id)
            .then(response => {
                setProducto(response)
            })
            .catch(err => console.error(err))
    }, [])

    if(!producto){
        return(
            <h1>No existe el producto</h1>
        )
    }
    return(
        <div className={classes.itemDetailContainer}>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer