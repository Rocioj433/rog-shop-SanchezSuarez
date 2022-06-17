import { Navbar } from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ItemListContainer from "./components/Card/ItemListContainer";
import ItemDetailContainer from "./components/Card/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";
<<<<<<< HEAD
import Cart from "./pages/Cart";
import CartContextProvider from "./context/CartContext";
=======
import { CartProvider } from "./context/CartContext";
import CartWidget from "./components/Card/CartWidget";
import Cart from "./pages/Cart";
>>>>>>> origin/desafio-cli-#10-a

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <CartContextProvider>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/home" element={ <Home />}/>
          <Route path="/product" element={<Product/>} />
          <Route path="/category/:category" element={<ItemListContainer title={"Productos recomendados"} />}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </CartContextProvider>
  );
}

export default App;
