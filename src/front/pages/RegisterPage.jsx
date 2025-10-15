// src/front/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Button from './../components/common/Button';
import RiseLandingPageLogo from '../assets/img/RiseLandingPageLogo.png'; 

function RegisterPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }
        
        setLoading(true);

        const apiUrl = 'https://upgraded-engine-7vwgppprjrgq3x7vr-3001.app.github.dev';
        const endpoint = `${apiUrl}/register`;
        
        const payload = {
            username,
            email,
            password,
        };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                // Registro exitoso
                alert(data.message + '. Ahora, por favor, inicia sesión.');
                navigate('/login'); // Redirige al usuario a la página de login
            } else {
                setError(data.message || 'Ocurrió un error al registrarse.');
            }
        } catch (err) {
            console.error('Error de red o del servidor:', err);
            setError('No se pudo conectar con el servidor. Inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 custom-bg-dark text-white p-3">
            <div className="card shadow-lg p-4 bg-dark-secondary fade-in" style={{ maxWidth: '380px', width: '100%' }}>
                <h2 className="card-title text-center h4 mb-4">Crea una Cuenta</h2>

                {error && <p className="text-danger text-center mb-3">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label text-muted">Nombre de Usuario</label>
                        <input
                            type="text"
                            id="username"
                            className="form-control custom-input"
                            placeholder="Tu nombre"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-muted">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control custom-input"
                            placeholder="tu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label text-muted">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control custom-input"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="form-label text-muted">Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="form-control custom-input"
                            placeholder="********"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-grid gap-2">
                       <Button
                            type="submit"
                            size="lg"
                            variant="primary"
                            fullWidth
                            disabled={loading}
                            >
                            {loading ? 'Creando cuenta…' : 'REGISTRARSE'}
                        </Button>

                    </div>
                </form>

                <div className="mt-4 text-center">
                    <button
                        type="button"
                        onClick={() => navigate('/login')} // Botón para ir a Iniciar Sesión
                        className="btn btn-link btn-link-rise"
                    >
                        ¿Ya tienes una cuenta? Inicia Sesión
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;