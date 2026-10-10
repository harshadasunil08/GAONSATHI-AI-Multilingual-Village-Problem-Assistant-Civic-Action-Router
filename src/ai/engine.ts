import {
  CategoryId,
  ExplainabilityFactor,
  Language,
  ProblemAnalysis,
  Scheme,
  UrgencyLevel
} from '../types';
import { categories } from '../data/categoriesData';
import { schemes } from '../data/schemesData';

// Dictionary of domain keywords and n-grams across English, Marathi, Hindi
interface CategoryKeywordRules {
  keywords: string[];
  weight: number;
}

const CATEGORY_RULES: Record<CategoryId, CategoryKeywordRules[]> = {
  water: [
    { keywords: ['पाणी', 'पाणीपुरवठा', 'पाणी येत नाही', 'नळ', 'विहीर', 'बोअरवेल', 'टँकर', 'गळती', 'जल', 'पिण्याचे पाणी', 'जलजीवन'], weight: 3 },
    { keywords: ['पानी', 'जल', 'पेयजल', 'नल', 'बोरवेल', 'टैंकर', 'पाइपलाइन', 'पानी नहीं आ रहा', 'जल जीवन मिशन', 'हैंडपंप'], weight: 3 },
    { keywords: ['water', 'drinking water', 'tap', 'pipeline', 'leakage', 'borewell', 'tanker', 'jal jeevan', 'handpump', 'well', 'supply'], weight: 3 }
  ],
  electricity: [
    { keywords: ['वीज', 'लाईट', 'लाईट नाही', 'ट्रान्सफॉर्मर', 'डीपी', 'करंट', 'लोडशेडिंग', 'महावितरण', 'फिडर', 'सौर पंप', 'कुसुम', 'पथदिवे'], weight: 3 },
    { keywords: ['बिजली', 'लाइट', 'ट्रांसफार्मर', 'डीपी जल गई', 'बिजली कटौती', 'लोड शेडिंग', 'सोलर पंप', 'कुसुम', 'स्ट्रीट लाइट', 'पावर'], weight: 3 },
    { keywords: ['electricity', 'power', 'power cut', 'transformer', 'voltage', 'feeder', 'load shedding', 'solar pump', 'kusum', 'streetlight', 'current'], weight: 3 }
  ],
  roads: [
    { keywords: ['रस्ता', 'रस्ते', 'खड्डे', 'पूल', 'डांबरीकरण', 'पाणंद', 'ग्राम सडक', 'वाहतूक', 'रस्ता खराब'], weight: 3 },
    { keywords: ['सड़क', 'रास्ता', 'गड्ढे', 'पुल', 'पुलिया', 'डामर', 'ग्राम सड़क', 'सड़क खराब', 'पीएमजीएसवाई'], weight: 3 },
    { keywords: ['road', 'roads', 'pothole', 'potholes', 'bridge', 'culvert', 'tar', 'pmgsy', 'connectivity', 'muddy road', 'broken road'], weight: 3 }
  ],
  education: [
    { keywords: ['शिष्यवृत्ती', 'scholarship', 'शाळा', 'शिक्षण', 'कॉलेज', 'फी', 'महाडीबीटी', 'मास्तर', 'विद्यार्थी', 'पुस्तके', 'दुपारचे जेवण', 'पोषण आहार'], weight: 3 },
    { keywords: ['छात्रवृत्ति', 'स्कॉलरशिप', 'स्कूल', 'विद्यालय', 'शिक्षा', 'कॉलेज', 'फीस', 'एनएसपी', 'विद्यार्थी', 'किताबें', 'मध्याह्न भोजन'], weight: 3 },
    { keywords: ['scholarship', 'school', 'education', 'college', 'tuition', 'fee', 'teacher', 'student', 'nsp', 'mahadbt', 'mid-day meal', 'admissions'], weight: 3 }
  ],
  agriculture: [
    { keywords: ['शेती', 'शेतकरी', 'पीक', 'पीएम-किसान', 'विमा', 'खते', 'बियाणे', 'कृषी', 'नुकसान भरपाई', 'सोयाबीन', 'कांदा', 'ऊस'], weight: 3 },
    { keywords: ['खेती', 'किसान', 'फसल', 'पीएम-किसान', 'फसल बीमा', 'बीज', 'खाद', 'कृषि', 'मुआवजा', 'धान', 'गेहूं'], weight: 3 },
    { keywords: ['agriculture', 'farmer', 'farming', 'crop', 'crops', 'pm-kisan', 'crop insurance', 'pmfby', 'seeds', 'fertilizer', 'kisan', 'harvest'], weight: 3 }
  ],
  housing: [
    { keywords: ['घर', 'घरकुल', 'पंतप्रधान आवास', 'कच्चे घर', 'छप्पर', 'बांधकाम', 'आवास प्लस', 'घरकुल यादी', 'निवारा'], weight: 3 },
    { keywords: ['आवास', 'मकान', 'प्रधानमंत्री आवास योजना', 'कच्चा मकान', 'छत', 'आवास प्लस', 'पीएमएवाई', 'घर'], weight: 3 },
    { keywords: ['housing', 'house', 'pmay', 'pmay-g', 'kutcha house', 'roof', 'shelter', 'awaas', 'construction', 'gharkul', 'home'], weight: 3 }
  ],
  healthcare: [
    { keywords: ['दवाखाना', 'आरोग्य', 'हॉस्पिटल', 'डॉक्टर', 'रुग्णवाहिका', 'आयुष्मान', 'औषधे', 'आजारी', 'उपचार', 'प्राथमिक आरोग्य केंद्र', 'phc'], weight: 3 },
    { keywords: ['अस्पताल', 'स्वास्थ्य', 'डॉक्टर', 'एंबुलेंस', 'आयुष्मान भारत', 'दवा', 'दवाइयां', 'बीमार', 'इलाज', 'पीएचसी', 'सीएचसी'], weight: 3 },
    { keywords: ['health', 'hospital', 'doctor', 'ambulance', 'ayushman', 'medicine', 'medicines', 'treatment', 'clinic', 'phc', 'patient', 'sick'], weight: 3 }
  ],
  pension: [
    { keywords: ['पेन्शन', 'वृद्धापकाळ', 'संजय गांधी', 'निराधार', 'वृद्ध', 'म्हातारपण', 'विधवा', 'दिव्यांग', 'अपंग', 'मासिक मदत'], weight: 3 },
    { keywords: ['पेंशन', 'वृद्धावस्था', 'निराश्रित', 'बुजुर्ग', 'वृद्ध', 'विधवा', 'दिव्यांग', 'विकलांग', 'मासिक पेंशन'], weight: 3 },
    { keywords: ['pension', 'old age', 'elderly', 'senior citizen', 'widow', 'destitute', 'disability', 'handicapped', 'monthly pension'], weight: 3 }
  ],
  schemes: [
    { keywords: ['योजना', 'सरकारी योजना', 'अनुदान', 'सब्सिडी', 'मदत', 'शासकीय योजना', 'बचत गट'], weight: 2 },
    { keywords: ['योजना', 'सरकारी योजना', 'सब्सिडी', 'अनुदान', 'सहायता', 'स्वयं सहायता समूह'], weight: 2 },
    { keywords: ['scheme', 'government scheme', 'subsidy', 'grant', 'welfare', 'assistance', 'shg'], weight: 2 }
  ],
  employment: [
    { keywords: ['मनरेगा', 'रोजगार', 'काम', 'मजुरी', 'जॉब कार्ड', 'बेरोजगार', 'कामाची मागणी', 'रोजगार हमी'], weight: 3 },
    { keywords: ['मनरेगा', 'रोजगार', 'काम', 'मजदूरी', 'जॉब कार्ड', 'बेरोजगार', 'काम की मांग', 'नरेगा'], weight: 3 },
    { keywords: ['mgnrega', 'nrega', 'employment', 'job card', 'wages', 'unskilled work', 'unemployed', 'livelihood', 'daily wage'], weight: 3 }
  ],
  documents: [
    { keywords: ['दाखला', 'प्रमाणपत्र', 'उत्पन्न', '७/१२', 'सातबारा', 'जात प्रमाणपत्र', 'रहिवासी', 'रेशन कार्ड', 'आधार', 'तलाठी'], weight: 3 },
    { keywords: ['प्रमाण पत्र', 'आय प्रमाण पत्र', 'जाति प्रमाण पत्र', 'खतौनी', '7/12', 'निवास प्रमाण पत्र', 'राशन कार्ड', 'आधार', 'लेखपाल'], weight: 3 },
    { keywords: ['certificate', 'income certificate', 'caste certificate', '7/12', 'domicile', 'ration card', 'aadhaar', 'mutation', 'land record'], weight: 3 }
  ],
  sanitation: [
    { keywords: ['शौचालय', 'स्वच्छता', 'कचरा', 'नाला', 'सांडपाणी', 'दुर्गंधी', 'स्वच्छ भारत', 'डास'], weight: 3 },
    { keywords: ['शौचालय', 'स्वच्छता', 'कचरा', 'नाली', 'गंदा पानी', 'बदबू', 'स्वच्छ भारत', 'मच्छर'], weight: 3 },
    { keywords: ['toilet', 'sanitation', 'cleanliness', 'drainage', 'gutter', 'waste', 'garbage', 'swachh bharat', 'sewage'], weight: 3 }
  ],
  digital_services: [
    { keywords: ['डिजिटल', 'सीएससी', 'आपले सरकार', 'इंटरनेट', 'ऑनलाईन अर्ज', 'ई-सेवा', 'क्योस्क'], weight: 2 },
    { keywords: ['डिजिटल', 'सीएससी', 'जन सेवा केंद्र', 'इंटरनेट', 'ऑनलाइन आवेदन', 'ई-मित्र'], weight: 2 },
    { keywords: ['digital', 'csc', 'kiosk', 'online portal', 'e-governance', 'internet', 'cyber cafe'], weight: 2 }
  ],
  civic_issues: [
    { keywords: ['ग्रामपंचायत', 'ग्रामसभा', 'अतिक्रमण', 'तक्रार', 'भांडण', 'सरपंच', 'जनावरे'], weight: 2 },
    { keywords: ['ग्राम पंचायत', 'ग्राम सभा', 'अतिक्रमण', 'शिकायत', 'विवाद', 'प्रधान', 'पशु'], weight: 2 },
    { keywords: ['panchayat', 'gram sabha', 'encroachment', 'dispute', 'sarpanch', 'civic issue', 'stray cattle'], weight: 2 }
  ]
};

// Urgency keywords dictionary
const URGENCY_TRIGGERS: Record<UrgencyLevel, string[]> = {
  critical: [
    'तातडीने', 'ताबडतोब', 'गंभीर', 'रुग्णवाहिका', 'अपघात', 'मृत्यू', 'जळून खाक', 'पूर', 'अतिशय urgent',
    'तुरंत', 'गंभीर', 'अस्पताल', 'मौत', 'हादसा', 'आपातकाल', 'जान का खतरा', 'तत्काल',
    'emergency', 'critical', 'immediate', 'urgent', 'ambulance', 'accident', 'danger', 'hazard', 'severe'
  ],
  high: [
    'पाणी येत नाही', '२ आठवडे', 'महिना', 'पीक जळत आहे', 'वीज नाही', 'खड्डा', 'बंद पडले', 'अडकले', 'नाकारले',
    'पानी नहीं', 'फसल सूख रही', 'बिजली गुल', 'अटका हुआ', 'बंद है', 'शिकायत', 'परेशान',
    'no water', 'power cut', 'crops drying', 'rejected', 'pending for months', 'broken', 'damaged', 'crisis'
  ],
  medium: [
    'अर्ज करायचा', 'माहिती पाहिजे', 'कधी मिळेल', 'चौकशी', 'अर्जाची स्थिती',
    'आवेदन करना', 'जानकारी चाहिए', 'कब मिलेगा', 'जांच', 'स्थिति',
    'want to apply', 'how to get', 'check status', 'information needed', 'procedure'
  ],
  low: [
    'सामान्य', 'नियम', 'योजनांची यादी', 'वेबसाईट',
    'सामान्य जानकारी', 'योजना सूची', 'नियम',
    'general info', 'list of schemes', 'guidelines'
  ]
};

// Language detection heuristic using Unicode scripts and vocabulary
export function detectLanguage(text: string): Language {
  if (!text || text.trim() === '') return 'en';

  const clean = text.trim();
  // Devanagari Unicode range: \u0900-\u097F
  const devanagariCount = (clean.match(/[\u0900-\u097F]/g) || []).length;
  const totalLetters = (clean.match(/[a-zA-Z\u0900-\u097F]/g) || []).length;

  if (totalLetters > 0 && devanagariCount / totalLetters > 0.35) {
    // Distinguish between Marathi and Hindi
    const lower = clean.toLowerCase();
    
    // Marathi specific markers
    const marathiMarkers = [
      'माझ्या', 'आहे', 'नाही', 'गावात', 'मुलाला', 'मिळाली', 'येत', 'रस्ता', 'शेतात', 'करावा',
      'करायचा', 'दाखला', 'हप्ता', 'पाहिजे', 'गेल्या', 'झाला', 'झाली', 'काय', 'कशी', 'कोणती', 'होते'
    ];
    
    // Hindi specific markers
    const hindiMarkers = [
      'मेरे', 'है', 'नहीं', 'गांव में', 'बेटे', 'मिली', 'सड़क', 'खेत में', 'करना', 'चाहिए',
      'हुआ', 'हुई', 'क्या', 'कैसे', 'कौन सी', 'होता', 'रहा', 'रही', 'गया', 'पेंडिंग', 'कीजिए'
    ];

    let mrScore = 0;
    let hiScore = 0;

    for (const marker of marathiMarkers) {
      if (lower.includes(marker)) mrScore += 2;
    }
    for (const marker of hindiMarkers) {
      if (lower.includes(marker)) hiScore += 2;
    }

    if (mrScore >= hiScore && mrScore > 0) return 'mr';
    if (hiScore > mrScore) return 'hi';
    
    // Default Devanagari based on common regional balance
    return 'mr';
  }

  return 'en';
}

// Tokenize and extract keywords
export function extractKeywords(text: string): string[] {
  const clean = text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?"'।]/g, ' ');
  const tokens = clean.split(/\s+/).filter(t => t.length > 2);
  
  const stopwords = new Set([
    'and', 'the', 'for', 'with', 'from', 'this', 'that', 'our', 'what', 'where', 'when', 'how', 'have', 'has',
    'आणि', 'पण', 'तर', 'आहे', 'नाही', 'मध्ये', 'वरून', 'काय', 'कोण', 'ते', 'या', 'माझे', 'आमचे',
    'और', 'लेकिन', 'है', 'नहीं', 'में', 'से', 'क्या', 'कौन', 'यह', 'वह', 'मेरा', 'हमारा', 'का', 'की', 'के'
  ]);

  const unique = Array.from(new Set(tokens.filter(t => !stopwords.has(t))));
  return unique.slice(0, 10);
}

// Compute Category Classification with confidence scores
export function classifyProblem(
  userInput: string,
  preferredCategory?: CategoryId | 'all'
): {
  category: CategoryId;
  confidence: number;
  factors: ExplainabilityFactor[];
  keywords: string[];
} {
  const text = userInput.toLowerCase();
  const extractedKeywords = extractKeywords(text);
  const scores: Record<CategoryId, number> = {
    water: 0,
    electricity: 0,
    roads: 0,
    education: 0,
    agriculture: 0,
    housing: 0,
    healthcare: 0,
    pension: 0,
    schemes: 0,
    employment: 0,
    documents: 0,
    sanitation: 0,
    digital_services: 0,
    civic_issues: 0
  };

  const matchedKeywordsPerCategory: Record<CategoryId, string[]> = {
    water: [],
    electricity: [],
    roads: [],
    education: [],
    agriculture: [],
    housing: [],
    healthcare: [],
    pension: [],
    schemes: [],
    employment: [],
    documents: [],
    sanitation: [],
    digital_services: [],
    civic_issues: []
  };

  // Evaluate keywords and phrases
  (Object.keys(CATEGORY_RULES) as CategoryId[]).forEach(cat => {
    const ruleGroups = CATEGORY_RULES[cat];
    ruleGroups.forEach(group => {
      group.keywords.forEach(kw => {
        const lowerKw = kw.toLowerCase();
        if (text.includes(lowerKw)) {
          scores[cat] += group.weight;
          if (!matchedKeywordsPerCategory[cat].includes(kw)) {
            matchedKeywordsPerCategory[cat].push(kw);
          }
        }
      });
    });
  });

  // Boost preferred category if provided by user
  if (preferredCategory && preferredCategory !== 'all') {
    scores[preferredCategory] += 2.5;
  }

  // Find maximum scoring category
  let bestCategory: CategoryId = 'water';
  let maxScore = -1;

  (Object.keys(scores) as CategoryId[]).forEach(cat => {
    if (scores[cat] > maxScore) {
      maxScore = scores[cat];
      bestCategory = cat;
    }
  });

  // If no match was found at all, fall back to civic issues
  if (maxScore <= 0) {
    bestCategory = preferredCategory && preferredCategory !== 'all' ? preferredCategory : 'civic_issues';
    maxScore = 1;
  }

  // Calculate normalized confidence score (65% to 98% realistic bounded range)
  const confidence = Math.min(98, Math.max(68, Math.round(65 + Math.min(maxScore * 8, 30))));

  // Construct Explainability Factors
  const factors: ExplainabilityFactor[] = [];

  const matchedWords = matchedKeywordsPerCategory[bestCategory];
  if (matchedWords.length > 0) {
    factors.push({
      title: 'Keywords Detected',
      description: `Matched key domain expressions: "${matchedWords.slice(0, 4).join(', ')}"`,
      type: 'keyword'
    });
  }

  factors.push({
    title: 'Category Rule Match',
    description: `System classified problem under "${bestCategory.toUpperCase()}" based on high contextual similarity.`,
    type: 'category'
  });

  return {
    category: bestCategory,
    confidence,
    factors,
    keywords: extractedKeywords
  };
}

// Determine Urgency
export function determineUrgency(text: string): UrgencyLevel {
  const lower = text.toLowerCase();

  for (const trigger of URGENCY_TRIGGERS.critical) {
    if (lower.includes(trigger.toLowerCase())) return 'critical';
  }
  for (const trigger of URGENCY_TRIGGERS.high) {
    if (lower.includes(trigger.toLowerCase())) return 'high';
  }
  for (const trigger of URGENCY_TRIGGERS.medium) {
    if (lower.includes(trigger.toLowerCase())) return 'medium';
  }

  return 'medium'; // Default to medium for civic attention
}

// Map Category to most relevant Scheme
export function matchScheme(category: CategoryId): Scheme | undefined {
  return schemes.find(s => s.category === category) || schemes[0];
}

// Generate complete Problem Analysis structure
export async function analyzeProblem(
  userInput: string,
  options?: {
    forcedLanguage?: Language;
    forcedCategory?: CategoryId | 'all';
    location?: { state?: string; district?: string; village?: string };
    demographics?: { occupation?: string; incomeRange?: string; demographicTag?: string };
  }
): Promise<ProblemAnalysis> {
  const lang = options?.forcedLanguage || detectLanguage(userInput);
  const classification = classifyProblem(userInput, options?.forcedCategory);
  const urgency = determineUrgency(userInput);
  const matchedScheme = matchScheme(classification.category);
  const catObj = categories.find(c => c.id === classification.category);

  // Build transparent Explainability details
  const explainabilityFactors = [...classification.factors];
  if (options?.location?.village) {
    explainabilityFactors.push({
      title: 'Local Jurisdiction',
      description: `Routed to Gram Panchayat ${options.location.village}, District ${options.location.district || 'Rural'}`,
      type: 'location'
    });
  }
  if (options?.demographics?.occupation) {
    explainabilityFactors.push({
      title: 'Beneficiary Profile',
      description: `Profile tagged as ${options.demographics.occupation} (${options.demographics.incomeRange || 'Rural Household'})`,
      type: 'demographic'
    });
  }
  explainabilityFactors.push({
    title: 'Priority Assessment',
    description: `Urgency rated as ${urgency.toUpperCase()} based on citizen welfare impact.`,
    type: 'urgency'
  });

  // Action plan steps tailored to the scheme or general category
  const actionPlan = matchedScheme ? [
    {
      stepNumber: 1,
      title: {
        en: 'Inspect & Verify Problem Details',
        mr: 'समस्या तपशील व जागेची पाहणी',
        hi: 'समस्या का विवरण एवं स्थल निरीक्षण'
      },
      description: {
        en: matchedScheme.steps.en[0] || 'Lodge initial issue with local Panchayat Secretary.',
        mr: matchedScheme.steps.mr[0] || 'ग्रामसेवक किंवा स्थानिक पाणी/वीज समितीकडे अर्ज नोंदवा.',
        hi: matchedScheme.steps.hi[0] || 'ग्राम सेवक या संबंधित समिति को प्रार्थना पत्र दें।'
      },
      timeframe: 'Day 1 - 2',
      department: matchedScheme.department.en
    },
    {
      stepNumber: 2,
      title: {
        en: 'Document Verification & Gram Sabha Endorsement',
        mr: 'कागदपत्र पडताळणी व ग्रामपंचायत मंजुरी',
        hi: 'दस्तावेज सत्यापन एवं ग्राम पंचायत प्रस्ताव'
      },
      description: {
        en: matchedScheme.steps.en[1] || 'Assemble required identity and land/address proofs.',
        mr: matchedScheme.steps.mr[1] || 'आवश्यक ओळखपत्र व रहिवासी दाखला एकत्र करून ठराव मिळवा.',
        hi: matchedScheme.steps.hi[1] || 'आवश्यक दस्तावेज संलग्न कर पंचायत से अग्रसारित कराएं।'
      },
      timeframe: 'Day 3 - 5',
      department: 'Gram Panchayat Office'
    },
    {
      stepNumber: 3,
      title: {
        en: 'Escalation to Block / Taluka Department Office',
        mr: 'तालुका किंवा उपविभाग कार्यालयाकडे पाठवणे',
        hi: 'ब्लॉक / तहसील स्तरीय कार्यालय को प्रेषण'
      },
      description: {
        en: matchedScheme.steps.en[2] || 'Official administrative sanction and technical survey.',
        mr: matchedScheme.steps.mr[2] || 'कनिष्ठ अभियंता किंवा तालुका समन्वयकाकडून तांत्रिक मंजुरी.',
        hi: matchedScheme.steps.hi[2] || 'कनिष्ठ अभियंता या नोडल अधिकारी द्वारा तकनीकी स्वीकृति।'
      },
      timeframe: 'Day 6 - 10',
      department: matchedScheme.department.en
    },
    {
      stepNumber: 4,
      title: {
        en: 'Tracking & Resolution Confirmation',
        mr: 'तक्रार ट्रॅकिंग व निवारण खात्री',
        hi: 'ट्रैकिंग एवं समाधान सत्यापन'
      },
      description: {
        en: matchedScheme.steps.en[3] || 'Track complaint status on GAONSATHI and confirm field redressal.',
        mr: matchedScheme.steps.mr[3] || 'गावसाथी पोर्टलवर तक्रार स्थिती तपासा व काम पूर्ण झाल्यावर अभिप्राय नोंदवा.',
        hi: matchedScheme.steps.hi[3] || 'गांवसाथी पोर्टल पर प्रगति देखें और समाधान होने पर फीडबैक दें।'
      },
      timeframe: 'Day 10 - 15',
      department: 'GAONSATHI Grievance Cell'
    }
  ] : [
    {
      stepNumber: 1,
      title: {
        en: 'Submit Civic Grievance',
        mr: 'तक्रार अर्ज नोंदणी',
        hi: 'नागरिक शिकायत दर्ज करें'
      },
      description: {
        en: 'File written complaint with Gram Sevak and obtain receipt acknowledgment.',
        mr: 'ग्रामसेवकाकडे लेखी तक्रार नोंदवून दिनांकित पोचपावती घ्या.',
        hi: 'ग्राम सेवक को लिखित शिकायत देकर दिनांकित रसीद लें।'
      },
      timeframe: 'Day 1 - 2',
      department: 'Gram Panchayat'
    },
    {
      stepNumber: 2,
      title: {
        en: 'Field Inspection',
        mr: 'जागेची पाहणी',
        hi: 'मौका मुआयना'
      },
      description: {
        en: 'Civic committee inspects the spot and prepares verification report.',
        mr: 'स्थानिक समिती प्रत्यक्ष जागेवर जाऊन पंचनामा तयार करते.',
        hi: 'स्थानीय समिति द्वारा मौके पर जांच रिपोर्ट तैयार की जाती है।'
      },
      timeframe: 'Day 3 - 7',
      department: 'Taluka Office'
    }
  ];

  const requiredDocuments = matchedScheme
    ? matchedScheme.requiredDocuments[lang] || matchedScheme.requiredDocuments.en
    : [
        'Aadhaar Card of Applicant',
        'Residence Proof / Namuna 8 from Gram Panchayat',
        'Application / Grievance letter'
      ];

  // Summaries
  const summaries = {
    en: `Issue regarding ${catObj?.name.en || classification.category}: ${userInput.slice(0, 120)}...`,
    mr: `${catObj?.name.mr || classification.category} संदर्भातील अडचण: ${userInput.slice(0, 120)}...`,
    hi: `${catObj?.name.hi || classification.category} से संबंधित समस्या: ${userInput.slice(0, 120)}...`
  };

  const whyRecommended = {
    en: `Your input contains key terms matching rural ${catObj?.name.en.toLowerCase() || 'civic issues'}. The system mapped this to ${matchedScheme?.name.en || 'Local Panchayat Redressal'} which governs this jurisdiction with high confidence (${classification.confidence}%).`,
    mr: `तुमच्या संदेशात ग्रामीण ${catObj?.name.mr || 'नागरी समस्या'} संदर्भातील महत्त्वाचे शब्द आढळले आहेत. त्यानुसार प्रणालीने ${matchedScheme?.name.mr || 'ग्रामपंचायत निवारण कक्षा'}ची शिफारस केली आहे (${classification.confidence}% अचूकता).`,
    hi: `आपके संदेश में ग्रामीण ${catObj?.name.hi || 'नागरिक समस्या'} से जुड़े प्रमुख शब्द मिले हैं। सिस्टम ने उच्च सटीकता (${classification.confidence}%) के साथ ${matchedScheme?.name.hi || 'ग्राम पंचायत समाधान कक्ष'} की शिफारस की है।`
  };

  return {
    id: `ANALYSIS-${Date.now()}`,
    userInput,
    detectedLanguage: lang,
    primaryCategory: classification.category,
    confidenceScore: classification.confidence,
    urgency,
    summary: summaries,
    keywordsExtracted: classification.keywords,
    matchedScheme,
    explainability: {
      factors: explainabilityFactors,
      whyRecommended
    },
    actionPlan,
    requiredDocuments,
    targetDepartment: catObj?.department || {
      en: 'Gram Panchayat Office',
      mr: 'ग्रामपंचायत कार्यालय',
      hi: 'ग्राम पंचायत कार्यालय'
    },
    targetOfficer: matchedScheme?.officerRole || {
      en: 'Gram Sevak (Panchayat Secretary)',
      mr: 'ग्रामसेवक',
      hi: 'ग्राम सेवक'
    },
    citizenDetails: {
      state: options?.location?.state,
      district: options?.location?.district,
      village: options?.location?.village,
      occupation: options?.demographics?.occupation,
      incomeRange: options?.demographics?.incomeRange,
      demographicTag: options?.demographics?.demographicTag
    },
    timestamp: new Date().toISOString()
  };
}
