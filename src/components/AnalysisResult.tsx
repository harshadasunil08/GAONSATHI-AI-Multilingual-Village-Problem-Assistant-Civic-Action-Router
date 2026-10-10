import React, { useState } from 'react';
import { Language, ProblemAnalysis } from '../types';
import { translations } from '../i18n/translations';
import { categories } from '../data/categoriesData';
import { TextToSpeechButton } from './TextToSpeechButton';
import { OfficialLetterModal } from './OfficialLetterModal';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock,
  ArrowRight,
  ExternalLink,
  Building,
  UserCheck,
  Lightbulb,
  FileCheck,
  Printer,
  FileEdit,
  DownloadCloud
} from 'lucide-react';

interface AnalysisResultProps {
  analysis: ProblemAnalysis;
  currentLang: Language;
  onOpenComplaintModal: () => void;
  onReset: () => void;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({
  analysis,
  currentLang,
  onOpenComplaintModal,
  onReset,
}) => {
  const t = translations[currentLang];
  const matchedScheme = analysis.matchedScheme;
  const categoryObj = categories.find((c) => c.id === analysis.primaryCategory);
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

  const urgencyStyles = {
    critical: 'bg-rose-100 text-rose-900 border-rose-300',
    high: 'bg-amber-100 text-amber-900 border-amber-300',
    medium: 'bg-blue-100 text-blue-900 border-blue-300',
    low: 'bg-slate-100 text-slate-800 border-slate-300',
  };

  const urgencyLabel = {
    critical: currentLang === 'mr' ? 'अति तात्काळ (Critical Priority)' : currentLang === 'hi' ? 'अति आवश्यक (Critical Priority)' : 'Critical / High Priority',
    high: currentLang === 'mr' ? 'तात्काळ (High Priority)' : currentLang === 'hi' ? 'उच्च प्राथमिकता (High Priority)' : 'High Priority',
    medium: currentLang === 'mr' ? 'नियमित (Standard Priority)' : currentLang === 'hi' ? 'सामान्य (Standard Priority)' : 'Standard Priority',
    low: currentLang === 'mr' ? 'माहितीपर (Informational)' : currentLang === 'hi' ? 'सूचनात्मक (Informational)' : 'Low / Informational',
  };

  // Text string for speech synthesis
  const speechText = `
    ${categoryObj?.name[currentLang] || analysis.primaryCategory}.
    ${analysis.summary[currentLang] || analysis.summary.en}.
    Recommended: ${matchedScheme?.name[currentLang] || 'Civic Redressal'}.
    Department: ${analysis.targetDepartment[currentLang] || analysis.targetDepartment.en}.
    Step 1: ${analysis.actionPlan[0]?.title[currentLang] || analysis.actionPlan[0]?.title.en}.
  `;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-4xl mx-auto space-y-8">
      {/* Top Header & Actions Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>{t.analysisTitle}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {categoryObj?.name[currentLang] || categoryObj?.name.en || 'Civic Solution'}
          </h2>
          <div className="text-xs text-slate-500 mt-1">
            Language: <strong className="text-slate-700 uppercase">{analysis.detectedLanguage}</strong> · Jurisdiction: <strong className="text-slate-700">Gram Panchayat {analysis.citizenDetails?.village || 'वडुज'}, {analysis.citizenDetails?.district || 'सातारा'}</strong>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
          {/* Read Aloud Voice Button */}
          <TextToSpeechButton textToSpeak={speechText} lang={currentLang} />

          {/* Generate Official Application Letter Button */}
          <button
            type="button"
            onClick={() => setIsLetterModalOpen(true)}
            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
          >
            <FileEdit className="w-3.5 h-3.5" />
            <span>{t.btnGenerateLetter}</span>
          </button>

          {/* Print/Save Document Button */}
          <button
            type="button"
            onClick={handlePrint}
            title="Print or Save PDF"
            className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>
        </div>
      </div>

      {/* Problem Summary & Metrics Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Metric 1: Category */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
            {t.lblCategory}
          </div>
          <div className="text-sm font-bold text-slate-900 mt-1">
            {categoryObj?.name[currentLang] || categoryObj?.name.en}
          </div>
        </div>

        {/* Metric 2: Confidence Score */}
        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <div className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wide">
            {t.badgeConfidence}
          </div>
          <div className="text-sm font-bold text-emerald-950 mt-1 flex items-center gap-2">
            <span>{analysis.confidenceScore}%</span>
            <span className="text-[11px] font-medium text-emerald-700">
              (High NLP alignment)
            </span>
          </div>
        </div>

        {/* Metric 3: Urgency */}
        <div className={`p-4 rounded-2xl border ${urgencyStyles[analysis.urgency]}`}>
          <div className="text-[11px] font-semibold uppercase tracking-wide opacity-80">
            {t.badgeUrgency}
          </div>
          <div className="text-sm font-bold mt-1">
            {urgencyLabel[analysis.urgency]}
          </div>
        </div>
      </div>

      {/* Citizen Problem Quote Box */}
      <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
        <span className="text-[11px] font-semibold text-slate-500 uppercase block">
          Citizen Problem Statement
        </span>
        <blockquote className="italic font-medium text-slate-900">
          "{analysis.userInput}"
        </blockquote>
      </div>

      {/* EXPLAINABLE AI SECTION: "Why this recommendation?" */}
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5 space-y-3">
        <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
          <Lightbulb className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>{t.lblWhyRecommended}</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {analysis.explainability.whyRecommended[currentLang] || analysis.explainability.whyRecommended.en}
        </p>

        {/* Transparent Evidence Factors */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {analysis.explainability.factors.map((f, i) => (
            <div key={i} className="flex items-start gap-2 bg-white/90 p-2.5 rounded-xl border border-emerald-100 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <span className="font-bold text-slate-800">{f.title}: </span>
                <span className="text-slate-600">{f.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Government Scheme / Civic Service Card */}
      {matchedScheme && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  {matchedScheme.level} Government Scheme
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900">
                  {matchedScheme.shortCode}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {matchedScheme.name[currentLang] || matchedScheme.name.en}
              </h3>
            </div>

            {matchedScheme.officialPortal && (
              <a
                href={matchedScheme.officialPortal.split(' ')[0]}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-emerald-700 hover:text-emerald-900 font-bold inline-flex items-center gap-1 shrink-0 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
              >
                <span>Official National Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {matchedScheme.description[currentLang] || matchedScheme.description.en}
          </p>

          {/* Department and Designated Authority */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs border-t border-slate-100">
            <div className="flex items-start gap-2.5 text-slate-600">
              <Building className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-800 block">{t.lblDepartment}</span>
                <span>{matchedScheme.department[currentLang] || matchedScheme.department.en}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-600">
              <UserCheck className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-800 block">{t.lblOfficer}</span>
                <span>{matchedScheme.officerRole[currentLang] || matchedScheme.officerRole.en}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Two Column Layout: Eligibility & Required Documents Checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Eligibility Criteria */}
        {matchedScheme && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>{t.lblEligibility}</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {(matchedScheme.eligibility[currentLang] || matchedScheme.eligibility.en).map(
                (item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        )}

        {/* Required Documents Checklist */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-700" />
              <span>{t.lblRequiredDocs}</span>
            </h4>
            <span className="text-[11px] text-slate-400">Readiness check</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-700">
            {analysis.requiredDocuments.map((doc, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200/70 shadow-2xs">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-0.5 h-3.5 w-3.5 rounded text-emerald-700 focus:ring-emerald-500 cursor-pointer"
                />
                <span className="font-medium text-slate-800">{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Step-by-Step Action Plan */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-700" />
            <span>{t.lblActionPlan}</span>
          </h4>
          <span className="text-xs text-slate-500">
            Chronological resolution pathway
          </span>
        </div>

        <div className="space-y-3">
          {analysis.actionPlan.map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 transition-colors flex items-start gap-3.5 shadow-2xs"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                {step.stepNumber}
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h5 className="font-bold text-sm text-slate-900">
                    {step.title[currentLang] || step.title.en}
                  </h5>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md self-start sm:self-center">
                    {step.timeframe} · {step.department}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description[currentLang] || step.description.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action CTAs */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-bold text-slate-600 hover:text-slate-900 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 cursor-pointer w-full sm:w-auto"
        >
          {t.btnReset}
        </button>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          {/* Quick Draft Letter Button */}
          <button
            type="button"
            onClick={() => setIsLetterModalOpen(true)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-amber-400 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-2xs"
          >
            <FileEdit className="w-4 h-4 text-amber-700" />
            <span>{t.btnGenerateLetter}</span>
          </button>

          {/* Submit Grievance Button */}
          <button
            type="button"
            onClick={onOpenComplaintModal}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-900/20 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            <span>{t.btnCreateComplaint}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Official Grievance Application Letter Modal */}
      <OfficialLetterModal
        analysis={analysis}
        currentLang={currentLang}
        isOpen={isLetterModalOpen}
        onClose={() => setIsLetterModalOpen(false)}
      />
    </div>
  );
};
