import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, PenTool as Tool, Clock, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90"></div>
        <div className="container mx-auto px-4 py-20 sm:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Servicio Profesional de Reparación de Generadores
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Expertos en mantenimiento y reparación de generadores eléctricos.
              Soluciones rápidas, eficientes y garantizadas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contacto" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Solicitar servicio
              </Link>
              <Link 
                to="/servicios" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Nuestros servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            ¿Por qué elegirnos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-md transition-all duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Tool className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Técnicos Expertos</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nuestro equipo está formado por profesionales certificados con años de experiencia.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-md transition-all duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Garantía de Calidad</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ofrecemos garantía en todos nuestros servicios y reparaciones realizadas.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-md transition-all duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Respuesta Rápida</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Servicio de emergencia disponible 24/7 para cuando más lo necesites.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-md transition-all duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Precios Justos</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Presupuestos transparentes y competitivos sin costos ocultos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            ¿Necesitas un servicio de reparación?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            No esperes a que tu generador falle en el momento más crítico. Contáctanos hoy y agenda tu servicio de mantenimiento preventivo.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md transition-colors duration-300"
          >
            Contactar ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;