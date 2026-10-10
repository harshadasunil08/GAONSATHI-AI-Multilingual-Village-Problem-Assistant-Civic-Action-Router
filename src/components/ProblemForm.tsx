import React, { useState } from 'react';
import { CategoryId, Language, ProblemAnalysis, SampleProblem } from '../types';
import { translations } from '../i18n/translations';
import { categories } from '../data/categoriesData';
import { sampleProblems } from '../data/sampleProblemsData';
import { VoiceInputButton } from './VoiceInputButton';
import { analyzeProblem } from '../ai/engine';
import {
  Send,
  MapPin,
  User,
  HelpCircle,
  Sparkles,
  RotateCcw,
  BookOpen
} from 'lucide-react';

interface ProblemFormProps {
  currentLang: Language;
  onAnalysisComplete: (result: ProblemAnalysis) => void;
  initialText?: string;
  initialLang?: Language;
}

export const ProblemForm: React.FC<ProblemFormProps> = ({
  currentLang,
  onAnalysisComplete,
  initialText = '',
  initialLang,
}) => {
  const t = translations[currentLang];

  const [problemText, setProblemText] = useState(initialText);
  const [selectedLang, setSelectedLang] = useState<Language>(initialLang || currentLang);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');

  // Location fields
  const [stateName, setStateName] = useState('Maharashtra');
  const [districtName, setDistrictName] = useState('सातारा (Satara)');
  const [villageName, setVillageName] = useState('वडुज (Vaduj)');

  // Demographics
  const [occupation, setOccupation] = useState('शेतकरी (Farmer)');
  const [incomeRange, setIncomeRange] = useState('₹५०,००० - ₹१,५०,००० (BPL/EWS)');
  const [ageGroup, setAgeGroup] = useState('३५-५० वर्षे');

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if initial text changes externally
  React.useEffect(() => {
    if (initialText) {
      setProblemText(initialText);
    }
  }, [initialText]);

  React.useEffect(() => {
    if (initialLang) {
      setSelectedLang(initialLang);
    }
  }, [initialLang]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problemText.trim()) return;

    setIsSubmitting(true);
    try {
      const result = await analyzeProblem(problemText, {
        forcedLanguage: selectedLang,
        forcedCategory: selectedCategory,
        location: {
          state: stateName,
          district: districtName,
          village: villageName,
        },
        demographics: {
          occupation,
          incomeRange,
          demographicTag: ageGroup,
        },
      });

      onAnalysisComplete(result);
    } catch (err) {
      console.error('Analysis error', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVoiceTranscript = (transcript: string) => {
    setProblemText((prev) => (prev ? `${prev} ${transcript}` : transcript));
  };

  const handleSelectSample = (sample: SampleProblem) => {
    setProblemText(sample.text);
    setSelectedLang(sample.language);
    setSelectedCategory(sample.category);
    setDistrictName(sample.district);
    setVillageName(sample.village);
  };

  const clearForm = () => {
    setProblemText('');
    setSelectedCategory('all');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 max-w-4xl mx-auto space-y-8">
      {/* Form Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              {t.formTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t.formSubtitle}
            </p>
          </div>

          {/* Quick Clear Button */}
          {problemText && (
            <button
              type="button"
              onClick={clearForm}
              className="text-xs text-slate-400 hover:text-slate-700 flex items-center gap-1 self-start sm:self-center cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Problem Description Textarea */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs sm:text-sm font-semibold text-slate-900">
              {t.lblProblemText} <span className="text-rose-600">*</span>
            </label>

            {/* Voice Input Integration */}
            <VoiceInputButton
              currentLang={selectedLang}
              onTranscript={handleVoiceTranscript}
              disabled={isSubmitting}
            />
          </div>

          <textarea
            rows={4}
            value={problemText}
            onChange={(e) => setProblemText(e.target.value)}
            placeholder={t.placeholderProblem}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-slate-900 text-sm sm:text-base resize-y transition-all placeholder:text-slate-400 font-sans"
          />
        </div>

        {/* Quick Sample Selector Dropdown/List */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5 text-slate-700">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              {currentLang === 'mr' ? 'उदाहरणादाखल नमुना समस्या निवडा:' : currentLang === 'hi' ? 'नमूना समस्या चुनें:' : 'Or pick a realistic test problem:'}
            </span>
            <span className="text-[11px] text-slate-400">
              {sampleProblems.length} pre-built cases
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
            {sampleProblems.slice(0, 8).map((sp) => (
              <button
                key={sp.id}
                type="button"
                onClick={() => handleSelectSample(sp)}
                className="text-[11px] px-2.5 py-1 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 border border-slate-200 rounded-md transition-colors text-left cursor-pointer truncate max-w-xs"
                title={sp.text}
              >
                {sp.label}
              </button>
            ))}
          </div>
        </div>

        {/* Configuration Row: Language & Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Language Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">
              {t.lblLanguage}
            </label>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value as Language)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-slate-800 outline-none focus:border-emerald-600"
            >
              <option value="mr">मराठी (Marathi)</option>
              <option value="hi">हिंदी (Hindi)</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Category Selector (Optional) */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">
              {t.lblCategoryOptional}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as CategoryId | 'all')}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-slate-800 outline-none focus:border-emerald-600"
            >
              <option value="all">{t.lblAllCategories}</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name[currentLang] || c.name.en}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Location Section */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.lblLocation}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] text-slate-500 block mb-1">
                {t.lblState}
              </label>
              <input
                type="text"
                value={stateName}
                onChange={(e) => setStateName(e.target.value)}
                className="w-full px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-slate-800 outline-none focus:border-emerald-600"
              />
            </div>
            <div>
              <label className="text-[11px] text-slate-500 block mb-1">
                {t.lblDistrict}
              </label>
              <input
                type="text"
                value={districtName}
                onChange={(e) => setDistrictName(e.target.value)}
                className="w-full px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-slate-800 outline-none focus:border-emerald-600"
              />
            </div>
            <div>
              <label className="text-[11px] text-slate-500 block mb-1">
                {t.lblVillage}
              </label>
              <input
                type="text"
                value={villageName}
                onChange={(e) => setVillageName(e.target.value)}
                className="w-full px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-slate-800 outline-none focus:border-emerald-600"
              />
            </div>
          </div>
        </div>

        {/* Optional Demographics for Scheme Eligibility Matching */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <User className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.lblDemographics}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] text-slate-500 block mb-1">
                {t.lblOccupation}
              </label>
              <select
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white text-slate-800 outline-none focus:border-emerald-600"
              >
                <option value="शेतकरी (Farmer)">शेतकरी (Farmer)</option>
                <option value="विद्यार्थी (Student)">विद्यार्थी (Student)</option>
                <option value="ज्येष्ठ नागरिक (Senior Citizen)">ज्येष्ठ नागरिक (Senior Citizen)</option>
                <option value="महिला / गृहिणी (Homemaker)">महिला / गृहिणी (Homemaker)</option>
                <option value="अकुशल कामगार (Laborer)">अकुशल कामगार (Laborer)</option>
                <option value="लहान व्यावसायिक (Small Business)">लहान व्यावसायिक (Small Business)</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-slate-500 block mb-1">
                {t.lblIncome}
              </label>
              <select
                value={incomeRange}
                onChange={(e) => setIncomeRange(e.target.value)}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white text-slate-800 outline-none focus:border-emerald-600"
              >
                <option value="₹५०,००० खाली (BPL / Antyodaya)">₹५०,००० खाली (BPL / Antyodaya)</option>
                <option value="₹५०,००० - ₹१,५०,००० (EWS)">₹५०,००० - ₹१,५०,००० (EWS)</option>
                <option value="₹१,५०,००० - ₹२,५०,००० (Low Income)">₹१,५०,००० - ₹२,५०,००० (Low Income)</option>
                <option value="₹२,५०,००० पेक्षा जास्त">₹२,५०,००० पेक्षा जास्त</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-slate-500 block mb-1">
                वय गट (Age Group)
              </label>
              <select
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value)}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white text-slate-800 outline-none focus:border-emerald-600"
              >
                <option value="१८ ते २५ वर्षे (युवक/विद्यार्थी)">१८ ते २५ वर्षे (युवक/विद्यार्थी)</option>
                <option value="२६ ते ५० वर्षे (कमवता प्रौढ)">२६ ते ५० वर्षे (कमवता प्रौढ)</option>
                <option value="५१ ते ६० वर्षे">५१ ते ६० वर्षे</option>
                <option value="६० वर्षे किंवा अधिक (ज्येष्ठ)">६० वर्षे किंवा अधिक (ज्येष्ठ)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting || !problemText.trim()}
            className={`w-full py-3.5 px-6 rounded-xl font-bold text-white text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-md ${
              isSubmitting || !problemText.trim()
                ? 'bg-slate-300 cursor-not-allowed shadow-none'
                : 'bg-emerald-700 hover:bg-emerald-800 shadow-emerald-900/20 cursor-pointer active:scale-[0.99]'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>{t.btnAnalyzing}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>{t.btnAnalyze}</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
