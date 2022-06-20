import { useContext, useState } from "react";
import { Container, Button, TextField } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { CartContext } from "../context/CartContext";
import { Link} from "react-router-dom";
import MoDal from "../modal/Modal";
import { addDoc, collection } from "firebase/firestore";
import db from "../data/firebase";
import "../styles/cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartListItems, totalPrice, cleanCartProducts } =
    useContext(CartContext); //Contexto
  const navigate = useNavigate(); // al finalizar la compra vuelve a la pagina principal
  const [showModal, setShowModal] = useState(false); // modal de confirmacion de compra
  const [cartListItem] = useState(cartListItems); // lista de productos del carrito
  const [success, setSuccess] = useState(); // mensaje de exito de compra
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  }); // formulario de datos de compra
  const [order, setOrder] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: cartListItem.map((item) => {
      return {
        id: item.ItemI.id,
        title: item.ItemI.title,
        price: item.ItemI.price,
      };
    }),
    total: totalPrice,
  }); // datos de la orden

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({ ...order, buyer: formValue });
    saveData({ ...order, buyer: formValue });
  }; // guarda los datos del formulario en la base de datos

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }; // cambia los datos del formulario

  const saveData = async (newOrder) => {
    const orderFirebase = collection(db, "ordenes");
    const orderDoc = await addDoc(orderFirebase, newOrder);
    console.log("orden generada:", orderDoc.id);
    setSuccess(orderDoc.id);
  }; // guarda la orden en la base de datos

  const finishOrder = () => {
    navigate("/home");
    cleanCartProducts();
  }; // finaliza la compra y vuelve a la pagina principal

  if (cartListItem.length === 0) {
    return (
      <Container>
        <h1>No hay productos en el carrito</h1>
        <Link to="/product">
          <Button>Volver a la tienda</Button>
        </Link>
      </Container>
    );
  } // si no hay productos en el carrito muestra un mensaje

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
          const { id, title, price, img } = item.ItemI;
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
        <div className="cart-footer">
          <Link to="/product">
            <Button className="btn-custom">Continuar comprando</Button>
          </Link>
          <div className="cart-checkout-details">
            <div className="cart-checkout__subtotal">
              <p>Subtotal</p>
              <span>$ {totalPrice}</span>
            </div>
            <div className="cart-checkout__total">
              <p>Total</p>
              <span>$ {totalPrice}</span>
            </div>
            <Button className="btn-custom" onClick={() => setShowModal(true)}>
              Completar Compra
            </Button>
          </div>
        </div>
      </div>
      <MoDal 
        title={success ? "Compra realizada con exito!" : "Formulario de contacto"}
        open={showModal}
        handleClose={() => setShowModal(false)}
      >
        {success ? (
          <div>
            <h1>Nos contactaremos con usted a la brevedad</h1>
            <br />
            <p>Numero de orden: {success}</p>
            <br />
            <button onClick={finishOrder}>Aceptar</button>
          </div>
        ) : (
          <form className="form-contact" onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              name="name"
              label="Nombre y Apellido"
              variant="outlined"
              value={formValue.name}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="phone"
              label="Telefono"
              variant="outlined"
              value={formValue.phone}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              name="email"
              label="Mail"
              value={formValue.email}
              onChange={handleChange}
            />
            <button type="submit">Enviar</button>
          </form>
        )}
      </MoDal>
    </Container>
  );
};

export default Cart;
