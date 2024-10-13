import { ThemeProvider, createTheme } from '@mui/material/styles';

import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import './App.css';
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
        <Outlet />
      </ThemeProvider>
    </>
  )
}

export default App
