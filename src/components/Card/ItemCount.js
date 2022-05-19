import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardStyle from '../Card/CardStyle.css'

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial);
    const onAdd = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if(count > 0 || count < stock) {
            setCount(count - 1);
        }
    }
  return (
    <Card className='container-card'>
        <CardContent>
            <h1>Add to Cart</h1>
            <button onClick={handleSubtract} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button onClick={onAdd}>+</button>
        </CardContent>
    </Card>
  )
}

export default ItemCount