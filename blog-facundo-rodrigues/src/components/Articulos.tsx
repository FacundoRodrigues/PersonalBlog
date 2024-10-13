import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../assets/data.ts';

const Articulos: React.FC = () => {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="stretch" wrap="wrap">
        {mockData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ width: '100%' }} >
              <CardActionArea component={Link} to={`/articulos/${item.id}`}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Articulos;

