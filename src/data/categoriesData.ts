import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'water',
    name: {
      en: 'Water Supply',
      mr: 'पाणी पुरवठा',
      hi: 'जल आपूर्ति'
    },
    description: {
      en: 'Drinking water, pipeline leakages, borewells, tanker requests, and village water quality.',
      mr: 'पिण्याचे पाणी, पाईपलाईन गळती, बोअरवेल, टँकर मागणी आणि पाण्याची गुणवत्ता.',
      hi: 'पीने का पानी, पाइपलाइन लीकेज, हैंडपंप, टैंकर मांग और पानी की गुणवत्ता।'
    },
    iconName: 'Droplets',
    department: {
      en: 'Rural Water Supply & Sanitation Department / Jal Jeevan Mission',
      mr: 'ग्रामीण पाणी पुरवठा व स्वच्छता विभाग / जल जीवन मिशन',
      hi: 'ग्रामीण जल आपूर्ति एवं स्वच्छता विभाग / जल जीवन मिशन'
    }
  },
  {
    id: 'electricity',
    name: {
      en: 'Electricity & Power',
      mr: 'वीज पुरवठा व ऊर्जा',
      hi: 'बिजली एवं ऊर्जा'
    },
    description: {
      en: 'Farm agricultural feeder power, transformer burning, frequent power cuts, and streetlights.',
      mr: 'शेतातील कृषी फिडर वीज, ट्रान्सफॉर्मर जळणे, वारंवार वीज खंडित होणे आणि पथदिवे.',
      hi: 'कृषि फीडर बिजली, ट्रांसफार्मर जलना, बार-बार बिजली गुल होना और स्ट्रीट लाइट।'
    },
    iconName: 'Zap',
    department: {
      en: 'State Electricity Distribution Co. (MSEDCL/DISCOM)',
      mr: 'महाराष्ट्र राज्य विद्युत वितरण कंपनी (महावितरण)',
      hi: 'राज्य विद्युत वितरण कंपनी (डिस्कॉम)'
    }
  },
  {
    id: 'roads',
    name: {
      en: 'Village Roads & Connectivity',
      mr: 'ग्रामीण रस्ते व दळणवळण',
      hi: 'ग्रामीण सड़कें एवं संपर्क'
    },
    description: {
      en: 'Potholes, broken village approach roads, PMGSY road repairs, and culvert damage.',
      mr: 'खड्डे, गावातील रस्ता दुरुस्ती, पंतप्रधान ग्राम सडक योजना आणि पूल बांधणी.',
      hi: 'गड्ढे, ग्रामीण संपर्क सड़क की मरम्मत, पीएमजीएसवाई और पुलिया निर्माण।'
    },
    iconName: 'Route',
    department: {
      en: 'Public Works Department (PWD) / Zilla Parishad Works Dept',
      mr: 'सार्वजनिक बांधकाम विभाग (PWD) / जिल्हा परिषद बांधकाम विभाग',
      hi: 'लोक निर्माण विभाग (पीडब्ल्यूडी) / जिला परिषद'
    }
  },
  {
    id: 'education',
    name: {
      en: 'Education & Scholarships',
      mr: 'शिक्षण व शिष्यवृत्ती',
      hi: 'शिक्षा एवं छात्रवृत्ति'
    },
    description: {
      en: 'Pending scholarships, school mid-day meals, teacher vacancies, and college fee support.',
      mr: 'प्रलंबित शिष्यवृत्ती, शालेय पोषण आहार, शिक्षक रिक्त पदे आणि महाविद्यालयीन शुल्क सहाय्य.',
      hi: 'रुकी हुई छात्रवृत्ति, स्कूली मध्याह्न भोजन, शिक्षक पद और शिक्षण सहायता।'
    },
    iconName: 'GraduationCap',
    department: {
      en: 'Department of School Education & Sports / Social Welfare Dept',
      mr: 'शालेय शिक्षण विभाग / समाज कल्याण विभाग (महाडीबीटी)',
      hi: 'शिक्षा विभाग / समाज कल्याण विभाग (नेशनल स्कॉलरशिप पोर्टल)'
    }
  },
  {
    id: 'agriculture',
    name: {
      en: 'Agriculture & Farming',
      mr: 'शेती व शेतकरी योजना',
      hi: 'कृषि एवं किसान कल्याण'
    },
    description: {
      en: 'PM-KISAN installments, crop insurance (PMFBY), seeds subsidy, Krishi Sahayak advice.',
      mr: 'पीएम-किसान हप्ता, पीक विमा (PMFBY), खत-बियाणे अनुदान आणि कृषी सहाय्यक सल्ला.',
      hi: 'पीएम-किसान किस्त, फसल बीमा (पीएमएफबीवाई), बीज सब्सिडी और कृषि परामर्श।'
    },
    iconName: 'Sprout',
    department: {
      en: 'Department of Agriculture & Farmers Welfare',
      mr: 'कृषी विभाग व शेतकरी कल्याण मंत्रालय',
      hi: 'कृषि एवं किसान कल्याण विभाग'
    }
  },
  {
    id: 'housing',
    name: {
      en: 'Housing & Shelter',
      mr: 'घरकुल व निवारा',
      hi: 'आवास एवं मकान'
    },
    description: {
      en: 'Pradhan Mantri Awaas Yojana (PMAY-G), Ramai Gharkul, pending subsidy installments.',
      mr: 'पंतप्रधान आवास योजना (PMAY-G), रमाई घरकुल आणि अनुदानाचे प्रलंबित हप्ते.',
      hi: 'प्रधानमंत्री आवास योजना ग्रामीण (पीएमएवाई-जी) और आवास किस्त।'
    },
    iconName: 'Home',
    department: {
      en: 'Rural Development Department / Gram Panchayat',
      mr: 'ग्रामविकास विभाग / ग्रामपंचायत आवास कक्ष',
      hi: 'ग्रामीण विकास विभाग / ग्राम पंचायत'
    }
  },
  {
    id: 'healthcare',
    name: {
      en: 'Healthcare & Medicine',
      mr: 'आरोग्य सेवा व औषधे',
      hi: 'स्वास्थ्य एवं चिकित्सा'
    },
    description: {
      en: 'Primary Health Center (PHC), Ayushman Bharat card, ambulance availability, free medicines.',
      mr: 'प्राथमिक आरोग्य केंद्र (PHC), आयुष्मान भारत कार्ड, ॲम्ब्युलन्स सुविधा आणि औषधे.',
      hi: 'प्राथमिक स्वास्थ्य केंद्र (पीएचसी), आयुष्मान भारत कार्ड, एंबुलेंस व दवाएं।'
    },
    iconName: 'HeartPulse',
    department: {
      en: 'Public Health Department / National Health Mission',
      mr: 'सार्वजनिक आरोग्य विभाग / राष्ट्रीय आरोग्य अभियान (NHM)',
      hi: 'सार्वजनिक स्वास्थ्य विभाग / राष्ट्रीय स्वास्थ्य मिशन'
    }
  },
  {
    id: 'pension',
    name: {
      en: 'Social Security Pension',
      mr: 'पेन्शन व सामाजिक सुरक्षा',
      hi: 'पेंशन एवं सामाजिक सुरक्षा'
    },
    description: {
      en: 'Old age pension (Indira Gandhi / Sanjay Gandhi), widow pension, disability pension.',
      mr: 'वृद्धापकाळ पेन्शन (संजय गांधी निराधार योजना / IGNOAPS), विधवा व दिव्यांग पेन्शन.',
      hi: 'वृद्धावस्था पेंशन (इंदिरा गांधी / राज्य पेंशन), विधवा एवं दिव्यांग पेंशन।'
    },
    iconName: 'Users',
    department: {
      en: 'Social Justice & Special Assistance Department / Tahsildar Office',
      mr: 'सामाजिक न्याय व विशेष सहाय्य विभाग / तहसीलदार कार्यालय',
      hi: 'सामाजिक न्याय विभाग / तहसील कार्यालय'
    }
  },
  {
    id: 'schemes',
    name: {
      en: 'Government Schemes & Subsidies',
      mr: 'शासकीय योजना व अनुदान',
      hi: 'सरकारी योजनाएं व सब्सिडी'
    },
    description: {
      en: 'General welfare schemes, women self-help group loans, solar pump subsidies.',
      mr: 'महिला बचत गट कर्ज, सौर कृषी पंप योजना (कुसुम) आणि विविध कल्याणकारी योजना.',
      hi: 'महिला स्वयं सहायता समूह ऋण, सोलर पंप सब्सिडी (कुसुम) व कल्याणकारी योजनाएं।'
    },
    iconName: 'ShieldCheck',
    department: {
      en: 'Planning Department / District Collectorate',
      mr: 'नियोजन विभाग / जिल्हाधिकारी कार्यालय',
      hi: 'योजना विभाग / कलेक्ट्रेट'
    }
  },
  {
    id: 'employment',
    name: {
      en: 'Rural Employment & Livelihood',
      mr: 'रोजगार व उपजीविका',
      hi: 'ग्रामीण रोजगार एवं आजीविका'
    },
    description: {
      en: 'MGNREGA 100 days job guarantee, job card application, delayed wage payments.',
      mr: 'मनरेगा (MGNREGA) रोजगार हमी, जॉब कार्ड वाटप आणि मजुरीचे प्रलंबित पैसे.',
      hi: 'मनरेगा रोजगार गारंटी, जॉब कार्ड आवेदन और मजदूरी भुगतान में देरी।'
    },
    iconName: 'Briefcase',
    department: {
      en: 'MGNREGA Cell / Panchayat Samiti Block Development Officer',
      mr: 'रोजगार हमी योजना कक्ष / पंचायत समिती गट विकास अधिकारी (BDO)',
      hi: 'मनरेगा प्रकोष्ठ / खंड विकास अधिकारी (बीडीओ)'
    }
  },
  {
    id: 'documents',
    name: {
      en: 'Documents & Certificates',
      mr: 'दाखले व कागदपत्रे',
      hi: 'दस्तावेज एवं प्रमाण पत्र'
    },
    description: {
      en: 'Income certificate, caste certificate, 7/12 land extract, domicile, ration card.',
      mr: 'उत्पन्नाचा दाखला, जात प्रमाणपत्र, ७/१२ उतारा, रहिवासी दाखला, रेशन कार्ड दुरुस्ती.',
      hi: 'आय प्रमाण पत्र, जाति प्रमाण पत्र, खतौनी / 7/12, निवास प्रमाण पत्र, राशन कार्ड।'
    },
    iconName: 'FileText',
    department: {
      en: 'Revenue Department / Aaple Sarkar / Common Service Center (CSC)',
      mr: 'महसूल विभाग / आपले सरकार सेवा केंद्र / सेतू केंद्र',
      hi: 'राजस्व विभाग / जन सेवा केंद्र (सीएससी)'
    }
  },
  {
    id: 'sanitation',
    name: {
      en: 'Sanitation & Cleanliness',
      mr: 'स्वच्छता व कचरा व्यवस्थापन',
      hi: 'स्वच्छता एवं कचरा प्रबंधन'
    },
    description: {
      en: 'Individual household latrines (IHHL), drainage blockages, solid waste collection.',
      mr: 'शौचालय अनुदान (स्वच्छ भारत मिशन), सांडपाणी नाला अडथळा, कचरा व्यवस्थापन.',
      hi: 'शौचालय प्रोत्साहन राशि (एसबीएम), नाली की सफाई, ठोस कचरा निस्तारण।'
    },
    iconName: 'Sparkles',
    department: {
      en: 'Swachh Bharat Mission (Grameen) / Gram Panchayat',
      mr: 'स्वच्छ भारत अभियान (ग्रामीण) / ग्रामपंचायत स्वच्छता समिती',
      hi: 'स्वच्छ भारत मिशन (ग्रामीण) / ग्राम पंचायत'
    }
  },
  {
    id: 'digital_services',
    name: {
      en: 'Digital Services & CSC',
      mr: 'डिजिटल सेवा व ई-सेवा',
      hi: 'डिजिटल सेवाएं व ई-गवर्नेंस'
    },
    description: {
      en: 'Gram Panchayat internet kiosk, DigiLocker, online form submission, DBT bank linking.',
      mr: 'ग्रामपंचायत इंटरनेट सुविधा, डिजीलॉकर, ऑनलाईन अर्ज भरणी, बँक आधार लिंकिंग.',
      hi: 'ग्राम पंचायत इंटरनेट, डिजिलॉकर, ऑनलाइन आवेदन, बैंक आधार सीडिंग।'
    },
    iconName: 'Globe',
    department: {
      en: 'Directorate of Information Technology / CSC e-Governance',
      mr: 'माहिती तंत्रज्ञान संचालनालय / सीएससी ई-गव्हर्नन्स',
      hi: 'सूचना प्रौद्योगिकी विभाग / सीएससी ई-गवर्नेंस'
    }
  },
  {
    id: 'civic_issues',
    name: {
      en: 'Other Civic & Village Issues',
      mr: 'इतर नागरी व ग्राम समस्या',
      hi: 'अन्य नागरिक व ग्राम समस्याएं'
    },
    description: {
      en: 'Gram Sabha notice, village playground encroachment, stray cattle, local disputes.',
      mr: 'ग्रामसभा नोटीस, गायरान अतिक्रमण, मोकाट जनावरे आणि स्थानिक तक्रारी.',
      hi: 'ग्राम सभा सूचना, चरागाह अतिक्रमण, आवारा पशु और स्थानीय नागरिक मामले।'
    },
    iconName: 'Landmark',
    department: {
      en: 'Gram Panchayat / Block Development Office (BDO)',
      mr: 'ग्रामपंचायत / पंचायत समिती गट विकास अधिकारी',
      hi: 'ग्राम पंचायत / खंड विकास कार्यालय'
    }
  }
];
