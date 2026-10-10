import React from 'react';
import { Complaint, Language } from '../types';
import { translations } from '../i18n/translations';
import { getStoredComplaints, getStoredAnalyses } from '../services/storage';
import { schemes } from '../data/schemesData';
import {
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  PlusCircle,
  ExternalLink,
  Building,
  User,
  ShieldCheck,
  Bookmark
} from 'lucide-react';

interface CitizenDashboardProps {
  currentLang: Language;
  onNavigateToAssistant: () => void;
  onSelectComplaint: (id: string) => void;
}

export const CitizenDashboard: React.FC<CitizenDashboardProps> = ({
  currentLang,
  onNavigateToAssistant,
  onSelectComplaint,
}) => {
  const t = translations[currentLang];
  const complaints = getStoredComplaints();
  const analyses = getStoredAnalyses();

  const total = complaints.length;
  const resolved = complaints.filter((c) => c.status === 'resolved').length;
  const inProgress = complaints.filter(
    (c) => c.status === 'forwarded' || c.status === 'under_review' || c.status === 'action_taken'
  ).length;
  const pending = complaints.filter((c) => c.status === 'submitted').length;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header & Submit Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            {currentLang === 'mr' ? 'नागरिक सेवा केंद्र' : currentLang === 'hi' ? 'नागरिक सेवा केंद्र' : 'Citizen Civic Portal'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.citizenDashboardTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            {t.citizenDashboardSubtitle}
          </p>
        </div>

        <button
          onClick={onNavigateToAssistant}
          className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm cursor-pointer self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{t.btnDescribeProblem}</span>
        </button>
      </div>

      {/* 4 Status Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500 uppercase">
            {t.statTotalComplaints}
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-2 font-mono">
            {total}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Across village jurisdiction
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold text-emerald-800 uppercase">
            {t.statResolved}
          </div>
          <div className="text-3xl font-extrabold text-emerald-700 mt-2 font-mono">
            {resolved}
          </div>
          <div className="text-[11px] text-emerald-600 mt-1">
            Verified by Gram Panchayat
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold text-blue-800 uppercase">
            {currentLang === 'mr' ? 'प्रगतीपथावर (In Progress)' : currentLang === 'hi' ? 'प्रगति पर (In Progress)' : 'In Progress'}
          </div>
          <div className="text-3xl font-extrabold text-blue-700 mt-2 font-mono">
            {inProgress}
          </div>
          <div className="text-[11px] text-blue-500 mt-1">
            Assigned to technical depts
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold text-amber-800 uppercase">
            {t.statPending}
          </div>
          <div className="text-3xl font-extrabold text-amber-700 mt-2 font-mono">
            {pending}
          </div>
          <div className="text-[11px] text-amber-600 mt-1">
            Awaiting scrutiny
          </div>
        </div>
      </div>

      {/* My Complaints / Grievances Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden space-y-0">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              {currentLang === 'mr' ? 'माझ्या तक्रारी व अर्ज' : currentLang === 'hi' ? 'मेरी शिकायतें व आवेदन' : 'My Registered Complaints & Applications'}
            </h3>
            <p className="text-xs text-slate-500">
              Select any grievance to view real-time timeline tracking
            </p>
          </div>
          <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">
            {complaints.length} Records
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-100">
              <tr>
                <th className="px-5 py-3 font-medium">Complaint ID</th>
                <th className="px-5 py-3 font-medium">Issue Summary</th>
                <th className="px-5 py-3 font-medium">Category / Dept</th>
                <th className="px-5 py-3 font-medium">Location</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {complaints.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-5 py-3.5 font-mono font-bold text-emerald-800 whitespace-nowrap">
                    {c.id}
                  </td>
                  <td className="px-5 py-3.5 max-w-xs font-medium text-slate-900 truncate">
                    {c.problemSummary}
                  </td>
                  <td className="px-5 py-3.5 whitespace-nowrap">
                    <span className="capitalize font-semibold text-slate-800">{c.category}</span>
                    <span className="block text-[11px] text-slate-400 truncate max-w-44">
                      {c.department}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 whitespace-nowrap text-slate-600">
                    {c.village}, {c.district}
                  </td>
                  <td className="px-5 py-3.5 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      c.status === 'resolved'
                        ? 'bg-emerald-100 text-emerald-800'
                        : c.status === 'action_taken'
                        ? 'bg-purple-100 text-purple-800'
                        : c.status === 'under_review'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {c.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right whitespace-nowrap">
                    <button
                      onClick={() => onSelectComplaint(c.id)}
                      className="px-3 py-1 rounded bg-slate-100 hover:bg-emerald-100 hover:text-emerald-900 text-slate-700 font-semibold transition-colors cursor-pointer"
                    >
                      Track
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommended Schemes for Citizen */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              {currentLang === 'mr' ? 'आपल्यासाठी शिफारस केलेल्या शासकीय योजना' : currentLang === 'hi' ? 'आपके लिए अनुशंसित सरकारी योजनाएं' : 'Recommended Welfare Schemes for Your Profile'}
            </h3>
            <p className="text-xs text-slate-500">
              Matched with smallholder farming, rural habitation, and education criteria
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {schemes.slice(0, 3).map((s) => (
            <div
              key={s.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-emerald-800 font-bold font-mono">{s.shortCode}</span>
                  <span className="text-slate-400">{s.level}</span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">
                  {s.name[currentLang] || s.name.en}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                  {s.description[currentLang] || s.description.en}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-semibold">
                  Match: High (94%)
                </span>
                <a
                  href={s.officialPortal.split(' ')[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-slate-900 flex items-center gap-1 font-medium"
                >
                  <span>Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
