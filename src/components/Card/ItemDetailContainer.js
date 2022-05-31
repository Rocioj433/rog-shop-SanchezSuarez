import {useEffect,useState} from 'react'
import ItemDetail from './ItemDetail'
import { getItem } from '../../data/products'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    useEffect(() => {
        getItem().then((res) =>{
            setProductDetail(res)
        })
        .catch(error => console.log(error))
    },[])
  return (
    <div>
        <ItemDetail data={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer