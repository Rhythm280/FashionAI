import { useState, useEffect, useCallback } from 'react';

export function useVoiceInput() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  
  // Check if the browser supports SpeechRecognition API
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognitionSupported = !!SpeechRecognition;
  
  let recognition: any = null;
  
  if (recognitionSupported) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
  }

  const startListening = useCallback(() => {
    if (!recognitionSupported) return;
    
    setIsListening(true);
    setTranscript('');
    
    try {
      recognition.start();
    } catch (error) {
      console.error('Error starting voice recognition:', error);
    }
  }, [recognitionSupported]);

  const stopListening = useCallback(() => {
    if (!recognitionSupported) return;
    
    setIsListening(false);
    
    try {
      recognition.stop();
    } catch (error) {
      console.error('Error stopping voice recognition:', error);
    }
  }, [recognitionSupported]);

  useEffect(() => {
    if (!recognitionSupported) return;

    const handleResult = (event: any) => {
      const current = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join('');
      
      setTranscript(current);
    };

    const handleEnd = () => {
      setIsListening(false);
    };

    recognition.onresult = handleResult;
    recognition.onend = handleEnd;

    return () => {
      if (recognition) {
        recognition.onresult = null;
        recognition.onend = null;
        stopListening();
      }
    };
  }, [recognitionSupported, stopListening]);

  return {
    isListening,
    transcript,
    startListening: recognitionSupported ? startListening : () => console.warn('Speech recognition not supported'),
    stopListening,
    recognitionSupported,
  };
}