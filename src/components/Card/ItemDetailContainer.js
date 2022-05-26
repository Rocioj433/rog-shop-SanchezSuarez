import {useEffect,useState} from 'react'
import ItemDetail from './ItemDetail'
import { product } from '../../data/products'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const getItem = () => {
       return new Promise ((resolve, reject) => {
           setTimeout(() => {
               resolve(product)
           }, 2000)
       }) 
    }
    useEffect(() => {
        getItem().then((res) =>{
            setProductDetail(res)
        })
    },[])
  return (
    <div>
        <ItemDetail data={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer