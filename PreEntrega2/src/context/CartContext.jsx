import { useState, createContext, useContext } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const addItemToCart = (productToAdd) => {
      console.log(productToAdd)
      console.log(cart)
      if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
        console.log(cart)
      }else{
        console.error('El producto ya esta')
      }
    }

    const isInCart = (id) => {
      return cart.some(prod => prod.id == id)
    }
    
    const removeItemFromCart = (id) => {
      const cartUpdated = cart.filter(prod => prod.id =! id)
      setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => accu += prod.quantity)

        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
      let accu = 0

      cart.forEach((prod) => {return(
        accu += prod.quantity * prod.precio
        )
      })
      return accu
    }

    const total = getTotal()

    const clearCart = () => {

    } 
    return(
        <CartContext.Provider value={{cart, addItemToCart, removeItemFromCart, totalQuantity, total}}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}