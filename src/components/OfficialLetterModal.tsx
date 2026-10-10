import React, { useState } from 'react';
import { Language, ProblemAnalysis } from '../types';
import { translations } from '../i18n/translations';
import { X, Printer, Copy, Check, FileText, Landmark } from 'lucide-react';

interface OfficialLetterModalProps {
  analysis: ProblemAnalysis;
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const OfficialLetterModal: React.FC<OfficialLetterModalProps> = ({
  analysis,
  currentLang,
  isOpen,
  onClose,
}) => {
  const t = translations[currentLang];
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const today = new Date().toLocaleDateString(
    currentLang === 'mr' ? 'mr-IN' : currentLang === 'hi' ? 'hi-IN' : 'en-IN',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  const citizenName = analysis.citizenDetails?.occupation 
    ? `${analysis.citizenDetails.occupation} प्रतिनिधी` 
    : 'नागरिक / ग्रामस्थ';
  const village = analysis.citizenDetails?.village || 'वडुज';
  const district = analysis.citizenDetails?.district || 'सातारा';

  // Construct official letter content in the selected language
  const getLetterContent = () => {
    if (currentLang === 'mr') {
      return {
        toRole: `मा. ${analysis.targetOfficer.mr || 'ग्रामसेवक / गट विकास अधिकारी'}`,
        toOffice: `${analysis.targetDepartment.mr || 'ग्रामपंचायत कार्यालय, ' + village}`,
        subject: `विषय: ${analysis.primaryCategory === 'water' ? 'गावातील पिण्याच्या पाण्याचा पुरवठा सुरळीत करणेबाबत.' : analysis.primaryCategory === 'electricity' ? 'शेती वीज पुरवठा व नादुरुस्त ट्रान्सफॉर्मर तातडीने बदलणेबाबत.' : analysis.primaryCategory === 'roads' ? 'गावातील मुख्य रस्त्यावरील खड्डे बुजवून दुरुस्ती करणेबाबत.' : analysis.primaryCategory === 'education' ? 'प्रलंबित शिष्यवृत्ती अर्जाची तातडीने छाननी करून अनुदान जमा करणेबाबत.' : analysis.primaryCategory === 'housing' ? 'प्रधानमंत्री आवास योजना (PMAY-G) घरकुल यादीत नाव समाविष्ट करणेबाबत.' : 'गावातील नागरी समस्या निवारण अर्ज.'}`,
        reference: `संदर्भ: गावसाथी AI डिजिटल तक्रार नोंदणी (${analysis.id})`,
        salutation: 'महोदय / महोदया,',
        bodyParagraph1: `मी खालील स्वाक्षरी करणारा ग्रामस्थ/नागरिक, मौजे ${village}, तालुका व जिल्हा ${district} येथील रहिवासी असून खालील समस्येकडे आपले तातडीचे लक्ष वेधून घेत आहे.`,
        problemText: `समस्या तपशील: "${analysis.userInput}"`,
        bodyParagraph2: `सदर समस्येमुळे गावातील नागरिक, विद्यार्थी व शेतकरी बांधवांना दैनंदिन जीवन जगताना प्रचंड गैरसोयीला सामोरे जावे लागत आहे. याबाबत शासनाच्या ${analysis.matchedScheme?.name.mr || 'लोकसेवा हमी कायद्या'}नुसार विहित मुदतीत योग्य ती कार्यवाही करण्यात यावी ही नम्र विनंती.`,
        bodyParagraph3: 'कृपया प्रत्यक्ष स्थळ पाहणी करून सदर कामास तांत्रिक मंजुरी द्यावी व केलेल्या कारवाईचा अहवाल लिखित स्वरूपात कळवावा ही विनंती.',
        attachmentsLabel: 'सोबत जोडलेली कागदपत्रे:',
        closing: 'आपला / आपली नम्र,',
        applicantPlace: `ठिकाण: ${village}`,
        applicantDate: `दिनांक: ${today}`,
        signatureLabel: '(स्वाक्षरी / अंगठा)',
      };
    } else if (currentLang === 'hi') {
      return {
        toRole: `सेवा में, श्रीमान ${analysis.targetOfficer.hi || 'ग्राम सेवक / खंड विकास अधिकारी महोदय'}`,
        toOffice: `${analysis.targetDepartment.hi || 'ग्राम पंचायत कार्यालय, ' + village}`,
        subject: `विषय: ${analysis.primaryCategory === 'water' ? 'गांव में पेयजल आपूर्ति सुचारू कराने के संबंध में।' : analysis.primaryCategory === 'electricity' ? 'कृषि बिजली आपूर्ति एवं खराब ट्रांसफार्मर बदलने के संबंध में।' : analysis.primaryCategory === 'roads' ? 'ग्रामीण मुख्य संपर्क मार्ग की मरम्मत कराने के संबंध में।' : analysis.primaryCategory === 'education' ? 'लंबित छात्रवृत्ति का निस्तारण कराने के संबंध में।' : 'ग्रामीण समस्या समाधान हेतु प्रार्थना पत्र।'}`,
        reference: `संदर्भ: गांवसाथी AI डिजिटल नागरिक पंजीकरण (${analysis.id})`,
        salutation: 'महोदय,',
        bodyParagraph1: `सविनय निवेदन है कि मैं ग्राम ${village}, जिला ${district} का निवासी हूं। इस प्रार्थना पत्र के माध्यम से निम्नलिखित जनसमस्या की ओर आपका ध्यान आकर्षित कराना चाहता हूं:`,
        problemText: `समस्या विवरण: "${analysis.userInput}"`,
        bodyParagraph2: `उपरोक्त समस्या के कारण ग्रामीणों को अत्यधिक कठिनाइयों का सामना करना पड़ रहा है। शासन की जनकल्याणकारी नीतियों के अंतर्गत इस पर त्वरित संज्ञान लेकर उचित कार्रवाई सुनिश्चित करें।`,
        bodyParagraph3: 'अतः आपसे सादर अनुरोध है कि मौके का मुआयना कर समस्या का समयबद्ध निस्तारण कराने की कृपा करें।',
        attachmentsLabel: 'संलग्न आवश्यक दस्तावेज:',
        closing: 'भवदीय,',
        applicantPlace: `स्थान: ${village}`,
        applicantDate: `दिनांक: ${today}`,
        signatureLabel: '(हस्ताक्षर / अंगूठा)',
      };
    } else {
      return {
        toRole: `To, The Designated Officer (${analysis.targetOfficer.en})`,
        toOffice: `${analysis.targetDepartment.en}, Village ${village}, District ${district}`,
        subject: `Subject: Formal Civic Grievance regarding ${analysis.primaryCategory.toUpperCase()} issues.`,
        reference: `Reference: GAONSATHI AI Citizen Registration (${analysis.id})`,
        salutation: 'Respected Sir / Madam,',
        bodyParagraph1: `I am a resident of Village ${village}, District ${district}. I hereby submit this formal application to bring the following civic problem to your immediate attention:`,
        problemText: `Problem Description: "${analysis.userInput}"`,
        bodyParagraph2: `This issue has severely affected daily life, public safety, and rural livelihood. In accordance with the citizen charter and Public Services Guarantee standards, I request immediate field inspection and redressal under ${analysis.matchedScheme?.name.en || 'Government Civic Norms'}.`,
        bodyParagraph3: 'Kindly acknowledge receipt of this petition and initiate the required departmental action.',
        attachmentsLabel: 'Enclosed Documents:',
        closing: 'Yours faithfully,',
        applicantPlace: `Place: ${village}`,
        applicantDate: `Date: ${today}`,
        signatureLabel: '(Signature / Thumb Impression)',
      };
    }
  };

  const letter = getLetterContent();

  const handleCopy = () => {
    const fullText = `
${letter.toRole}
${letter.toOffice}

${letter.subject}
${letter.reference}

${letter.salutation}

${letter.bodyParagraph1}

${letter.problemText}

${letter.bodyParagraph2}

${letter.bodyParagraph3}

${letter.attachmentsLabel}
${analysis.requiredDocuments.map((d, i) => `${i + 1}. ${d}`).join('\n')}

${letter.applicantDate}
${letter.applicantPlace}

${letter.closing}
_____________________
${letter.signatureLabel}
    `.trim();

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] flex flex-col">
        {/* Modal Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                {t.letterDraftTitle}
              </h3>
              <p className="text-[11px] text-slate-500">
                {t.letterDraftDesc}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Official Letter Paper View */}
        <div className="flex-1 overflow-y-auto my-4 p-6 sm:p-8 bg-slate-50/70 border border-slate-200 rounded-xl font-serif text-slate-900 text-xs sm:text-sm space-y-4 shadow-inner">
          {/* Government Watermark Header */}
          <div className="border-b border-slate-300 pb-3 text-center font-sans">
            <div className="text-[11px] font-bold text-emerald-800 tracking-widest uppercase">
              महाराष्ट्र शासन / भारत सरकार नागरी सेवा अर्ज
            </div>
            <div className="text-xs text-slate-500">
              Gram Panchayat Public Grievance Form · GAONSATHI AI
            </div>
          </div>

          {/* Recipient */}
          <div className="space-y-0.5">
            <div className="font-bold text-slate-900">{letter.toRole}</div>
            <div className="text-slate-700">{letter.toOffice}</div>
          </div>

          {/* Subject & Reference */}
          <div className="space-y-1 bg-white p-2.5 rounded border border-slate-200 font-sans text-xs">
            <div className="font-bold text-slate-900">{letter.subject}</div>
            <div className="text-slate-500 font-mono text-[11px]">{letter.reference}</div>
          </div>

          <div className="font-bold">{letter.salutation}</div>

          <p className="leading-relaxed">{letter.bodyParagraph1}</p>

          <div className="bg-white p-3 rounded border border-slate-200 italic font-medium text-slate-800">
            {letter.problemText}
          </div>

          <p className="leading-relaxed">{letter.bodyParagraph2}</p>
          <p className="leading-relaxed">{letter.bodyParagraph3}</p>

          {/* Attachments List */}
          <div className="pt-2">
            <div className="font-bold mb-1 font-sans text-xs">{letter.attachmentsLabel}</div>
            <ul className="list-decimal list-inside space-y-0.5 text-slate-700 text-xs font-sans">
              {analysis.requiredDocuments.map((doc, idx) => (
                <li key={idx}>{doc}</li>
              ))}
            </ul>
          </div>

          {/* Date & Signature Row */}
          <div className="pt-8 flex items-end justify-between font-sans text-xs">
            <div>
              <div>{letter.applicantDate}</div>
              <div>{letter.applicantPlace}</div>
            </div>
            <div className="text-center">
              <div className="w-36 border-b border-slate-400 mb-1"></div>
              <div className="text-slate-600 font-medium">{letter.signatureLabel}</div>
              <div className="text-[11px] text-slate-400">अर्जदार / नागरिक</div>
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 font-sans">
          <button
            type="button"
            onClick={handleCopy}
            className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-500" />
                <span>{t.btnCopyLetter}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>{t.btnPrintLetter}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
