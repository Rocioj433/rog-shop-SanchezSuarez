import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import style from "../Navbar/Style.css";
import CartWidget from "../Card/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <h1>Republic of Gamers</h1>
          {
            <ul className="list-item">
              <Link to="/home">
                <li>
                  <Button>Home</Button>
                </li>
              </Link>
              <Link to="/category">
                <div className="dropdown">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </button>
                  <ul className="dropdown-menu">
                    <Link to="/category/memorias">
                      <li className="dropdown-item">
                        <Button>Memorias</Button>
                      </li>
                    </Link>
                    <Link to="/category/placas">
                      <li className="dropdown-item">
                        <Button>Placa de Video</Button>
                      </li>
                    </Link>
                    <Link to="/category/procesadores">
                      <li className="dropdown-item">
                        <Button>Procesadores</Button>
                      </li>
                    </Link>
                    <Link to="/category/monitores">
                    <li className="dropdown-item">
                      <Button>Monitores</Button>
                    </li>
                    </Link>
                  </ul>
                </div>
              </Link>
              <Link to="/product">
                <li>
                  <Button>Product</Button>
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <Button>Contact</Button>
                </li>
              </Link>
            </ul>
          }
          
          <Button
            className="btn-login"
            disableRipple
            color="inherit"
            variant="text"
          >
            <CartWidget />
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default style;
