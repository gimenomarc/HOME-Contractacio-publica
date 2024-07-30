// src/App.js

import React from 'react';
import { FaCalculator, FaFileAlt } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full transform hover:scale-105 transition-transform duration-500">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Benvingudes</h1>
        <p className="mb-10 text-center text-gray-600">Utilitzeu les eines a continuació..</p>
        <div className="space-y-6">
          <a 
            href="https://srvapollo/formula/"
            className="block w-full text-center py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <FaCalculator className="w-6 h-6" />
            <span>Generador de fórmules matemàtiques</span>
          </a>
          <a 
            href="https://srvapollo/IA-Generador-Documents"
            className="block w-full text-center py-4 px-6 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <FaFileAlt className="w-6 h-6" />
            <span>IA-Generador-Documents</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
