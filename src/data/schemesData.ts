import { Scheme } from '../types';

export const schemes: Scheme[] = [
  {
    id: 'jal-jeevan-mission',
    name: {
      en: 'Jal Jeevan Mission (Har Ghar Jal) & Village Water Supply',
      mr: 'जल जीवन मिशन (हर घर जल) व ग्रामीण पाणी पुरवठा योजना',
      hi: 'जल जीवन मिशन (हर घर जल) एवं ग्रामीण जल आपूर्ति योजना'
    },
    shortCode: 'JJM-WATER',
    category: 'water',
    level: 'Central',
    description: {
      en: 'Provides functional household tap connection (FHTC) delivering 55 litres per capita per day of prescribed potable quality water.',
      mr: 'प्रत्येक ग्रामीण कुटुंबाला दरडोई दररोज ५५ लिटर शुद्ध व पुरेसे पिण्याचे पाणी नळाद्वारे पुरवणे.',
      hi: 'प्रत्येक ग्रामीण परिवार को प्रति व्यक्ति प्रतिदिन 55 लीटर निर्धारित गुणवत्ता का नल से जल उपलब्ध कराना।'
    },
    eligibility: {
      en: [
        'Rural household residing in registered village/Gram Panchayat',
        'Lack of functional drinking water tap connection or damaged public standpost',
        'Gram Sabha water committee registration'
      ],
      mr: [
        'ग्रामपंचायतीमध्ये वास्तव्यास असलेले ग्रामीण कुटुंब',
        'घरात पिण्याच्या पाण्याचा कार्यान्वित नळ नसणे किंवा सामाईक नळ नादुरुस्त असणे',
        'ग्रामपंचायत पाणी पुरवठा समितीमध्ये नाव असणे'
      ],
      hi: [
        'ग्राम पंचायत में निवास करने वाला ग्रामीण परिवार',
        'घर में चालू पेयजल नल कनेक्शन न होना या पाइपलाइन खराब होना',
        'ग्राम सभा जल समिति में दर्ज'
      ]
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card of household head',
        'Gram Panchayat Village Residence Proof (Namuna 8 / Tax Receipt)',
        'Electricity or Ration Card for address verification',
        'Bank passbook for tap connection fee subsidy if applicable'
      ],
      mr: [
        'कुटुंब प्रमुखाचे आधार कार्ड',
        'ग्रामपंचायत नमुना ८ उतारा किंवा घरपट्टी पावती',
        'पत्ता पडताळणीसाठी रेशन कार्ड / वीज बिल',
        'बँक पासबुक प्रत'
      ],
      hi: [
        'परिवार के मुखिया का आधार कार्ड',
        'ग्राम पंचायत निवास प्रमाण / हाउस टैक्स रसीद',
        'राशन कार्ड या बिजली बिल',
        'बैंक पासबुक की प्रति'
      ]
    },
    steps: {
      en: [
        'Step 1: Submit written water grievance or application to Gram Sevak / Village Water & Sanitation Committee (VWSC).',
        'Step 2: Gram Panchayat passes resolution and inspects pipeline pressure and reservoir status.',
        'Step 3: Forwarded to Block ZP Junior Engineer (Rural Water Supply) for pipeline repair or tender sanction.',
        'Step 4: Real-time tracking via GAONSATHI complaint tracking portal.'
      ],
      mr: [
        'टप्पा १: ग्रामसेवक किंवा ग्राम पाणी पुरवठा व स्वच्छता समितीकडे (VWSC) अर्ज किंवा तक्रार नोंदवा.',
        'टप्पा २: ग्रामपंचायतीत ठराव मंजूर करून पाणी पुरवठा लाईन व टाकीची पाहणी केली जाते.',
        'टप्पा ३: मोठी दुरुस्ती असल्यास पंचायत समिती कनिष्ठ अभियंता (पाणी पुरवठा) यांच्याकडे प्रस्ताव पाठवला जातो.',
        'टप्पा ४: गावसाथी पोर्टलवर तक्रार क्रमांकाद्वारे प्रगती तपासा.'
      ],
      hi: [
        'चरण 1: ग्राम सेवक या ग्राम जल एवं स्वच्छता समिति (VWSC) को लिखित शिकायत या आवेदन दें।',
        'चरण 2: ग्राम पंचायत स्तर पर पाइपलाइन व जलाशय की जांच कर प्रस्ताव पास किया जाता है।',
        'चरण 3: मरम्मत या नई लाइन के लिए ब्लॉक जल आपूर्ति अभियंता को फाइल भेजी जाती है।',
        'चरण 4: गांवसाथी ट्रैकर में शिकायत संख्या से प्रगति देखें।'
      ]
    },
    department: {
      en: 'Department of Drinking Water & Sanitation, Ministry of Jal Shakti',
      mr: 'पाणी पुरवठा व स्वच्छता विभाग / जिल्हा परिषद ग्रामीण पाणी पुरवठा',
      hi: 'पेयजल एवं स्वच्छता विभाग / जिला परिषद ग्रामीण जल आपूर्ति'
    },
    officerRole: {
      en: 'Gram Sevak (Village Secretary) & Junior Engineer (RWS)',
      mr: 'ग्रामसेवक / पाणी पुरवठा कनिष्ठ अभियंता',
      hi: 'ग्राम सेवक एवं कनिष्ठ अभियंता (पेयजल)'
    },
    officialPortal: 'https://jaljeevanmission.gov.in (Official Portal / Sample Demo Data)',
    isDemoData: true
  },
  {
    id: 'mahadbt-post-matric-scholarship',
    name: {
      en: 'National Scholarship Portal (NSP) & State Post-Matric Scholarship',
      mr: 'महाडीबीटी शिष्यवृत्ती व राष्ट्रीय शिष्यवृत्ती पोर्टल (NSP)',
      hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) एवं पोस्ट-मैट्रिक छात्रवृत्ति'
    },
    shortCode: 'SCHOLARSHIP-ED',
    category: 'education',
    level: 'State',
    description: {
      en: 'Financial scholarship support for rural and underprivileged students pursuing 11th, 12th, diploma, and degree courses.',
      mr: 'ग्रामीण भागातील आर्थिकदृष्ट्या दुर्बल व मागासवर्गीय विद्यार्थ्यांना ११वी, १२वी, पदविका आणि पदवी शिक्षणासाठी शिष्यवृत्ती सहाय्य.',
      hi: 'ग्रामीण व पिछड़े वर्ग के विद्यार्थियों के लिए 11वीं, 12वीं, डिप्लोमा और स्नातक की पढ़ाई हेतु वित्तीय सहायता।'
    },
    eligibility: {
      en: [
        'Enrolled in recognized government or affiliated college/institute',
        'Annual family income within prescribed limit (typically <= ₹2.5 Lakhs or as per category)',
        'Domicile of state and valid category certificate where applicable'
      ],
      mr: [
        'मान्यताप्राप्त महाविद्यालय किंवा तांत्रिक संस्थेत नियमित प्रवेश',
        'वार्षिक कौटुंबिक उत्पन्न विहित मर्यादेत (सामान्यतः २.५ लाख रुपयांपर्यंत)',
        'महाराष्ट्र अधिवास (Domicile) व संबंधित प्रवर्गाचे प्रमाणपत्र'
      ],
      hi: [
        'मान्यता प्राप्त कॉलेज या संस्थान में नियमित विद्यार्थी',
        'पारिवारिक वार्षिक आय सीमा के भीतर (सामान्यतः 2.5 लाख तक)',
        'मूल निवास प्रमाण पत्र एवं आवश्यक जाति/आय प्रमाण पत्र'
      ]
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card linked with active bank account (NPCI DBT active)',
        'Income Certificate issued by competent Tehsildar (Current financial year)',
        'Caste Certificate & Caste Validity (for reserved categories)',
        'Previous year marksheets & Current Year College Fee Receipt',
        'Domicile / Residence Certificate'
      ],
      mr: [
        'बँकेशी आधार सीडिंग (NPCI DBT सक्रिय) असलेले आधार कार्ड',
        'सक्षम तहसीलदारांचा चालू आर्थिक वर्षाचा उत्पन्नाचा दाखला',
        'जात प्रमाणपत्र व जात वैधता प्रमाणपत्र (लागू असल्यास)',
        'मागील वर्षांचे गुणपत्रक व चालू वर्षाची कॉलेज फी पावती',
        'अधिवास (Domicile) प्रमाणपत्र'
      ],
      hi: [
        'बैंक से आधार लिंक (डीबीटी सक्रिय) आधार कार्ड',
        'तहसीलदार द्वारा जारी चालू वित्तीय वर्ष का आय प्रमाण पत्र',
        'जाति प्रमाण पत्र (यदि लागू हो)',
        'पिछली कक्षा की मार्कशीट व कॉलेज फीस रसीद',
        'निवास प्रमाण पत्र'
      ]
    },
    steps: {
      en: [
        'Step 1: Check application status on portal using Application ID / Aadhaar.',
        'Step 2: If rejected due to "Bank NPCI Mapper", visit bank branch to link Aadhaar with DBT.',
        'Step 3: If pending at College Principal level, request college clerk to verify scrutiny inbox.',
        'Step 4: If grievance persists, raise an official grievance ticket on MahaDBT / NSP grievance portal.'
      ],
      mr: [
        'टप्पा १: महाडीबीटी किंवा एनएसपी पोर्टलवर लॉगिन करून अर्जाची सध्याची स्थिती तपासा.',
        'टप्पा २: "Bank DBT Mapping" त्रुटी असल्यास बँक शाखेत जाऊन आधार-एनपीसीआय मॅपिंग फॉर्म भरा.',
        'टप्पा ३: जर अर्ज महाविद्यालय स्तरावर अडकला असेल तर कॉलेजच्या शिष्यवृत्ती विभागाशी संपर्क साधा.',
        'टप्पा ४: तरीही अडचण न सुटल्यास समाज कल्याण किंवा शिक्षण विभागाकडे तक्रार दाखल करा.'
      ],
      hi: [
        'चरण 1: स्कॉलरशिप पोर्टल पर आवेदन संख्या दर्ज कर वर्तमान स्थिति चेक करें।',
        'चरण 2: यदि बैंक आधार डीबीटी मैपिंग की समस्या है, तो तुरंत बैंक में जाकर आधार सीडिंग कराएं।',
        'चरण 3: यदि कॉलेज स्तर पर लंबित है तो संस्थान के छात्रवृत्ति नोडल अधिकारी से संपर्क करें।',
        'चरण 4: समाधान न होने पर जिला समाज कल्याण अधिकारी के पास शिकायत दर्ज कराएं।'
      ]
    },
    department: {
      en: 'Social Justice & Special Assistance / Higher Education Directorate',
      mr: 'सामाजिक न्याय व विशेष सहाय्य विभाग / उच्च शिक्षण संचालनालय',
      hi: 'समाज कल्याण विभाग / उच्च शिक्षा निदेशालय'
    },
    officerRole: {
      en: 'District Social Welfare Officer & College Scholarship Nodal Officer',
      mr: 'जिल्हा समाज कल्याण अधिकारी / महाविद्यालय शिष्यवृत्ती समन्वयक',
      hi: 'जिला समाज कल्याण अधिकारी'
    },
    officialPortal: 'https://scholarships.gov.in (Official Portal / Sample Demo Data)',
    isDemoData: true
  },
  {
    id: 'pm-gram-sadak-yojana',
    name: {
      en: 'Pradhan Mantri Gram Sadak Yojana (PMGSY) & ZP Rural Roads',
      mr: 'प्रधानमंत्री ग्राम सडक योजना (PMGSY) व ग्रामीण रस्ता सुधारणा',
      hi: 'प्रधानमंत्री ग्राम सड़क योजना (PMGSY) एवं ग्रामीण सड़क सुधार'
    },
    shortCode: 'PMGSY-ROAD',
    category: 'roads',
    level: 'Central',
    description: {
      en: 'Provides all-weather road connectivity to unconnected rural habitations and funds major rural road overhauls.',
      mr: 'गावांना मुख्य महामार्ग व बाजारपेठेशी जोडणारे बारमाही डांबरी रस्ते व खड्डेमुक्ती योजना.',
      hi: 'गांवों को मुख्य मार्गों और मंडियों से जोड़ने वाली बारहमासी पक्की सड़क निर्माण एवं मरम्मत योजना।'
    },
    eligibility: {
      en: [
        'Habitation population above 500 (plains) or 250 (hilly/tribal areas)',
        'Report of road surface distress, broken culvert, or unpaved muddy road affecting ambulance/school commute'
      ],
      mr: [
        'ग्रामीण वस्तीला जोडणारा मुख्य रस्ता नादुरुस्त असणे',
        'शाळा, रुग्णवाहिका किंवा बाजारपेठेकडे जाणारा रस्ता पावसात बंद होणे'
      ],
      hi: [
        'ग्रामीण बस्ती का मुख्य संपर्क मार्ग टूटा हुआ होना या कीचड़ग्रस्त होना',
        'एम्बुलेंस व स्कूली बच्चों के आवागमन में बाधा'
      ]
    },
    requiredDocuments: {
      en: [
        'Photographs of the damaged road with geo-tag or landmark reference',
        'Gram Panchayat resolution or signed application by village Sarpanch/citizens',
        'Road stretch name and estimated length in kilometers'
      ],
      mr: [
        'खराब रस्त्याचे फोटो (स्थानिक लँडमार्कसह)',
        'ग्रामपंचायत ठराव किंवा ग्रामस्थांची स्वाक्षरी असलेले निवेदन',
        'रस्त्याचे नाव आणि अंदाजे लांबी'
      ],
      hi: [
        'क्षतिग्रस्त सड़क की फोटो (लैंडमार्क सहित)',
        'ग्राम पंचायत का प्रस्ताव या ग्रामीणों का हस्ताक्षरित प्रार्थना पत्र',
        'सड़क का नाम व अनुमानित लंबाई'
      ]
    },
    steps: {
      en: [
        'Step 1: Take clear photos of road damages and submit a complaint via GAONSATHI or Meri Sadak App.',
        'Step 2: Submit a formal petition to Gram Panchayat Sarpanch & Gram Sevak for inclusion in 15th Finance Commission plan.',
        'Step 3: Escalate to Executive Engineer, Rural Road Development Agency / Zilla Parishad Works Division.',
        'Step 4: Receive work sanction timeline and maintenance inspection report.'
      ],
      mr: [
        'टप्पा १: रस्त्याच्या खड्ड्यांचे फोटो काढून गावसाथी किंवा "मेरी सडक" ॲपवर तक्रार नोंदवा.',
        'टप्पा २: ग्रामसभेत १५ व्या वित्त आयोग किंवा जिल्हा नियोजन निधीतून दुरुस्तीसाठी ठराव मांडा.',
        'टप्पा ३: जिल्हा परिषद बांधकाम विभाग किंवा कार्यकारी अभियंता यांच्याकडे निवेदन पाठवा.',
        'टप्पा ४: काम मंजूर झाल्यास मक्तेदार व कामाचा तपशील फलक तपासा.'
      ],
      hi: [
        'चरण 1: सड़क के गड्ढों की फोटो लेकर गांवसाथी या "मेरी सड़क" पोर्टल पर शिकायत दर्ज करें।',
        'चरण 2: ग्राम सभा में सड़क मरम्मत हेतु प्रस्ताव पारित करवाएं।',
        'चरण 3: जिला परिषद लोक निर्माण विभाग / अधिशासी अभियंता को मांग पत्र सौंपें।',
        'चरण 4: कार्य स्वीकृति और मरम्मत कार्य की स्थिति ट्रैक करें।'
      ]
    },
    department: {
      en: 'National Rural Infrastructure Development Agency / Public Works Department',
      mr: 'महाराष्ट्र ग्रामीण रस्ते विकास संस्था / जिल्हा परिषद बांधकाम विभाग',
      hi: 'ग्रामीण सड़क विकास प्राधिकरण / लोक निर्माण विभाग'
    },
    officerRole: {
      en: 'Executive Engineer (PWD / ZP Works) & Gram Sevak',
      mr: 'कार्यकारी अभियंता (बांधकाम) / ग्रामसेवक',
      hi: 'अधिशासी अभियंता (पीडब्ल्यूडी) / ग्राम सेवक'
    },
    officialPortal: 'https://omms.nic.in (Official Portal / Sample Demo Data)',
    isDemoData: true
  },
  {
    id: 'pm-awaas-yojana-gramin',
    name: {
      en: 'Pradhan Mantri Awaas Yojana - Gramin (PMAY-G)',
      mr: 'प्रधानमंत्री आवास योजना - ग्रामीण (PMAY-G) व घरकुल योजना',
      hi: 'प्रधानमंत्री आवास योजना - ग्रामीण (पीएमएवाई-जी)'
    },
    shortCode: 'PMAY-G-HOUSING',
    category: 'housing',
    level: 'Central',
    description: {
      en: 'Provides financial assistance of ₹1.20 Lakhs (plain areas) to ₹1.30 Lakhs (hilly areas) for construction of pucca house to rural houseless or kutcha house dwellers.',
      mr: 'बेघर किंवा कच्च्या घरात राहणाऱ्या ग्रामीण कुटुंबांना पक्के घर बांधण्यासाठी ₹१,२०,००० ते ₹१,३०,००० थेट बँक खात्यात अनुदान.',
      hi: 'बेघर अथवा कच्चे मकानों में रहने वाले ग्रामीण परिवारों को पक्का मकान बनाने के लिए ₹1.20 लाख से ₹1.30 लाख की सीधी सहायता।'
    },
    eligibility: {
      en: [
        'Houseless or living in zero/one/two room kutcha houses with kutcha roof',
        'Listed in SECC-2011 Deprivation List or Awaas+ survey list',
        'Does not own a motorized 4-wheeler, mechanized fishing boat, or 3+ pucca rooms'
      ],
      mr: [
        'स्वतःचे पक्के घर नसलेले किंवा कच्चे घर असणारे कुटुंब',
        'आवास प्लस (Awaas+) किंवा SECC यादीमध्ये नाव असणे',
        'चारचाकी वाहन किंवा सरकारी नोकरी नसलेले कुटुंब'
      ],
      hi: [
        'कच्चे मकान में रहने वाला अथवा बेघर ग्रामीण परिवार',
        'आवास प्लस या एसईसीसी सूची में नाम दर्ज',
        'परिवार में कोई चार पहिया वाहन या सरकारी कर्मचारी न हो'
      ]
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card of all adult family members',
        'Bank Account Passbook (DBT activated)',
        'Land Ownership document or Gram Panchayat Gramthane certificate (Namuna 8)',
        'MGNREGA Job Card (for mandatory 90-95 days unskilled labor wages)',
        'Swachh Bharat toilet construction incentive certificate'
      ],
      mr: [
        'कुटुंबातील सर्व प्रौढ सदस्यांचे आधार कार्ड',
        'बँक पासबुक प्रत (आधार संलग्न)',
        'जागेचा उतारा किंवा ग्रामपंचायत नमुना ८ (ग्रामठाण दाखला)',
        'मनरेगा जॉब कार्ड (९० दिवसांच्या मजुरीसाठी)',
        'शौचालय प्रोत्साहन प्रमाणपत्र'
      ],
      hi: [
        'परिवार के सदस्यों के आधार कार्ड',
        'बैंक खाता पासबुक (डीबीटी सक्रिय)',
        'भूमि का पट्टा या ग्राम पंचायत आवास प्रमाण पत्र',
        'मनरेगा जॉब कार्ड (मजदूरी भुगतान हेतु)',
        'शौचालय निर्माण प्रमाण'
      ]
    },
    steps: {
      en: [
        'Step 1: Check your name in the Village Awaas+ Priority List with Gram Sevak.',
        'Step 2: Geo-tagging of current kutcha house by Gram Rozgar Sahayak using AwaasApp.',
        'Step 3: Administrative sanction and generation of First Installment (₹30,000 - ₹40,000) directly to bank account.',
        'Step 4: Subsequent installments released after plinth and lintel level geo-tag verification.'
      ],
      mr: [
        'टप्पा १: ग्रामसेवकाकडे जाऊन आवास प्लस (Awaas+) प्रतीक्षा यादीतील आपला अनुक्रमांक तपासा.',
        'टप्पा २: ग्राम रोजगार सेवकामार्फत सध्याच्या कच्च्या जागेचे मोबाईल ॲपद्वारे जिओ-टॅगिंग पूर्ण करा.',
        'टप्पा ३: मंजुरी मिळताच पहिला हप्ता थेट बँक खात्यात जमा होतो.',
        'टप्पा ४: जोता (Plinth) व छत (Lintel) पातळीवर काम पूर्ण करून जिओ-टॅग झाल्यावर पुढील हप्ते मिळतात.'
      ],
      hi: [
        'चरण 1: ग्राम सेवक से मिलकर आवास प्लस प्रतीक्षा सूची में अपना नाम और प्राथमिकता क्रम जांचें।',
        'चरण 2: ग्राम रोजगार सहायक द्वारा मोबाइल ऐप (आवाससॉफ्ट) से कच्ची जगह की जियो-टैगिंग कराएं।',
        'चरण 3: स्वीकृति मिलने पर पहली किस्त सीधे बैंक खाते में प्राप्त करें।',
        'चरण 4: कुर्सी (Plinth) और छत स्तर के निर्माण का सत्यापन कराकर अगली किस्तें प्राप्त करें।'
      ]
    },
    department: {
      en: 'Ministry of Rural Development / Zilla Parishad Rural Housing Cell',
      mr: 'ग्रामविकास विभाग / जिल्हा परिषद घरकुल कक्ष',
      hi: 'ग्रामीण विकास मंत्रालय / जिला परिषद ग्रामीण आवास प्रकोष्ठ'
    },
    officerRole: {
      en: 'Block Development Officer (BDO) & Gram Sevak',
      mr: 'गट विकास अधिकारी (BDO) / ग्रामसेवक',
      hi: 'खंड विकास अधिकारी (बीडीओ) / ग्राम सेवक'
    },
    officialPortal: 'https://pmayg.nic.in (Official Portal / Sample Demo Data)',
    isDemoData: true
  },
  {
    id: 'pm-kusum-solar-pump-electricity',
    name: {
      en: 'PM-KUSUM Scheme & Agricultural Feeder Solarization',
      mr: 'पीएम-कुसुम सौर कृषी पंप योजना व शेती वीज पुरवठा',
      hi: 'पीएम-कुसुम सोलर कृषि पंप योजना एवं खेत बिजली आपूर्ति'
    },
    shortCode: 'PM-KUSUM-ELEC',
    category: 'electricity',
    level: 'Central',
    description: {
      en: 'Provides up to 90% subsidy for installation of off-grid/grid-connected solar agriculture pumps to eliminate dependence on irregular power feeders.',
      mr: 'शेतकऱ्यांना शेतातील सिंचनासाठी ९०% अनुदानावर सौर कृषी पंप देणे, ज्यामुळे रात्रीच्या विजेच्या त्रासातून मुक्ती मिळते.',
      hi: 'किसानों को 90% तक सब्सिडी पर सौर ऊर्जा संचालित कृषि पंप उपलब्ध कराना ताकि सिंचाई के लिए निर्बाध दिन में बिजली मिल सके।'
    },
    eligibility: {
      en: [
        'Individual farmers, Water User Associations, or Farmer Producer Organizations (FPOs)',
        'Ownership of agricultural land with an assured water source (borewell/well)',
        'Traditional electricity pump connection absent or facing chronic low-voltage grid outages'
      ],
      mr: [
        'शेतजमीन मालक शेतकरी (७/१२ व ८-अ उतारा धारक)',
        'शेतात पाण्याची खात्रीशीर सुविधा (विहीर किंवा बोअरवेल)',
        'वीज जोडणी नसलेले किंवा वारंवार वीज खंडित होणारे क्षेत्र'
      ],
      hi: [
        'कृषि भूमि के मालिक किसान (खतौनी धारक)',
        'खेत में सिंचाई के लिए कुआं या बोरवेल उपलब्ध',
        'बिजली कनेक्शन न होना या अत्यधिक लोड शेडिंग होना'
      ]
    },
    requiredDocuments: {
      en: [
        '7/12 Land Record Extract and 8-A Extract',
        'Aadhaar Card of the farmer',
        'Caste Certificate (for SC/ST higher subsidy benefits)',
        'NOC from co-owners if agricultural land is jointly owned',
        'Bank Account Passbook copy'
      ],
      mr: [
        'अद्ययावत ७/१२ उतारा व ८-अ होल्डिंग उतारा',
        'शेतकऱ्याचे आधार कार्ड',
        'सामाईक विहीर असल्यास इतर खातेदारांचे संमतीपत्र (NOC)',
        'अनुसूचित जाती / जमाती प्रवर्गाचे प्रमाणपत्र (लागू असल्यास)',
        'बँक पासबुक प्रत'
      ],
      hi: [
        'नवीनतम खतौनी / 7/12 नकल',
        'किसान का आधार कार्ड',
        'साझेदारी भूमि होने पर अन्य सह-स्वामियों का सहमति पत्र (NOC)',
        'बैंक खाता पासबुक'
      ]
    },
    steps: {
      en: [
        'Step 1: File complaint regarding recurring power outage with local DISCOM / Mahavitaran sub-station.',
        'Step 2: If agricultural feeder has chronic breakdown, register online application for PM-KUSUM Solar Pump.',
        'Step 3: Pay farmer share (10%) after site survey by authorized solar vendor.',
        'Step 4: Installation within 60 days with 5-year comprehensive maintenance warranty.'
      ],
      mr: [
        'टप्पा १: वारंवार वीज जात असल्यास किंवा डीपी जळाली असल्यास महावितरणच्या १९१२ वर किंवा कनिष्ठ अभियंत्याकडे नोंद करा.',
        'टप्पा २: शेतातील नियमित दिवसा विजेसाठी महाऊर्जा (MEDA) किंवा पीएम-कुसुम पोर्टलवर अर्ज करा.',
        'टप्पा ३: सर्वेक्षण पूर्ण झाल्यावर शेतकरी हिस्सा (१०%) ऑनलाईन भरा.',
        'टप्पा ४: मान्यताप्राप्त कंपनीकडून ६० दिवसांत सौर पंप बसवला जातो.'
      ],
      hi: [
        'चरण 1: ट्रांसफार्मर जलने या बिजली कटौती पर स्थानीय विद्युत सब-स्टेशन में लिखित/हेल्पलाइन शिकायत करें।',
        'चरण 2: पीएम-कुसुम पोर्टल पर 90% सब्सिडी सोलर पंप के लिए ऑनलाइन पंजीकरण करें।',
        'चरण 3: स्थल निरीक्षण के पश्चात किसान अंश (10%) जमा करें।',
        'चरण 4: 60 दिनों में सोलर पंप की स्थापना व 5 वर्ष का रखरखाव प्राप्त करें।'
      ]
    },
    department: {
      en: 'Ministry of New & Renewable Energy / State DISCOM',
      mr: 'महाराष्ट्र ऊर्जा विकास अभिकरण (महाऊर्जा) / महावितरण',
      hi: 'नवीन और नवीकरणीय ऊर्जा मंत्रालय / डिस्कॉम'
    },
    officerRole: {
      en: 'Sectional Engineer (MSEDCL/DISCOM) & District Renewable Officer',
      mr: 'महावितरण शाखा अभियंता / महाऊर्जा जिल्हा समन्वयक',
      hi: 'सहायक अभियंता (विद्युत) / जिला ऊर्जा अधिकारी'
    },
    officialPortal: 'https://pmkusum.mnre.gov.in (Official Portal / Sample Demo Data)',
    isDemoData: true
  },
  {
    id: 'sanjay-gandhi-old-age-pension',
    name: {
      en: 'Indira Gandhi National Old Age Pension & State Niradhar Yojana',
      mr: 'संजय गांधी निराधार योजना व इंदिरा गांधी राष्ट्रीय वृद्धापकाळ पेन्शन',
      hi: 'इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन एवं निराधार योजना'
    },
    shortCode: 'PENSION-OLDAGE',
    category: 'pension',
    level: 'Central',
    description: {
      en: 'Monthly financial pension directly transferred to elderly, destitute persons, widows, and persons with severe disabilities.',
      mr: '६५ वर्षे किंवा त्याहून अधिक वयाच्या वृद्ध, निराधार, विधवा व दिव्यांगांना दरमहा ₹१,५०० थेट बँक खात्यात पेन्शन सहाय्य.',
      hi: '60/65 वर्ष या उससे अधिक आयु के वृद्ध, निराश्रित, विधवा एवं दिव्यांगजनों को प्रतिमाह वित्तीय पेंशन।'
    },
    eligibility: {
      en: [
        'Age 60+ (or 65+ depending on specific category rules)',
        'Annual household income below poverty line / ₹50,000 per year',
        'Destitute with no adult earning support or financial security'
      ],
      mr: [
        'वय ६५ वर्षे किंवा अधिक (निराधार घटकांसाठी नियम शिथिल)',
        'वार्षिक उत्पन्न ₹५०,००० च्या आत असणे',
        'कुटुंबात कमवता व्यक्ती नसणे किंवा निराधार असणे'
      ],
      hi: [
        'आयु 60/65 वर्ष या अधिक',
        'वार्षिक पारिवारिक आय गरीबी रेखा के नीचे',
        'आजीविका का कोई अन्य नियमित साधन न होना'
      ]
    },
    requiredDocuments: {
      en: [
        'Age Proof (School Leaving Certificate / Voter ID / Aadhaar / Medical Officer Age Certificate)',
        'Income Certificate issued by Tehsildar',
        'Residence Proof / Ration Card',
        'Bank Account Passbook (Aadhaar linked)',
        'Passport size photos and self-declaration affidavit'
      ],
      mr: [
        'वयाचा पुरावा (शाळा सोडल्याचा दाखला / आधार / शासकीय डॉक्टरांचा वयाचा दाखला)',
        'तहसीलदारांचा उत्पन्नाचा दाखला',
        'रहिवासी दाखला व रेशन कार्ड',
        'बँक पासबुक प्रत (आधार संलग्न)',
        'पासपोर्ट फोटो व प्रतिज्ञापत्र'
      ],
      hi: [
        'आयु प्रमाण पत्र (मतदाता पहचान पत्र / आधार / सीएमओ प्रमाण पत्र)',
        'तहसीलदार द्वारा आय प्रमाण पत्र',
        'निवास प्रमाण पत्र एवं राशन कार्ड',
        'बैंक खाता पासबुक'
      ]
    },
    steps: {
      en: [
        'Step 1: Collect Form 1 from Talathi / Village Revenue Officer or Setu Kendra.',
        'Step 2: Attach Tehsildar income certificate and doctor age certificate.',
        'Step 3: Application placed before Sanjay Gandhi Niradhar Yojana Committee (chaired by MLA/Tehsildar).',
        'Step 4: Approval letter issued and monthly DBT pension starts arriving in bank account.'
      ],
      mr: [
        'टप्पा १: तलाठी कार्यालय किंवा सेतू / आपले सरकार केंद्रातून विहित नमुन्यातील अर्ज घ्या.',
        'टप्पा २: तहसीलदारांचा उत्पन्नाचा दाखला आणि वयाचा पुरावा जोडा.',
        'टप्पा ३: दरमहा होणाऱ्या संजय गांधी निराधार समितीच्या बैठकीत अर्जावर मंजुरी घेतली जाते.',
        'टप्पा ४: मंजुरी आदेश निघाल्यावर थेट बँक खात्यात मासिक पेन्शन जमा होते.'
      ],
      hi: [
        'चरण 1: लेखपाल / तहसील कार्यालय अथवा जन सेवा केंद्र से पेंशन आवेदन फॉर्म लें।',
        'चरण 2: आय प्रमाण पत्र व आयु प्रमाण संलग्न करें।',
        'चरण 3: तहसील स्तरीय पेंशन समिति द्वारा पात्रता का सत्यापन किया जाता है।',
        'चरण 4: पेंशन स्वीकृत होने पर हर महीने बैंक खाते में डीबीटी द्वारा राशि ट्रांसफर होती है।'
      ]
    },
    department: {
      en: 'Social Justice & Special Assistance Department / Revenue Dept',
      mr: 'सामाजिक न्याय विभाग / महसूल व वन विभाग (तहसीलदार कार्यालय)',
      hi: 'सामाजिक न्याय एवं अधिकारिता विभाग / तहसील'
    },
    officerRole: {
      en: 'Tehsildar & Talathi (Village Accountant)',
      mr: 'तहसीलदार / तलाठी',
      hi: 'तहसीलदार एवं लेखपाल'
    },
    officialPortal: 'https://nsap.nic.in (Official Portal / Sample Demo Data)',
    isDemoData: true
  },
  {
    id: 'pm-kisan-samman-nidhi',
    name: {
      en: 'PM-KISAN Samman Nidhi & Farmer DBT Benefits',
      mr: 'पीएम-किसान सन्मान निधी व शेतकरी सन्मान योजना',
      hi: 'पीएम-किसान सम्मान निधि योजना'
    },
    shortCode: 'PM-KISAN',
    category: 'agriculture',
    level: 'Central',
    description: {
      en: 'Direct income support of ₹6,000 per year in three equal installments of ₹2,000 to all landholding farmer families.',
      mr: 'शेतजमीन धारक शेतकरी कुटुंबांना प्रतिवर्ष ₹६,००० चे थेट आर्थिक सहाय्य तीन समान हप्त्यांमध्ये मिळणे.',
      hi: 'भूमिधारक किसान परिवारों को प्रति वर्ष ₹6,000 की प्रत्यक्ष आर्थिक सहायता तीन समान किस्तों में।'
    },
    eligibility: {
      en: [
        'Farmer family having cultivable landholding in revenue records',
        'Completed mandatory e-KYC on PM-KISAN portal',
        'Excludes institutional landholders, income tax payers, and government employees'
      ],
      mr: [
        '७/१२ उताऱ्यावर शेतजमीन नावावर असणारे शेतकरी',
        'पीएम-किसान पोर्टलवर बायोमेट्रिक किंवा ओटीपी e-KYC पूर्ण असणे',
        'आयकर भरणारे किंवा सरकारी नोकरीत असणारे वगळून'
      ],
      hi: [
        'राजस्व अभिलेखों में कृषि योग्य भूमि के स्वामी किसान',
        'पोर्टल पर अनिवार्य ई-केवाईसी पूर्ण',
        'आयकर दाता व सरकारी कर्मचारी इस योजना में शामिल नहीं'
      ]
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card linked to Mobile number',
        'Updated 7/12 Land Record / Khatauni',
        'Active Bank Account seeded with Aadhaar DBT in NPCI'
      ],
      mr: [
        'मोबाईलशी लिंक असलेले आधार कार्ड',
        'अद्ययावत ७/१२ व ८-अ शेती उतारा',
        'बँकेचे आधार सीडिंग (NPCI मॅपर) असलेले खाते'
      ],
      hi: [
        'आधार कार्ड (मोबाइल से लिंक)',
        'नवीनतम खतौनी / लैंड रिकॉर्ड',
        'डीबीटी सक्रिय बैंक खाता'
      ]
    },
    steps: {
      en: [
        'Step 1: Check "Beneficiary Status" on PM-KISAN portal using Registration Number or Aadhaar.',
        'Step 2: If installment is stopped due to "Land Seeding: NO", visit Talathi / Tehsildar office to verify land record.',
        'Step 3: If "Aadhaar Bank Account Status: Inactive", submit DBT seeding request to your bank branch.',
        'Step 4: Once verified, withheld installments are credited automatically in next cycle.'
      ],
      mr: [
        'टप्पा १: pmkisan.gov.in वर जाऊन "Beneficiary Status" तपासा.',
        'टप्पा २: जर "Land Seeding: NO" असेल तर तलाठी किंवा कृषी सहाय्यकाकडे जाऊन ७/१२ चे लँड व्हेरीफिकेशन करा.',
        'टप्पा ३: जर बँक स्टेटस इनॅक्टिव्ह असेल तर बँकेत जाऊन डीबीटी फॉर्म भरा.',
        'टप्पा ४: त्रुटी दूर झाल्यावर थांबलेले सर्व हप्ते खात्यात जमा होतात.'
      ],
      hi: [
        'चरण 1: pmkisan.gov.in पर लाभार्थी स्थिति (Beneficiary Status) चेक करें।',
        'चरण 2: यदि Land Seeding "नहीं" दिखा रहा है तो लेखपाल या कृषि सहायक से लैंड रिकॉर्ड वेरीफाई कराएं।',
        'चरण 3: बैंक में आधार डीबीटी सीडिंग सुनिश्चित कराएं।',
        'चरण 4: सत्यापन के बाद रुकी हुई किस्तें अगली साइकिल में प्राप्त हो जाती हैं।'
      ]
    },
    department: {
      en: 'Ministry of Agriculture & Farmers Welfare',
      mr: 'कृषी विभाग महाराष्ट्र शासन',
      hi: 'कृषि एवं किसान कल्याण मंत्रालय'
    },
    officerRole: {
      en: 'Village Krishi Sahayak (Agriculture Assistant) & Talathi',
      mr: 'कृषी सहाय्यक / तलाठी',
      hi: 'कृषि सहायक एवं लेखपाल'
    },
    officialPortal: 'https://pmkisan.gov.in (Official Portal / Sample Demo Data)',
    isDemoData: true
  },
  {
    id: 'mgnrega-job-guarantee',
    name: {
      en: 'MGNREGA Rural Employment & Wage Guarantee',
      mr: 'महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना (मनरेगा)',
      hi: 'महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम (मनरेगा)'
    },
    shortCode: 'MGNREGA-WORK',
    category: 'employment',
    level: 'Central',
    description: {
      en: 'Guarantees 100 days of wage employment per financial year to every rural household whose adult members volunteer to do unskilled manual work.',
      mr: 'अकुशल शारीरिक काम करण्यास तयार असलेल्या प्रत्येक ग्रामीण कुटुंबाला वर्षातून १०० दिवसांच्या रोजगाराची कायदेशीर हमी.',
      hi: 'अकुशल श्रम करने के इच्छुक प्रत्येक ग्रामीण परिवार को प्रति वर्ष कम से कम 100 दिनों के रोजगार की कानूनी गारंटी।'
    },
    eligibility: {
      en: [
        'Adult member (18+ years) of a rural household',
        'Willingness to do unskilled manual civic/agricultural work',
        'Holder of Gram Panchayat issued Job Card'
      ],
      mr: [
        'ग्रामीण भागातील १८ वर्षांवरील प्रौढ व्यक्ती',
        'अकुशल काम करण्याची तयारी',
        'ग्रामपंचायतीने दिलेले मनरेगा जॉब कार्ड असणे'
      ],
      hi: [
        'ग्रामीण परिवार का 18 वर्ष या उससे अधिक आयु का सदस्य',
        'अकुशल शारीरिक कार्य करने की इच्छा',
        'ग्राम पंचायत द्वारा जारी जॉब कार्ड'
      ]
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card',
        'Passport photographs of all adult applicants',
        'Bank / Post Office Passbook',
        'Gram Panchayat Residence verification'
      ],
      mr: [
        'आधार कार्ड',
        'कुटुंबातील सदस्यांचे पासपोर्ट फोटो',
        'बँक किंवा पोस्ट ऑफिस पासबुक',
        'ग्रामपंचायत रहिवासी दाखला'
      ],
      hi: [
        'आधार कार्ड',
        'पासपोर्ट साइज फोटो',
        'बैंक या डाकघर पासबुक',
        'ग्राम पंचायत निवास प्रमाण'
      ]
    },
    steps: {
      en: [
        'Step 1: Submit Form 4 (Application for Work) to Gram Rozgar Sahayak (GRS) or Gram Panchayat.',
        'Step 2: Collect stamped dated receipt (Mandatory under Act to claim unemployment allowance if work not given in 15 days).',
        'Step 3: Allotment of muster roll on village works (canal desilting, road levelling, farm pond).',
        'Step 4: Wages credited directly to bank account within 15 days of muster closure.'
      ],
      mr: [
        'टप्पा १: ग्राम रोजगार सेवक किंवा ग्रामपंचायतीकडे नमुना ४ (कामाची मागणी) अर्ज सादर करा.',
        'टप्पा २: पावतीवर पोचपावती व तारीख नक्की घ्या (१५ दिवसांत काम न मिळाल्यास बेरोजगारी भत्ता मिळतो).',
        'टप्पा ३: गावातील पाणंद रस्ता, शेततळे किंवा नाला दुरुस्तीच्या मस्टरवर हजेरी नोंदवा.',
        'टप्पा ४: काम संपल्यावर १५ दिवसांच्या आत मजुरी थेट बँकेत जमा होते.'
      ],
      hi: [
        'चरण 1: ग्राम रोजगार सेवक या ग्राम पंचायत कार्यालय में काम की मांग का आवेदन दें।',
        'चरण 2: दिनांकित पावती अवश्य लें (15 दिन में काम न मिलने पर बेरोजगारी भत्ते का अधिकार)।',
        'चरण 3: गांव के जल संरक्षण, मेड़बंदी या सड़क कार्य मस्टर रोल पर कार्य करें।',
        'चरण 4: कार्य पूर्ण होने के 15 दिनों में बैंक खाते में मजदूरी प्राप्त करें।'
      ]
    },
    department: {
      en: 'Department of Rural Development / MGNREGA Commissionerate',
      mr: 'ग्रामविकास व रोजगार हमी योजना विभाग',
      hi: 'ग्रामीण विकास विभाग / मनरेगा आयुक्त'
    },
    officerRole: {
      en: 'Gram Rozgar Sahayak (GRS) & Block Programme Officer',
      mr: 'ग्राम रोजगार सेवक / गट विकास अधिकारी (BDO)',
      hi: 'ग्राम रोजगार सहायक एवं खंड कार्यक्रम अधिकारी'
    },
    officialPortal: 'https://nrega.nic.in (Official Portal / Sample Demo Data)',
    isDemoData: true
  },
  {
    id: 'ayushman-bharat-pmjay',
    name: {
      en: 'Ayushman Bharat - PM-JAY & State Arogya Yojana',
      mr: 'आयुष्मान भारत (PM-JAY) व महात्मा फुले जन आरोग्य योजना',
      hi: 'आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना (पीएम-जय)'
    },
    shortCode: 'AYUSHMAN-HEALTH',
    category: 'healthcare',
    level: 'Central',
    description: {
      en: 'Provides cashless secondary and tertiary health coverage up to ₹5 Lakhs per family per year across empaneled hospitals.',
      mr: 'गरीब व गरजू कुटुंबांना गंभीर आजारांवर ५ लाख रुपयांपर्यंत मोफत कॅशलेस उपचार व शस्त्रक्रियांची सुविधा.',
      hi: 'पात्र परिवारों को प्रति वर्ष ₹5 लाख तक का निशुल्क कैशलेस स्वास्थ्य बीमा एवं अस्पताल उपचार।'
    },
    eligibility: {
      en: [
        'Identified in SECC deprivation criteria or holder of yellow/orange ration card',
        'Rural families with vulnerable socio-economic status',
        'Pre-existing conditions covered from Day 1'
      ],
      mr: [
        'पिवळे किंवा केशरी रेशन कार्ड धारक कुटुंबे',
        'सामाजिक व आर्थिकदृष्ट्या दुर्बल ग्रामीण नागरिक',
        'कोणत्याही वयाची व्यक्ती पात्र'
      ],
      hi: [
        'बीपीएल / अंत्योदय अथवा पात्र गृहस्थी राशन कार्ड धारक',
        'सामाजिक-आर्थिक रूप से वंचित ग्रामीण परिवार'
      ]
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card of patient / family member',
        'Ration Card (Original / Digital copy)',
        'Active mobile number for OTP verification'
      ],
      mr: [
        'रुग्ण व कुटुंब प्रमुखाचे आधार कार्ड',
        'रेशन कार्ड प्रत',
        'ओटीपी पडताळणीसाठी मोबाईल'
      ],
      hi: [
        'मरीज और परिवार का आधार कार्ड',
        'राशन कार्ड',
        'मोबाइल नंबर'
      ]
    },
    steps: {
      en: [
        'Step 1: Check Ayushman beneficiary eligibility on portal or visit nearest Primary Health Center (PHC).',
        'Step 2: Visit CSC or Rural Hospital Ayushman Mitra desk to print your Golden Card.',
        'Step 3: In emergency or planned surgery, show Ayushman card at any empaneled government/private hospital.',
        'Step 4: Completely cashless treatment, diagnostics, and 15 days follow-up medicines provided.'
      ],
      mr: [
        'टप्पा १: जवळच्या प्राथमिक आरोग्य केंद्रात (PHC) किंवा सेतू केंद्रात जाऊन नाव तपासा.',
        'टप्पा २: आरोग्य मित्राकडून मोफत आयुष्मान भारत गोल्डन कार्ड तयार करून घ्या.',
        'टप्पा ३: आजारपणात किंवा उपचारासाठी संलग्न रुग्णालयातील आयुष्मान कक्षात संपर्क साधा.',
        'टप्पा ४: उपचार, तपासण्या व औषधे पूर्णपणे मोफत मिळतात.'
      ],
      hi: [
        'चरण 1: प्राथमिक स्वास्थ्य केंद्र (PHC) या सीएससी पर आयुष्मान सूची में नाम जांचें।',
        'चरण 2: आयुष्मान मित्र से निशुल्क आयुष्मान कार्ड (गोल्डन कार्ड) बनवाएं।',
        'चरण 3: अस्पताल में भर्ती के समय आयुष्मान मित्र डेस्क पर कार्ड दिखाएं।',
        'चरण 4: निशुल्क एवं कैशलेस इलाज का लाभ उठाएं।'
      ]
    },
    department: {
      en: 'National Health Authority / State Health Assurance Society',
      mr: 'सार्वजनिक आरोग्य विभाग / राज्य आरोग्य हमी सोसायटी',
      hi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण / राज्य स्वास्थ्य एजेंसी'
    },
    officerRole: {
      en: 'Medical Officer (PHC) & Ayushman Mitra',
      mr: 'वैद्यकीय अधिकारी (प्राथमिक आरोग्य केंद्र) व आरोग्य मित्र',
      hi: 'चिकित्सा अधिकारी (पीएचसी) एवं आयुष्मान मित्र'
    },
    officialPortal: 'https://beneficiary.nha.gov.in (Official Portal / Sample Demo Data)',
    isDemoData: true
  },
  {
    id: 'aaple-sarkar-citizen-certificates',
    name: {
      en: 'Aaple Sarkar / Digital Seva Citizen Certificates Portal',
      mr: 'आपले सरकार / सेतू ई-सेवा नागरिक दाखले केंद्र',
      hi: 'ई-डिस्ट्रिक्ट / डिजिटल सेवा नागरिक प्रमाण पत्र पोर्टल'
    },
    shortCode: 'E-SEVA-DOCS',
    category: 'documents',
    level: 'State',
    description: {
      en: 'Single window delivery of public services: Income Certificate, Caste Certificate, Domicile, Non-Creamy Layer, 7/12 extract.',
      mr: 'उत्पन्नाचा दाखला, जात प्रमाणपत्र, रहिवासी दाखला, नॉन-क्रीमीलेअर आणि ७/१२ उतारा घरबसल्या किंवा सेतू केंद्रातून मिळवणे.',
      hi: 'आय प्रमाण पत्र, जाति प्रमाण पत्र, निवास प्रमाण पत्र एवं खतौनी जैसी सभी आवश्यक नागरिक सेवाएं एक ही स्थान पर।'
    },
    eligibility: {
      en: [
        'Any resident citizen residing in village/taluka',
        'Correct identity documents and application fee'
      ],
      mr: [
        'संबंधित गावातील किंवा तालुक्यातील रहिवासी नागरिक',
        'ओळखीचे पुरावे व विहित शासकीय शुल्क'
      ],
      hi: [
        'गांव / तहसील का निवासी नागरिक'
      ]
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card and Passport Photo',
        'Proof of Address (Ration Card / Electricity Bill / Namuna 8)',
        'Affidavit / Self-declaration on Form',
        'Talathi Panchnama (for income/caste verification)'
      ],
      mr: [
        'आधार कार्ड आणि पासपोर्ट फोटो',
        'रहिवासी पुरावा (रेशन कार्ड / वीज बिल / घरपट्टी)',
        'विहित नमुन्यातील स्वयंघोषणापत्र',
        'तलाठी अहवाल / पंचनामा'
      ],
      hi: [
        'आधार कार्ड और फोटो',
        'पते का प्रमाण',
        'स्व-घोषणा पत्र',
        'लेखपाल जांच आख्या'
      ]
    },
    steps: {
      en: [
        'Step 1: Apply online at Aaple Sarkar / e-District or visit Gram Panchayat CSC kiosk.',
        'Step 2: Talathi inspects applicant records and submits digital verification report to Circle Officer.',
        'Step 3: Naib Tehsildar / Sub-Divisional Magistrate digitally signs the certificate.',
        'Step 4: Download digitally signed QR-coded certificate within 7-15 days under Right to Public Services Act.'
      ],
      mr: [
        'टप्पा १: आपले सरकार पोर्टलवर अर्ज करा किंवा ग्रामपंचायतीच्या सीएससी केंद्रात जा.',
        'टप्पा २: तलाठी जागेवर खात्री करून मंडळाधिकाऱ्यांकडे पडताळणी अहवाल पाठवतात.',
        'टप्पा ३: नायब तहसीलदार किंवा प्रांत अधिकारी यांच्या डिजिटल सहीने दाखला तयार होतो.',
        'टप्पा ४: ७ ते १५ दिवसांत लोकसेवा हक्क कायद्यानुसार डिजिटल दाखला डाऊनलोड करा.'
      ],
      hi: [
        'चरण 1: ई-डिस्ट्रिक्ट पोर्टल पर आवेदन करें या गांव के जन सेवा केंद्र पर जाएं।',
        'चरण 2: लेखपाल द्वारा जांच कर रिपोर्ट तहसीलदार कार्यालय भेजी जाती है।',
        'चरण 3: सक्षम प्राधिकारी द्वारा डिजिटल हस्ताक्षर से प्रमाण पत्र जारी होता है।',
        'चरण 4: निर्धारित समय सीमा में डिजिटल प्रमाण पत्र डाउनलोड करें।'
      ]
    },
    department: {
      en: 'Revenue and Forest Department',
      mr: 'महसूल व वन विभाग (तहसीलदार कार्यालय)',
      hi: 'राजस्व विभाग (तहसील)'
    },
    officerRole: {
      en: 'Talathi, Circle Officer & Naib Tehsildar',
      mr: 'तलाठी, मंडळ अधिकारी व नायब तहसीलदार',
      hi: 'लेखपाल, कानूनगो व नायब तहसीलदार'
    },
    officialPortal: 'https://aaplesarkar.mahaonline.gov.in (Official Portal / Sample Demo Data)',
    isDemoData: true
  },
  {
    id: 'swachh-bharat-ihhl-toilet',
    name: {
      en: 'Swachh Bharat Mission (Grameen) Individual Toilet Subsidy',
      mr: 'स्वच्छ भारत अभियान (ग्रामीण) वैयक्तिक शौचालय अनुदान योजना',
      hi: 'स्वच्छ भारत मिशन (ग्रामीण) व्यक्तिगत शौचालय प्रोत्साहन योजना'
    },
    shortCode: 'SBM-G-TOILET',
    category: 'sanitation',
    level: 'Central',
    description: {
      en: 'Provides financial incentive of ₹12,000 for construction of individual household latrine (IHHL) in rural households without sanitary facilities.',
      mr: 'ज्या ग्रामीण कुटुंबांकडे शौचालय नाही त्यांना वैयक्तिक शौचालय बांधण्यासाठी ₹१२,००० प्रोत्साहन अनुदान.',
      hi: 'शौचालय विहीन ग्रामीण परिवारों को व्यक्तिगत शौचालय निर्माण हेतु ₹12,000 की प्रोत्साहन राशि।'
    },
    eligibility: {
      en: [
        'Rural households that do not have access to an individual toilet',
        'Belonging to BPL or identified APL (SC/ST, small/marginal farmers, women-headed households)',
        'Not availed previous toilet subsidy under earlier Nirmal Bharat Abhiyan'
      ],
      mr: [
        'घरात शौचालय नसलेले ग्रामीण कुटुंब',
        'दारिद्र्यरेषेखालील (BPL) किंवा पात्र अनुसूचित जाती/जमाती/अल्पभूधारक शेतकरी',
        'पूर्वी शासकीय शौचालय अनुदानाचा लाभ न घेतलेले'
      ],
      hi: [
        'शौचालय रहित ग्रामीण परिवार',
        'बीपीएल अथवा पात्र अनुसूचित जाति/जनजाति/लघु सीमांत किसान परिवार'
      ]
    },
    requiredDocuments: {
      en: [
        'Aadhaar Card of household head',
        'Bank Account Passbook (first page with IFSC and account number)',
        'Photograph of applicant standing in front of constructed/under-construction toilet unit'
      ],
      mr: [
        'कुटुंब प्रमुखाचे आधार कार्ड',
        'बँक पासबुक प्रत (IFSC कोडसह)',
        'शौचालयाच्या कामासोबत अर्जदाराचा फोटो'
      ],
      hi: [
        'आधार कार्ड',
        'बैंक पासबुक',
        'शौचालय के साथ लाभार्थी का फोटो'
      ]
    },
    steps: {
      en: [
        'Step 1: Register on SBM Grameen portal or submit form to Gram Sevak.',
        'Step 2: Construct twin-pit sanitary toilet structure.',
        'Step 3: Village Swachhagrahi / Gram Sevak conducts geo-tagged mobile verification.',
        'Step 4: DBT incentive of ₹12,000 directly transferred to beneficiary bank account.'
      ],
      mr: [
        'टप्पा १: ग्रामपंचायतीत ग्रामसेवकाकडे अर्ज करा किंवा sbm.gov.in वर ऑनलाईन नोंदणी करा.',
        'टप्पा २: शोषखड्डा (Twin-pit) पद्धतीचे शौचालय बांधून पूर्ण करा.',
        'टप्पा ३: स्वच्छाग्रही किंवा ग्रामसेवक यांच्याकडून जिओ-टॅग पडताळणी करून घ्या.',
        'टप्पा ४: ₹१२,००० चे अनुदान थेट बँक खात्यात जमा केले जाते.'
      ],
      hi: [
        'चरण 1: ग्राम सेवक को आवेदन दें या sbm.gov.in पर ऑनलाइन पंजीकरण करें।',
        'चरण 2: दो गड्ढे (ट्विन-पिट) वाले शौचालय का निर्माण करें।',
        'चरण 3: स्वच्छाग्रही द्वारा मोबाइल से जियो-टैगिंग सत्यापन कराएं।',
        'चरण 4: ₹12,000 की प्रोत्साहन राशि सीधे बैंक खाते में पाएं।'
      ]
    },
    department: {
      en: 'Department of Drinking Water & Sanitation, Ministry of Jal Shakti',
      mr: 'पाणी पुरवठा व स्वच्छता विभाग / जिल्हा परिषद स्वच्छता कक्ष',
      hi: 'पेयजल एवं स्वच्छता विभाग / जिला परिषद'
    },
    officerRole: {
      en: 'Gram Sevak & Block Swachh Bharat Coordinator',
      mr: 'ग्रामसेवक व तालुका स्वच्छता समन्वयक',
      hi: 'ग्राम सेवक एवं ब्लॉक स्वच्छता समन्वयक'
    },
    officialPortal: 'https://sbm.gov.in (Official Portal / Sample Demo Data)',
    isDemoData: true
  }
];
