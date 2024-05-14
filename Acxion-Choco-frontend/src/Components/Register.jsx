import React, { useState } from 'react';
import { TextField, Button, Typography, MenuItem, Box, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";


const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [passwordMatch, setPasswordMatch] = useState(true);

    // const onSubmit = hpta => {
    //     console.log(hpta);
    // };
    function onSubmit(date) {
        console.log(date);
        let nombre_completo = date.nombre + date.apellido
        console.log(nombre_completo);

    }

    const checkPasswordMatch = () => {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        console.log(`${password} -- ${confirmPassword}`);
        setPasswordMatch(password === confirmPassword);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', margin: '20px auto', width: '50%' }}>
                <Typography variant="h6">Formulario de registro</Typography>

                <TextField sx={{ margin: '10px 10px' }} label="Nombre" {...register("nombre", { required: true })}
                    fullWidth />
                {errors.nombre && <FormHelperText>Campo es requerido</FormHelperText>}
                <TextField sx={{ margin: '10px 10px' }} label="Apellido" {...register("apellido", { required: true })}
                    fullWidth />
                {errors.apellido && <FormHelperText>Campo requerido</FormHelperText>}
                <Box sx={{ display: "flex", flexDirection: 'row' }}>
                    <Box sx={{ marginRight: '30px' }}>
                        <TextField sx={{ margin: '10px 10px', width: '120px' }} select
                            label="Tipo de documento" {...register("tipoDocumento", { required: true })} fullWidth>
                            <MenuItem value="CC">CC</MenuItem>
                            <MenuItem value="TI">TI</MenuItem>
                        </TextField>
                        {errors.tipoDocumento && <FormHelperText>Campo requerido</FormHelperText>}
                    </Box>
                    <Box>
                        <TextField
                            sx={{ margin: '10px 10px', width: '560px' }}
                            label="Numero de identificación"
                            type="number"
                            {...register("Numero de identificación", { required: true })}
                            fullWidth
                        />
                        {errors["Numero de identificación"] && <FormHelperText>Campo requerido</FormHelperText>}
                    </Box>
                </Box>

                <TextField sx={{ margin: '10px 10px' }} label="Correo"
                    type="email" {...register("correo", { required: true })}
                    fullWidth />
                {errors.correo && <FormHelperText>Campo requerido</FormHelperText>}
                <TextField sx={{ margin: '10px 10px' }}
                    label="Contraseña"
                    type="password"
                    id="password"
                    {...register("contraseña", { required: true, minLength: 6, maxLength: 7 })}
                    onChange={(e) => checkPasswordMatch()}
                    fullWidth
                />
                {errors.contraseña && errors.contraseña.type === "minLength" && (
                    <FormHelperText>La contraseña debe tener al menos 6 caracteres</FormHelperText>
                )}
                <TextField sx={{ margin: '10px 10px' }}
                    label="Verificación de contraseña"
                    type="password"
                    id="confirm-password"
                    fullWidth
                    onChange={(e) => checkPasswordMatch()}
                    error={!passwordMatch}
                    helperText={!passwordMatch && "Las contraseñas no coinciden"}
                />
                <Button type="submit" variant="contained" color="primary">
                    Enviar
                </Button>

                <Typography sx={{ fontSize: '18px', margin: '10px 10px', textAlign: 'center' }}>
                    ¿Ya tienes cuenta?{' '}
                    <Link to="/" className="transition cursor-pointer">Inicia sesión</Link>

                </Typography>


            </Box>
        </form>
    )
        ;
}

export default Register;
