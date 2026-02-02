import React from 'react';
import { CheckCircle, Zap, Leaf } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-estetia-primary" />,
    title: 'Resultados Rápidos, Mínima Incomodidad',
    description: 'Nuestra tecnología de vanguardia garantiza tratamientos eficaces y prácticamente indoloros, para que puedas volver a tu rutina sin interrupciones.',
  },
  {
    icon: <Leaf className="h-8 w-8 text-estetia-primary" />,
    title: 'Tu Belleza, Respetada y Realzada',
    description: 'Creemos en resultados que se ven y se sienten naturales. Nuestro enfoque es realzar tu propia belleza, no transformarla en algo que no eres.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-estetia-primary" />,
    title: 'Un Plan Creado Solo Para Ti',
    description: 'Tu viaje empieza con un diagnóstico facial 3D. Entendemos tu piel a un nivel profundo para diseñar un plan de tratamiento único y a tu medida.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-estetia-primary">NUESTRA FILOSOFÍA</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            La Diferencia Estetia
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Más que una clínica, somos tus aliados en el cuidado de la piel. Combinamos la ciencia, la ética y un trato humano para ofrecerte resultados en los que puedes confiar.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-estetia-bg">
                    {feature.icon}
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
