import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { traerProducts } from '../../data/products'
import '../Card/CardStyle.css'
import ItemCount from './ItemCount'
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
        <ItemList items={items}>
          <ItemCount stock={10} initial={1}/>
        </ItemList>
        
    </>
  )
}
export default ItemListContainer