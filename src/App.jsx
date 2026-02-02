import React, { useState } from 'react';
import WhatsAppWidget from './components/WhatsAppWidget';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Treatments from './components/Treatments';
import Faq from './components/Faq';
import AboutUs from './components/AboutUs';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);

  return (
    <div className="min-h-screen bg-estetia-bg text-estetia-text font-sans selection:bg-estetia-primary selection:text-white">
      
      <Navbar openChat={openChat} />
      <Hero openChat={openChat} />
      <WhyChooseUs />
      <Treatments openChat={openChat} />
      <Faq />
      <AboutUs openChat={openChat} />
      <CTA openChat={openChat} />
      <Footer />

      {/* --- WIDGET --- */}
      <WhatsAppWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} />

    </div>
  );
}

export default App;