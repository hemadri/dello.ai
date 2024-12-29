import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 0,
    features: [
      '1000 calls/month',
      'Basic models access',
      'Basic support',
      'Basic analytics',
    ],
  },
  {
    name: 'Pro',
    price: 99,
    features: [
      '10k calls/month',
      'Advanced models access',
      'Priority support',
      'Advanced analytics',
      'Custom training (2 models)',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited calls',
      'All models access',
      'Dedicated support',
      'Advanced analytics',
      'Unlimited custom training',
      'Custom model development',
    ],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Choose the plan that best fits your needs. All plans include core features.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              <div className="mt-4 flex items-baseline">
                {typeof tier.price === 'number' ? (
                  <>
                    <span className="text-4xl font-bold tracking-tight text-white">
                      ${tier.price}
                    </span>
                    <span className="ml-1 text-gray-300">/month</span>
                  </>
                ) : (
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {tier.price}
                  </span>
                )}
              </div>
              <ul className="mt-6 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 shrink-0" />
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}