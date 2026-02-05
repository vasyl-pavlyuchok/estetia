import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Home from './pages/Home';
// PrivacyPolicy ya no se importa
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

// Componente principal de la aplicación
function App() {
  const location = useLocation();

  const [isChatOpen, setIsChatOpen] = useState(false);
  const openChat = () => setIsChatOpen(true);

  const { ref: ctaRef, inView: isCTAInView } = useInView({
    threshold: 0.3,
  });

  const phoneNumber = '447452339418';

  useEffect(() => {
    const handleScrollToHash = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const timeoutId = setTimeout(handleScrollToHash, 100);
    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div className="min-h-screen bg-estetia-bg text-estetia-text font-sans selection:bg-estetia-primary selection:text-white">
      <Navbar openChat={openChat} />
      
      <Routes>
        <Route path="/" element={<Home openChat={openChat} ctaRef={ctaRef} />} />
        {/* La ruta de la política de privacidad ha sido eliminada */}
      </Routes>
      
      <Footer />
      
      <WhatsAppWidget 
        isOpen={isChatOpen} 
        setIsOpen={setIsChatOpen} 
        isCTAInView={isCTAInView}
        phoneNumber={phoneNumber}
      />
    </div>
  );
}

// Componente Wrapper para el Router
function AppWrapper() {
  return (
    <BrowserRouter basename="/estetia/">
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
