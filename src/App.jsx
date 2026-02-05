import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

// Componente principal de la aplicación con la lógica de estado
function App() {
  const location = useLocation();

  // --- Lógica de estado para el chat, ahora en el componente principal ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const openChat = () => setIsChatOpen(true);

  const { ref: ctaRef, inView: isCTAInView } = useInView({
    threshold: 0.3,
  });

  const phoneNumber = '447452339418';
  // --- Fin de la lógica de estado ---

  useEffect(() => {
    const handleScrollToHash = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          // Usamos block: 'start' para alinear la sección con la parte superior del viewport,
          // teniendo en cuenta la altura del navbar fijo.
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Un pequeño retraso para asegurar que la navegación ha finalizado antes del scroll
    const timeoutId = setTimeout(handleScrollToHash, 100);
    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div className="min-h-screen bg-estetia-bg text-estetia-text font-sans selection:bg-estetia-primary selection:text-white">
      {/* El Navbar ahora recibe la función para abrir el chat */}
      <Navbar openChat={openChat} />
      
      <Routes>
        {/* La página Home ahora recibe la función y la referencia para los botones internos */}
        <Route path="/" element={<Home openChat={openChat} ctaRef={ctaRef} />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
      </Routes>
      
      <Footer />
      
      {/* El WhatsAppWidget se renderiza aquí para estar disponible en toda la app */}
      <WhatsAppWidget 
        isOpen={isChatOpen} 
        setIsOpen={setIsChatOpen} 
        isCTAInView={isCTAInView}
        phoneNumber={phoneNumber}
      />
    </div>
  );
}

// Componente Wrapper para que App pueda usar los hooks de react-router
function AppWrapper() {
  return (
    <BrowserRouter basename="/estetia/">
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
