import React, { useState } from 'react';
import { Complaint, ComplaintStatus, Language } from '../types';
import { translations } from '../i18n/translations';
import {
  getStoredComplaints,
  updateComplaintStatus,
  addCitizenNoteToComplaint
} from '../services/storage';
import {
  Search,
  CheckCircle2,
  Clock,
  ArrowRight,
  Send,
  Building,
  User,
  MapPin,
  Calendar,
  AlertCircle,
  FileText,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

interface ComplaintTrackerProps {
  currentLang: Language;
  initialComplaintId?: string;
  onNavigateToAssistant?: () => void;
}

export const ComplaintTracker: React.FC<ComplaintTrackerProps> = ({
  currentLang,
  initialComplaintId,
  onNavigateToAssistant,
}) => {
  const t = translations[currentLang];
  const [complaints, setComplaints] = useState<Complaint[]>(getStoredComplaints());
  const [searchId, setSearchId] = useState(initialComplaintId || 'GS-2026-00124');
  const [activeComplaint, setActiveComplaint] = useState<Complaint | null>(() => {
    const all = getStoredComplaints();
    const found = all.find(
      (c) => c.id.toLowerCase() === (initialComplaintId || 'GS-2026-00124').toLowerCase()
    );
    return found || all[0] || null;
  });

  const [citizenNoteInput, setCitizenNoteInput] = useState('');

  const statusProgression: ComplaintStatus[] = [
    'submitted',
    'forwarded',
    'under_review',
    'action_taken',
    'resolved',
  ];

  const statusLabels: Record<ComplaintStatus, { en: string; mr: string; hi: string }> = {
    submitted: { en: 'Submitted', mr: 'दाखल केली', hi: 'दर्ज हुई' },
    forwarded: { en: 'Forwarded to Dept', mr: 'विभागाकडे वर्ग', hi: 'विभाग को प्रेषित' },
    under_review: { en: 'Under Review', mr: 'पाहणी व पुनरावलोकन', hi: 'समीक्षाधीन' },
    action_taken: { en: 'Action Taken', mr: 'कारवाई सुरू', hi: 'कार्रवाई जारी' },
    resolved: { en: 'Resolved', mr: 'निवारण पूर्ण', hi: 'समाधान हो गया' },
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const all = getStoredComplaints();
    const found = all.find(
      (c) => c.id.trim().toLowerCase() === searchId.trim().toLowerCase()
    );
    if (found) {
      setActiveComplaint(found);
    } else {
      setActiveComplaint(null);
    }
  };

  const handleSelectId = (id: string) => {
    setSearchId(id);
    const found = complaints.find((c) => c.id.toLowerCase() === id.toLowerCase());
    if (found) setActiveComplaint(found);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!citizenNoteInput.trim() || !activeComplaint) return;

    const updated = addCitizenNoteToComplaint(activeComplaint.id, citizenNoteInput);
    if (updated) {
      setActiveComplaint(updated);
      setComplaints(getStoredComplaints());
      setCitizenNoteInput('');
    }
  };

  const handleUpdateStatus = (nextStatus: ComplaintStatus) => {
    if (!activeComplaint) return;
    const updated = updateComplaintStatus(
      activeComplaint.id,
      nextStatus,
      `Official action logged by Panchayat & Jurisdictional Authority.`
    );
    if (updated) {
      setActiveComplaint(updated);
      setComplaints(getStoredComplaints());
    }
  };

  const getCurrentStatusIndex = (status: ComplaintStatus) => {
    return statusProgression.indexOf(status);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Tracker Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
          Public Services Guarantee · लोकसेवा हमी ट्रॅकर
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {t.complaintTitle}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          {t.complaintSubtitle}
        </p>
      </div>

      {/* Search Bar & Quick Grievance Selectors */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="e.g. GS-2026-00124 or GS-2026-00089"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:border-emerald-600 font-mono"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-xs"
          >
            {t.btnSearchComplaint}
          </button>
        </form>

        {/* Quick Sample Grievances */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
          <span className="text-slate-500 font-medium">
            {currentLang === 'mr' ? 'नोंदवलेल्या तक्रारी:' : currentLang === 'hi' ? 'दर्ज शिकायतें:' : 'Recent Grievances:'}
          </span>
          {complaints.slice(0, 4).map((c) => (
            <button
              key={c.id}
              onClick={() => handleSelectId(c.id)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors border ${
                activeComplaint?.id === c.id
                  ? 'bg-emerald-100 text-emerald-950 border-emerald-300 font-bold shadow-2xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {c.id} ({c.category})
            </button>
          ))}
        </div>
      </div>

      {/* Main Complaint Detail View */}
      {activeComplaint ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
          {/* Top Title & Status Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-200">
                  {activeComplaint.id}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {activeComplaint.schemeAssociated}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {activeComplaint.problemSummary}
              </h3>
            </div>

            <div className="shrink-0 text-left sm:text-right">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                activeComplaint.status === 'resolved'
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {statusLabels[activeComplaint.status][currentLang] || activeComplaint.status}
              </span>
              <span className="block text-[11px] text-slate-400 mt-1">
                Last update: {activeComplaint.lastUpdated}
              </span>
            </div>
          </div>

          {/* 5-Step Visual Timeline Progression */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              {currentLang === 'mr' ? 'तक्रार निवारण जीवनचक्र (Resolution Timeline)' : currentLang === 'hi' ? 'निवारण समयरेखा (Resolution Timeline)' : 'Grievance Resolution Lifecycle'}
            </h4>

            {/* Stepper Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
              {statusProgression.map((step, idx) => {
                const currentIdx = getCurrentStatusIndex(activeComplaint.status);
                const isPassed = idx <= currentIdx;
                const isCurrent = idx === currentIdx;

                return (
                  <div
                    key={step}
                    className={`p-3.5 rounded-2xl border text-center transition-all ${
                      isCurrent
                        ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-200 shadow-2xs'
                        : isPassed
                        ? 'bg-slate-50 border-emerald-200 text-slate-800'
                        : 'bg-white border-slate-200 text-slate-400 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-1">
                      {isPassed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Clock className="w-4 h-4 text-slate-300" />
                      )}
                    </div>
                    <div className="text-xs font-bold truncate">
                      {statusLabels[step][currentLang] || step}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      Stage {idx + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Timeline Events Log */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              {currentLang === 'mr' ? 'तक्रार कारवाई इतिहास' : currentLang === 'hi' ? 'कार्रवाई का इतिहास' : 'Official Action Log & Movement'}
            </h4>

            <div className="space-y-4 pl-2 border-l-2 border-emerald-300 ml-2">
              {activeComplaint.timeline.map((event, idx) => (
                <div key={idx} className="relative pl-6 space-y-1">
                  {/* Dot */}
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-white ring-2 ring-emerald-200" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                    <span className="font-bold text-slate-900 text-sm">
                      {event.title}
                    </span>
                    <span className="text-slate-500 font-mono">
                      {event.date} · {event.officerOrOffice}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Citizen Details & Jurisdiction Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
            <div className="flex items-center gap-2.5">
              <User className="w-4 h-4 text-slate-400" />
              <div>
                <span className="text-slate-400 block text-[10px]">तक्रारदार (Citizen)</span>
                <span className="font-bold text-slate-800">{activeComplaint.citizenName}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-slate-400" />
              <div>
                <span className="text-slate-400 block text-[10px]">गाव / जिल्हा (Jurisdiction)</span>
                <span className="font-bold text-slate-800">{activeComplaint.village}, {activeComplaint.district}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Building className="w-4 h-4 text-slate-400" />
              <div>
                <span className="text-slate-400 block text-[10px]">जबाबदार विभाग (Dept)</span>
                <span className="font-bold text-slate-800 truncate block">{activeComplaint.department}</span>
              </div>
            </div>
          </div>

          {/* Citizen Follow-Up Notes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              {t.lblAddUpdate}
            </h4>

            {activeComplaint.citizenNotes && activeComplaint.citizenNotes.length > 0 && (
              <div className="space-y-1.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                {activeComplaint.citizenNotes.map((note, i) => (
                  <div key={i} className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            )}

            <form onSubmit={handleAddNote} className="flex gap-2">
              <input
                type="text"
                value={citizenNoteInput}
                onChange={(e) => setCitizenNoteInput(e.target.value)}
                placeholder="उदा. आज ग्रामसेवकांनी फोन केला आणि रस्त्याची प्रत्यक्ष पाहणी केली..."
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs outline-none focus:border-emerald-600"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                {t.btnAddUpdate}
              </button>
            </form>
          </div>

          {/* Departmental Status Escalation Console */}
          <div className="pt-4 border-t border-slate-100 bg-slate-50/90 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-3xl border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Panchayat Officer Grievance Management Desk</span>
              </span>
              <span className="text-[11px] text-slate-500">
                Update status on field resolution verification
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {statusProgression.map((st) => (
                <button
                  key={st}
                  onClick={() => handleUpdateStatus(st)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    activeComplaint.status === st
                      ? 'bg-emerald-700 text-white font-bold shadow-2xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {statusLabels[st][currentLang]}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
          <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            तक्रार क्रमांक सापडला नाही (Complaint ID Not Found)
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            कृपया वैध तक्रार क्रमांक (उदा. GS-2026-00124) टाका किंवा AI सहाय्यकाद्वारे नवीन समस्या नोंदवा.
          </p>
          {onNavigateToAssistant && (
            <button
              onClick={onNavigateToAssistant}
              className="mt-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold"
            >
              {t.btnDescribeProblem}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
