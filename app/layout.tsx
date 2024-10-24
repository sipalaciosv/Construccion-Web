import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Empresa de Construcción',
  description: 'Página de empresa de construcción de obras menores',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

        {/* Navbar de Bootstrap fijo en la parte superior */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#inicio">Construcción</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#inicio">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#servicios">Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#proyectos">Proyectos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#videos">Videos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacto">Contacto</a>
                </li>
              </ul>

              {/* Iconos de redes sociales en el navbar */}
              <div className="d-flex">
                <a href="https://www.facebook.com" target="_blank" className="mx-2">
                  <img src="/images/facebook-icon.png" alt="Facebook" width="30" />
                </a>
                <a href="https://www.instagram.com" target="_blank" className="mx-2">
                  <img src="/images/instagram-icon.png" alt="Instagram" width="30" />
                </a>
                <a href="https://www.tiktok.com" target="_blank" className="mx-2">
                  <img src="/images/tiktok-icon.png" alt="TikTok" width="30" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Aquí se renderizarán las páginas */}
        {children}
      </body>
    </html>
  );
}
