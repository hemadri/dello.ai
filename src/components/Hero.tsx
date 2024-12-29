import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 text-center lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            AI-driven Call Center
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
           dello.ai offers a revolutionary AI-driven call center solution with advanced multilingual support and seamless CRM integration
          </p>
          {/* <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-indigo-600 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <a href="#docs" className="text-gray-300 hover:text-white">
             Transforming customer interactions
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}