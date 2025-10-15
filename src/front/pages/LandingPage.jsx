import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import RiseLandingPageLogo from '../assets/img/RiseLandingPageLogo.png';
import Button from './../components/common/Button';

function LandingPage() {
    const navigate = useNavigate(); // Hook para manejar la navegación

    return (
        // Contenedor principal: Ocupa toda la pantalla, fondo blanco, centrado con Flexbox
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light text-dark p-3">
            
            {/* Contenedor para la imagen y el texto principal, centrado */}
            <div className="text-center" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {/* Imagen del Fénix y el Logo */}
                <div className="mb-4">
                    <img 
                        src={RiseLandingPageLogo} 
                        alt="RISE Logo with Phineas the Phoenix" 
                        className="img-fluid" // img-fluid hace la imagen responsive
                        style={{ maxWidth: '600px', margin: '0 auto' }} // Controla el tamaño máximo de la imagen
                    />
                </div>

                {/* Mensaje de bienvenida */}
                <p className="lead text-secondary text-center mb-5 mx-auto" style={{ maxWidth: '450px' }}>
                    ¡Eleva tus hábitos, domina tus días y transforma tu vida!
                </p>

                {/* Contenedor de botones */}
                <div className="d-grid gap-3 col-10 col-md-6 col-lg-6 mx-auto">
                    {/* Botón de Registro (Principal) */}
                    <Button onClick={() => navigate('/register')}>
                        EMPIEZA TU ASCENSO
                    </Button>
                    
                    {/* Botón de Login (Secundario) */}
                    <button 
                        className="btn btn-lg btn-rise-secondary-outline fw-bold"
                        onClick={() => navigate('/login')} // Navega a la página de login
                    >
                        YA SOY UN FÉNIX
                    </button>
                </div>
            </div>

            {/* Sección de los 5 pilares (fijo abajo) */}
            <div className="w-100 p-3">
                <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-md-4 text-muted small">
                    <div className="footer-item">🧠 Mente</div>
                    <div className="footer-item">💪 Cuerpo</div>
                    <div className="footer-item">🚀 Productividad</div>
                    <div className="footer-item">❤️ Social</div>
                    <div className="footer-item">🎨 Creatividad</div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;