import { useState, useEffect } from "react"
import { getDetailedProduct } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import classes from "./ItemDetailContainer.module.css"

const ItemDetailContainer = ({id}) => {
    const [producto, setProducto] = useState(null)

    useEffect(() => {
        console.log(id)
        getDetailedProduct(id)
        .then((res) => setProducto(res))
        .catch((err) => console.error(err))
    }, [])
    console.log(producto)

    return(
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer