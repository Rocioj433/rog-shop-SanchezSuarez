import React from 'react';
import {AppBar, Toolbar, Button} from '@mui/material';
import style from '../Navbar/Style.css';
import { navBarOptions } from '../../helpers/strings';


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
          <Button className='btn-login' color="inherit" justify-content="flex-end">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default style;
