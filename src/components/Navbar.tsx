import React from 'react';
import { Bot } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-indigo-400" />
            <span className="ml-2 text-xl font-bold text-white">dello.ai</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
            <a href="#docs" className="text-gray-300 hover:text-white">Docs</a>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}