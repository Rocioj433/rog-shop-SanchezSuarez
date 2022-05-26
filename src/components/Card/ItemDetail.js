import React from "react";
import { Card, CardContent } from "@mui/material";
import "../Card/CardStyle.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {

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
                  <h1 className="card-title">{data.name}</h1>
                  <p className="card-text">{data.price}</p>
                </div>
                <ItemCount stock={20} initial={1} />
              </div>
            </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ItemDetail;
