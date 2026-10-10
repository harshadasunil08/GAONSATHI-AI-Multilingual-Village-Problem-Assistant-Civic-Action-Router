import React, { useState } from 'react';
import { CategoryId, Language, Scheme } from '../types';
import { translations } from '../i18n/translations';
import { categories } from '../data/categoriesData';
import { schemes } from '../data/schemesData';
import {
  Search,
  Filter,
  CheckCircle2,
  FileText,
  Clock,
  ExternalLink,
  Building,
  UserCheck,
  ShieldCheck
} from 'lucide-react';

interface SchemesExplorerProps {
  currentLang: Language;
  onSelectSchemeForProblem?: (scheme: Scheme) => void;
}

export const SchemesExplorer: React.FC<SchemesExplorerProps> = ({
  currentLang,
}) => {
  const t = translations[currentLang];
  const [selectedCat, setSelectedCat] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSchemes = schemes.filter((s) => {
    if (selectedCat !== 'all' && s.category !== selectedCat) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const name = (s.name[currentLang] || s.name.en).toLowerCase();
      const desc = (s.description[currentLang] || s.description.en).toLowerCase();
      const code = s.shortCode.toLowerCase();
      return name.includes(q) || desc.includes(q) || code.includes(q);
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Directory Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
          Government Welfare & Civic Directory
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {currentLang === 'mr' ? 'शासकीय योजना व नागरी सेवा सूची' : currentLang === 'hi' ? 'सरकारी योजनाएं एवं नागरिक सेवाएं' : 'Government Schemes & Village Civic Services'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          Explore official eligibility, required documents, and application steps for major Central and State schemes.
        </p>
      </div>

      {/* Search & Category Filter Strip */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={currentLang === 'mr' ? 'योजना किंवा सेवा शोधा (उदा. पाणी, घरकुल, वीज, शिष्यवृत्ती)...' : currentLang === 'hi' ? 'योजना खोजें (जैसे पानी, आवास, बिजली, छात्रवृत्ति)...' : 'Search schemes (e.g. water, housing, solar pump, scholarship)...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <button
            onClick={() => setSelectedCat('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedCat === 'all'
                ? 'bg-emerald-700 text-white font-bold'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            सर्व वर्गवारी (All)
          </button>
          {categories.slice(0, 10).map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCat(c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCat === c.id
                  ? 'bg-emerald-700 text-white font-bold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {c.name[currentLang] || c.name.en}
            </button>
          ))}
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 flex flex-col justify-between space-y-5 hover:border-emerald-300 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
                  {scheme.shortCode}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {scheme.level} Scheme · {scheme.category.toUpperCase()}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {scheme.name[currentLang] || scheme.name.en}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {scheme.description[currentLang] || scheme.description.en}
              </p>

              {/* Eligibility Preview */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                <div className="text-[11px] font-bold text-slate-700 uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.lblEligibility}</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1">
                  {(scheme.eligibility[currentLang] || scheme.eligibility.en).slice(0, 2).map((el, i) => (
                    <li key={i} className="truncate">• {el}</li>
                  ))}
                </ul>
              </div>

              {/* Department & Officer */}
              <div className="text-xs text-slate-500 space-y-1 pt-1">
                <div>
                  <strong className="text-slate-700">{t.lblDepartment}: </strong>
                  <span>{scheme.department[currentLang] || scheme.department.en}</span>
                </div>
                <div>
                  <strong className="text-slate-700">{t.lblOfficer}: </strong>
                  <span>{scheme.officerRole[currentLang] || scheme.officerRole.en}</span>
                </div>
              </div>
            </div>

            {/* Bottom Official Portal Link */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                Government Verified Scheme
              </span>

              <a
                href={scheme.officialPortal.split(' ')[0]}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-emerald-700 hover:text-emerald-900 font-bold inline-flex items-center gap-1"
              >
                <span>Visit Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
