import React, { useState } from 'react';
import '../Card/CardStyle.css'

const ItemCount = ({stock, initial,onAdd,actualizarCantidad,quantity,setShowButton}) => {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        setCount(prev => prev + 1)
        actualizarCantidad(quantity + 1)
    }

    const handleSubtract = () => {
        if(count > 0 || count < stock) {
            setCount(prev => prev - 1);
        }
    }

    const confirm = () => {
        onAdd(count);
    }
  return (
    <React.Fragment>  
    <div className='cont-container'>
            <button onClick={handleSubtract} disabled={count === 0}>-</button>
            <span onClick={confirm}>{count}</span>
            <button onClick={handleAdd}>+</button>
    </div>
    <button onClick={() => setShowButton(true)}>Comprar</button>
    </React.Fragment>
  )
}

export default ItemCount