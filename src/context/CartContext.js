import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    console.log(cartListItems)
    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product)
            setTotalPrice(totalPrice + product.price)
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
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

export default   CartProvider // se exporta el provider para que pueda ser usado en el componente que lo requiera