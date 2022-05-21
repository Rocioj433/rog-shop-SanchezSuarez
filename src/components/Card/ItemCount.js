import React, { useState } from 'react';
import {Card, CardContent} from '@mui/material';
import '../Card/CardStyle.css'

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial);
    const onAdd = () => {
        setCount(prev => prev + 1);
    }

    const handleSubtract = () => {
        if(count > 0 || count < stock) {
            setCount(prev => prev - 1);
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