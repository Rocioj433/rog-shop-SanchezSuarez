<<<<<<< HEAD
import { useContext} from "react"
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"
import {CartContext} from "../context/CartContext"

 const Cart = () => {
    const { cartListItems } = useContext(CartContext)
    console.log(cartListItems)

    return(
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
                    <div className='cart-table__content'>
                        <div className='cart-table__content-title'>
                            <p>title</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <p>$ 2000</p>
                        </div>
                        <div className='cart-table__content-quantity'>
                            <p>1</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <button className='btn-delete'>
                                <Delete />
                            </button>
                        </div>
                    </div>

            <div className='cart-footer'>
                <Button className='btn-custom'>Continuar comprando</Button>
                <div className='cart-checkout-details'>
                    <div className='cart-checkout__subtotal'>
                        <p>Subtotal</p>
                        <span>$ 2000</span>
                    </div>
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ 2000</span>
                    </div>
                    <Button className='btn-custom'>Completar Compra</Button>
                </div>
            </div>
        </div>
    </Container>
)}

export default Cart
=======
import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import {Delete} from "@mui/icons-material"

const Cart = () => {
    const {cartListItems} = useContext(CartContext)
 
  return (
      <>
      <h1>checkout</h1>
    {cartListItems.map((item) => {
        
        console.log(item.ItemI)
        return(
            <div className='cart-table__content' key={item.ItemI.id}>
                <div className='cart-table__content-img'>
                    <img src={item.ItemI.img} alt={`Producto ${item.ItemI.name}`}/>
                </div>
                <div className='cart-table__content-title'>
                    <p>{item.ItemI.name}</p>
                </div>
                <div className='cart-table__content-price'>
                    <p>$ {item.ItemI.price}</p>
                </div>
                <div className='cart-table__content-quantity'>
                    <p>1</p>
                </div>
                <div className='cart-table__content-price'>
                    <button className='btn-delete'>
                        <Delete />
                    </button>
                </div>
            </div>
            )
        })}

    </>
  )
};

export default Cart;
>>>>>>> origin/desafio-cli-#10-a
