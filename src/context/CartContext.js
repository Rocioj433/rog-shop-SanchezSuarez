import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
        let InCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!InCart) {
            console.log("se agrego el producto:", product)
            setTotalPrice(totalPrice + product.price)
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
        console.log("El producto ya se encuentra en el carrito")
    }

    const data = {
        cartListItems,
        addProductToCart,
        totalPrice
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }