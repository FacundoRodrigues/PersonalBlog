import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        ¡Página no encontrada!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lo sentimos, la página que buscas no existe.
      </Typography>
      <Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
        Volver a Inicio
      </Button>
    </Box>
  );
};

export default NotFound;