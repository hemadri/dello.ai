import React, { useState } from 'react';
import { Mic, Phone, PhoneOff } from 'lucide-react';
import VoiceInterface from './VoiceInterface';

export default function CallButton() {
  const [isCallActive, setIsCallActive] = useState(false);

  const toggleCall = () => {
    setIsCallActive(!isCallActive);
  };

  return (
    <div className="fixed bottom-8 right-8">
      {isCallActive && <VoiceInterface onClose={() => setIsCallActive(false)} />}
      
      <button
        onClick={toggleCall}
        className={`${
          isCallActive ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-500 hover:bg-indigo-600'
        } w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105`}
      >
        {isCallActive ? (
          <PhoneOff className="h-8 w-8 text-white" />
        ) : (
          <Phone className="h-8 w-8 text-white" />
        )}
      </button>
    </div>
  );
}