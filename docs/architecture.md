# GAONSATHI AI System Architecture

## Overview
**GAONSATHI AI** (“One Digital Assistant for Every Village Problem”) is an AI-powered civic technology platform built for the **Viksit Bharat Young Leaders Dialogue (VBYLD) 2027 Challenge: “Think Global, Hack Local – Technology for Social Transformation”**.

The system addresses the core rural challenge: **information asymmetry and bureaucratic navigation**. Rather than acting as a generic conversational chatbot, GAONSATHI AI operates as a deterministic, actionable civic router that converts rural citizen problems into step-by-step resolution pathways and trackable civic grievances.

---

## System Flow: "PROBLEM → UNDERSTANDING → SERVICE → ACTION"

```
Citizen Input (Marathi / Hindi / English, Speech or Text)
        ↓
Language Detection (Devanagari Unicode & Morphological Heuristics)
        ↓
AI/NLP Problem Understanding (Keyword Extraction, Stopword Filtering, Intent)
        ↓
Problem Classification (14 Civic Categories with Confidence Score)
        ↓
Welfare Scheme & Service Recommendation (Central & State Level Mapping)
        ↓
Eligibility Criteria & Document Readiness Checklist
        ↓
Transparent Explainable AI (Why This Recommendation?)
        ↓
Step-by-Step Chronological Action Plan with Jurisdictional Officer
        ↓
Civic Grievance / Complaint Tracking (GS-2026-XXXXX) & Status Lifecycle
```

---

## 14 Civic Problem Categories
1. **Water Supply (पाणी पुरवठा / जल आपूर्ति)**: Jal Jeevan Mission, village pipelines, tankers, handpumps.
2. **Electricity & Power (वीज पुरवठा व ऊर्जा / बिजली एवं ऊर्जा)**: Agricultural feeders, transformers, load shedding, PM-KUSUM solar pumps.
3. **Village Roads & Connectivity (ग्रामीण रस्ते / ग्रामीण सड़कें)**: PMGSY, pothole repairs, culverts, farm road access.
4. **Education & Scholarships (शिक्षण व शिष्यवृत्ती / शिक्षा एवं छात्रवृत्ति)**: MahaDBT, National Scholarship Portal (NSP), mid-day meals.
5. **Agriculture & Farming (शेती व शेतकरी / कृषि एवं किसान)**: PM-KISAN, crop insurance (PMFBY), seed subsidies.
6. **Housing & Shelter (घरकुल व निवारा / आवास एवं मकान)**: Pradhan Mantri Awaas Yojana - Gramin (PMAY-G), Ramai Gharkul.
7. **Healthcare & Medicine (आरोग्य सेवा / स्वास्थ्य सेवाएं)**: PHC doctors, Ayushman Bharat - PMJAY Golden Card.
8. **Social Security Pension (पेन्शन व सामाजिक सुरक्षा / पेंशन)**: Sanjay Gandhi Niradhar Yojana, Indira Gandhi Old Age Pension.
9. **Government Schemes & Subsidies (शासकीय योजना व अनुदान)**: General welfare, SHG loans.
10. **Rural Employment & Livelihood (रोजगार व उपजीविका / मनरेगा)**: MGNREGA 100-day job guarantee, muster rolls.
11. **Documents & Certificates (दाखले व कागदपत्रे / दस्तावेज)**: 7/12 extract, income, caste, domicile via Aaple Sarkar / CSC.
12. **Sanitation & Cleanliness (स्वच्छता व कचरा / स्वच्छता)**: Swachh Bharat Mission Grameen (IHHL toilet subsidy).
13. **Digital Services & CSC (डिजिटल सेवा / जन सेवा केंद्र)**: Gram Panchayat e-Seva kiosks, DigiLocker.
14. **Other Civic Issues (इतर नागरी समस्या / अन्य नागरिक मामले)**: Gram Sabha notices, village boundary disputes.

---

## Explainable AI (XAI) Architecture
Unlike opaque black-box LLMs, GAONSATHI AI makes its decision factors completely transparent to citizens and civic officers:
1. **Keyword Match**: Displays specific phrases extracted from citizen speech/text.
2. **Category Weighting**: Explains category selection based on domain dictionary scoring.
3. **Jurisdiction Verification**: Verifies village and district governance level.
4. **Confidence Score**: Quantitative measure (70% - 98%) indicating classification reliability.

---

## Zero-Cost, 100% Offline Resilience
- **No external paid API keys required**.
- Operates using lightweight rule-based NLP and browser Web Speech APIs.
- Can optionally connect to Gemini API or local fine-tuned transformers via backend proxy.
