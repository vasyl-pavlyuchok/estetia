import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer 
      className="bg-estetia-secondary text-estetia-text pt-16 pb-8 sm:pt-24 sm:pb-5"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="flex justify-center text-center mb-16">
          <h3 className="text-4xl font-extrabold text-estetia-accent tracking-tight">Estetia</h3>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          
          <div>
            <h3 className="text-lg font-semibold leading-7 text-estetia-text">Tratamientos Faciales</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li><a href="#" className="text-sm leading-6 hover:text-estetia-accent transition-colors">Diagnóstico Facial Avanzado</a></li>
              <li><a href="#" className="text-sm leading-6 hover:text-estetia-accent transition-colors">Rejuvenecimiento con Láser (IPL)</a></li>
              <li><a href="#" className="text-sm leading-6 hover:text-estetia-accent transition-colors">Bioestimuladores de Colágeno</a></li>
              <li><a href="#" className="text-sm leading-6 hover:text-estetia-accent transition-colors">Peeling Químico Médico</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold leading-7 text-estetia-text">Tratamientos Corporales</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li><a href="#" className="text-sm leading-6 hover:text-estetia-accent transition-colors">Remodelación Corporal Avanzada</a></li>
              <li><a href="#" className="text-sm leading-6 hover:text-estetia-accent transition-colors">Depilación Láser de Diodo</a></li>
              <li><a href="#" className="text-sm leading-6 hover:text-estetia-accent transition-colors">Tratamiento para la Celulitis</a></li>
              <li><a href="#" className="text-sm leading-6 hover:text-estetia-accent transition-colors">Presoterapia Avanzada</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold leading-7 text-estetia-text">Contáctame</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-estetia-accent" />
                <a href="mailto:info@estetia.com" className="text-sm leading-6 hover:text-estetia-accent transition-colors">info@estetia.com</a>
              </li>
              <li className="text-sm leading-6">
                <p>Calle Serrano 45, Oficina 3A</p>
                <p>28001 Madrid, España</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold leading-7 text-estetia-text">Mis Redes Sociales</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li className="flex items-center space-x-2">
                <Instagram className="h-5 w-5 text-estetia-accent" />
                <a href="#" className="text-sm leading-6 hover:text-estetia-accent transition-colors">@estetia_clinic</a>
              </li>
              <li className="flex items-center space-x-2">
                <Share2 className="h-5 w-5 text-estetia-accent" />
                <a href="#" className="text-sm leading-6 hover:text-estetia-accent transition-colors">@estetia_official</a>
              </li>
               <li className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5 text-estetia-accent" />
                <a href="#" className="text-sm leading-6 hover:text-estetia-accent transition-colors">Estetia en LinkedIn</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-estetia-text/20 pt-8 sm:mt-20 flex flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm leading-6 text-estetia-text/80">
            <Link to="/politica-de-privacidad" className="hover:text-estetia-accent transition-colors">Política de Privacidad</Link>
            <a href="#" className="hover:text-estetia-accent transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-estetia-accent transition-colors">Política de Cookies</a>
            <a href="#" className="hover:text-estetia-accent transition-colors">Mapa del sitio</a>
          </div>
          <div className="mt-8 text-xs leading-5 text-estetia-text/50 lg:order-1 lg:mt-0">
            <p>&copy; 2026 Estetia. Todos los derechos reservados. Diseñado por Vasyl Pavlyuchok.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
