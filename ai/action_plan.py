"""
GAONSATHI AI - Action Plan & Document Checklist Generator
Produces concrete chronological steps and required proofs.
"""

from typing import List, Dict

DOCUMENTS_BY_CAT = {
    "water": ["Aadhaar Card", "Gram Panchayat Residence Proof (Namuna 8)", "Bank Passbook"],
    "education": ["Aadhaar linked with NPCI DBT", "Income Certificate from Tehsildar", "Marksheet & College Fee Receipt"],
    "roads": ["Photographs of damaged road", "Gram Panchayat Resolution / Citizen Signatures"],
    "housing": ["Aadhaar Card", "Bank Account with DBT", "Land Record / Namuna 8", "Job Card"],
    "electricity": ["7/12 Land Record Extract", "Aadhaar Card", "Co-owner NOC if joint well"],
    "pension": ["Age Proof Certificate", "Income Certificate", "Ration Card", "Bank Passbook"],
    "agriculture": ["Updated 7/12 & 8-A Extract", "Aadhaar Card", "Bank Passbook"],
    "employment": ["Aadhaar Card", "Passport Photo", "Gram Panchayat Job Card Registration"]
}

def generate_document_checklist(category: str) -> List[str]:
    """Generates the required documents list for the given category."""
    return DOCUMENTS_BY_CAT.get(category, [
        "Aadhaar Card of Applicant",
        "Residence Proof (Namuna 8 / Ration Card)",
        "Formal Grievance Petition"
    ])

def generate_action_plan(category: str) -> List[Dict[str, str]]:
    """Generates step-by-step resolution plan."""
    return [
        {
            "step": 1,
            "title": "Register Problem with Gram Sevak / Local Officer",
            "timeframe": "Day 1 - 2",
            "action": "Submit formal written grievance or register online and get dated receipt."
        },
        {
            "step": 2,
            "title": "Site Inspection & Document Verification",
            "timeframe": "Day 3 - 5",
            "action": "Gram Panchayat or designated technical personnel inspect the site."
        },
        {
            "step": 3,
            "title": "Administrative File Movement & Sanction",
            "timeframe": "Day 6 - 10",
            "action": "Technical sanction issued by Block Development Officer or Junior Engineer."
        },
        {
            "step": 4,
            "title": "Resolution Tracking & Citizen Confirmation",
            "timeframe": "Day 10 - 15",
            "action": "Verify physical execution and confirm grievance closure."
        }
    ]
