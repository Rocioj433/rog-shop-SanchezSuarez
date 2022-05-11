import { Navbar } from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Navbar />
    </ThemeProvider>
        
    </>
  );
}

export default App;
