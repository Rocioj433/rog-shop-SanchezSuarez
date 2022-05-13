import React from 'react';
import {AppBar, Toolbar, Button} from '@mui/material';
import style from '../Navbar/Style.css';
import { navBarOptions } from '../../helpers/strings';
import CartWidget from '../Card/CartWidget';


export const Navbar = () => {
  return (
    <>
        <AppBar position="static">
        <Toolbar >
          <h1>Republic of Gamers</h1>
          {
            <ul className='list-item'>
              {navBarOptions.map(navBarOptions => {
                return <li>
                  <a href='home'><Button>{navBarOptions}</Button></a>
                </li>
              })}

            </ul>
}
          <Button className='btn-login' disableRipple color="inherit" variant='text'>  <CartWidget /> </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default style;
