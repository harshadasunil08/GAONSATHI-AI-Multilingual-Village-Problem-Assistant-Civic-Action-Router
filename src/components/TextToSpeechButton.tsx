import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Language } from '../types';

interface TextToSpeechButtonProps {
  textToSpeak: string;
  lang: Language;
}

export const TextToSpeechButton: React.FC<TextToSpeechButtonProps> = ({
  textToSpeak,
  lang,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel(); // Stop any pending utterances
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Map language code
    if (lang === 'mr') {
      utterance.lang = 'mr-IN';
    } else if (lang === 'hi') {
      utterance.lang = 'hi-IN';
    } else {
      utterance.lang = 'en-IN';
    }

    utterance.rate = 0.95; // Slightly slower for clear rural comprehension
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsPlaying(true);
    };

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error', e);
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  if (!isSupported) return null;

  return (
    <button
      type="button"
      onClick={handleSpeak}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
        isPlaying
          ? 'bg-amber-100 text-amber-900 border-amber-300 ring-2 ring-amber-300'
          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:text-slate-900'
      }`}
      title={isPlaying ? 'Stop voice reading' : 'Listen to action plan'}
    >
      {isPlaying ? (
        <>
          <VolumeX className="w-3.5 h-3.5 text-amber-700 animate-spin" />
          <span>{lang === 'mr' ? 'आवाज बंद करा' : lang === 'hi' ? 'रोकें' : 'Stop Audio'}</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
          <span>{lang === 'mr' ? 'मोठ्याने ऐका' : lang === 'hi' ? 'बोलकर सुनाएं' : 'Read Aloud'}</span>
        </>
      )}
    </button>
  );
};
