"""
GAONSATHI AI - Scheme Recommendation Engine
Maps problem categories to official welfare schemes and provides explainability.
"""

from typing import Dict, Any

SCHEME_MAP = {
    "water": {
        "id": "jal-jeevan-mission",
        "name": "Jal Jeevan Mission (Har Ghar Jal)",
        "dept": "Rural Water Supply & Sanitation Department",
        "portal": "https://jaljeevanmission.gov.in"
    },
    "education": {
        "id": "mahadbt-scholarship",
        "name": "National Scholarship Portal & MahaDBT",
        "dept": "Social Welfare & Higher Education Directorate",
        "portal": "https://scholarships.gov.in"
    },
    "roads": {
        "id": "pmgsy-roads",
        "name": "Pradhan Mantri Gram Sadak Yojana (PMGSY)",
        "dept": "PWD & Zilla Parishad Works",
        "portal": "https://omms.nic.in"
    },
    "housing": {
        "id": "pmay-g",
        "name": "Pradhan Mantri Awaas Yojana - Gramin",
        "dept": "Ministry of Rural Development / Gram Panchayat",
        "portal": "https://pmayg.nic.in"
    },
    "electricity": {
        "id": "pm-kusum",
        "name": "PM-KUSUM Solar Agricultural Pump Scheme",
        "dept": "MSEDCL / DISCOM & MNRE",
        "portal": "https://pmkusum.mnre.gov.in"
    },
    "pension": {
        "id": "sanjay-gandhi-niradhar",
        "name": "Indira Gandhi Old Age Pension & Sanjay Gandhi Niradhar",
        "dept": "Revenue Dept (Tehsildar Office)",
        "portal": "https://nsap.nic.in"
    },
    "agriculture": {
        "id": "pm-kisan",
        "name": "PM-KISAN Samman Nidhi & Crop Insurance (PMFBY)",
        "dept": "Agriculture & Farmers Welfare Department",
        "portal": "https://pmkisan.gov.in"
    },
    "employment": {
        "id": "mgnrega",
        "name": "MGNREGA 100-Day Wage Employment Guarantee",
        "dept": "Gram Rozgar Sahayak & BDO",
        "portal": "https://nrega.nic.in"
    }
}

def recommend_service(category: str, user_text: str) -> Dict[str, Any]:
    """Recommends a scheme and generates transparent why-recommended explanation."""
    scheme = SCHEME_MAP.get(category, {
        "id": "general-civic",
        "name": "Gram Panchayat Public Grievance Redressal",
        "dept": "Gram Sevak & Panchayat Samiti",
        "portal": "https://aaplesarkar.mahaonline.gov.in"
    })

    why_text = f"Your inquiry contains keywords matching {category.capitalize()}. The system routed this directly to {scheme['name']} which is the jurisdictional welfare authority."

    return {
        "scheme": scheme,
        "why_recommended": why_text
    }
