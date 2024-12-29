import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Loader } from 'lucide-react';
import useVoiceRecording from '../hooks/useVoiceRecording';

interface VoiceInterfaceProps {
  onClose: () => void;
}

export default function VoiceInterface({ onClose }: VoiceInterfaceProps) {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);
  const { isRecording, startRecording, stopRecording } = useVoiceRecording((text) => {
    handleUserInput(text);
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUserInput = async (text: string) => {
    // Add user message
    setMessages(prev => [...prev, { text, isUser: true }]);
    setIsProcessing(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I understand you're asking about " + text + ". How can I help you with that?",
        isUser: false
      }]);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="absolute bottom-20 right-0 w-96 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
      {/* Messages Area */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.isUser
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-700 text-gray-100'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isProcessing && (
          <div className="flex justify-start">
            <div className="bg-gray-700 rounded-lg px-4 py-2 text-gray-100">
              <Loader className="h-5 w-5 animate-spin" />
            </div>
          </div>
        )}
      </div>

      {/* Voice Control Area */}
      <div className="p-4 border-t border-gray-700 flex justify-center">
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`${
            isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-500 hover:bg-indigo-600'
          } w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300`}
        >
          {isRecording ? (
            <MicOff className="h-6 w-6 text-white" />
          ) : (
            <Mic className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}