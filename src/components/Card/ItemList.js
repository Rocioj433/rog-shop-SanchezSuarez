import React from "react";
import "../Card/CardStyle.css";
import { Card, CardContent } from "@mui/material";
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
                  <img src={ItemI.img} alt={ItemI.title} />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h1 className="card-title">{ItemI.title}</h1>
                    <p className="card-text">Price: ${ItemI.price}</p>
                    <p className="card-text">Stock: ${ItemI.stock}</p>
                  </div>
                  <Link to={`/item/${ItemI.id}`}>
                    <button>Ver detalle</button>
                  </Link>
                  <button>
                      comprar
                  </button>
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
