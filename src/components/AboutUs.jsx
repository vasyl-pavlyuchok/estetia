import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutUs = ({ openChat }) => {
  const glassButton = "bg-transparent hover:bg-white text-white hover:text-estetia-accent border-2 border-white backdrop-blur-xl shadow-lg hover:shadow-white/40 transition-all duration-300 rounded-full px-6 py-3 font-medium flex items-center gap-2 text-sm";

  return (
    <div id="equipo" className="py-24 sm:py-32 bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <img 
              src="https://assets.zyrosite.com/mp86MKQeprTxrnEW/gemini_generated_image_druivrdruivrdrui-AFkaihKa3OwdsXxG.png"
              alt="Dra. Ana Pérez"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover aspect-[3/4]"
            />
          </div>
          <div className="bg-estetia-accent/70 backdrop-blur-md rounded-3xl p-8 lg:p-12 text-center lg:text-left">
            <h2 className="text-base font-semibold leading-7 text-white">NUESTRA FUNDADORA</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Dra. Ana Pérez
            </p>
            <p className="mt-4 text-lg font-medium text-white">
              Médico Estético y Especialista en Armonización Facial
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              Con más de 15 años de experiencia, la Dra. Pérez es una referencia en medicina estética. Su filosofía se basa en la búsqueda de resultados naturales y armónicos, utilizando las técnicas más avanzadas para realzar la belleza individual de cada paciente. Es miembro de la SEME y ponente habitual en congresos internacionales.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
               <button onClick={openChat} className={glassButton}>
                Conocer Filosofía <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
