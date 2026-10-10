import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { Landmark, Heart, Shield, Code2, Globe, PhoneCall } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & National Initiative */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white">
                <Landmark className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                GAONSATHI AI
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              One Digital Assistant for Every Village Problem. Transforming rural governance through multilingual natural language understanding, instant official grievance drafting, and transparent welfare scheme navigation.
            </p>
            <div className="text-[11px] text-emerald-400 font-mono">
              Empowering India's 6,60,000+ villages under the Viksit Bharat Mission.
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="space-y-2 text-xs">
            <span className="font-bold text-white uppercase tracking-wider block">
              Quick Navigation
            </span>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('assistant')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  {t.navAssistant}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('schemes')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  {t.navSchemes}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('complaints')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  {t.navComplaints}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dashboard')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  {t.navDashboard}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('helplines')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  {t.navHelplines}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admin')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  {t.navAdmin}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Tech & Civic Standards */}
          <div className="space-y-2 text-xs">
            <span className="font-bold text-white uppercase tracking-wider block">
              Technology & AI
            </span>
            <ul className="space-y-1 text-slate-400">
              <li>Multilingual Indic NLP Engine</li>
              <li>Devanagari Script Tokenizer</li>
              <li>Web Speech Recognition</li>
              <li>Web SpeechSynthesis Audio</li>
              <li>Explainable AI (XAI) Architecture</li>
              <li>Digital Public Infrastructure (DPI)</li>
            </ul>
          </div>
        </div>

        {/* Civic Mission Banner */}
        <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.demoDisclaimer}</span>
          </div>
          <span className="text-[11px] text-emerald-300 whitespace-nowrap font-medium">
            100% Free · Open Access for All Citizens
          </span>
        </div>

        <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>{t.footerCopyright}</div>
          <div className="text-[11px] text-slate-400">
            Digital Civic Platform for Rural Governance & Welfare Inclusion
          </div>
        </div>
      </div>
    </footer>
  );
};
