// src/front/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"; // <-- AÑADIMOS Link para la navegación
import { useAuth } from "../context/AuthContext"; // <-- IMPORTA useAuth (ya lo tenías)
import RiseLandingPageLogo from '../assets/img/RiseLandingPageLogo.png';
import Button from '../components/common/Button';

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth(); // <-- OBTENEMOS la función login del contexto

  // --- ELIMINAMOS LOS ESTADOS INNECESARIOS ---
  // const [isLoginView, setIsLoginView] = useState(true); // Ya no es necesario
  // const [username, setUsername] = useState(''); // Pertenece a RegisterPage
  // const [confirmPassword, setConfirmPassword] = useState(''); // Pertenece a RegisterPage

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // --- REESCRIBIMOS handleSubmit PARA USAR EL CONTEXTO ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Llama a la función login (simulada) de tu AuthContext
      await login({ email, password });
      // 2. Si el login (simulado) es exitoso, navega al dashboard
      navigate("/dashboard");
    } catch (err) {
      // En el futuro, el login del contexto podría lanzar errores
      setError(err.message || 'Error al iniciar sesión. Verifica tus credenciales.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 custom-bg-dark text-white p-3">
      {/* --- ESTA PARTE SE MANTIENE EXACTAMENTE IGUAL --- */}
      <div className="text-center mb-4 mt-n5 mt-sm-n5" style={{ marginTop: '-80px' }}>
        <img
          src={RiseLandingPageLogo}
          alt="RISE Logo with Phineas the Phoenix"
          className="img-fluid w-auto"
          style={{ maxWidth: '200px', marginBottom: '1rem' }}
        />
      </div>
      <p className="lead text-center text-secondary mb-5" style={{ maxWidth: '400px' }}>
        ¡Eleva tus hábitos, domina tus días y transforma tu vida!
      </p>
      {/* --- FIN DE LA PARTE QUE SE MANTIENE IGUAL --- */}

      <div className="card shadow-lg p-4 bg-dark-secondary fade-in" style={{ maxWidth: '380px', width: '100%' }}>
        <h2 className="card-title text-center h4 mb-4">
          Inicia Sesión {/* <-- Texto fijo, ya no depende de isLoginView */}
        </h2>

        {error && <p className="text-danger text-center mb-3">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* --- SE ELIMINARON LOS INPUTS CONDICIONALES DE REGISTRO --- */}

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

          <div className="d-grid gap-2">
            <Button type="submit" size="lg" variant="primary" fullWidth disabled={loading}>
              {loading ? 'Iniciando…' : 'INICIA SESIÓN'} {/* <-- Texto fijo */}
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center">
          {/* --- CAMBIAMOS EL BOTÓN POR UN LINK A LA PÁGINA DE REGISTRO --- */}
          <Link to="/register" className="btn btn-link btn-link-rise">
            ¿No tienes una cuenta? Regístrate
          </Link>
        </div>
      </div>

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