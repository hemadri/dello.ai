import React from 'react';
import { Bot, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">dello.ai</span>
            </div>
            <p className="mt-4 text-gray-300">
              Building the future of AI applications, one API call at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#features" className="text-gray-300 hover:text-white">Features</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
              <li><a href="#docs" className="text-gray-300 hover:text-white">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#privacy" className="text-gray-300 hover:text-white">Privacy</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex items-center justify-between">
          <p className="text-gray-300">© 2024 dello.ai. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://github.com" className="text-gray-300 hover:text-white">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" className="text-gray-300 hover:text-white">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}