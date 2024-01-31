import { useState, useEffect } from "react"
import classes from "./ItemListContainer.module.css"
import { getProducts, getProductsByCategory } from "../../asyncMock.js"
import ItemList from "../ItemList/ItemList.jsx"
import { useParams } from "react-router-dom"
import { db } from '../../services/fireBase/firebaseConfig.js'
import { getDocs, collection, query, where } from 'firebase/firestore'
const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])

    const { categoria } = useParams()

    useEffect(() => {
    //     const asyncFunction = !categoria ?getProducts :getProductsByCategory

    //     asyncFunction(categoria)
    //     .then((res) => setProductos(res))
    //     .catch((err) => console.error(err))

    // }, [categoria])
    // console.log(productos)
    const productsCollection = categoria 
    ?query(collection(db, 'products'), where('tipoBebida', '==', categoria)) 
    :collection(db, 'products')

    getDocs(productsCollection)
    .then(querySnapshot => {
        const productsAdapted = querySnapshot.docs.map(doc => {
            const infoProd = doc.data() 
            return{id: doc.id, ...infoProd}
        })
        setProductos(productsAdapted)
    })
    .catch(err => console.err(err))
    }, [categoria])

    return(
        <div className={classes.itemListContainer}>
            <ItemList productos = {productos}/>
        </div>
        
    )
}

export default ItemListContainer