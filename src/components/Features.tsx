import React from 'react';
import { Cpu, Zap, Code2, Bot } from 'lucide-react';

const features = [
  {
    name: 'Easy Integration',
    description: 'Integrate AI capabilities into your app with just a few lines of code.',
    icon: Code2,
  },
  {
    name: 'Powerful Models',
    description: 'Access state-of-the-art language models trained on diverse datasets.',
    icon: Cpu,
  },
  {
    name: 'Real-time Processing',
    description: 'Process requests in milliseconds with our optimized infrastructure.',
    icon: Zap,
  },
  {
    name: 'Custom Training',
    description: 'Train models on your data for specialized use cases and improved accuracy.',
    icon: Bot,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Build your own AI-driven Call Center
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Powerful features to help your customers quickly and efficiently and drive your business growth.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <div className="absolute h-12 w-12 rounded-xl bg-indigo-900/30 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}