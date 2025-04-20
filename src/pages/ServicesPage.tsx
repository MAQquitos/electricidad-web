import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  AlertTriangle, 
  BarChart, 
  Settings, 
  Zap, 
  RefreshCw 
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Mantenimiento Preventivo',
      description: 'Programas regulares de mantenimiento para prevenir fallas y extender la vida útil de tu generador.',
      icon: <Settings className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Reparaciones de Emergencia',
      description: 'Servicio rápido y eficiente para resolver problemas urgentes en tu generador cuando más lo necesitas.',
      icon: <AlertTriangle className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Diagnóstico y Pruebas',
      description: 'Análisis completo del estado y rendimiento de tu generador para identificar problemas potenciales.',
      icon: <BarChart className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Sustitución de Componentes',
      description: 'Reemplazo de piezas dañadas o desgastadas por repuestos originales o compatibles de alta calidad.',
      icon: <RefreshCw className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Optimización de Rendimiento',
      description: 'Ajustes y configuraciones para mejorar la eficiencia y rendimiento de tu generador.',
      icon: <Zap className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Instalación y Configuración',
      description: 'Servicio profesional de instalación, configuración y puesta en marcha de generadores nuevos.',
      icon: <Wrench className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestros Servicios
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Ofrecemos una amplia gama de servicios especializados para mantener tu generador funcionando de manera óptima y confiable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <Link 
                to="/contacto" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
              >
                Solicitar servicio
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-600 rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitas un servicio de mantenimiento?</h2>
              <p className="mb-6 text-blue-100">
                No esperes a que ocurra una falla. El mantenimiento preventivo regular es la mejor forma de asegurar que tu generador esté siempre listo cuando lo necesitas.
              </p>
              <Link 
                to="/contacto" 
                className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Contactar ahora
              </Link>
            </div>
            <div className="bg-blue-700 p-8 md:p-12 text-white">
              <h3 className="text-xl font-bold mb-4">Nuestras Garantías</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-300 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Técnicos certificados y con experiencia</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-300 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Repuestos originales o de alta calidad</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-300 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Garantía en todas nuestras reparaciones</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-300 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Presupuestos transparentes sin costos ocultos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;