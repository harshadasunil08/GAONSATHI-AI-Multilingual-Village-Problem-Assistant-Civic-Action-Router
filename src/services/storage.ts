import { Complaint, ComplaintStatus, ProblemAnalysis } from '../types';

const COMPLAINTS_KEY = 'gaonsathi_complaints_v1';
const RECENT_ANALYSES_KEY = 'gaonsathi_analyses_v1';

// Seed initial realistic complaints
const INITIAL_COMPLAINTS: Complaint[] = [
  {
    id: 'GS-2026-00124',
    citizenName: 'रमेश सखाराम जाधव (Ramesh Jadhav)',
    citizenPhone: '+91 98220 12345',
    problemSummary: 'गावातील मुख्य रस्त्यावर मोठे खड्डे पडले असून पावसाळ्यात शाळकरी मुलांची व वाहनांची वाहतूक ठप्प होते.',
    category: 'roads',
    department: 'सार्वजनिक बांधकाम विभाग (PWD) / जिल्हा परिषद',
    village: 'वडुज (Vaduj)',
    district: 'सातारा (Satara)',
    state: 'Maharashtra',
    status: 'action_taken',
    urgency: 'high',
    submissionDate: '2026-09-28',
    lastUpdated: '2026-10-07',
    schemeAssociated: 'Pradhan Mantri Gram Sadak Yojana (PMGSY)',
    timeline: [
      {
        status: 'submitted',
        date: '2026-09-28',
        title: 'तक्रार नोंदवली (Grievance Registered)',
        description: 'नागरिकाने गावसाथी AI द्वारे ऑनलाइन तक्रार नोंदवली व अर्ज क्रमांक प्राप्त झाला.',
        officerOrOffice: 'गावतपासणी कक्ष'
      },
      {
        status: 'forwarded',
        date: '2026-09-30',
        title: 'विभागाकडे वर्ग (Forwarded to Department)',
        description: 'ग्रामसेवकाने तपासणी करून जिल्हा परिषद बांधकाम विभागाकडे दुरुस्ती प्रस्ताव वर्ग केला.',
        officerOrOffice: 'ग्रामसेवक कार्यालय, वडुज'
      },
      {
        status: 'under_review',
        date: '2026-10-03',
        title: 'तांत्रिक पाहणी पूर्ण (Technical Survey Completed)',
        description: 'कनिष्ठ अभियंता यांनी २.४ किमी रस्त्याची प्रत्यक्ष पाहणी करून खडीकरण व डांबरीकरणाचे अंदाजपत्रक तयार केले.',
        officerOrOffice: 'ZP उपविभाग खटाव'
      },
      {
        status: 'action_taken',
        date: '2026-10-07',
        title: 'दुरुस्ती काम सुरू (Patchwork & Repair Initiated)',
        description: 'कंत्राटदाराला तातडीने खड्डे बुजविण्याचे आदेश देण्यात आले असून काम प्रत्यक्ष सुरू झाले आहे.',
        officerOrOffice: 'सार्वजनिक बांधकाम कंत्राटदार'
      }
    ],
    citizenNotes: [
      '२ ऑक्टोबर: ग्रामसभेत सुद्धा हा विषय मांडला होता.',
      '७ ऑक्टोबर: रस्त्यावर खडी टाकण्याचे काम सुरू झाल्याचे पाहिले.'
    ],
    isDemoData: true
  },
  {
    id: 'GS-2026-00089',
    citizenName: 'सुनंदा विठ्ठल पाटील (Sunanda Patil)',
    citizenPhone: '+91 94210 56789',
    problemSummary: 'वस्तीत गेल्या आठ दिवसांपासून पिण्याच्या पाण्याचा पुरवठा बंद आहे, महिलांना २ किमी पायी जावे लागते.',
    category: 'water',
    department: 'ग्रामीण पाणी पुरवठा विभाग / जल जीवन मिशन',
    village: 'शिरूर (Shirur)',
    district: 'पुणे (Pune)',
    state: 'Maharashtra',
    status: 'resolved',
    urgency: 'critical',
    submissionDate: '2026-09-15',
    lastUpdated: '2026-09-22',
    schemeAssociated: 'Jal Jeevan Mission (Har Ghar Jal)',
    timeline: [
      {
        status: 'submitted',
        date: '2026-09-15',
        title: 'तक्रार नोंदवली (Grievance Registered)',
        description: 'तातडीच्या श्रेणीत पाणी टंचाईची तक्रार दाखल.',
        officerOrOffice: 'गावसाथी AI सहाय्यक'
      },
      {
        status: 'forwarded',
        date: '2026-09-16',
        title: 'ग्रामपंचायत पाणी समितीकडे पाठवले',
        description: 'मुख्य पाईपलाईन गळती असल्याचे निष्पन्न.',
        officerOrOffice: 'ग्रामपंचायत शिरूर'
      },
      {
        status: 'action_taken',
        date: '2026-09-18',
        title: 'नवीन व्हॉल्व्ह व पाईपलाईन दुरुस्ती पूर्ण',
        description: 'प्लंबर पथकाने नादुरुस्त व्हॉल्व्ह बदलला व जलकुंभाची चाचणी घेतली.',
        officerOrOffice: 'तांत्रिक पथक'
      },
      {
        status: 'resolved',
        date: '2026-09-22',
        title: 'पाणी पुरवठा पूर्ववत (Issue Resolved)',
        description: 'सर्व नळ जोडण्यांना शुद्ध पाण्याचा पुरवठा नियमित सुरू झाला. नागरिकांनी समाधान व्यक्त केले.',
        officerOrOffice: 'सरपंच व ग्रामसेवक'
      }
    ],
    citizenNotes: [
      '२० सप्टेंबर: पाणी नळाला आले, दाब चांगला आहे.'
    ],
    isDemoData: true
  },
  {
    id: 'GS-2026-00142',
    citizenName: 'अमित ज्ञानेश्वर गायकवाड (Amit Gaikwad)',
    citizenPhone: '+91 97654 32100',
    problemSummary: 'महाडीबीटी शिष्यवृत्ती फॉर्म भरून ६ महिने झाले पण आधार बँक डीबीटी मॅपिंग त्रुटीमुळे पैसे आले नाहीत.',
    category: 'education',
    department: 'सामाजिक न्याय व विशेष सहाय्य विभाग (महाडीबीटी)',
    village: 'राहाता (Rahata)',
    district: 'अहमदनगर (Ahilyanagar)',
    state: 'Maharashtra',
    status: 'under_review',
    urgency: 'medium',
    submissionDate: '2026-10-02',
    lastUpdated: '2026-10-06',
    schemeAssociated: 'State Post-Matric Scholarship',
    timeline: [
      {
        status: 'submitted',
        date: '2026-10-02',
        title: 'शिष्यवृत्ती अडचण नोंदवली',
        description: 'विद्यार्थ्याने आधार डीबीटी बँक मॅपिंग समस्येची नोंद केली.',
        officerOrOffice: 'गावसाथी हेल्पडेस्क'
      },
      {
        status: 'forwarded',
        date: '2026-10-04',
        title: 'महाविद्यालय शिष्यवृत्ती कक्षाकडे पाठवले',
        description: 'कॉलेजच्या नोडल अधिकाऱ्यांनी विद्यार्थ्याचा अर्ज पुन्हा छाननीसाठी उघडला.',
        officerOrOffice: 'महाविद्यालय शिष्यवृत्ती विभाग'
      },
      {
        status: 'under_review',
        date: '2026-10-06',
        title: 'बँक सीडिंग पडताळणी सुरू',
        description: 'NPCI पोर्टलवर आधार मॅपिंग लिंक यशस्वी झाली असून समाज कल्याण मंजुरी प्रलंबित आहे.',
        officerOrOffice: 'जिल्हा समाज कल्याण कार्यालय'
      }
    ],
    citizenNotes: [
      '४ ऑक्टोबर: बँकेत जाऊन NPCI फॉर्म भरून दिला.'
    ],
    isDemoData: true
  },
  {
    id: 'GS-2026-00155',
    citizenName: 'आनंदराव बळीराम मोहिते (Anandrao Mohite)',
    citizenPhone: '+91 91580 99881',
    problemSummary: 'शेतातील ट्रान्सफॉर्मर जळाला असून महावितरणकडे वारंवार सांगूनही नवीन ट्रान्सफॉर्मर बसवला नाही.',
    category: 'electricity',
    department: 'महाराष्ट्र राज्य विद्युत वितरण कंपनी (महावितरण)',
    village: 'करमाळा (Karmala)',
    district: 'सोलापूर (Solapur)',
    state: 'Maharashtra',
    status: 'forwarded',
    urgency: 'high',
    submissionDate: '2026-10-05',
    lastUpdated: '2026-10-08',
    schemeAssociated: 'PM-KUSUM / MSEDCL Agricultural Feeder',
    timeline: [
      {
        status: 'submitted',
        date: '2026-10-05',
        title: 'विद्युत तक्रार दाखल',
        description: '६३ केव्हीए शेती ट्रान्सफॉर्मर जळाल्याची अधिकृत तक्रार नोंद.',
        officerOrOffice: 'गावसाथी ग्राहक सेवा'
      },
      {
        status: 'forwarded',
        date: '2026-10-08',
        title: 'महावितरण उपकेंद्रास सूचना',
        description: 'कनिष्ठ अभियंता करमाळा यांना ट्रान्सफॉर्मर बदलण्यासाठी इंडेंट काढण्यास कळविले.',
        officerOrOffice: 'MSEDCL शाखा अभियंता'
      }
    ],
    citizenNotes: [],
    isDemoData: true
  }
];

export function getStoredComplaints(): Complaint[] {
  try {
    const raw = localStorage.getItem(COMPLAINTS_KEY);
    if (!raw) {
      localStorage.setItem(COMPLAINTS_KEY, JSON.stringify(INITIAL_COMPLAINTS));
      return INITIAL_COMPLAINTS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_COMPLAINTS;
  }
}

export function saveComplaint(complaint: Complaint): void {
  try {
    const current = getStoredComplaints();
    const updated = [complaint, ...current.filter(c => c.id !== complaint.id)];
    localStorage.setItem(COMPLAINTS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving complaint', err);
  }
}

export function updateComplaintStatus(id: string, status: ComplaintStatus, note?: string): Complaint | null {
  const current = getStoredComplaints();
  const index = current.findIndex(c => c.id.toLowerCase() === id.toLowerCase());
  if (index === -1) return null;

  const item = current[index];
  const now = new Date().toISOString().split('T')[0];

  const statusTitles: Record<ComplaintStatus, string> = {
    submitted: 'तक्रार दाखल (Submitted)',
    forwarded: 'विभागाकडे वर्ग (Forwarded to Department)',
    under_review: 'पुनरावलोकन व पाहणी सुरू (Under Review)',
    action_taken: 'कारवाई सुरू (Action Initiated)',
    resolved: 'निवारण पूर्ण (Grievance Resolved)'
  };

  const newEvent = {
    status,
    date: now,
    title: statusTitles[status],
    description: note || `Status progressed to ${status.replace('_', ' ')} by authority.`,
    officerOrOffice: 'Panchayat & Civic Authority'
  };

  item.status = status;
  item.lastUpdated = now;
  item.timeline.push(newEvent);

  if (note) {
    if (!item.citizenNotes) item.citizenNotes = [];
    item.citizenNotes.push(`${now}: ${note}`);
  }

  current[index] = item;
  localStorage.setItem(COMPLAINTS_KEY, JSON.stringify(current));
  return item;
}

export function addCitizenNoteToComplaint(id: string, noteText: string): Complaint | null {
  const current = getStoredComplaints();
  const index = current.findIndex(c => c.id.toLowerCase() === id.toLowerCase());
  if (index === -1) return null;

  const item = current[index];
  const now = new Date().toISOString().split('T')[0];
  if (!item.citizenNotes) item.citizenNotes = [];
  item.citizenNotes.push(`${now}: ${noteText}`);
  item.lastUpdated = now;

  current[index] = item;
  localStorage.setItem(COMPLAINTS_KEY, JSON.stringify(current));
  return item;
}

export function createComplaintFromAnalysis(
  analysis: ProblemAnalysis,
  citizenName: string,
  citizenPhone: string
): Complaint {
  const count = getStoredComplaints().length + 125;
  const newId = `GS-2026-${String(count).padStart(5, '0')}`;
  const today = new Date().toISOString().split('T')[0];

  const newComplaint: Complaint = {
    id: newId,
    citizenName: citizenName || 'नागरिक (Citizen)',
    citizenPhone: citizenPhone || '+91 98000 00000',
    problemSummary: analysis.userInput,
    category: analysis.primaryCategory,
    department: analysis.targetDepartment.mr || analysis.targetDepartment.en,
    village: analysis.citizenDetails?.village || 'ग्रामीण परिसर',
    district: analysis.citizenDetails?.district || 'जिल्हा',
    state: analysis.citizenDetails?.state || 'Maharashtra',
    status: 'submitted',
    urgency: analysis.urgency,
    submissionDate: today,
    lastUpdated: today,
    schemeAssociated: analysis.matchedScheme?.name.en || 'General Civic Grievance',
    timeline: [
      {
        status: 'submitted',
        date: today,
        title: 'तक्रार अधिकृतपणे दाखल (Grievance Logged)',
        description: `गावसाथी AI द्वारे समस्या विश्लेषण पूर्ण करून ${analysis.targetDepartment.mr}कडे पाठवण्यासाठी नोंद करण्यात आली.`,
        officerOrOffice: analysis.targetOfficer.mr || 'गावसाथी AI प्रणाली'
      }
    ],
    citizenNotes: [],
    isDemoData: true
  };

  saveComplaint(newComplaint);
  return newComplaint;
}

export function getStoredAnalyses(): ProblemAnalysis[] {
  try {
    const raw = localStorage.getItem(RECENT_ANALYSES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveAnalysis(analysis: ProblemAnalysis): void {
  try {
    const current = getStoredAnalyses();
    const updated = [analysis, ...current.slice(0, 19)];
    localStorage.setItem(RECENT_ANALYSES_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving analysis', err);
  }
}
