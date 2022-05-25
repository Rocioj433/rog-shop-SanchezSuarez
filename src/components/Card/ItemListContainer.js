import React,{useEffect, useState} from 'react'
import { prod } from '../../data/products'
import '../Card/CardStyle.css'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() =>{
      const data = new Promise( (resolve,reject) => {
        setTimeout(() => {
          resolve(prod);
        }
        ,2000);
      });

      data.then((data) => {
        setItems(data);
      });
      data.catch(err => {
        console.log(err);
      })
  },[])

  return (
    <>
        <ItemList items={items}/>
        <ItemCount stock={10} initial={1}/>
    </>
  )
}
export default ItemListContainer