import {useEffect,useState} from 'react'
import ItemDetail from './ItemDetail'/* 
import { getItem } from '../../data/products' */
import { useParams } from 'react-router-dom'
import { doc , getDoc } from "firebase/firestore";
import db from '../../data/firebase'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const {id} = useParams();

    useEffect(() => {

      getProduct()
      .then( (prod) => {
        console.log("Respuesta firebase: ",prod)
          setProductDetail(prod)
      })
  }, [id])

  const getProduct = async() => {
    const docRef = doc(db,"product",id)
    const docSnapshot = await getDoc(docRef)
    let product = docSnapshot.data()
    product.id = docSnapshot.id
    return product
}
  return (
    <div>
        <ItemDetail data={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer