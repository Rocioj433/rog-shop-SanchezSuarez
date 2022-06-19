import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'/* 
import { traerProducts } from '../../data/products' */
import '../Card/CardStyle.css'
import ItemList from './ItemList'
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../data/firebase'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts(category)
    .then((product) => {
      category ? filterFirebase() : setItems(product)
    })
  }, [category]);

  const getProducts = async () => {
    const productSnapshot = await getDocs(collection(db, "product"));
    const productList = productSnapshot.docs.map((doc) => {
      let prod = doc.data()
      prod.id = doc.id
      return prod
    })
    console.log(productList)
  }
  const filterFirebase = async () => {
    const productRef = collection(db, 'product')
    const queryResult = query(productRef, where("category", "==", category));
    const querySnapshot = await getDocs(queryResult);
    const productList = querySnapshot.docs.map((doc) => {
      let product = doc.data()
      product.id = doc.id
      return product
    })
    return setItems(productList)
  }
  return (
    <>
      <ItemList items={items} />

    </>
  )
}
export default ItemListContainer