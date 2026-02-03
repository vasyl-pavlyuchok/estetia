
import React from 'react';
import { MessageCircle, HelpCircle, Calendar } from 'lucide-react';

const ActionItem = ({ icon: Icon, title, description }) => (
  <div className="relative pl-16">
    <dt className="text-base font-semibold leading-7 text-gray-900">
      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-estetia-primary/10">
        <Icon className="h-6 w-6 text-estetia-primary" aria-hidden="true" />
      </div>
      {title}
    </dt>
    <dd className="mt-2 text-base leading-7 text-gray-600">{description}</dd>
  </div>
);

const CTA = () => {
  return (
    <section 
      id="contacto"
      className="bg-estetia-bg py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">

          {/* Columna de Información */}
          <div className="max-w-xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ¿Lista para dar el siguiente paso?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Tu camino hacia la belleza y el bienestar comienza con una simple conversación. Te lo ponemos fácil, elige cómo quieres empezar.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <ActionItem 
                icon={HelpCircle}
                title="Resuelve tus dudas"
                description="Pregúntanos cualquier cosa sobre nuestros tratamientos, tecnología o cuidados. Estamos aquí para aclarar todas tus inquietudes."
              />
              <ActionItem 
                icon={MessageCircle}
                title="Asesoramiento personalizado"
                description="Cuéntanos tus objetivos y te orientaremos sobre el plan más adecuado para ti, sin ningún tipo de compromiso."
              />
              <ActionItem 
                icon={Calendar}
                title="Agenda tu cita"
                description="Si ya lo tienes claro, coordinemos directamente una fecha y hora para tu consulta o tratamiento inicial."
              />
            </dl>
          </div>

          {/* Columna de Acción (Tarjeta de Cristal) */}
          <div className="relative lg:mt-0">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 sm:p-12 text-center">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Inicia la conversación
                </h3>
                <p className="mt-3 text-lg text-gray-600">
                  Haz clic en el botón para enviarnos un mensaje directo. ¡Te respondemos al instante!
                </p>
                <a 
                  href="https://wa.me/34XXXXXXXXX" // Reemplazar con el número de WhatsApp real
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-green-500 px-10 py-4 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.4 16.88L2.06 22L7.32 20.64C8.81 21.39 10.4 21.81 12.04 21.81C17.5 21.81 21.95 17.36 21.95 11.9C21.95 9.25 20.94 6.78 19.21 4.96C17.38 3.13 14.81 2 12.04 2M12.04 3.62C16.53 3.62 20.24 7.33 20.24 11.9C20.24 16.47 16.53 20.18 12.04 20.18C10.56 20.18 9.14 19.81 7.89 19.14L7.5 18.93L4.91 19.61L5.6 17.08L5.38 16.69C4.66 15.3 4.26 13.63 4.26 11.91C4.26 7.33 7.97 3.62 12.04 3.62M16.95 14.48C16.71 14.48 15.5 13.89 15.27 13.8C15.03 13.71 14.86 13.66 14.69 13.91C14.53 14.15 14.04 14.74 13.87 14.9C13.71 15.07 13.54 15.12 13.29 15.03C13.05 14.94 12.21 14.65 11.22 13.76C10.44 13.08 9.92 12.25 9.75 12C9.58 11.75 9.75 11.61 9.89 11.47C10.02 11.33 10.18 11.12 10.33 10.95C10.48 10.78 10.53 10.65 10.44 10.5C10.36 10.35 9.98 9.36 9.81 8.94C9.65 8.52 9.48 8.58 9.35 8.58C9.22 8.58 9.05 8.58 8.88 8.58C8.71 8.58 8.46 8.62 8.24 8.87C8.03 9.11 7.54 9.59 7.54 10.7C7.54 11.81 8.27 12.89 8.39 13.06C8.52 13.23 9.97 15.55 12.23 16.46C12.87 16.73 13.33 16.9 13.68 17.03C14.24 17.22 14.73 17.18 15.09 16.82C15.49 16.41 16.2 15.54 16.37 15.29C16.54 15.04 16.69 14.95 16.84 14.95C16.99 14.95 17.18 14.95 17.35 14.95H16.95Z" />
                  </svg>
                  Chatea con Nosotros en WhatsApp
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
