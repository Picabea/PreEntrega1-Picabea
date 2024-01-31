import { collection, getDocs, where, query, documentId, writeBatch, addDoc} from "firebase/firestore"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/fireBase/firebaseConfig"
import { useState } from "react"

const Checkout = () => {
    const [orderId, setOrderId] = useState(null)
    const { cart, total } = useCart()

    const createOrder = async (userData) => {
        const order = {
            buyer: {
                nombre: "Juan",
                email: "Juan@gmail.com",
                telefono: '1145678765'
            },
            items: cart,
            total
        }
        const outOfStock = []
        const batch = writeBatch(db)

        console.log(cart)
        const ids = cart.map(prod => prod.id)
        console.log(ids)

        const productsCollection = query(collection(db, 'products'), where(documentId(), "in", ids))
        const querySnapshot = await getDocs(productsCollection)
        const { docs } = querySnapshot
        console.log(docs)

        docs.forEach(doc => {
            let info = doc.data()
            let stock = info.stock
            console.log(info)
            console.log(doc.id)

            let productAddedToCart = cart.find(prod => prod.id = doc.id)
            console.log(productAddedToCart)

            let quantity = productAddedToCart.quantity
            
            if(info.stock >= quantity){
                console.log(stock, quantity)
                batch.update(doc.ref, {stock: stock - quantity})
            }else{
                outOfStock.push({id: doc.id, ...info})
            }
        })

        if(outOfStock.length == 0){
            batch.commit()
            const orderCollection = collection(db, 'orders')
            const { id } = await addDoc(orderCollection, order)
            setOrderId(id)
        } else{
            console.log("No hay stock")
            //mostrar notifiacion anunciando que no hay stock
        }
        
    }
    if(orderId){
        console.log(`El id de su compra es ${orderId}`)
    }else{
        console.error("Algo salio mal")
    }

    
    return(
        <div>
            <h1>Checkout</h1>
            <button onClick={createOrder}>Generar orden</button>
        </div>
    )
}

export default Checkout