import { Navbar } from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ItemListContainer from "./components/Card/ItemListContainer";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <ItemListContainer title={"Productos recomendados"} />
    </ThemeProvider>
  );
}

export default App;
