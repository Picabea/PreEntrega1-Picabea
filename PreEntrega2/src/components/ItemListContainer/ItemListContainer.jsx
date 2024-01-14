import { useState, useEffect } from "react"
import classes from "./ItemListContainer.module.css"
import { getProducts } from "../../asyncMock.js"
import ItemList from "../ItemList/ItemList.jsx"

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts()
        .then((res) => setProductos(res))
        .catch((err) => console.error(err))
    }, [])
    console.log(productos)


    return(
        <div className={classes.itemListContainer}>
            <ItemList productos = {productos}/>
        </div>
        
    )
}

export default ItemListContainer