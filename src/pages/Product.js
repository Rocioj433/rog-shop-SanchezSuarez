import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/Card/ItemList";
import ItemCount from "../components/Card/ItemCount";
import { prod} from "../data/products";

const Product = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setItems(prod);
  }, [category]);
  return (
    <>
      <ItemList items={items}>
        <ItemCount stock={10} initial={1} />
      </ItemList>
    </>
  );
};

export default Product;
