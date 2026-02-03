
import React from 'react';
import { Star, StarHalf, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sofía G.',
    rating: 5,
    text: 'El trato es excepcional y los resultados del tratamiento con láser simplemente espectaculares. He recuperado la luminosidad de mi piel. ¡Mil gracias!',
  },
  {
    name: 'Carlos V.',
    rating: 5,
    text: 'Tenía mis dudas sobre la remodelación corporal, pero el equipo de Estetia me asesoró de maravilla. Estoy encantado con los resultados, muy naturales.',
  },
  {
    name: 'Isabel M.',
    rating: 4.5,
    text: 'La mejor clínica de estética que he probado. Son increíblemente profesionales y honestos. El plan personalizado fue clave para mí. La recomiendo 100%.',
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />);
    } else if (i - 0.5 === rating) {
      stars.push(<StarHalf key={i} className="h-5 w-5 text-yellow-400 fill-current" />);
    } else {
      stars.push(<Star key={i} className="h-5 w-5 text-gray-400 fill-current" />);
    }
  }
  return <div className="flex items-center gap-1">{stars}</div>;
};


const Testimonials = () => {
  const cardStyle = "bg-estetia-primary/60 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-estetia-primary/40 hover:-translate-y-2";

  return (
    <section 
      id="opiniones" 
      className="py-24 sm:py-32 bg-cover bg-center bg-blend-overlay"
      style={{
        backgroundImage: 'url(https://cdn.magicdecor.in/com/2023/09/29153816/White-and-Gold-Marble-wallpapers.jpg)',
        backgroundColor: 'rgba(255, 255, 255, 0.6)'
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
           <h2 className="text-base font-semibold leading-7 text-estetia-primary">OPINIONES REALES</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lo Que Dicen Nuestros Pacientes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa. Estas son algunas de sus experiencias.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="-my-12 divide-y-2 divide-transparent">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className={cardStyle}>
                  <div className="flex-grow">
                    <Quote className="h-10 w-10 text-white/50 mb-6" />
                    <p className="text-estetia-bg text-base leading-relaxed italic">{testimonial.text}</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/30">
                    <div className="flex justify-between items-center">
                        <p className="text-md font-bold text-white">{testimonial.name}</p>
                        <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
