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
            <a href='home'><button>Home</button></a>
            </li>
            <li>
            <a href='home'><button>Product</button></a>
            </li>
            <li>
            <a href='home'><button>Contact</button></a>
            </li>
            <li>
            <a href='home'><button>FQA</button></a>
            </li>
          </ul>
          <Button className='btn-login' color="inherit" justify-content="flex-end">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default style;
