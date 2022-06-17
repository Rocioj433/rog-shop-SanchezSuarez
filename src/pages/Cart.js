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
