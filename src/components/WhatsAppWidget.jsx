import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppWidget({ phoneNumber = '+34644588923', message = 'Hola! Me gustaría saber más sobre vuestros tratamientos.' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openChat = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  const closeChat = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 300); // Duración de la animación de salida
  };

  const handleSend = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const buttonClass = `bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-110`;

  return (
    <>
      {!isOpen && (
        <button onClick={openChat} className={`fixed bottom-6 right-6 z-50 ${buttonClass}`}>
          <FaWhatsapp size={28} />
        </button>
      )}

      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 w-80 md:w-96 ${isClosing ? 'animate-fade-out-down' : 'animate-fade-in-up'}`}>
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200/50 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <FaWhatsapp size={24} />
                <h3 className="font-bold text-lg">WhatsApp Chat</h3>
              </div>
              <button onClick={closeChat} className="text-white/80 hover:text-white transition-opacity">
                <X size={24} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gray-50/50">
              <div className="bg-white p-3 rounded-lg shadow-sm border max-w-xs">
                <p className="text-sm text-gray-700">¡Hola! 👋</p>
                <p className="text-sm text-gray-700 mt-1">¿Necesitas ayuda? Escríbenos para una consulta gratuita.</p>
              </div>
            </div>

            {/* Footer / Call to action */}
            <div className="p-4 bg-gray-100/60">
              <button 
                onClick={handleSend} 
                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105">
                <FaWhatsapp size={20} />
                Iniciar Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WhatsAppWidget;
