import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import classes from "./ItemDetailContainer.module.css"
import { useParams } from "react-router-dom"
import { db } from '../../services/fireBase/firebaseConfig.js'
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const { id } = useParams()

    useEffect(() => {
    //     getProductById(id)
    //         .then(response => {
    //             setProducto(response)
    //         })
    //         .catch(err => console.error(err))
    // }, []
    const productDocument = doc(db, 'products', id)
    getDoc(productDocument)
    .then(queryDocumentSnapshot => {
        const info = queryDocumentSnapshot.data()
        const productAdapted = {id: queryDocumentSnapshot.id, ...info}
        setProducto(productAdapted)
    }

    )
    }
    , [id])

    if(!producto){
        return(
            <h1>No existe el producto</h1>
        )
    }
    return(
        <div className={classes.itemDetailContainer}>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer