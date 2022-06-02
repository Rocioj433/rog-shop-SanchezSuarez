import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { traerProducts } from '../../data/products'
import '../Card/CardStyle.css'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    console.log(category);
    traerProducts(category).then((res) => {
      setItems(res);
    })
  },[category]);

  return (
    <>
        <ItemList items={items}/>
        
    </>
  )
}
export default ItemListContainer