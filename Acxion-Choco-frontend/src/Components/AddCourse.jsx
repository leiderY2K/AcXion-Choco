import React, { useState } from 'react';
import { TextField, Button, Typography, Switch, Box, FormHelperText, FormControlLabel, Checkbox } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

const AddCourse = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isAvailable, setIsAvailable] = useState(false);

    const onSubmit = (data) => {
        console.log(data);

    };

    const handleIsAvailableChange = (event) => {
        setIsAvailable(event.target.checked);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px auto', width: '50%' }}>
                <Typography variant="h6">Registro de Curso</Typography>

                <TextField
                    sx={{ margin: '10px 0' }}
                    label="ID del Curso"
                    {...register("idCourse", { required: true })}
                    fullWidth
                />
                {errors.idCourse && <FormHelperText>Campo requerido</FormHelperText>}

                <TextField
                    sx={{ margin: '10px 0' }}
                    label="Nombre del Curso"
                    {...register("courseName", { required: true })}
                    fullWidth
                />
                {errors.courseName && <FormHelperText>Campo requerido</FormHelperText>}

                <TextField
                    sx={{ margin: '10px 0' }}
                    label="Descripción del Curso"
                    {...register("courseDescription", { required: true })}
                    fullWidth
                />
                {errors.courseDescription && <FormHelperText>Campo requerido</FormHelperText>}

                <TextField
                    sx={{ margin: '10px 0' }}
                    label="Horas del Curso"
                    {...register("courseHours", { required: true })}
                    fullWidth
                />
                {errors.courseHours && <FormHelperText>Campo requerido</FormHelperText>}

                <TextField
                    sx={{ margin: '10px 0' }}
                    label="Nombre del Profesor"
                    {...register("professor", { required: true })}
                    fullWidth
                />
                {errors.professor && <FormHelperText>Campo requerido</FormHelperText>}

                <TextField
                    sx={{ margin: '10px 0' }}
                    label="Nombre del Monitor"
                    {...register("monitor", { required: true })}
                    fullWidth
                />
                {errors.monitor && <FormHelperText>Campo requerido</FormHelperText>}

                <TextField
                    sx={{ margin: '10px 0' }}
                    label="Cantidad de Asientos"
                    type="number"
                    {...register("seatCount", { required: true })}
                    fullWidth
                />
                {errors.seatCount && <FormHelperText>Campo requerido</FormHelperText>}
                <FormControlLabel
                    control={<Switch {...register("isAvailable")} />}
                    label="Disponible"
                />

                <TextField
                    sx={{ margin: '10px 0' }}
                    label="Horario"
                    {...register("schedule", { required: true })}
                    fullWidth
                />
                {errors.schedule && <FormHelperText>Campo requerido</FormHelperText>}

                <Box sx={{ margin: '10px 0' }}>
                    <Typography variant="body1">Contenido del Curso</Typography>
                    <Button
                        variant="contained"
                        component="label"
                        sx={{ margin: '10px 0' }}
                    >
                        Subir PDF
                        <input
                            type="file"
                            hidden
                            {...register("pdf")}
                            accept="application/pdf"
                        />
                    </Button>
                    <Button
                        variant="contained"
                        component="label"
                        sx={{ margin: '10px 0' }}
                    >
                        Subir Video
                        <input
                            type="file"
                            hidden
                            {...register("video")}
                            accept="video/*"
                        />
                    </Button>
                </Box>

                <Button type="submit" variant="contained" color="primary">
                    Enviar
                </Button>

                <Typography sx={{ fontSize: '18px', margin: '10px 0', textAlign: 'center' }}>
                    <Link to="/" className="transition cursor-pointer">Volver a la página principal</Link>
                </Typography>
            </Box>
        </form>
    );
}

export default AddCourse;
