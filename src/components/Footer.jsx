import React from 'react';
import { Instagram, Linkedin, Twitter, Facebook, Phone } from 'lucide-react';

function Footer() {
  // Define social media links
  const socialLinks = [
    { Icon: Instagram, href: '#', name: 'Instagram' },
    { Icon: Linkedin, href: '#', name: 'LinkedIn' },
    { Icon: Twitter, href: '#', name: 'Twitter' },
    { Icon: Facebook, href: '#', name: 'Facebook' },
    { Icon: Phone, href: '#', name: 'Phone' },
  ];

  // Footer link sections
  const footerSections = [
    {
      title: 'Tratamientos',
      links: [
        { text: 'Facial Completo', href: '#' },
        { text: 'Body Sculpt', href: '#' },
        { text: 'Unidad Capilar', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacidad', href: '#' },
        { text: 'Cookies', href: '#' },
        { text: 'Aviso Médico', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-gray-700">
          {/* About Section */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold">ESTETIA<span className="text-estetia-primary">.</span></h3>
            <p className="text-gray-400 text-sm">Clínica de medicina estética autorizada en Madrid.</p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map(({ Icon, href, name }) => (
                <a key={name} href={href} className="text-gray-400 hover:text-estetia-primary" aria-label={name}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Location Section */}
          <div className="md:col-span-1">
            <h4 className="font-bold mb-4 tracking-wider uppercase text-sm">Encuéntranos</h4>
            <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.832629235944!2d-3.703790184592241!3d40.43293697936307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287a9a1f1b2d%3A0x1d4b9b0d2e0b1f3d!2sCalle%20de%20Fuencarral%2C%20Madrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1684493503026!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-4 tracking-wider uppercase text-sm">{section.title}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="hover:text-estetia-primary">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-8">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Estetia. Todos los derechos reservados. Diseñado por Vasyl Pavlyuchok y sus Asistentes de IA.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
