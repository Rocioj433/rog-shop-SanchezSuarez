import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { Delete } from "@mui/icons-material";
import { Button, Container } from "@mui/material";
import "../components/Card/CardStyle.css";

const Cart = () => {
  const { cartListItems, totalPrice } = useContext(CartContext);

  return (
    <Container className="container-general">
      <h2>Checkout: </h2>
      <div className="cart-section">
        <div className="col-cart-table__head">
          <h2>Producto</h2>
          <h2>Descripcion</h2>
          <h2>Precio Unitario</h2>
          <h2>Cantidad</h2>
          <h2>Quitar</h2>
        </div>
        {cartListItems.map((item) => {
          console.log(item.ItemI);
          return (
            <div className="cart-table__content" key={item.ItemI.id}>
              <div className="cart-table__content-img">
                <img src={item.ItemI.img} alt={`Producto ${item.ItemI.name}`} />
              </div>
              <div className="cart-table__content-title">
                <p>{item.ItemI.name}</p>
              </div>
              <div className="cart-table__content-price">
                <p>$ {item.ItemI.price}</p>
              </div>
              <div className="cart-table__content-quantity">
                <p>1</p>
              </div>
              <div className="cart-table__content-price">
                <button className="btn-delete">
                  <Delete />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Cart;
