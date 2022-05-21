import React from 'react'
import '../Card/CardStyle.css'
import ItemCount from './ItemCount'

const ItemListContainer = ({title}) => {
  return (
    <>
        <h1 className='title'>{title}</h1>
        <ItemCount stock={10} initial={1}/>
        {/* <CardStyle/> */}
    </>
  )
}
export default ItemListContainer