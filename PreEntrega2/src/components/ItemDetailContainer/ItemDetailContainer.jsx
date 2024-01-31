import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import classes from "./ItemDetailContainer.module.css"
import { useParams } from "react-router-dom"
import { db } from '../../services/fireBase/firebaseConfig.js'
import { getDoc, doc } from "firebase/firestore"
import Loading from "../Loading/Loading.jsx"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
    const productDocument = doc(db, 'products', id)
    getDoc(productDocument)
    .then(queryDocumentSnapshot => {
        const info = queryDocumentSnapshot.data()
        const productAdapted = {id: queryDocumentSnapshot.id, ...info}
        setProducto(productAdapted)
        console.log(productAdapted)
    }
    )
    console.log("Cargado")
    setTimeout(() => setLoading(false), 850)
    }
    , [id])

    if(loading){
        return(<Loading loading={loading}/>)
    }

    return(
        <div className={classes.itemDetailContainer}>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer