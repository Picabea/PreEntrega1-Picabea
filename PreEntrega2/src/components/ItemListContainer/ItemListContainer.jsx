import { useState, useEffect } from "react"
import classes from "./ItemListContainer.module.css"
import { getProducts, getProductsByCategory } from "../../asyncMock.js"
import ItemList from "../ItemList/ItemList.jsx"
import { useParams } from "react-router-dom"
import { db } from '../../services/fireBase/firebaseConfig.js'
import { getDocs, collection, query, where } from 'firebase/firestore'
import Loading from '../Loading/Loading.jsx'


const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()

    useEffect(() => {
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
    console.log("cargado")
    setLoading(false)
    }, [categoria])
    return(
        <div className={classes.itemListContainer}>
            <Loading loading={loading}/>
            <ItemList productos = {productos}/>
        </div>
        
    )
}

export default ItemListContainer