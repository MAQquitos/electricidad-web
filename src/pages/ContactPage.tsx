import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ¡Contáctanos hoy!
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Nos especializamos en la reparación de generadores eléctricos, garantizando calidad, rapidez y soluciones confiables. Completa el formulario a continuación y nuestro equipo experto se pondrá en contacto contigo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 h-fit transition-colors duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Información de contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Teléfono</h4>
                  <p className="text-gray-600 dark:text-gray-300">+54 (385) 484-1221</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">felipediaz930@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Dirección</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Av. Besares 1915<br />
                    Ciudad de La Banda, Santiago Del Estero
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Horario</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Lunes - Viernes: 15:00 - 18:00 <br />
                    Sábados: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Servicio de emergencia</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Disponible 24/7 para casos urgentes.<br />
                Whatsapp: +54 (385) 484-1221
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;