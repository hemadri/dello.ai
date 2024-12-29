import { createVapiClient } from '@vapi-ai/web';
import { VAPI_CONFIG } from './config';

// Singleton pattern for Vapi client
export const getVapiClient = () => {
  return createVapiClient({
    shareKey: VAPI_CONFIG.SHARE_KEY,
  });
};