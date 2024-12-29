import { useState, useCallback } from 'react';

export default function useVoiceRecording(onTranscription: (text: string) => void) {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const audioChunks: BlobPart[] = [];

      recorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        // In a real application, you would:
        // 1. Send this blob to your speech-to-text service
        // 2. Get the transcription back
        // 3. Call onTranscription with the result
        // For demo purposes, we'll simulate a transcription:
        onTranscription("This is a simulated transcription of the user's voice input.");
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  }, [onTranscription]);

  const stopRecording = useCallback(() => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  }, [mediaRecorder, isRecording]);

  return {
    isRecording,
    startRecording,
    stopRecording
  };
}