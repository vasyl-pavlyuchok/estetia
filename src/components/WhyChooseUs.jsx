import React from 'react';
import { CheckCircle, Zap, Leaf } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-estetia-primary" />,
    title: 'Resultados Inmediatos',
    description: 'Tecnología de vanguardia para tratamientos eficaces y prácticamente indoloros.',
  },
  {
    icon: <Leaf className="h-8 w-8 text-estetia-primary" />,
    title: 'Belleza Natural y Genuina',
    description: 'Realzamos tu belleza única, respetando tus rasgos para un resultado auténtico y natural.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-estetia-primary" />,
    title: 'Planes a Tu Medida',
    description: 'Tras un diagnóstico facial 3D, creamos un plan de tratamiento exclusivo para ti.',
  },
];

const WhyChooseUs = () => {
  const cardStyle = "bg-white/60 backdrop-blur-lg shadow-xl rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2";

  return (
    <div 
      className="relative py-24 sm:py-32 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0657/3100/2634/files/papier-peint-imitation-marbre-blanc-avec-veinage-rose.jpg?v=1701428976)' }}
    >
      <div className="absolute inset-0 bg-estetia-bg/70"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-estetia-primary">PROTOCOLO ESTETIA</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            La Excelencia es Nuestro Estándar
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            No solo cumplimos con los más altos estándares, los definimos. Cada tratamiento es una obra de arte, respaldada por la ciencia y un cuidado excepcional.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className={cardStyle}>
                <div className="relative pl-16">
                  <dt className="text-lg font-semibold leading-7 text-gray-800">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                      {feature.icon}
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
