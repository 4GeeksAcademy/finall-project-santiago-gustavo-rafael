import React, { useState } from 'react';
import RiseLandingPageLogo from '../assets/img/RiseLandingPageLogo.png'; 
import Button from './../components/common/Button';

function LoginPage() {
    const [isLoginView, setIsLoginView] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const apiUrl = 'https://upgraded-engine-7vwgppprjrgq3x7vr-3001.app.github.dev'; 
        const endpoint = isLoginView ? `${apiUrl}/login` : `${apiUrl}/register`;
        
        let payload = {
            email,
            password,
        };

        if (!isLoginView) {
            if (password !== confirmPassword) {
                setError('Las contraseñas no coinciden.');
                setLoading(false);
                return;
            }
            payload = { ...payload, username };
        }

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
                console.log(data.message);
                if (data.token) {
                    localStorage.setItem('rise_token', data.token);
                    alert(data.message + '. Redirigiendo...');
                    window.location.href = '/dashboard'; 
                } else {
                    alert(data.message + '. Por favor, inicia sesión.');
                    setIsLoginView(true);
                }
            } else {
                setError(data.message || 'Ocurrió un error inesperado.');
            }
        } catch (err) {
            console.error('Error de red o del servidor:', err);
            setError('No se pudo conectar con el servidor. Inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        // Contenedor principal: min-h-100vh, fondo oscuro (custom-bg-dark), centrado de elementos
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 custom-bg-dark text-white p-3">
            
            {/* Contenedor del logo y Phineas */}
            {/* mt-n para margen negativo, w-auto y max-w-100 para responsive image */}
            <div className="text-center mb-4 mt-n5 mt-sm-n5" style={{ marginTop: '-80px' }}> {/* Ajuste manual para subirlo */}
                <img 
                    src={RiseLandingPageLogo} 
                    alt="RISE Logo with Phineas the Phoenix" 
                    className="img-fluid w-auto" 
                    style={{ maxWidth: '200px', marginBottom: '1rem' }} // Controla el tamaño de la imagen
                />
            </div>

            {/* Título de la app (oculto si la imagen ya lo contiene, o puedes mostrarlo aquí) */}
            {/* <h1 className="display-4 fw-bold text-gradient-rise mb-4">RISE</h1> */}

            {/* Mensaje de bienvenida */}
            <p className="lead text-center text-secondary mb-5" style={{ maxWidth: '400px' }}>
                ¡Eleva tus hábitos, domina tus días y transforma tu vida!
            </p>

            {/* Formulario de Login/Registro */}
            <div className="card shadow-lg p-4 bg-dark-secondary fade-in" style={{ maxWidth: '380px', width: '100%' }}>
                <h2 className="card-title text-center h4 mb-4">
                    {isLoginView ? 'Inicia Sesión' : 'Crea una Cuenta'}
                </h2>

                {error && <p className="text-danger text-center mb-3">{error}</p>}

                <form onSubmit={handleSubmit}>
                    {!isLoginView && (
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label text-muted">
                                Nombre de Usuario
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="form-control custom-input"
                                placeholder="Tu nombre"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required={!isLoginView}
                            />
                        </div>
                    )}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-muted">
                            Correo Electrónico
                        </label>
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
                        <label htmlFor="password" className="form-label text-muted">
                            Contraseña
                        </label>
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
                    {!isLoginView && (
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="form-label text-muted">
                                Confirmar Contraseña
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="form-control custom-input"
                                placeholder="********"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required={!isLoginView}
                            />
                        </div>
                    )}
                    <div className="d-grid gap-2"> {/* d-grid para botón de ancho completo */}
                        <Button
                            type="submit"
                            disabled={loading}
                            >
                            {loading ? 'Iniciando...' : 'INICIA SESIÓN'}
                        </Button>
                    </div>
                </form>

                <div className="mt-4 text-center">
                    <button
                        type="button" // Importante: para que no actúe como submit
                        onClick={() => setIsLoginView(!isLoginView)}
                        className="btn btn-link btn-link-rise" // Clase personalizada para el color del link
                    >
                        {isLoginView ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia Sesión'}
                    </button>
                </div>
            </div>

            {/* Sección de los 5 pilares (fijo abajo) */}
            <div className="position-absolute bottom-0 start-0 end-0 p-3 text-center text-muted small">
                <div className="d-flex justify-content-center flex-wrap gap-4">
                    <span>🧠 Mente</span>
                    <span>💪 Cuerpo</span>
                    <span>🚀 Productividad</span>
                    <span>❤️ Social</span>
                    <span>🎨 Creatividad</span>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;