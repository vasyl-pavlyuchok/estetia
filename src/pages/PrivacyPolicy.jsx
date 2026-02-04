import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-estetia-bg">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="prose prose-lg lg:prose-xl max-w-none text-gray-700">
          <h1 className="text-3xl font-bold tracking-tight text-estetia-dark sm:text-4xl">Política de Privacidad</h1>

          <p className="mt-6">
            <strong>Última actualización:</strong> <code>03 de febrero de 2026</code>
          </p>

          <p>
            Bienvenido a <strong>Estetia</strong>. La presente Política de Privacidad tiene como objeto informar sobre cómo tratamos los datos personales recabados a través de nuestra plataforma web, widgets de asistencia virtual y canales de mensajería instantánea (como WhatsApp Business API).
          </p>
          <p>
            En <strong>Estetia</strong>, no solo automatizamos procesos; protegemos la confidencialidad clínica con los más altos estándares de seguridad tecnológica y cumplimiento normativo (RGPD y LOPDGDD).
          </p>

          <hr className="my-8 border-gray-300" />

          <h2 className="text-2xl font-bold tracking-tight text-estetia-dark sm:text-3xl mt-12 mb-6">1. Responsable del Tratamento</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identidad:</strong> Estetia Clinic S.L. (en adelante, "Estetia")</li>
            <li><strong>NIF:</strong> <code>B-00000000</code></li>
            <li><strong>Dirección:</strong> <code>Calle de la Innovación, 42, 28001 Madrid, España</code></li>
            <li><strong>Email de contacto:</strong> <a href="mailto:privacy@estetia.com" className="text-estetia-primary hover:underline">privacy@estetia.com</a></li>
            <li><strong>Delegado de Protección de Datos (DPD):</strong> <a href="mailto:dpd@estetia.com" className="text-estetia-primary hover:underline">dpd@estetia.com</a>.</li>
          </ul>

          <h2 className="text-2xl font-bold tracking-tight text-estetia-dark sm:text-3xl mt-12 mb-6">2. Finalidad del Tratamiento y Uso de Inteligencia Artificial</h2>
          <p>Tratamos los datos para las siguientes finalidades:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Gestión de Citas:</strong> Automatización del calendario y reserva de servicios médicos/estéticos.</li>
            <li><strong>Triaje y Asistencia Virtual:</strong> Uso de modelos de <strong>Inteligencia Artificial (IA)</strong> para clasificar consultas, resolver dudas frecuentes y derivar al paciente al especialista adecuado.</li>
            <li><strong>Comunicaciones Transaccionales:</strong> Envío de recordatorios y confirmaciones vía WhatsApp y Email.</li>
          </ul>
          <blockquote className="border-l-4 border-estetia-primary bg-estetia-secondary/30 p-4 my-6 italic rounded-r-lg">
            <p className="font-semibold text-gray-800"> <strong>Información sobre IA:</strong></p>
            <p className="text-gray-700">Nuestras automatizaciones utilizan procesamiento de lenguaje natural (NLP). Le informamos que las decisiones de triaje son siempre supervisadas por personal humano y el sistema nunca realizará diagnósticos médicos autónomos con validez legal sin validación facultativa.</p>
          </blockquote>

          <h2 className="text-2xl font-bold tracking-tight text-estetia-dark sm:text-3xl mt-12 mb-6">3. Base Jurídica (Legitimación)</h2>
          <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consentimiento Explicito:</strong> Para el tratamiento de datos de salud (Categoría Especial) según el <strong>Art. 9.2.a del RGPD</strong>.</li>
              <li><strong>Ejecución de un Contrato:</strong> Para la gestión de la cita y relación pre-contractual.</li>
              <li><strong>Interés Legítimo:</strong> Para garantizar la seguridad de la red y la mejora técnica de nuestras automatizaciones.</li>
          </ul>

          <h2 className="text-2xl font-bold tracking-tight text-estetia-dark sm:text-3xl mt-12 mb-6">4. Categoría de Datos Tratados</h2>
          <p>A través de nuestros canales (Web y WhatsApp) podemos recoger:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Datos Identificativos:</strong> Nombre, apellidos, teléfono y DNI.</li>
            <li><strong>Datos de Salud:</strong> Motivo de la consulta, historial clínico previo facilitado por el usuario y preferencias de tratamiento.</li>
            <li><strong>Metadatos de Interacción:</strong> IP, ID de usuario de WhatsApp y logs de conversación con la IA.</li>
          </ol>

          <h2 className="text-2xl font-bold tracking-tight text-estetia-dark sm:text-3xl mt-12 mb-6">5. Canales de Comunicación y Seguridad</h2>
          <ul className="list-disc pl-6 space-y-2">
              <li><strong>Widget Web:</strong> Protegido mediante cifrado SSL/TLS de 256 bits.</li>
              <li><strong>WhatsApp Business API:</strong> Utilizamos el canal oficial de WhatsApp Business a través de proveedores autorizados (BSPs), garantizando el cifrado de extremo a extremo y el cumplimiento de las normativas europeas de privacidad.</li>
          </ul>
          <blockquote className="border-l-4 border-estetia-primary bg-estetia-secondary/30 p-4 my-6 italic rounded-r-lg">
            <p className="font-semibold text-gray-800"><strong>Nota de Seguridad:</strong></p>
            <p className="text-gray-700">No utilizamos la aplicación "WhatsApp Business" estándar para garantizar la seguridad del dato clínico.</p>
          </blockquote>
          
          <h2 className="text-2xl font-bold tracking-tight text-estetia-dark sm:text-3xl mt-12 mb-6">6. Destinatarios y Transferencias (Flujos de Datos)</h2>
          <p>Para garantizar el correcto funcionamiento de nuestras automatizaciones y la seguridad del dato, Estetia utiliza proveedores de infraestructura de primer nivel que cumplen estrictamente con los estándares europeos:</p>
          <ul className="list-disc pl-6 space-y-2">
              <li><strong>Infraestructura de Automatización (n8n):</strong> Utilizamos la plataforma <strong>n8n (n8n Cloud / Self-hosted)</strong> como motor de flujos de datos. Los servidores están ubicados exclusivamente dentro del <strong>Espacio Económico Europeo (Región: Frankfurt, Alemania)</strong>. Esta plataforma garantiza el cifrado de datos en tránsito y en reposo, cumpliendo con los requisitos del RGPD para el tratamiento de categorías especiales de datos (salud).</li>
              <li><strong>Mensajería (WhatsApp Business API):</strong> Los datos fluyen a través de la infraestructura de Meta (WhatsApp) mediante el uso de la API oficial para empresas, lo que garantiza el cifrado de extremo a extremo y el cumplimiento de las cláusulas contractuales tipo aprobadas por la Comisión Europea.</li>
              <li><strong>Inteligencia Artificial:</strong> En caso de utilizar modelos de procesamiento de lenguaje, se emplean conexiones cifradas mediante API con políticas de "Zero Data Retention" para asegurar que los datos de los pacientes no sean almacenados ni utilizados para el entrenamiento de modelos externos.</li>
          </ul>

          <h2 className="text-2xl font-bold tracking-tight text-estetia-dark sm:text-3xl mt-12 mb-6">7. Plazo de Conservación</h2>
          <p>Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recogieron y, en todo caso, cumpliendo con los plazos legales de conservación de historias clínicas en España (mínimo 5 años según la Ley 41/2002).</p>

          <h2 className="text-2xl font-bold tracking-tight text-estetia-dark sm:text-3xl mt-12 mb-6">8. Sus Derechos</h2>
          <p>Usted tiene derecho a: <strong>Acceso, Rectificación, Supresión (Olvido), Limitación, Portabilidad y Oposición.</strong></p>
          <p>Para ejercerlos, envíe un email a <a href="mailto:privacy@estetia.com" className="text-estetia-primary hover:underline">privacy@estetia.com</a> adjuntando copia de su DNI o documento equivalente. También tiene derecho a retirar su consentimiento en cualquier momento para el uso de la IA en su atención.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
