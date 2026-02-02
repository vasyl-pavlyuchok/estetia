import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: '¿La primera consulta de valoración tiene algún coste?',
    answer: 'No, tu primera consulta de valoración es completamente gratuita. En ella, realizaremos un diagnóstico completo y te recomendaremos el plan de tratamiento que mejor se adapte a tus necesidades y objetivos, junto con un presupuesto detallado sin ningún compromiso.',
  },
  {
    question: '¿Los tratamientos son dolorosos?',
    answer: 'Nos esforzamos por garantizar que tu experiencia sea lo más cómoda posible. La mayoría de nuestros tratamientos son mínimamente invasivos y prácticamente indoloros. En casos específicos donde pueda haber una ligera molestia, utilizamos anestesia tópica para minimizarla.',
  },
  {
    question: '¿Cuándo empezaré a ver los resultados?',
    answer: 'El tiempo para ver los resultados varía según el tratamiento. Algunos procedimientos ofrecen resultados visibles casi de inmediato, mientras que otros, como los tratamientos de regeneración de colágeno, muestran una mejora gradual a lo largo de varias semanas. Te lo explicaremos en detalle en tu consulta.',
  },
  {
    question: '¿Son seguros los procedimientos?',
    answer: 'Absolutamente. La seguridad de nuestros pacientes es nuestra máxima prioridad. Todos nuestros tratamientos están aprobados por las autoridades sanitarias, y son realizados por personal médico cualificado utilizando la tecnología más avanzada y segura del mercado.',
  },
];

const FaqItem = ({ faq, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 py-6">
    <dt>
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between text-left text-gray-900"
      >
        <span className="text-base font-semibold leading-7">{faq.question}</span>
        <span className="ml-6 flex h-7 items-center">
          {isOpen ? (
            <Minus className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Plus className="h-6 w-6" aria-hidden="true" />
          )}
        </span>
      </button>
    </dt>
    {isOpen && (
      <dd className="mt-2 pr-12">
        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
      </dd>
    )}
  </div>
);

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Preguntas Frecuentes</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index} 
                faq={faq} 
                isOpen={openFaq === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
