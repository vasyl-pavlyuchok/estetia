import React from 'react';

function AboutUs({ openChat }) {
  const cardStyle = "bg-white shadow-2xl rounded-3xl overflow-hidden";

  return (
    <section id="equipo" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-16 items-center ${cardStyle} p-8 md:p-12`}>
          <div className="relative">
            <img 
              src="https://i.postimg.cc/2y7SnrGJ/Gemini-Generated-Image-druivrdruivrdrui.png" 
              alt="Dra. Elena" 
              className="relative rounded-2xl shadow-lg w-full h-[500px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-estetia-text">
              "La belleza real es <br/><span className="font-bold">salud visible</span>."
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Soy la Dra. Elena R., directora médica de Estetia. Tras 15 años en Londres y Madrid, fundé esta clínica con una obsesión: resultados que se noten, pero que no se vean artificiales.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="font-bold text-2xl text-estetia-primary">15</h4>
                <p className="text-xs uppercase tracking-wider text-estetia-text">Años Experiencia</p>
              </div>
              <div>
                <h4 className="font-bold text-2xl text-estetia-primary">2.4k</h4>
                <p className="text-xs uppercase tracking-wider text-estetia-text">Pacientes</p>
              </div>
            </div>
            <div className="pt-6">
               <button onClick={openChat} className="border border-estetia-text px-8 py-3 rounded-full hover:bg-estetia-text hover:text-white transition-all duration-300">
                 Conocer Filosofía
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;