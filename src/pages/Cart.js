import { useContext, useState } from "react"
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cartListItems, totalPrice} = useContext(CartContext)
    const [cartListItem] = useState(cartListItems)

    if(cartListItem.length === 0) {
        return (
            <Container>
                <h1>No hay productos en el carrito</h1>
                <Link to="/product">
                    <Button>Volver a la tienda</Button>
                </Link>
            </Container>
        )         
    }

    return (
        <Container className='container-general'>
            <h2>Checkout: </h2>
            <div className='cart-section'>
                <div className='col-cart-table__head'>
                    <h2>Producto</h2>
                    <h2>Descripcion</h2>
                    <h2>Precio Unitario</h2>
                    <h2>Cantidad</h2>
                    <h2>Quitar</h2>
                </div>
                {cartListItems.map((item) => {
                    const { id, title, price, img } = item.ItemI
                    console.log(item.ItemI);
                    return (
                        <div className="cart-table__content" key={id}>
                            <div className="cart-table__content-img">
                                <img src={img} alt={`Producto ${title}`} />
                            </div>
                            <div className="cart-table__content-title">
                                <p>{title}</p>
                            </div>
                            <div className="cart-table__content-price">
                                <p>$ {price}</p>
                            </div>
                            <div className="cart-table__content-quantity">
                                <p>1</p>
                            </div>
                            <div className="cart-table__content-price">
                                <Button className="btn-delete">
                                    <Delete />
                                </Button>
                            </div>
                        </div>
                    );
                })}
                 <div className='cart-footer'>
                <Link to="/product"><Button className='btn-custom'>Continuar comprando</Button></Link>
                <div className='cart-checkout-details'>
                    <div className='cart-checkout__subtotal'>
                        <p>Subtotal</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button className='btn-custom'>Completar Compra</Button>
                </div>
            </div>
            </div>
        </Container>
    )
}

export default Cart;