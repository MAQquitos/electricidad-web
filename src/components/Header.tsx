import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
            <Zap size={24} className="text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-xl">MDSOLUCIONES</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                Inicio
              </Link>
              <Link 
                to="/servicios" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                Servicios
              </Link>
              <Link 
                to="/contacto" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                Contacto
              </Link>
            </nav>
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;