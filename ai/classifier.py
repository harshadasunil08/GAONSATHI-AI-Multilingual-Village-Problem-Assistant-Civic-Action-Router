"""
GAONSATHI AI - NLP Problem Classifier
Classifies rural problem descriptions into 14 civic categories with confidence score.
"""

import re
from typing import Dict, List, Tuple

CATEGORY_KEYWORDS = {
    "water": [
        "पाणी", "पाणीपुरवठा", "पाणी येत नाही", "नळ", "विहीर", "बोअरवेल", "टँकर", "गळती", "जलजीवन",
        "पानी", "जल", "पेयजल", "नल", "बोरवेल", "टैंकर", "पाइपलाइन", "पानी नहीं आ रहा",
        "water", "drinking water", "tap", "pipeline", "leakage", "borewell", "tanker"
    ],
    "electricity": [
        "वीज", "लाईट", "ट्रान्सफॉर्मर", "डीपी", "लोडशेडिंग", "महावितरण", "फिडर", "सौर पंप", "कुसुम",
        "बिजली", "लाइट", "ट्रांसफार्मर", "डीपी जल गई", "बिजली कटौती", "सोलर पंप", "कुसुम",
        "electricity", "power cut", "transformer", "feeder", "solar pump", "kusum"
    ],
    "roads": [
        "रस्ता", "रस्ते", "खड्डे", "पूल", "डांबरीकरण", "पाणंद", "ग्राम सडक", "रस्ता खराब",
        "सड़क", "रास्ता", "गड्ढे", "पुल", "पुलिया", "डामर", "ग्राम सड़क", "सड़क खराब",
        "road", "roads", "pothole", "potholes", "bridge", "pmgsy", "broken road"
    ],
    "education": [
        "शिष्यवृत्ती", "scholarship", "शाळा", "शिक्षण", "कॉलेज", "फी", "महाडीबीटी", "विद्यार्थी",
        "छात्रवृत्ति", "स्कॉलरशिप", "स्कूल", "विद्यालय", "शिक्षा", "कॉलेज", "फीस", "एनएसपी",
        "scholarship", "school", "education", "college", "tuition", "nsp", "mahadbt"
    ],
    "agriculture": [
        "शेती", "शेतकरी", "पीक", "पीएम-किसान", "विमा", "खते", "बियाणे", "कृषी", "नुकसान भरपाई",
        "खेती", "किसान", "फसल", "पीएम-किसान", "फसल बीमा", "बीज", "खाद", "कृषि", "मुआवजा",
        "agriculture", "farmer", "farming", "crop", "pm-kisan", "pmfby", "harvest"
    ],
    "housing": [
        "घर", "घरकुल", "पंतप्रधान आवास", "कच्चे घर", "छप्पर", "बांधकाम", "आवास प्लस",
        "आवास", "मकान", "प्रधानमंत्री आवास योजना", "कच्चा मकान", "छत", "पीएमएवाई",
        "housing", "house", "pmay", "pmay-g", "kutcha house", "roof", "gharkul"
    ],
    "healthcare": [
        "दवाखाना", "आरोग्य", "हॉस्पिटल", "डॉक्टर", "रुग्णवाहिका", "आयुष्मान", "औषधे", "phc",
        "अस्पताल", "स्वास्थ्य", "डॉक्टर", "एंबुलेंस", "आयुष्मान भारत", "दवा", "इलाज",
        "health", "hospital", "doctor", "ambulance", "ayushman", "medicine", "clinic"
    ],
    "pension": [
        "पेन्शन", "वृद्धापकाळ", "संजय गांधी", "निराधार", "वृद्ध", "विधवा", "दिव्यांग",
        "पेंशन", "वृद्धावस्था", "निराश्रित", "बुजुर्ग", "वृद्ध", "विधवा", "दिव्यांग",
        "pension", "old age", "elderly", "senior citizen", "widow", "destitute"
    ],
    "employment": [
        "मनरेगा", "रोजगार", "काम", "मजुरी", "जॉब कार्ड", "रोजगार हमी",
        "मनरेगा", "रोजगार", "काम", "मजदूरी", "जॉब कार्ड", "नरेगा",
        "mgnrega", "nrega", "employment", "job card", "wages", "unskilled work"
    ],
    "documents": [
        "दाखला", "प्रमाणपत्र", "उत्पन्न", "७/१२", "जात प्रमाणपत्र", "रहिवासी", "रेशन कार्ड",
        "प्रमाण पत्र", "आय प्रमाण पत्र", "जाति प्रमाण पत्र", "खतौनी", "7/12", "निवास",
        "certificate", "income certificate", "caste certificate", "7/12", "domicile"
    ]
}

def extract_keywords(text: str) -> List[str]:
    """Extracts non-stopword tokens from problem query."""
    clean = re.sub(r'[^\w\s]', ' ', text.lower())
    tokens = clean.split()
    stopwords = {"and", "the", "for", "with", "this", "that", "माझ्या", "आहे", "नाही", "मध्ये", "है", "नहीं", "में", "से"}
    return [t for t in tokens if len(t) > 2 and t not in stopwords][:8]

def classify_problem(user_input: str) -> Tuple[str, int, List[str]]:
    """
    Returns (category, confidence_score, matched_keywords).
    """
    lower = user_input.lower()
    scores: Dict[str, int] = {k: 0 for k in CATEGORY_KEYWORDS}
    matched: Dict[str, List[str]] = {k: [] for k in CATEGORY_KEYWORDS}

    for cat, kw_list in CATEGORY_KEYWORDS.items():
        for kw in kw_list:
            if kw.lower() in lower:
                scores[cat] += 3
                matched[cat].append(kw)

    best_cat = max(scores, key=scores.get)
    max_score = scores[best_cat]

    if max_score == 0:
        return "civic_issues", 70, extract_keywords(user_input)

    confidence = min(98, max(72, 65 + (max_score * 5)))
    return best_cat, confidence, matched[best_cat]
