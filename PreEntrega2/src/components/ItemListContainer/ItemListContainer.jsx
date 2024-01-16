import { useState, useEffect } from "react"
import classes from "./ItemListContainer.module.css"
import { getProducts, getProductsByCategory } from "../../asyncMock.js"
import ItemList from "../ItemList/ItemList.jsx"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])

    const { categoria } = useParams()

    useEffect(() => {
        const asyncFunction = !categoria ?getProducts :getProductsByCategory

        asyncFunction(categoria)
        .then((res) => setProductos(res))
        .catch((err) => console.error(err))

    }, [categoria])
    console.log(productos)


    return(
        <div className={classes.itemListContainer}>
            <ItemList productos = {productos}/>
        </div>
        
    )
}

export default ItemListContainer