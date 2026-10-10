import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock,
  Compass,
  Cpu,
  Workflow,
  SearchCheck,
  PhoneCall,
  FileCheck2,
  Landmark
} from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onNavigate: (tab: string) => void;
  onSelectSampleProblem: (text: string, lang: Language) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onNavigate,
  onSelectSampleProblem,
}) => {
  const t = translations[currentLang];

  const quickDemos = [
    {
      text: 'माझ्या गावात पाणी नियमित येत नाही.',
      label: '💧 पाणी पुरवठा (मराठी)',
      lang: 'mr' as Language,
    },
    {
      text: 'माझ्या मुलाला scholarship मिळाली नाही.',
      label: '🎓 शिष्यवृत्ती प्रलंबित (मराठी)',
      lang: 'mr' as Language,
    },
    {
      text: 'शेतात वीज वारंवार जाते, ट्रान्सफॉर्मर जळाला आहे.',
      label: '⚡ शेती वीज व डीपी (मराठी)',
      lang: 'mr' as Language,
    },
    {
      text: 'गांव में पीने का पानी नियमित नहीं आता, पाइपलाइन टूटी है।',
      label: '🚰 पेयजल समस्या (हिंदी)',
      lang: 'hi' as Language,
    },
    {
      text: 'The main village approach road has severe potholes and mud.',
      label: '🛣️ Village Road Damage (English)',
      lang: 'en' as Language,
    }
  ];

  const features = [
    {
      icon: Cpu,
      title: currentLang === 'mr' ? 'स्थानिक बोलीभाषा AI समज' : currentLang === 'hi' ? 'स्थानीय बोलीभाषा AI समझ' : 'Multilingual NLP Problem Understanding',
      desc: currentLang === 'mr' ? 'मराठी, हिंदी व इंग्रजी बोलीभाषेतील समस्यांचे अचूक वर्गीकरण आणि निकष निष्कर्षण.' : currentLang === 'hi' ? 'हिंदी, मराठी और अंग्रेजी में ग्रामीण समस्याओं का सटीक वर्गीकरण और मुख्य बिंदुओं की पहचान।' : 'Natural language parsing for rural citizen queries in Marathi, Hindi, and English.'
    },
    {
      icon: SearchCheck,
      title: currentLang === 'mr' ? 'शासकीय योजना व सेवा मॅपिंग' : currentLang === 'hi' ? 'सटीक सरकारी योजना मिलान' : 'Government Welfare Scheme Mapping',
      desc: currentLang === 'mr' ? 'जल जीवन मिशन, पीएम-कुसुम, पीएमजीएसवाई, घरकुल व शिष्यवृत्ती योजनांशी थेट जोडणी.' : currentLang === 'hi' ? 'जल जीवन, पीएम-कुसुम, पीएमजीएसवाई और आवास योजनाओं से सीधे समस्या का मिलान।' : 'Automatic mapping with Central & State schemes such as Jal Jeevan, PMAY-G, PM-KUSUM, and NSP.'
    },
    {
      icon: FileCheck2,
      title: currentLang === 'mr' ? 'तयार अधिकृत अर्ज प्रारूप (Letter Draft)' : currentLang === 'hi' ? 'तैयार आधिकारिक आवेदन पत्र' : 'Instant Official Grievance Petition',
      desc: currentLang === 'mr' ? 'ग्रामसेवक किंवा बीडीओ कार्यालयात सादर करण्यासाठी योग्य विषयासह तयार अर्ज १-क्लिकमध्ये प्रिंट करा.' : currentLang === 'hi' ? 'ग्राम सेवक या बीडीओ को सौंपने हेतु विधिमान्य प्रारूप में तैयार प्रार्थना पत्र १-क्लिक में प्राप्त करें।' : 'Auto-formats standard government representation letter ready to print and submit to local authorities.'
    },
    {
      icon: ShieldCheck,
      title: currentLang === 'mr' ? 'पारदर्शक AI स्पष्टीकरण' : currentLang === 'hi' ? 'पारदर्शी व्याख्या (Explainable AI)' : 'Transparent & Explainable AI',
      desc: currentLang === 'mr' ? 'ही शिफारस का दिली? याचे पारदर्शक निकष, शब्द आणि अधिकार क्षेत्र तपशील स्पष्ट दिसतात.' : currentLang === 'hi' ? 'सिस्टम ने यह योजना क्यों चुनी, इसके स्पष्ट कारण और साक्ष्य नागरिक को दिखाए जाते हैं।' : 'Transparent explanation showing why a recommendation was made based on keywords and jurisdiction.'
    },
    {
      icon: FileText,
      title: currentLang === 'mr' ? 'कागदपत्र तयारी चेकलिस्ट' : currentLang === 'hi' ? 'दस्तावेज तैयारी चेकलिस्ट' : 'Readiness Document Checklist',
      desc: currentLang === 'mr' ? 'कोणती कागदपत्रे लागतील (आधार, ७/१२, उत्पन्न, बँक डीबीटी) व ती कुठे मिळतील याची स्पष्ट यादी.' : currentLang === 'hi' ? 'आवेदन हेतु आवश्यक प्रमाणपत्रों (आधार, खतौनी, आय प्रमाण) की स्पष्ट सूची।' : 'Actionable document readiness checklist so citizens never return empty-handed from offices.'
    },
    {
      icon: Clock,
      title: currentLang === 'mr' ? 'तक्रार ट्रॅकिंग व पाठपुरावा' : currentLang === 'hi' ? 'शिकायत ट्रैकिंग एवं फॉलो-अप' : 'Grievance Tracking & Escalation',
      desc: currentLang === 'mr' ? 'ग्रामपंचायत व शासकीय कार्यालयात दाखल केलेल्या तक्रारींची थेट प्रगती स्थिती ट्रॅक करा.' : currentLang === 'hi' ? 'ग्राम पंचायत में दर्ज शिकायतों की वास्तविक स्थिति देखें और नागरिक नोट जोड़ें।' : 'Unique complaint IDs (e.g. GS-2026-00124) with status updates and timeline review.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white pt-14 pb-18 px-4 sm:px-6 lg:px-8 rounded-3xl shadow-lg border border-emerald-900/60">
        {/* Subtle decorative grid overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #34d399 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          {/* Top Pill: Viksit Bharat Initiative */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/90 border border-emerald-500/50 text-emerald-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Viksit Bharat Rural Mission · Technology for Social Transformation</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            GAONSATHI AI
            <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold text-emerald-400 mt-2">
              “{t.appTagline}”
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            {t.heroSubhead}
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('assistant')}
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-900/40 flex items-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              <span>{t.btnDescribeProblem}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('schemes')}
              className="px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-100 font-bold text-sm sm:text-base transition-all border border-slate-700 flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>{t.btnExploreServices}</span>
            </button>
          </div>

          {/* 1-Click Common Rural Queries */}
          <div className="pt-8 border-t border-slate-800/80 max-w-4xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90 mb-3">
              ⚡ {currentLang === 'mr' ? 'नेहमी विचारले जाणारे ग्रामीण प्रश्न (क्लिक करून पहा):' : currentLang === 'hi' ? 'अक्सर पूछे जाने वाले ग्रामीण प्रश्न (क्लिक करें):' : 'Frequently Asked Rural Citizen Questions (Click to test):'}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {quickDemos.map((demo, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectSampleProblem(demo.text, demo.lang)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-emerald-900/70 border border-slate-700 hover:border-emerald-500/60 text-slate-200 text-xs transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <span className="font-semibold text-emerald-300">{demo.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main System Flow Visual: PROBLEM -> UNDERSTANDING -> SERVICE -> ACTION */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">
            Core Philosophy
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            PROBLEM → UNDERSTANDING → SERVICE → ACTION
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {currentLang === 'mr'
              ? 'केवळ गप्पा मारणारा चॅटबॉट नाही, तर थेट समस्या निवारण करणारी नागरिक-केंद्रित प्रणाली.'
              : currentLang === 'hi'
              ? 'केवल एक चैटबॉट नहीं, बल्कि समस्या से समाधान तक की संपूर्ण डिजिटल व्यवस्था।'
              : 'Not a generic conversational chatbot, but an actionable civic routing system.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Step 1 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 relative">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm mb-3">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-sm">{t.flowStep1}</h3>
            <p className="text-xs text-slate-600 mt-1">{t.flowStep1Desc}</p>
            <div className="mt-3 text-[11px] text-slate-400 font-mono">
              Voice / Text · MR / HI / EN
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 relative">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm mb-3">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-sm">{t.flowStep2}</h3>
            <p className="text-xs text-slate-600 mt-1">{t.flowStep2Desc}</p>
            <div className="mt-3 text-[11px] text-slate-400 font-mono">
              14 Categories · Confidence Score
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 relative">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm mb-3">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-sm">{t.flowStep3}</h3>
            <p className="text-xs text-slate-600 mt-1">{t.flowStep3Desc}</p>
            <div className="mt-3 text-[11px] text-slate-400 font-mono">
              Central & State Schemes
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 relative">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center text-sm mb-3">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-sm">{t.flowStep4}</h3>
            <p className="text-xs text-slate-700 mt-1">{t.flowStep4Desc}</p>
            <div className="mt-3 text-[11px] text-emerald-800 font-mono font-medium">
              Official Draft Letter · Grievance ID
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">
              Architecture & Practical Benefits
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              {currentLang === 'mr' ? 'गावसाथी AI चे मुख्य वैशिष्ट्ये' : currentLang === 'hi' ? 'गांवसाथी AI की प्रमुख विशेषताएं' : 'Core Capabilities of GAONSATHI AI'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Built for rural accessibility with speech integration, printable application drafts, transparent reasoning, and end-to-end civic tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-colors shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* National Rural Impact Strip */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800">
        <div className="max-w-3xl space-y-4">
          <div className="inline-block text-xs uppercase tracking-wider font-bold text-emerald-400">
            Digital Transformation for India’s 6,60,000+ Villages
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Empowering Every Rural Citizen with Transparent Civic Governance
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            By bridging the gap between complex government procedures and rural citizens, GAONSATHI AI ensures that no farmer, student, or elderly villager is denied their constitutional welfare rights due to lack of information or literacy barriers.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Rural Development & Farmer Support
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Digital Inclusion & Local Language Audio
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Official Application Drafting
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Direct Panchayat & Officer Routing
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
