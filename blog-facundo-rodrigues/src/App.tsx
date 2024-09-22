import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css'
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar.tsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Navbar />
      </ThemeProvider>
    </>
  )
}

export default App
