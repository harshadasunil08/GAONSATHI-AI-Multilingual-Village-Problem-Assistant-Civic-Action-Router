import React, { useState } from 'react';
import { Complaint, Language, ProblemAnalysis } from '../types';
import { translations } from '../i18n/translations';
import { createComplaintFromAnalysis } from '../services/storage';
import { CheckCircle2, X, Send, Copy, ArrowRight, ShieldCheck } from 'lucide-react';

interface ComplaintModalProps {
  analysis: ProblemAnalysis;
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
  onComplaintCreated: (complaint: Complaint) => void;
}

export const ComplaintModal: React.FC<ComplaintModalProps> = ({
  analysis,
  currentLang,
  isOpen,
  onClose,
  onComplaintCreated,
}) => {
  const t = translations[currentLang];

  const [citizenName, setCitizenName] = useState('रामदास विठ्ठल शिंदे (Ramdas Shinde)');
  const [citizenPhone, setCitizenPhone] = useState('+91 98234 56789');
  const [createdComplaint, setCreatedComplaint] = useState<Complaint | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newComplaint = createComplaintFromAnalysis(
      analysis,
      citizenName,
      citizenPhone
    );
    setCreatedComplaint(newComplaint);
  };

  const handleCopyId = () => {
    if (createdComplaint) {
      navigator.clipboard.writeText(createdComplaint.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFinish = () => {
    if (createdComplaint) {
      onComplaintCreated(createdComplaint);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-md"
        >
          <X className="w-5 h-5" />
        </button>

        {!createdComplaint ? (
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Official Grievance Registration
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                {currentLang === 'mr' ? 'ग्रामपंचायत / विभाग तक्रार दाखल करा' : currentLang === 'hi' ? 'ग्राम पंचायत / विभाग में शिकायत दर्ज करें' : 'File Official Civic Grievance'}
              </h3>
              <p className="text-xs text-slate-500">
                A formal complaint ID will be generated and assigned to {analysis.targetOfficer.mr || analysis.targetOfficer.en}.
              </p>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
              <div className="font-semibold text-slate-800">
                {analysis.matchedScheme?.name[currentLang] || analysis.matchedScheme?.name.en}
              </div>
              <div className="truncate text-slate-500">
                {analysis.userInput}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  नागरिकाचे नाव (Citizen Name) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={citizenName}
                  onChange={(e) => setCitizenName(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  मोबाईल क्रमांक (Mobile Number for SMS Updates) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={citizenPhone}
                  onChange={(e) => setCitizenPhone(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 outline-none focus:border-emerald-600 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">गाव (Village)</span>
                  <span className="font-medium text-slate-800">{analysis.citizenDetails?.village || 'ग्रामीण परिसर'}</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-slate-400 block text-[10px]">जिल्हा (District)</span>
                  <span className="font-medium text-slate-800">{analysis.citizenDetails?.district || 'सातारा'}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
              >
                रद्द करा (Cancel)
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>तक्रार नोंदवा (Submit)</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-5 text-center py-2">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">
                तक्रार यशस्वीरित्या नोंदवली गेली!
              </h3>
              <p className="text-xs text-slate-500">
                आपली समस्या संबंधित ग्रामसेवक व विभागाकडे वर्ग करण्यात आली आहे.
              </p>
            </div>

            {/* Generated Complaint ID box */}
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center space-y-2">
              <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block">
                अधिकृत तक्रार क्रमांक (Complaint ID)
              </span>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-mono font-extrabold text-emerald-950">
                  {createdComplaint.id}
                </span>
                <button
                  onClick={handleCopyId}
                  className="p-1.5 hover:bg-emerald-200 rounded text-emerald-800 transition-colors cursor-pointer"
                  title="Copy Complaint ID"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              {copied && (
                <span className="text-[11px] text-emerald-700 font-medium block">
                  Copied to clipboard!
                </span>
              )}
            </div>

            <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200 text-left">
              <div><strong>संबंधित विभाग:</strong> {createdComplaint.department}</div>
              <div><strong>स्थिती:</strong> <span className="text-emerald-700 font-bold">दाखल केली (Submitted)</span></div>
              <div className="text-[11px] text-slate-500 mt-1">
                * हा अधिकृत तक्रार क्रमांक वापरून आपण तक्रार ट्रॅकरमध्ये थेट प्रगती पाहू शकता.
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
            >
              <span>तक्रार ट्रॅकरमध्ये पहा (Track Status)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
