
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
    <footer 
      className="bg-gray-900 bg-cover bg-center bg-blend-overlay text-gray-300"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1561835491-952271cf9537?q=80&w=2070&auto=format&fit=crop)',
        backgroundColor: 'rgba(17, 24, 39, 0,9)' // bg-gray-900 with 95% opacity
      }}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="md:grid md:grid-cols-4 md:gap-8">
          
          {/* Brand and Address */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white">Estetia</h3>
            <p className="text-sm leading-6">La vanguardia de la belleza y el bienestar.</p>
            <div className="space-y-2 text-sm">
                <p>Calle Ficticia 123, Oficina 4B</p>
                <p>San Francisco, CA 94102</p>
                <p>contacto@estetia.com</p>
            </div>
          </div>
          
          {/* Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:col-span-2 md:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Tratamientos</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Láser Facial</a></li>
                <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Remodelación Corporal</a></li>
                <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Depilación Definitiva</a></li>
                <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Bienestar y Nutrición</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Empresa</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Protocolo Estetia</a></li>
                <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Opiniones</a></li>
                <li><a href="#" className="text-sm leading-6 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-white">Suscríbete a nuestra newsletter</h3>
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">Dirección de email</label>
              <input type="email" name="email-address" id="email-address" autoComplete="email" required className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-2 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-estetia-primary sm:w-64 sm:text-sm sm:leading-6 xl:w-full" placeholder="Introduce tu email" />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button type="submit" className="flex w-full items-center justify-center rounded-md bg-estetia-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-estetia-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-estetia-primary transition-colors">Suscribirme</button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright y Redes Sociales */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:flex lg:items-center lg:justify-between">
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
