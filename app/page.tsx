"use client"; // Indica que este es un componente del lado del cliente

import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Definir tipos para los proyectos y videos
type Video = {
  title: string;
  url: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
};

export default function Home() {
  const [content, setContent] = useState<{ videos: Video[]; projects: Project[] }>({
    videos: [],
    projects: [],
  });

  useEffect(() => {
    // Leer el archivo JSON desde la carpeta public
    fetch('/content.json')
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <div className="container mt-5">
      {/* Sección de Inicio */}
      <div id="inicio" className="jumbotron bg-light p-5 rounded min-vh-100 d-flex align-items-center">
        <div>
          <h1 className="display-4">Bienvenido a la página de construcción</h1>
          <p className="lead">
            Nos especializamos en obras menores, ofreciendo servicios profesionales y de calidad.
          </p>
          <hr className="my-4" />
          <p>
            Contáctanos para obtener más información sobre nuestros servicios o para solicitar una cotización.
          </p>
          <a className="btn btn-primary btn-lg" href="#servicios" role="button">
            Ver servicios
          </a>
        </div>
      </div>

      {/* Sección de Servicios */}
      <div id="servicios" className="mt-5 min-vh-100 d-flex align-items-center">
        <div>
          <h2>Servicios que ofrecemos</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Reparaciones</h5>
                  <p className="card-text">Nos encargamos de reparaciones menores de todo tipo.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Construcciones pequeñas</h5>
                  <p className="card-text">Realizamos ampliaciones y construcciones a pequeña escala.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Pintura y acabados</h5>
                  <p className="card-text">Ofrecemos servicios de pintura, acabados y remodelaciones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Proyectos */}
      <div id="proyectos" className="mt-5 min-vh-100 d-flex align-items-center">
        <div className="container text-center">
          <h2>Proyectos realizados</h2>
          <div className="row">
            {content.projects.map((project, index) => (
              <div key={index} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <img src={project.image} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de Videos */}
      <div id="videos" className="mt-5 min-vh-100 d-flex align-items-center">
        <div className="container text-center">
          <h2>Unboxing y Videos de los Trabajos</h2>
          {content.videos.map((video, index) => (
            <div key={index} className="mb-4">
              <iframe
                width="560"
                height="315"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Contacto */}
      <div id="contacto" className="mt-5 min-vh-100 d-flex align-items-center">
        <div className="container">
          <h2>Contacto</h2>
          <p>Si tienes alguna pregunta o deseas solicitar una cotización, contáctanos usando el siguiente formulario:</p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" placeholder="Tu nombre" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea className="form-control" id="message" rows={4} placeholder="Escribe tu mensaje aquí" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
}
