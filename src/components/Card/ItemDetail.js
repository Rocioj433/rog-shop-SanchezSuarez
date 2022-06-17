import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";
import "../Card/CardStyle.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import '../Card/CardStyle.css'


const ItemDetail = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const [showButton, setShowButton] = useState(false);
  return (
    <>
      <Card className="card-content">
        <CardContent className="row">
          <div className="row g-0">
            <div className="col-md-6">
              <img src={data.img} alt="" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title">{data.title}</h1>
                <p className="card-text">${data.price}</p>
                <span>3 Cuotas sin interés de $ {data.price / 3}</span>
              </div>
              {!showButton ?
                <ItemCount
                  stock={20}
                  initial={1}
                  quantity={quantity}
                  actualizarCantidad={setQuantity}
                  setShowButton={setShowButton}
                />
                :
                <button className="btn-cart"><Link to="/cart">Add to Cart</Link></button>
              }

            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ItemDetail;
