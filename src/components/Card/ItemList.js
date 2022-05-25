import React from "react";
import '../Card/CardStyle.css';
import {Card, CardContent} from '@mui/material';
import ItemCount from "./ItemCount";

const ItemList = ({ items,title}) => {
  return (
    <div>
      <h1>{title}</h1>
      {items.map((ItemI) => {
        return (
          <div className="card-container" key={ItemI.id}>
            <Card>
              <CardContent >
              <img className="image" src={ItemI.img} alt={ItemI.name} />
              <h5>{ItemI.name}</h5>
              <h6>Price: ${ItemI.price}</h6>
              <button>Ver detalle</button>
              <br/>
              <ItemCount stock={ItemI.stock} initial={1} onAdd={() => {}} />
              </CardContent>
              </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
