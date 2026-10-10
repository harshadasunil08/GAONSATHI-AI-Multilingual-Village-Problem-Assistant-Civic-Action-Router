# GAONSATHI AI
### “One Digital Assistant for Every Village Problem”
**Viksit Bharat Young Leaders Dialogue (VBYLD) 2027 Challenge:**  
*“Think Global, Hack Local – Technology for Social Transformation”*

---

## 1. Problem Statement
Over 65% of India's population resides in rural areas across more than 6,60,000 villages. While state and central governments provide hundreds of welfare schemes and public civic services, rural citizens face persistent barriers:
- Unawareness of which scheme or service applies to their problem.
- Inability to navigate bureaucratic prerequisites (eligibility, documents).
- Digital literacy and linguistic barriers (interfaces often lack conversational Marathi or Hindi).
- Confusion regarding which department (Panchayat, Tehsildar, DISCOM, PWD) to hold accountable.
- Lack of follow-up visibility after submitting a grievance.

## 2. Solution: GAONSATHI AI
**GAONSATHI AI** is a multilingual, explainable civic-tech platform that converts natural language problem statements into an actionable resolution plan and trackable grievance lifecycle.

**Core Paradigm:**  
$$\text{PROBLEM} \longrightarrow \text{UNDERSTANDING} \longrightarrow \text{SERVICE} \longrightarrow \text{ACTION}$$

Citizens can speak or write their problems in **Marathi**, **Hindi**, or **English**. The AI analyzes the problem, maps it to the exact government scheme, verifies eligibility criteria, creates a printable document checklist, designates responsible authorities, and issues a trackable grievance ID (e.g. `GS-2026-00124`).

---

## 3. Key Features
- **Multilingual NLP Engine**: Native support for Marathi (मराठी), Hindi (हिंदी), and English.
- **Voice-Enabled Interface**: Integrated Web Speech Recognition API with mic input and Text-to-Speech (read-aloud) for digitally less-literate villagers.
- **14 Civic Categories**: Water, Electricity, Roads, Education, Agriculture, Housing, Healthcare, Pension, Employment, Documents, Sanitation, and Civic Disputes.
- **Explainable AI (XAI)**: Full transparency showing *"Why this recommendation?"* with detected keywords, rule scores, and jurisdictional routing.
- **Interactive Grievance Lifecycle Tracker**: 5-step status progression (*Submitted $\rightarrow$ Forwarded to Dept $\rightarrow$ Under Review $\rightarrow$ Action Taken $\rightarrow$ Resolved*).
- **Dual Dashboards**:
  - **Citizen Dashboard**: Personal grievance status, eligible scheme alerts, and quick actions.
  - **Panchayat / Civic Admin Console**: Category frequency charts, village resolution rates, and grievance triage.
- **100% Offline-Capable**: Fully functional rule-based NLP engine that requires **no external paid API keys**.

---

## 4. Technology Stack
- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Lucide Icons.
- **Speech & Audio**: Browser Web Speech Recognition API & Web SpeechSynthesis.
- **Backend**: Python 3.10+ / Flask, Node.js Express.
- **Database**: SQLite / LocalStorage persistent state.
- **NLP / AI Engine**: Multilingual Devanagari Tokenizer, Stopword Filtering, TF-IDF weighted Category Rules, and Optional Gemini LLM Booster.

---

## 5. System Architecture
```
[Citizen Input] (Speech / Text in Marathi, Hindi, English)
       │
       ▼
[Language Detector] (Devanagari Unicode & Morphological Heuristics)
       │
       ▼
[AI / NLP Classifier] (14 Category Dictionaries + Urgency Scorer)
       │
       ▼
[Scheme Matcher] (Jal Jeevan, PM-KUSUM, PMAY-G, PMGSY, MahaDBT, etc.)
       │
       ▼
[Explainable AI Engine] (Transparent Keyword & Jurisdiction Breakdown)
       │
       ▼
[Action Plan & Checklist Generator] (Chronological Roadmap + Documents)
       │
       ▼
[Grievance Tracking Module] (GS-2026-XXXXX with Real-Time Timelines)
```

---

## 6. Installation & How to Run

### Option A: Web Application (React + Vite)
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# Access the app at: http://localhost:3000
```

### Option B: Python Backend (Flask + SQLite)
```bash
# 1. Create and activate a virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 2. Install requirements
pip install -r requirements.txt

# 3. Initialize and seed SQLite database
python3 database/seed.py

# 4. Start Flask backend server
python3 backend/app.py

# API will run at: http://localhost:5000
```

---

## 7. Demo Credentials & Sample Cases
No authentication is required for basic testing. Use the following pre-built sample queries for a 3–5 minute hackathon demonstration:

| Case | Language | Query | Expected Category | Scheme |
|------|----------|-------|-------------------|--------|
| **Demo 1** | Marathi | *“माझ्या गावात पाणी नियमित येत नाही.”* | Water Supply | Jal Jeevan Mission |
| **Demo 2** | Marathi | *“माझ्या मुलाला scholarship मिळाली नाही.”* | Education | MahaDBT / NSP |
| **Demo 3** | Marathi | *“शेतात वीज वारंवार जाते, ट्रान्सफॉर्मर जळाला आहे.”* | Electricity | PM-KUSUM Solar Pump |
| **Demo 4** | Hindi | *“गांव में पीने का पानी नियमित नहीं आता, पाइपलाइन टूटी है।”* | Water Supply | Jal Jeevan Mission |
| **Demo 5** | English | *“The main village approach road has severe potholes.”* | Roads | PMGSY Rural Roads |

---

## 8. Dataset Description
- `data/schemes.json`: Central and State level welfare schemes with official URLs, required documents, and eligibility criteria.
- `data/services.json`: Common public service turnarounds (SLAs) for water tankers, transformer replacement, and land extracts.
- `data/sample_problems.json`: 20+ realistic rural problems across Marathi, Hindi, and English with ground-truth classifications.

---

## 9. VBYLD 2027 Alignment
- **Rural Development & Livelihoods**: Empowers farmers and unorganized laborers to claim welfare entitlements without middlemen.
- **Digital Inclusion**: Removes digital literacy barriers through voice recognition and local language interfaces.
- **Civic Tech & Open Governance**: Promotes transparent, trackable grievance escalation to Gram Sevaks and Panchayat officials.
- **AI for Social Transformation**: Uses explainable natural language understanding to solve grassroots civic challenges.

---

## 10. AI Usage Disclosure & Future Scope
- **Current Model**: Deterministic NLP classifier with keyword extraction, confidence scoring, and rule heuristics.
- **Future Scope**: Integration with fine-tuned regional Indic-LLMs (such as Bhashini), WhatsApp voice bot integration, and GIS-based automatic Gram Panchayat boundary detection.
- **Civic Data Integrity**: Schemes and public workflows integrate verified governance criteria from Jal Jeevan Mission, PM-KUSUM, PMAY-G, PMGSY, and state welfare departments.

---

## 11. License
MIT License. Open for public and civic innovation under Viksit Bharat 2047 initiatives.
