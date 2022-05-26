import { Navbar } from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
/* import ItemListContainer from "./components/Card/ItemListContainer"; */
import ItemDetailContainer from "./components/Card/ItemDetailContainer";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      {/* <ItemListContainer title={"Productos recomendados"}  /> */}
      <ItemDetailContainer/>
    </ThemeProvider>
  );
}

export default App;
