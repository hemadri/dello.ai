import React from 'react';
import { Phone, PhoneOff } from 'lucide-react';
import { useVapiCall } from './useVapiCall';

export default function VapiButton() {
  const { startCall, isCallActive } = useVapiCall();

  return (
    <button
      onClick={startCall}
      disabled={isCallActive}
      className={`
        ${isCallActive ? 'bg-gray-500' : 'bg-indigo-500 hover:bg-indigo-600'}
        text-white px-8 py-4 rounded-lg transition-all duration-300 
        inline-flex items-center gap-2 font-medium text-lg
        disabled:cursor-not-allowed disabled:opacity-75
        shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
      `}
    >
      {isCallActive ? (
        <>
          <PhoneOff className="h-6 w-6" />
          Call in Progress...
        </>
      ) : (
        <>
          <Phone className="h-6 w-6" />
          Try AI Call Demo
        </>
      )}
    </button>
  );
}