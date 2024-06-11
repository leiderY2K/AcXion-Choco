import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                mail: email,
                password: password
            });
            
            if (response.data.message === 'Login successful') {
                navigate('/courses');
            } else if (response.data.message === 'Invalid email or password') {
                setError('Email o contraseña inválidos');
            } else {
                setError('Ocurrió un error durante el inicio de sesión');
            }
        } catch (error) {
            setError('Error en la solicitud');
        }
    };

    return (
        <div>
            <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white font-bold text-center">Inicio de sesión</h1>
                <form onSubmit={handleLogin}>
                    <div className="relative my-4 text-white mb-10">
                        <input
                            type="email"
                            className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border:blue 600 peer"
                            placeholder=""
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <label
                            htmlFor=""
                            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus::dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mb-5"
                        >
                            Correo
                        </label>
                    </div>
                    <div className="relative my-4 text-white">
                        <input
                            type="password"
                            className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus-border:blue 600 peer"
                            placeholder=""
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <label
                            htmlFor=""
                            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus::dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Contraseña
                        </label>
                    </div>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <div>
                        <div className="text-white flex justify-center items-center">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="Recordar Contraseña">Recordar contraseña</label>
                        </div>
                        <div className="text-white flex justify-center items-center">
                            <button
                                type="submit"
                                className="w-60 mb-4 mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 flex justify-center items-center text-[18px]"
                            >
                                Ingresar
                            </button>
                        </div>
                        <Link to="" className="text-white flex justify-center items-center transition cursor-pointer">
                            ¿Olvidaste tu contraseña?
                        </Link>
                        <div className="text-white flex justify-center items-center">
                            <span>
                                ¿Eres nuevo?
                                <Link to="/Register" className="transition cursor-pointer">
                                    Crear cuenta
                                </Link>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;