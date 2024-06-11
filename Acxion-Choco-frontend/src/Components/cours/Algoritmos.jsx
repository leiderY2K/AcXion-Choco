import React from 'react';
import { Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import imgs from "/src/img/imagenes.js";

const Algoritmos = () => {
  const navigate = useNavigate();

  const handleDetallesClick = () => {
    navigate('/details');
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={imgs[1]} alt="img curso algoritmos" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Introducción a algoritmos
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
          Este curso proporciona una introducción completa a los algoritmos, abarcando tanto conceptos básicos como avanzados, y su aplicación en la resolución de problemas reales.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDetallesClick}>Detalles</Button>
        <Button size="small">Inscribirse</Button>
      </CardActions>
    </Card>

    
  );
};

export default Algoritmos;


