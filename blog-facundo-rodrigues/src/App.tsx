import { ThemeProvider, createTheme } from '@mui/material/styles';

import { CssBaseline } from '@mui/material';
import './App.css';
import Blogs from './components/Blogs.tsx';
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
        <Blogs />
      </ThemeProvider>
    </>
  )
}

export default App
