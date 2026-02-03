
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Linkedin', href: '#', icon: Linkedin },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Mapa */}
          <div className="space-y-8 xl:col-span-1">
             <h3 className="text-lg font-semibold leading-6 text-white">Nuestra Ubicación</h3>
             <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.294834710255!2d-122.4194155846813!3d37.77492957975871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f9361647%3A0x4a938d2f7f1843a!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2ses!4v1684493394017!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale-[100%] contrast-[1.2] opacity-70 hover:opacity-100 transition-opacity duration-300"
                ></iframe>
             </div>
          </div>

          {/* Links y Newsletter */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Tratamientos</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Láser Facial</a></li>
                  <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Remodelación Corporal</a></li>
                  <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Depilación Definitiva</a></li>
                  <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Bienestar y Nutrición</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Empresa</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Sobre Nosotros</a></li>
                  <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Protocolo Estetia</a></li>
                  <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Opiniones</a></li>
                  <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Contacto</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Suscríbete a nuestra newsletter</h3>
                <p className="mt-2 text-sm leading-6">Las últimas novedades, artículos y recursos, enviados a tu bandeja de entrada semanalmente.</p>
                <form className="mt-6 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">Dirección de email</label>
                  <input type="email" name="email-address" id="email-address" autoComplete="email" required className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-2 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-estetia-primary sm:w-64 sm:text-sm sm:leading-6 xl:w-full" placeholder="Introduce tu email" />
                  <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <button type="submit" className="flex w-full items-center justify-center rounded-md bg-estetia-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-estetia-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-estetia-primary transition-colors">Suscribirme</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright y Redes Sociales */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div className="flex space-x-6 lg:order-2">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400 transition-colors">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-500 lg:order-1 lg:mt-0">&copy; 2024 Estetia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
