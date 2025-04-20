import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-12 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">GeneradorService</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Expertos en reparación y mantenimiento de todo tipo de generadores eléctricos.
              Servicio rápido, profesional y confiable.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-600 dark:text-blue-400 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">+54 (385) 484-1221</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-600 dark:text-blue-400 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">felipediaz930@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-600 dark:text-blue-400 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">La Banda, Santiago Del Estero </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Horario de atención</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">Lunes - Viernes: 15:00 - 19:00</li>
              <li className="text-gray-600 dark:text-gray-300">Sábados: 9:00 AM - 2:00 PM</li>
              <li className="text-gray-600 dark:text-gray-300">Domingos: Cerrado</li>
              <li className="text-gray-600 dark:text-gray-300 font-medium mt-2">Servicios de emergencia disponibles 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} GeneradorService. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;