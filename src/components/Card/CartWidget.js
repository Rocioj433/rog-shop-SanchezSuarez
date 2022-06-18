import { Delete } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Menu } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () =>  {
    const { cartListItems , deleteProduct } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className='cart-container-icon'>
            <ShoppingCartIcon 
                color={'primary'} 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                            <Link to="/product" >Empezar a comprar</Link>
                        </>
                    )}
                    {cartListItems.map( (ItemI) => {
                        return(
                        <div className='item-cart-prod' key={ItemI.ItemI.id}>
                            <div className='cart-prod__image'>
                                <img className="img-cart" src={`${ItemI.ItemI.img}`} alt="prod carrito" />
                            </div>
                            <div className='cart-prod__info'>
                                <p>{ItemI.ItemI.title}</p>
                                <span>$ {ItemI.ItemI.price}</span>
                            </div>
                            <div className='cart-prod__action'>
                                <button onClick={() => deleteProduct(ItemI)}>
                                    <Delete />
                                </button>
                            </div>
                        </div>
                        )
                    })}
                    
                    
                </div>
            </Menu>
        </div>
    )

}

export default CartWidget;