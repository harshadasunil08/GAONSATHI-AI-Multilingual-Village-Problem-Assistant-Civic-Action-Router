import React from 'react';
import { Language } from '../types';
import {
  PhoneCall,
  Droplets,
  Zap,
  Sprout,
  HeartPulse,
  Landmark,
  ShieldAlert,
  Users,
  AlertCircle
} from 'lucide-react';

interface HelplinesDirectoryProps {
  currentLang: Language;
}

export const HelplinesDirectory: React.FC<HelplinesDirectoryProps> = ({ currentLang }) => {
  const helplines = [
    {
      title: currentLang === 'mr' ? 'जल जीवन मिशन पाणी हेल्पलाईन' : currentLang === 'hi' ? 'जल जीवन मिशन पेयजल हेल्पलाइन' : 'Jal Jeevan Mission Water Helpline',
      number: '1800-180-1551',
      desc: currentLang === 'mr' ? 'पिण्याच्या पाण्याची टंचाई, टँकर मागणी व पाईपलाईन गळती तक्रार.' : currentLang === 'hi' ? 'पेयजल किल्लत, टैंकर मांग व पाइपलाइन लीकेज शिकायत।' : 'Drinking water outage, tanker request, and pipeline leakages.',
      icon: Droplets,
      color: 'text-cyan-700 bg-cyan-50 border-cyan-200'
    },
    {
      title: currentLang === 'mr' ? 'महावितरण / वीज २४x७ हेल्पलाईन' : currentLang === 'hi' ? 'विद्युत डिस्कॉम 24x7 हेल्पलाइन' : 'Electricity & Feeder Outage Hotline',
      number: '1912',
      desc: currentLang === 'mr' ? 'शेतातील ट्रान्सफॉर्मर जळणे, डीपी बिघाड आणि अचानक वीज खंडित होणे.' : currentLang === 'hi' ? 'खेत का ट्रांसफार्मर जलना, डीपी खराबी और बिजली कटौती।' : 'Transformer burnout, agricultural feeder outages, and fallen electric poles.',
      icon: Zap,
      color: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    {
      title: currentLang === 'mr' ? 'किसान कॉल सेंटर (कृषी सल्ला)' : currentLang === 'hi' ? 'किसान कॉल सेंटर (कृषि सलाह)' : 'Kisan Call Centre (Agriculture Help)',
      number: '1800-180-1551 / 1551',
      desc: currentLang === 'mr' ? 'पीक रोग, पीएम-किसान हप्ता, खते-बियाणे आणि हवामान अंदाज.' : currentLang === 'hi' ? 'फसल रोग, पीएम-किसान किस्त, बीज-खाद व मौसम पूर्वानुमान।' : 'Crop diseases, PM-KISAN installment issues, seeds, and weather forecasts.',
      icon: Sprout,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      title: currentLang === 'mr' ? 'आयुष्मान भारत व आरोग्य सेवा' : currentLang === 'hi' ? 'आयुष्मान भारत स्वास्थ्य हेल्पलाइन' : 'Ayushman Bharat National Health Helpline',
      number: '14555',
      desc: currentLang === 'mr' ? '५ लाख रुपयांपर्यंत मोफत कॅशलेस उपचार, गोल्डन कार्ड आणि संलग्न रुग्णालये.' : currentLang === 'hi' ? '5 लाख तक निशुल्क इलाज, गोल्डन कार्ड व अस्पताल सूची।' : 'Cashless hospital treatment up to Rs 5 Lakhs and Golden Card issuance.',
      icon: HeartPulse,
      color: 'text-rose-700 bg-rose-50 border-rose-200'
    },
    {
      title: currentLang === 'mr' ? 'आपले सरकार / मुख्यमंत्री नागरिक कक्ष' : currentLang === 'hi' ? 'नागरिक सेवा व समाधान पोर्टल' : 'Citizen Grievance & Aaple Sarkar',
      number: '1800-120-8040 / 181',
      desc: currentLang === 'mr' ? 'दाखले, रेशन कार्ड व ग्रामपंचायत लोकसेवा हमी कायदा तक्रारी.' : currentLang === 'hi' ? 'राशन कार्ड, प्रमाण पत्र एवं जनसुनवाई समाधान।' : 'Public Services Guarantee, ration card, certificates, and civic escalations.',
      icon: Landmark,
      color: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    {
      title: currentLang === 'mr' ? 'ज्येष्ठ नागरिक राष्ट्रीय हेल्पलाईन' : currentLang === 'hi' ? 'वरिष्ठ नागरिक राष्ट्रीय हेल्पलाइन' : 'Elderly & Senior Citizens Helpline',
      number: '14567',
      desc: currentLang === 'mr' ? 'वृद्धापकाळ पेन्शन अडचण, कायदेशीर आधार व आरोग्य सहाय्य.' : currentLang === 'hi' ? 'वृद्धावस्था पेंशन समस्या, कानूनी व स्वास्थ्य सहायता।' : 'Elder line assistance, old age pensions, and social security guidance.',
      icon: Users,
      color: 'text-purple-700 bg-purple-50 border-purple-200'
    },
    {
      title: currentLang === 'mr' ? 'राष्ट्रीय आपत्कालीन रुग्णवाहिका' : currentLang === 'hi' ? 'आपातकालीन एम्बुलेंस सेवा' : 'Emergency Medical Ambulance',
      number: '108',
      desc: currentLang === 'mr' ? 'तातडीच्या वैद्यकीय उपचारांसाठी मोफत रुग्णवाहिका सेवा.' : currentLang === 'hi' ? 'आपातकालीन चिकित्सकीय सहायता हेतु निशुल्क एंबुलेंस।' : '24x7 emergency medical transport to the nearest PHC or Civil Hospital.',
      icon: ShieldAlert,
      color: 'text-red-700 bg-red-50 border-red-200'
    },
    {
      title: currentLang === 'mr' ? 'सायबर व बँक फसवणूक हेल्पलाईन' : currentLang === 'hi' ? 'वित्तीय व साइबर धोखाधड़ी हेल्पलाइन' : 'National Cyber Financial Fraud Helpline',
      number: '1930',
      desc: currentLang === 'mr' ? 'बँक खात्यातून बेकायदेशीर पैसे कटणे, ओटीपी फसवणूक तातडीने रोखणे.' : currentLang === 'hi' ? 'बैंक खाते से अनधिकृत कटौती, ओटीपी फ्रॉड रोकने हेतु।' : 'Immediate freeze of fraudulent digital and bank DBT transactions.',
      icon: AlertCircle,
      color: 'text-slate-800 bg-slate-100 border-slate-300'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
          Verified Government Hotlines
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {currentLang === 'mr' ? 'ग्रामीण तातडीचे व नागरी हेल्पलाईन क्रमांक' : currentLang === 'hi' ? 'ग्रामीण आपातकालीन एवं नागरिक हेल्पलाइन' : 'Rural Civic & Emergency Helplines'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          Toll-free numbers for drinking water, agricultural power, farming advice, healthcare, and citizen grievance escalation.
        </p>
      </div>

      {/* Grid of Helplines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {helplines.map((hl, idx) => {
          const IconComp = hl.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-emerald-300 transition-colors"
            >
              <div className="space-y-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${hl.color}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 leading-snug">
                    {hl.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {hl.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-base font-extrabold text-slate-900">
                  {hl.number}
                </span>
                <a
                  href={`tel:${hl.number.split(' ')[0].replace(/[^0-9]/g, '')}`}
                  className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
