import {useEffect,useState} from 'react'
import ItemDetail from './ItemDetail'/* 
import { getItem } from '../../data/products' */
import { useParams } from 'react-router-dom'
import { doc , getDoc } from "firebase/firestore";
import db from '../../data/firebase'
import { prod } from '../../data/products';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const {id} = useParams();

    useEffect(() => {
      getProduct()
      .then( (prod) => {
          console.log("Respuesta getProduct: ", prod)
          setProductDetail(prod)
      })
  }, [id])

  const getProduct = async() => {
      const docRef = doc(db, "product", id)
      const docSnaptshop = await getDoc(docRef)
      let product = docSnaptshop.data()
      product.id = docSnaptshop.id
      return product
  }

  const productFilter = prod.find( (prod) => {
      return prod.id === id
  }) 
  return (
    <div>
        <ItemDetail data={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer