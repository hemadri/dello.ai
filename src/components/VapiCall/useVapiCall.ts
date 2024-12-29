import { useState, useCallback, useEffect } from 'react';
import { getVapiClient } from './useVapiClient';
import { VAPI_CONFIG } from './config';
import type { VapiCallHook } from './types';

export function useVapiCall(): VapiCallHook {
  const [isCallActive, setIsCallActive] = useState(false);
  const [client, setClient] = useState<ReturnType<typeof getVapiClient> | null>(null);

  useEffect(() => {
    // Initialize client on mount
    setClient(getVapiClient());
  }, []);

  const startCall = useCallback(async () => {
    if (!client) {
      console.error('Vapi client not initialized');
      return;
    }

    try {
      setIsCallActive(true);
      
      await client.startCall({
        assistantId: VAPI_CONFIG.ASSISTANT_ID,
        onCallStarted: () => {
          console.log('Call started successfully');
        },
        onCallEnded: () => {
          console.log('Call ended');
          setIsCallActive(false);
        },
        onError: (error) => {
          console.error('Call error:', error);
          setIsCallActive(false);
        },
      });
    } catch (error) {
      console.error('Failed to start call:', error);
      setIsCallActive(false);
    }
  }, [client]);

  return {
    isCallActive,
    startCall,
  };
}