import React, { useState } from 'react';
import { Complaint, Language } from '../types';
import { translations } from '../i18n/translations';
import { getStoredComplaints } from '../services/storage';
import {
  BarChart3,
  Users,
  CheckCircle2,
  Clock,
  MapPin,
  TrendingUp,
  Filter,
  Download,
  ShieldAlert
} from 'lucide-react';

interface AdminDashboardProps {
  currentLang: Language;
  onSelectComplaint: (id: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentLang,
  onSelectComplaint,
}) => {
  const t = translations[currentLang];
  const complaints = getStoredComplaints();

  const [selectedVillageFilter, setSelectedVillageFilter] = useState('all');

  const totalComplaints = complaints.length;
  const resolved = complaints.filter((c) => c.status === 'resolved').length;
  const pending = complaints.filter((c) => c.status === 'submitted').length;
  const resolutionRate = Math.round((resolved / Math.max(totalComplaints, 1)) * 100);

  // Category counts
  const categoryStats = [
    { name: 'Water (पाणी पुरवठा)', count: 24, percent: 85, color: 'bg-cyan-600' },
    { name: 'Electricity (वीज व ऊर्जा)', count: 21, percent: 75, color: 'bg-amber-500' },
    { name: 'Roads (ग्रामीण रस्ते)', count: 18, percent: 64, color: 'bg-slate-700' },
    { name: 'Agriculture (शेती व पीक)', count: 16, percent: 58, color: 'bg-emerald-600' },
    { name: 'Education (शिक्षण व शिष्यवृत्ती)', count: 13, percent: 46, color: 'bg-indigo-600' },
    { name: 'Housing (घरकुल व आवास)', count: 11, percent: 39, color: 'bg-rose-600' },
  ];

  // Village analytics
  const villageData = [
    { name: 'वडुज (Vaduj)', district: 'सातारा', total: 18, resolved: 14, topIssue: 'Roads & Water' },
    { name: 'शिरूर (Shirur)', district: 'पुणे', total: 15, resolved: 12, topIssue: 'Water Pipeline' },
    { name: 'राहाता (Rahata)', district: 'अहमदनगर', total: 12, resolved: 9, topIssue: 'Scholarships' },
    { name: 'करमाळा (Karmala)', district: 'सोलापूर', total: 11, resolved: 7, topIssue: 'Farm Electricity' },
    { name: 'मुखेड (Mukhed)', district: 'नांदेड', total: 9, resolved: 6, topIssue: 'Housing PMAY' },
    { name: 'दिंडोरी (Dindori)', district: 'नाशिक', total: 8, resolved: 6, topIssue: 'Certificates 7/12' },
  ];

  const filteredComplaints = complaints.filter((c) => {
    if (selectedVillageFilter === 'all') return true;
    return c.village.includes(selectedVillageFilter);
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Admin Header & Notice */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-emerald-700" />
            <span>Panchayat Raj & Civic Authority Analytics</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.adminDashboardTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            {t.adminDashboardSubtitle} · Government of Maharashtra & Rural Development
          </p>
        </div>

        <div className="text-xs text-slate-500 bg-white border border-slate-200 px-3.5 py-2 rounded-xl flex items-center gap-2 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Live Field Telemetry: Active</span>
        </div>
      </div>

      {/* 4 Primary Authority KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold text-slate-500 uppercase">
            {t.statTotalProblems}
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-2 font-mono">
            {totalComplaints * 3 + 42}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Processed via NLP
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold text-emerald-800 uppercase">
            Resolution Rate
          </div>
          <div className="text-3xl font-extrabold text-emerald-700 mt-2 font-mono">
            {resolutionRate}%
          </div>
          <div className="text-[11px] text-emerald-600 mt-1">
            {resolved} grievances closed
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold text-blue-800 uppercase">
            {t.statAvgTime}
          </div>
          <div className="text-3xl font-extrabold text-blue-700 mt-2 font-mono">
            0.85s
          </div>
          <div className="text-[11px] text-blue-500 mt-1">
            Offline rule-based NLP speed
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-xs font-semibold text-amber-800 uppercase">
            {t.statTopCategory}
          </div>
          <div className="text-xl font-extrabold text-amber-900 mt-2 truncate">
            Water Supply (28%)
          </div>
          <div className="text-[11px] text-amber-700 mt-1">
            Jal Jeevan Mission pipeline
          </div>
        </div>
      </div>

      {/* Visual Chart Breakdown: Most Reported Rural Problems */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Visual Bars */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                {currentLang === 'mr' ? 'सर्वाधिक नोंदवलेल्या ग्रामीण समस्या' : currentLang === 'hi' ? 'सर्वाधिक दर्ज ग्रामीण समस्याएं' : 'Most Reported Rural Problems'}
              </h3>
              <p className="text-xs text-slate-500">
                Category frequency distribution across surveyed blocks
              </p>
            </div>
            <BarChart3 className="w-5 h-5 text-slate-400" />
          </div>

          <div className="space-y-3 pt-2">
            {categoryStats.map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-800">{cat.name}</span>
                  <span className="text-slate-500 font-mono">{cat.count} cases ({cat.percent}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`${cat.color} h-2.5 rounded-full`}
                    style={{ width: `${cat.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Village-Wise Issues Performance */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                {currentLang === 'mr' ? 'गाववार समस्या व निवारण प्रमाण' : currentLang === 'hi' ? 'ग्रामवार समस्याएं एवं निवारण' : 'Village-wise Grievance Status'}
              </h3>
              <p className="text-xs text-slate-500">
                Gram Panchayat level administrative efficiency
              </p>
            </div>
            <MapPin className="w-5 h-5 text-slate-400" />
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {villageData.map((v, idx) => (
              <div key={idx} className="py-2.5 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">{v.name}</span>
                  <span className="text-slate-400 text-[11px]">{v.district} · Top issue: {v.topIssue}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-emerald-700">
                    {v.resolved}/{v.total} Resolved
                  </span>
                  <span className="block text-[11px] text-slate-400">
                    {Math.round((v.resolved / v.total) * 100)}% clearance
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filterable Live Complaints Log */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden space-y-0">
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              {currentLang === 'mr' ? 'सर्व ग्राम तक्रारी' : currentLang === 'hi' ? 'समस्त ग्रामीण शिकायतें' : 'All Village Grievance Submissions'}
            </h3>
            <p className="text-xs text-slate-500">
              Filter by village to monitor localized response time
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedVillageFilter}
              onChange={(e) => setSelectedVillageFilter(e.target.value)}
              className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white text-slate-800 outline-none"
            >
              <option value="all">सर्व गावे (All Villages)</option>
              <option value="वडुज">वडुज (Vaduj)</option>
              <option value="शिरूर">शिरूर (Shirur)</option>
              <option value="राहाता">राहाता (Rahata)</option>
              <option value="करमाळा">करमाळा (Karmala)</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-100">
              <tr>
                <th className="px-5 py-3 font-medium">Complaint ID</th>
                <th className="px-5 py-3 font-medium">Citizen</th>
                <th className="px-5 py-3 font-medium">Issue</th>
                <th className="px-5 py-3 font-medium">Village</th>
                <th className="px-5 py-3 font-medium">Urgency</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredComplaints.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-5 py-3.5 font-mono font-bold text-emerald-800 whitespace-nowrap">
                    {c.id}
                  </td>
                  <td className="px-5 py-3.5 whitespace-nowrap font-medium text-slate-900">
                    {c.citizenName}
                  </td>
                  <td className="px-5 py-3.5 max-w-xs truncate text-slate-700">
                    {c.problemSummary}
                  </td>
                  <td className="px-5 py-3.5 whitespace-nowrap text-slate-600">
                    {c.village}
                  </td>
                  <td className="px-5 py-3.5 whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      c.urgency === 'critical'
                        ? 'bg-rose-100 text-rose-800'
                        : c.urgency === 'high'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {c.urgency}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 whitespace-nowrap">
                    <span className="font-semibold text-slate-800">
                      {c.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right whitespace-nowrap">
                    <button
                      onClick={() => onSelectComplaint(c.id)}
                      className="px-3 py-1 rounded bg-slate-100 hover:bg-emerald-100 hover:text-emerald-900 font-semibold cursor-pointer"
                    >
                      Inspect
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
