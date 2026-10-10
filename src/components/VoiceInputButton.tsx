import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, AlertCircle } from 'lucide-react';
import { Language } from '../types';

interface VoiceInputButtonProps {
  currentLang: Language;
  onTranscript: (text: string) => void;
  disabled?: boolean;
}

export const VoiceInputButton: React.FC<VoiceInputButtonProps> = ({
  currentLang,
  onTranscript,
  disabled = false,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSupported(false);
    }
  }, []);

  const getLocale = (lang: Language): string => {
    switch (lang) {
      case 'mr':
        return 'mr-IN';
      case 'hi':
        return 'hi-IN';
      default:
        return 'en-IN';
    }
  };

  const toggleListening = () => {
    setErrorMessage(null);

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setErrorMessage(
        currentLang === 'mr'
          ? 'तुमच्या ब्राउझरमध्ये व्हॉईस इनपुट उपलब्ध नाही. कृपया टाइप करा.'
          : currentLang === 'hi'
          ? 'आपके ब्राउज़र में आवाज़ इनपुट समर्थित नहीं है। कृपया टाइप करें।'
          : 'Voice input is not supported in this browser. Please type your message.'
      );
      return;
    }

    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = getLocale(currentLang);
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        if (event.results && event.results[0] && event.results[0][0]) {
          const spoken = event.results[0][0].transcript;
          onTranscript(spoken);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setErrorMessage(
            currentLang === 'mr'
              ? 'कृपया माईकची परवानगी द्या.'
              : currentLang === 'hi'
              ? 'कृपया माइक्रोफोन अनुमति दें।'
              : 'Please allow microphone access.'
          );
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error('Speech recognition initialization error', err);
      setIsListening(false);
    }
  };

  const getLabel = () => {
    if (isListening) {
      return currentLang === 'mr' ? 'ऐकत आहे... (थांबवा)' : currentLang === 'hi' ? 'सुन रहा है... (रोकें)' : 'Listening... (Stop)';
    }
    return currentLang === 'mr' ? 'माईक द्वारे बोला' : currentLang === 'hi' ? 'माइक से बोलें' : 'Speak Problem';
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={toggleListening}
        disabled={disabled}
        title={!isSupported ? 'Speech recognition not supported in this browser' : getLabel()}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
          isListening
            ? 'bg-rose-50 text-rose-700 border-rose-300 ring-2 ring-rose-300 animate-pulse'
            : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100 hover:border-emerald-400'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        {isListening ? (
          <>
            <MicOff className="w-3.5 h-3.5 text-rose-600" />
            <span className="font-medium text-rose-800">{getLabel()}</span>
          </>
        ) : (
          <>
            <Mic className="w-3.5 h-3.5 text-emerald-700" />
            <span>{getLabel()}</span>
          </>
        )}
      </button>

      {errorMessage && (
        <div className="absolute top-full left-0 mt-1 z-30 bg-rose-50 border border-rose-200 text-rose-800 text-[11px] px-2.5 py-1 rounded shadow-md flex items-center gap-1.5 whitespace-nowrap">
          <AlertCircle className="w-3 h-3 text-rose-600 shrink-0" />
          <span>{errorMessage}</span>
          <button
            onClick={() => setErrorMessage(null)}
            className="ml-1 text-rose-500 hover:text-rose-800"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};
