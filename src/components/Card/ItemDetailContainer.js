import {useEffect,useState} from 'react'
import ItemDetail from './ItemDetail'
import { getItem } from '../../data/products'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const {id} = useParams();

    useEffect(() => {
        getItem(id).then((res) =>{
            setProductDetail(res)
        })
        .catch(error => console.log(error))
    },[id])
  return (
    <div>
        <ItemDetail data={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer