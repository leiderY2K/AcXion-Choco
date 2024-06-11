import React, { useState } from 'react';
import {
    TextField, Button, Typography, MenuItem, Box, FormHelperText,
    Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [openDialog, setOpenDialog] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/');
    };

    const checkPasswordMatch = () => {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        setPasswordMatch(password === confirmPassword);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const onSubmit = async (data) => {
        if (!passwordMatch) {
            return;
        }

        console.log('Datos enviados:', data);

        const userData = {
            idUser: data.numero_identificacion,
            idDocTypeFk: data.tipoDocumento,
            role: data.role,
            firstName: data.nombre,
            lastName: data.apellido,
            email: data.correo,
            phone: data.phone, // Corrección: se usa "phone" en lugar de "tele"
            password: data.contraseña
        };

        try {
            const response = await axios.post('http://localhost:8080/auth/register', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Respuesta del servidor:', response);

            if (response.status === 200 || response.status === 201) {
                console.log('Usuario creado con éxito');
                setOpenDialog(true);
            } else {
                console.error('Error al crear el usuario:', response.statusText);
            }
        } catch (error) {
            if (error.response) {
                console.error('Error al crear el usuario:', error.response.data.message || error.response.statusText);
            } else {
                console.error('Error de red:', error.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px auto', width: '50%' }}>
                <Typography variant="h6">Formulario de registro</Typography>
                <TextField
                    sx={{ margin: '10px 10px' }}
                    label="Nombre"
                    {...register("nombre", { required: 'Campo es requerido' })}
                    fullWidth
                />
                {errors.nombre && <FormHelperText>{errors.nombre.message}</FormHelperText>}

                <TextField
                    sx={{ margin: '10px 10px' }}
                    label="Apellido"
                    {...register("apellido", { required: 'Campo requerido' })}
                    fullWidth
                />
                {errors.apellido && <FormHelperText>{errors.apellido.message}</FormHelperText>}

                <Box sx={{ display: "flex", flexDirection: 'row' }}>
                    <Box sx={{ marginRight: '30px' }}>
                        <TextField
                            sx={{ margin: '10px 10px', width: '120px' }}
                            select
                            label="Tipo de documento"
                            {...register("tipoDocumento", { required: 'Campo requerido' })}
                            fullWidth
                        >
                            <MenuItem value="CC">CC</MenuItem>
                            <MenuItem value="TI">TI</MenuItem>
                        </TextField>
                        {errors.tipoDocumento && <FormHelperText>{errors.tipoDocumento.message}</FormHelperText>}
                    </Box>
                    <Box>
                        <TextField
                            sx={{ margin: '10px 10px', width: '560px' }}
                            label="Numero de identificación"
                            type="number"
                            {...register("numero_identificacion", { required: 'Campo requerido' })}
                            fullWidth
                        />
                        {errors.numero_identificacion && <FormHelperText>{errors.numero_identificacion.message}</FormHelperText>}
                    </Box>
                </Box>

                <TextField
                    sx={{ margin: '10px 10px' }}
                    label="Correo"
                    type="email"
                    {...register("correo", { required: 'Campo requerido' })}
                    fullWidth
                />
                {errors.correo && <FormHelperText>{errors.correo.message}</FormHelperText>}

                <TextField
                    sx={{ margin: '10px 10px' }}
                    label="Contraseña"
                    type="password"
                    id="password"
                    {...register("contraseña", { required: 'Campo requerido', minLength: 6 })}
                    onChange={checkPasswordMatch}
                    fullWidth
                />
                {errors.contraseña && <FormHelperText>{errors.contraseña.message}</FormHelperText>}

                <TextField
                    sx={{ margin: '10px 10px' }}
                    label="Verificación de contraseña"
                    type="password"
                    id="confirm-password"
                    fullWidth
                    onChange={checkPasswordMatch}
                    error={!passwordMatch}
                    helperText={!passwordMatch && "Las contraseñas no coinciden"}
                />

                <TextField
                    sx={{ margin: '10px 10px' }}
                    select
                    label="Rol"
                    {...register("role", { required: 'Campo requerido' })}
                    fullWidth
                >
                    <MenuItem value="EST">Estudiante</MenuItem>
                    <MenuItem value="PROF">Profesor</MenuItem>
                </TextField>
                {errors.role && <FormHelperText>{errors.role.message}</FormHelperText>}

                <TextField
                    sx={{ margin: '10px 10px' }}
                    label="Phone"
                    {...register("phone", { required: 'Campo es requerido' })}
                    fullWidth
                />
                {errors.phone && <FormHelperText>{errors.phone.message}</FormHelperText>}

                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
                    Enviar
                </Button>

                <Typography sx={{ fontSize: '18px', margin: '10px 10px', textAlign: 'center' }}>
                    ¿Ya tienes cuenta?{' '}
                    <Link to="/" className="transition cursor-pointer">Inicia sesión</Link>
                </Typography>
            </Box>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Registro exitoso</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Registro realizado con éxito, por favor dirígete a tu correo para confirmar el registro.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={redirectToHome}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </form>
    );
};

export default Register;