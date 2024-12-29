// Type definitions for Vapi integration
export interface CallState {
  isActive: boolean;
  error: string | null;
}

export interface VapiCallHook {
  isCallActive: boolean;
  startCall: () => Promise<void>;
}