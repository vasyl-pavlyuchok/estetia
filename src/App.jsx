import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  // Detectamos si estamos en GitHub Pages para aplicar el basename
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <BrowserRouter basename={isProduction ? '/estetia' : ''}>
      <div className="min-h-screen bg-estetia-bg text-estetia-text font-sans selection:bg-estetia-primary selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;