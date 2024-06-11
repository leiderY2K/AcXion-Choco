import React, { useState } from 'react';
import {
    Box, Typography, Button, CardMedia, CardContent,
    Card, Paper, Grid, List, ListItem, ListItemText, Divider,
    Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText
} from '@mui/material';
import { Link } from 'react-router-dom';
import imgs from "/src/img/imagenes.js";

const Details = () => {
    const [open, setOpen] = useState(false);

    const handleInscribirse = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ padding: 4, maxWidth: 1200, margin: 'auto' }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Introducción a Algoritmos
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={imgs[1]}
                        alt="Imagen del curso de algoritmos"
                        sx={{ borderRadius: 2 }}
                    />
                    <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" color="primary" sx={{ marginRight: 2 }} onClick={handleInscribirse}>
                            Inscribirse
                        </Button>
                        <Button variant="outlined" component={Link} to="/courses">
                            Volver
                        </Button>
                    </Box>
                </Grid>

                {/* Columna de detalles */}
                <Grid item xs={12} md={8}>
                    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
                        <Card sx={{ overflowY: 'auto', maxHeight: 200 }}>
                            <CardContent>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    Descripción del curso
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Este curso introductorio a los algoritmos te guiará a través de los fundamentos esenciales de esta disciplina clave en la informática. Comenzaremos explorando los conceptos básicos, como la definición de algoritmo, tipos de algoritmos y su importancia en la resolución de problemas. A medida que avances, profundizaremos en estructuras de datos fundamentales como arrays, listas enlazadas, pilas y colas, y aprenderás cómo utilizarlas para organizar y manipular información de manera eficiente.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Luego, te sumergirás en el análisis de la complejidad de algoritmos, una herramienta crucial para evaluar su eficiencia y elegir el más adecuado para cada situación. Aprenderás a calcular la complejidad temporal y espacial de los algoritmos, y a utilizar la notación Big O para expresar su rendimiento.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Finalmente, pondrás en práctica tus conocimientos adquiridos explorando y aplicando algoritmos clásicos de búsqueda y ordenamiento, como la búsqueda lineal y binaria, y los algoritmos de ordenamiento por burbuja, inserción, selección y quicksort. A lo largo del curso, resolverás problemas prácticos y desarrollarás tus habilidades para diseñar e implementar soluciones algorítmicas eficientes.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Typography variant="h6" component="h2" gutterBottom>
                            Objetivos del curso
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary=" • Entender los conceptos fundamentales de los algoritmos" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary=" • Aprender a diseñar y analizar algoritmos eficientes" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary=" • Aplicar algoritmos en la solución de problemas del mundo real" />
                            </ListItem>
                        </List>

                        <Typography variant="h6" component="h2" gutterBottom>
                            ¿Qué aprenderás?
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary=" • Conceptos básicos de algoritmos" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary=" • Estructuras de datos esenciales" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary=" • Análisis de complejidad de algoritmos" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary=" • Algoritmos de búsqueda y ordenamiento" />
                            </ListItem>
                        </List>

                        <Divider sx={{ marginY: 2 }} />

                        <Typography variant="h6" component="h2" gutterBottom>
                            Detalles adicionales
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Profesor: Maria Cordoba Murillo" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Monitor: José de Cruz Valencia" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Horas del curso: 60 horas" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Cupos dipsonible: 20" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Disponible: Sí" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Horario: Lunes a Viernes de 10:00 a 12:00" />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Inscripción exitosa</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¡Te has inscrito exitosamente al curso de Introducción a algoritmos!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Details;
