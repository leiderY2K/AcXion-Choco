import { AppBar, Toolbar, Typography, Box, Card, CardMedia, CardContent, CardActions, Button, TextField } from '@mui/material';
import Algoritmos from './cours/Algoritmos.jsx';
import Analisisdedatos from './cours/Analisisdedatos.jsx';
import Basesdedatos from './cours/Basesdedatos.jsx';
import Cloudcomputing from './cours/Cloudcomputing.jsx';
import Estructuradedatos from './cours/Estructuradedatos.jsx';
import Introduccionia from './cours/Introduccionia.jsx';
import Introduccionprogramacion from './cours/introduccionprogramacion.jsx';
import Microservicios from './cours/Microservicios.jsx';
import Patronesdiseno from './cours/Patronesdiseno.jsx';


const Courses = () => {
    return (
        <>
            <Box sx={{ backgroundColor: '#D9D9D9', padding: 5 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 10,
                    }}
                >
                    <Algoritmos sx={{ maxWidth: 345 }} />
                    <Analisisdedatos sx={{ maxWidth: 345 }} />
                    <Basesdedatos sx={{ maxWidth: 345 }} />
                    <Cloudcomputing sx={{ maxWidth: 345 }} />
                    <Estructuradedatos sx={{ maxWidth: 345 }} />
                    <Introduccionia sx={{ maxWidth: 345 }} />
                    <Introduccionprogramacion sx={{ maxWidth: 345 }} />
                    <Microservicios sx={{ maxWidth: 345 }} />
                    <Patronesdiseno sx={{ maxWidth: 345 }} />
                </Box>
            </Box>

        </>
    );
}

export default Courses;