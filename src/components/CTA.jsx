import React from 'react';
import { MoveRight } from 'lucide-react';

function CTA({ openChat }) {
  const glassCard = "bg-white/30 backdrop-blur-2xl border border-white/20 shadow-lg rounded-3xl";

  return (
    <div className="max-w-6xl mx-auto px-6 mt-20">
        {/* --- CTA Section --- */}
        <div className={`relative ${glassCard} p-12 bg-estetia-bg/50 overflow-hidden`}>
           <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-estetia-primary/20 rounded-full blur-2xl"></div>
           <div className="relative z-10 text-center">
             <h2 className="text-4xl md:text-5xl font-light mb-4">¿Lista para <span className="font-bold">empezar</span>?</h2>
             <p className="text-gray-600 max-w-xl mx-auto mb-8">
               Tu viaje hacia una belleza natural y radiante comienza con una conversación. Pide tu cita de valoración gratuita.
             </p>
             <button
                onClick={openChat}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full py-3 px-8 font-bold text-white shadow-lg transition-all duration-300 ease-in-out bg-estetia-primary hover:bg-estetia-accent hover:shadow-estetia-accent/50"
             >
                <span className="z-10">Pedir Cita Ahora</span>
                <MoveRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
             </button>
           </div>
        </div>
    </div>
  );
}

export default CTA;