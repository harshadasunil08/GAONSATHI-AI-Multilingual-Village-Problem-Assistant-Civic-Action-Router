import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { Landmark, Globe, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: string;
  onNavigate: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onNavigate,
}) => {
  const t = translations[currentLang];

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'assistant', label: t.navAssistant },
    { id: 'schemes', label: t.navSchemes },
    { id: 'complaints', label: t.navComplaints },
    { id: 'dashboard', label: t.navDashboard },
    { id: 'admin', label: t.navAdmin },
    { id: 'helplines', label: t.navHelplines },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      {/* Top Banner Notice: National Rural Digital Governance Initiative */}
      <div className="bg-emerald-900 text-emerald-50 px-4 py-1.5 text-xs flex items-center justify-between">
        <div className="flex items-center gap-2 truncate">
          <span className="font-bold tracking-wider uppercase text-[10px] bg-emerald-800 px-2 py-0.5 rounded text-emerald-100 border border-emerald-700">
            {currentLang === 'mr' ? 'राष्ट्रीय ग्रामीण डिजिटल अभियान' : currentLang === 'hi' ? 'राष्ट्रीय ग्रामीण डिजिटल मिशन' : 'National Rural Digital Mission'}
          </span>
          <span className="truncate text-emerald-200">
            {t.challengeName} · Ministry of Rural Development & Panchayat Raj
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 shrink-0 text-[11px] text-emerald-200">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{currentLang === 'mr' ? 'कार्यान्वित डिजिटल सहाय्यता' : currentLang === 'hi' ? 'सक्रिय डिजिटल सहायता' : 'Active Civic Assistance'}</span>
        </div>
      </div>

      {/* Main Top Bar: 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Title */}
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2.5 cursor-pointer shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-sm ring-1 ring-emerald-600/30">
            <Landmark className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap block leading-tight">
              {t.appName}
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 whitespace-nowrap block">
              {currentLang === 'mr' ? 'गाव डिजिटल सहाय्यक' : currentLang === 'hi' ? 'ग्राम डिजिटल सहायक' : 'Rural Civic Assistant'}
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 sm:gap-1.5 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 text-xs sm:text-sm ${
                activeTab === item.id
                  ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 shadow-2xs'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Language Selector & CTA */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Selector */}
          <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
            <div className="pl-2 pr-1 text-slate-400">
              <Globe className="w-3.5 h-3.5" />
            </div>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                currentLang === 'en'
                  ? 'bg-white text-emerald-800 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              English
            </button>
            <button
              onClick={() => onLanguageChange('mr')}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                currentLang === 'mr'
                  ? 'bg-white text-emerald-800 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              मराठी
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                currentLang === 'hi'
                  ? 'bg-white text-emerald-800 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              हिंदी
            </button>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={() => onNavigate('assistant')}
            className="px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            {t.btnDescribeProblem}
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="lg:hidden flex items-center overflow-x-auto gap-1 px-4 py-2 bg-slate-50 border-t border-slate-200 no-scrollbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap shrink-0 ${
              activeTab === item.id
                ? 'bg-emerald-700 text-white font-bold'
                : 'text-slate-600 bg-white border border-slate-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
