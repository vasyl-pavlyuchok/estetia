import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer'; // Importamos el hook
import WhatsAppWidget from './components/WhatsAppWidget';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Treatments from './components/Treatments';
import Faq from './components/Faq';
import AboutUs from './components/AboutUs';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  // Estado para controlar si la ventana de chat está abierta o cerrada
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);

  // Lógica para detectar si la sección CTA está en la vista
  const {
    ref: ctaRef, // Esta ref la asignaremos al contenedor de la sección CTA
    inView: isCTAInView, // Este booleano será true si el componente está en pantalla
  } = useInView({
    threshold: 0.3, // El componente se considera visible si un 30% de él está en pantalla
  });

  return (
    <div className="min-h-screen bg-estetia-bg text-estetia-text font-sans selection:bg-estetia-primary selection:text-white">
      
      <Navbar openChat={openChat} />
      <Hero openChat={openChat} />
      <WhyChooseUs />
      <AboutUs openChat={openChat} />
      <Treatments openChat={openChat} />
      <Testimonials />
      <Faq />

      {/* Envolvemos el componente CTA en un div y le asignamos la ref */}
      <div ref={ctaRef}>
        <CTA openChat={openChat} />
      </div>
      
      <Footer />

      {/* --- WIDGET --- */}
      {/* Pasamos el estado y la visibilidad de CTA al widget */}
      <WhatsAppWidget 
        isOpen={isChatOpen} 
        setIsOpen={setIsChatOpen} 
        isCTAInView={isCTAInView}
      />

    </div>
  );
}

export default App;
