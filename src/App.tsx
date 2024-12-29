import React from 'react';
import { Bot, Cpu, Zap, Code2, ArrowRight, Github } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import CallButton from './components/CallButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
      <CallButton />
    </div>
  );
}

export default App;