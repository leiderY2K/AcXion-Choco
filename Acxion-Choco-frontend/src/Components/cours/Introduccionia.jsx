import { Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import imgs from "/src/img/imagenes.js";

const Introduccionia = () => {
    return (
      <>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="140" image={imgs[6]} alt="img curso Introducción Inteligencia artificial" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Introducción a Inteligencia Artificial
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
  export default Introduccionia;