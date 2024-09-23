import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

interface CardData {
  title: string;
  image: string;
  description: string;
}

const mockData: CardData[] = [
  {
    title: 'Portugal',
    image: 'https://www.rjtravelagency.com/wp-content/uploads/2023/10/Portugal.jpg',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
  },
  {
    title: 'Frog',
    image: 'https://www.rjtravelagency.com/wp-content/uploads/2023/10/Portugal.jpg',
    description: 'Frogs are amphibians known for their jumping abilities and croaking sounds.',
  },
  {
    title: 'Portugal',
    image: 'https://www.rjtravelagency.com/wp-content/uploads/2023/10/Portugal.jpg',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
  },
  {
    title: 'Frog',
    image: 'https://www.rjtravelagency.com/wp-content/uploads/2023/10/Portugal.jpg',
    description: 'Frogs are amphibians known for their jumping abilities and croaking sounds.',
  },
  {
    title: 'Portugal',
    image: 'https://www.rjtravelagency.com/wp-content/uploads/2023/10/Portugal.jpg',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
  },
  {
    title: 'Frog',
    image: 'https://www.rjtravelagency.com/wp-content/uploads/2023/10/Portugal.jpg',
    description: 'Frogs are amphibians known for their jumping abilities and croaking sounds.',
  },
];

const CardGrid: React.FC = () => {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="stretch" wrap="wrap">
        {mockData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ width: '100%' }}>
              <CardActionArea>
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

export default CardGrid;
