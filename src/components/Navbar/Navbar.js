import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import style from '../Navbar/Style.css';


export const Navbar = () => {
  return (
    <>
        <AppBar position="static">
        <Toolbar >
          <h1>Republic of Gamers</h1>
          <ul className='list-item'>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Product</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
            <li>
              <button>FQA</button>
            </li>
          </ul>
          <Button className='btn-login' color="inherit" justify-content="flex-end">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default style;
