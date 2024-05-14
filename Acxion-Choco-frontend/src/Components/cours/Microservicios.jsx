import { Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import imgs from "/src/img/imagenes.js";

const Microservicios = () => {
    return (
      <>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="140" image={imgs[8]} alt="img curso Microservicios" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Arquitectura microservicios
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descripción del curso
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Detalles</Button>
            <Button size="small">Inscribirse</Button>
          </CardActions>
        </Card>
      </>
    );
  };
  export default Microservicios;