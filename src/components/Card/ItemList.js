import React, { useContext } from "react";
import "../Card/CardStyle.css";
import { Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemList = ({ items, title }) => {
  const { addProductToCart } = useContext(CartContext);
  return (
    <React.Fragment>
      <h1>{title}</h1>
      {items.map((ItemI) => (
        <div className="card-container" key={ItemI.id}>
          <Card className="card-content">
            <CardContent className="row">
              <div className="row g-0">
                <div className="col-md-6">
                  <img src={ItemI.img} alt={ItemI.title} />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h1 className="card-title">{ItemI.title}</h1>
                    <p className="card-text">Price: ${ItemI.price}</p>
                    <p className="card-text">Stock: {ItemI.stock}</p>
                  </div>
                  <Link to={`/item/${ItemI.id}`} href="#">
                    <button>Ver detalle</button>
                  </Link>
                  <button onClick={() => addProductToCart({ItemI})}>
                      comprar
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ItemList;