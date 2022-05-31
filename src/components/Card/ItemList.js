import React from "react";
import "../Card/CardStyle.css";
import { Card, CardContent } from "@mui/material";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemList = ({ items, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {items.map((ItemI) => (
        <div className="card-container" key={ItemI.id}>
          <Card className="card-content">
            <CardContent className="row">
              <div className="row g-0">
                <div className="col-md-6">
                  <img src={ItemI.img} alt={ItemI.name} />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h1 className="card-title">{ItemI.name}</h1>
                    <p className="card-text">Price: ${ItemI.price}</p>
                  </div>
                  <Link to={`/item/${ItemI.id}`}>
                    <button>Ver detalle</button>
                  </Link>
                  <br />
                  <ItemCount stock={ItemI.stock} initial={1} onAdd={() => {}} />
                </div>
              </div>
            </CardContent>
          </Card>
          ;
        </div>
      ))}
    </div>
  );
};

export default ItemList;
