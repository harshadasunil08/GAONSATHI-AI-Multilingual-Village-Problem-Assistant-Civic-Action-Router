import { SampleProblem } from '../types';

export const sampleProblems: SampleProblem[] = [
  // 1. Water - Marathi
  {
    id: 'sample-1',
    language: 'mr',
    text: 'माझ्या गावात पाणी नियमित येत नाही.',
    category: 'water',
    label: 'पाणी पुरवठा समस्या (मराठी)',
    district: 'सातारा (Satara)',
    village: 'वडुज (Vaduj)'
  },
  // 2. Education / Scholarship - Marathi
  {
    id: 'sample-2',
    language: 'mr',
    text: 'माझ्या मुलाला scholarship मिळाली नाही.',
    category: 'education',
    label: 'शिष्यवृत्ती प्रलंबित (मराठी)',
    district: 'पुणे (Pune)',
    village: 'शिरूर (Shirur)'
  },
  // 3. Road - Marathi
  {
    id: 'sample-3',
    language: 'mr',
    text: 'गावातील मुख्य रस्ता खूप खराब आहे, खड्डे पडल्यामुळे रुग्णवाहिका गावात येत नाही.',
    category: 'roads',
    label: 'रस्ता व खड्डे समस्या (मराठी)',
    district: 'अहमदनगर (Ahilyanagar)',
    village: 'राहाता (Rahata)'
  },
  // 4. Housing - Marathi
  {
    id: 'sample-4',
    language: 'mr',
    text: 'माझ्या घरासाठी कोणती सरकारी योजना मिळू शकते? आमचे कच्चे घर पावसात गळते.',
    category: 'housing',
    label: 'घरकुल योजना चौकशी (मराठी)',
    district: 'नांदेड (Nanded)',
    village: 'मुखेड (Mukhed)'
  },
  // 5. Electricity - Marathi
  {
    id: 'sample-5',
    language: 'mr',
    text: 'शेतात वीज वारंवार जाते, ट्रान्सफॉर्मर जळाला असून पिकांना पाणी देता येत नाही.',
    category: 'electricity',
    label: 'शेती वीज व ट्रान्सफॉर्मर (मराठी)',
    district: 'जळगाव (Jalgaon)',
    village: 'रावेर (Raver)'
  },
  // 6. Pension - Marathi
  {
    id: 'sample-6',
    language: 'mr',
    text: 'मला वृद्धापकाळ पेन्शनसाठी अर्ज करायचा आहे, माझे वय ६८ वर्षे असून उत्पन्नाचे साधन नाही.',
    category: 'pension',
    label: 'वृद्धापकाळ पेन्शन अर्ज (मराठी)',
    district: 'सोलापूर (Solapur)',
    village: 'करमाळा (Karmala)'
  },
  // 7. Agriculture - Marathi
  {
    id: 'sample-7',
    language: 'mr',
    text: 'गेल्या ६ महिन्यांपासून पीएम-किसान सन्मान निधीचा हप्ता बँक खात्यात जमा झाला नाही.',
    category: 'agriculture',
    label: 'पीएम-किसान हप्ता अडकला (मराठी)',
    district: 'कोल्हापूर (Kolhapur)',
    village: 'कागल (Kagal)'
  },
  // 8. Documents - Marathi
  {
    id: 'sample-8',
    language: 'mr',
    text: 'मुलाच्या ॲडमिशनसाठी उत्पन्नाचा दाखला आणि रहिवासी दाखला तातडीने पाहिजे.',
    category: 'documents',
    label: 'उत्पन्न व रहिवासी दाखला (मराठी)',
    district: 'नाशिक (Nashik)',
    village: 'दिंडोरी (Dindori)'
  },
  // 9. Sanitation - Marathi
  {
    id: 'sample-9',
    language: 'mr',
    text: 'आमच्या वस्तीत सांडपाण्याचा नाला तुंबला असून डासांचा प्रादुर्भाव वाढला आहे.',
    category: 'sanitation',
    label: 'सांडपाणी नाला अडथळा (मराठी)',
    district: 'सांगली (Sangli)',
    village: 'तासगाव (Tasgaon)'
  },
  // 10. Employment - Marathi
  {
    id: 'sample-10',
    language: 'mr',
    text: 'मनरेगा रोजगार हमी योजनेचे जॉब कार्ड आहे पण गावात गेल्या दोन महिन्यांपासून काम मिळत नाही.',
    category: 'employment',
    label: 'मनरेगा काम मागणी (मराठी)',
    district: 'बीड (Beed)',
    village: 'आष्टी (Ashti)'
  },

  // 11. Water - Hindi
  {
    id: 'sample-11',
    language: 'hi',
    text: 'गांव में पीने का पानी नियमित नहीं आता, पाइपलाइन कई जगह से टूटी हुई है।',
    category: 'water',
    label: 'पेयजल समस्या (हिंदी)',
    district: 'वाराणसी (Varanasi)',
    village: 'पिंडरा (Pindra)'
  },
  // 12. Education - Hindi
  {
    id: 'sample-12',
    language: 'hi',
    text: 'मेरे बेटे की कॉलेज छात्रवृत्ति पिछले साल से पेंडिंग है और पोर्टल पर बैंक एरर दिखा रहा है।',
    category: 'education',
    label: 'छात्रवृत्ति समस्या (हिंदी)',
    district: 'पटना (Patna)',
    village: 'दनियावां (Daniyawan)'
  },
  // 13. Electricity - Hindi
  {
    id: 'sample-13',
    language: 'hi',
    text: 'खेत में ट्रांसफार्मर जल गया है, बिजली 4 दिन से गुल है और धान की फसल सूख रही है।',
    category: 'electricity',
    label: 'बिजली व ट्रांसफार्मर (हिंदी)',
    district: 'जयपुर (Jaipur)',
    village: 'चाकसू (Chaksu)'
  },
  // 14. Housing - Hindi
  {
    id: 'sample-14',
    language: 'hi',
    text: 'प्रधानमंत्री आवास योजना ग्रामीण (पीएमएवाई-जी) की दूसरी किस्त अभी तक बैंक में नहीं आई।',
    category: 'housing',
    label: 'आवास योजना किस्त (हिंदी)',
    district: 'रांची (Ranchi)',
    village: 'बेड़ो (Bero)'
  },
  // 15. Pension - Hindi
  {
    id: 'sample-15',
    language: 'hi',
    text: 'मेरी दादी का वृद्धावस्था पेंशन 4 महीने से बंद हो गया है, इसे दोबारा कैसे शुरू कराएं?',
    category: 'pension',
    label: 'वृद्धावस्था पेंशन (हिंदी)',
    district: 'भोपाल (Bhopal)',
    village: 'बैरसिया (Berasia)'
  },
  // 16. Healthcare - Hindi
  {
    id: 'sample-16',
    language: 'hi',
    text: 'गांव के प्राथमिक स्वास्थ्य केंद्र (PHC) पर डॉक्टर नहीं आते और दवाइयां भी नहीं मिलतीं।',
    category: 'healthcare',
    label: 'स्वास्थ्य केंद्र व दवाएं (हिंदी)',
    district: 'गया (Gaya)',
    village: 'बोधगया (Bodhgaya)'
  },

  // 17. Water - English
  {
    id: 'sample-17',
    language: 'en',
    text: 'There is no drinking water supply in our village for the past two weeks due to broken motor.',
    category: 'water',
    label: 'Drinking Water Outage (English)',
    district: 'Mysuru',
    village: 'Hunsur'
  },
  // 18. Roads - English
  {
    id: 'sample-18',
    language: 'en',
    text: 'The main village approach road connecting our school has deep potholes and is flooded with mud.',
    category: 'roads',
    label: 'Broken Village Road (English)',
    district: 'Warangal',
    village: 'Wardhannapet'
  },
  // 19. Agriculture - English
  {
    id: 'sample-19',
    language: 'en',
    text: 'My crop insurance claim under PMFBY for soybean crop damage was rejected without inspection.',
    category: 'agriculture',
    label: 'Crop Insurance Rejection (English)',
    district: 'Nagpur',
    village: 'Katol'
  },
  // 20. Healthcare - English
  {
    id: 'sample-20',
    language: 'en',
    text: 'How can I apply for an Ayushman Bharat Golden Card for my family to get cashless hospitalization?',
    category: 'healthcare',
    label: 'Ayushman Card Application (English)',
    district: 'Amravati',
    village: 'Achalpur'
  },
  // 21. Documents - English
  {
    id: 'sample-21',
    language: 'en',
    text: 'Need 7/12 land extract correction as deceased grandfather name is still reflected in revenue records.',
    category: 'documents',
    label: 'Land Records Mutation (English)',
    district: 'Nashik',
    village: 'Igatpuri'
  },
  // 22. Sanitation - English
  {
    id: 'sample-22',
    language: 'en',
    text: 'Our household wants to construct a sanitary toilet under Swachh Bharat Mission Grameen subsidy.',
    category: 'sanitation',
    label: 'Toilet Subsidy Inquiry (English)',
    district: 'Thane',
    village: 'Murbad'
  }
];
