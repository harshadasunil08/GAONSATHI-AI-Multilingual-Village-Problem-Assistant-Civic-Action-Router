#!/usr/bin/env python3
"""
GAONSATHI AI - Database Seeder
Seeds SQLite database with default rural categories, welfare schemes, and sample complaints.
"""

import sqlite3
import json
import os

DB_PATH = os.path.join(os.path.dirname(__file__), "gaonsathi.db")
SCHEMA_PATH = os.path.join(os.path.dirname(__file__), "schema.sql")

def init_and_seed():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Read and execute schema
    with open(SCHEMA_PATH, "r", encoding="utf-8") as f:
        cursor.executescript(f.read())

    # Seed Categories
    categories = [
        ("water", "Water Supply", "पाणी पुरवठा", "जल आपूर्ति", "Rural Water Supply Dept", "ग्रामीण पाणी पुरवठा विभाग", "Droplets"),
        ("electricity", "Electricity & Power", "वीज पुरवठा व ऊर्जा", "बिजली एवं ऊर्जा", "MSEDCL / DISCOM", "महावितरण", "Zap"),
        ("roads", "Village Roads", "ग्रामीण रस्ते", "ग्रामीण सड़कें", "PWD / ZP Works", "सार्वजनिक बांधकाम विभाग", "Route"),
        ("education", "Education & Scholarships", "शिक्षण व शिष्यवृत्ती", "शिक्षा एवं छात्रवृत्ति", "Education & Social Welfare", "शालेय शिक्षण व समाज कल्याण", "GraduationCap"),
        ("agriculture", "Agriculture & Farming", "शेती व शेतकरी", "कृषि एवं किसान", "Agriculture Dept", "कृषी विभाग", "Sprout"),
        ("housing", "Housing & Shelter", "घरकुल व निवारा", "आवास एवं मकान", "Rural Housing Cell", "ग्रामविकास घरकुल कक्ष", "Home"),
        ("healthcare", "Healthcare & Medicine", "आरोग्य सेवा", "स्वास्थ्य सेवाएं", "Public Health Dept", "सार्वजनिक आरोग्य विभाग", "HeartPulse"),
        ("pension", "Social Security Pension", "पेन्शन व सामाजिक सुरक्षा", "पेंशन योजना", "Revenue Dept", "महसूल व विशेष सहाय्य", "Users"),
        ("employment", "Rural Employment", "रोजगार व उपजीविका", "ग्रामीण रोजगार", "MGNREGA Cell", "रोजगार हमी योजना कक्ष", "Briefcase"),
        ("documents", "Documents & Certificates", "दाखले व कागदपत्रे", "दस्तावेज व प्रमाण पत्र", "Revenue / Setu Kendra", "महसूल / आपले सरकार", "FileText"),
        ("sanitation", "Sanitation & Cleanliness", "स्वच्छता व कचरा", "स्वच्छता व प्रबंधन", "Swachh Bharat Mission", "स्वच्छ भारत अभियान", "Sparkles"),
    ]

    cursor.executemany("""
        INSERT OR REPLACE INTO categories (id, name_en, name_mr, name_hi, department_en, department_mr, icon_name)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    """, categories)

    # Seed Complaints
    complaints = [
        ("GS-2026-00124", "रमेश सखाराम जाधव", "+91 98220 12345", "roads", "सार्वजनिक बांधकाम विभाग (PWD)", "वडुज", "सातारा", "Maharashtra", "गावातील मुख्य रस्त्यावर मोठे खड्डे पडले आहेत.", "action_taken", "high", "2026-09-28", "2026-10-07"),
        ("GS-2026-00089", "सुनंदा विठ्ठल पाटील", "+91 94210 56789", "water", "ग्रामीण पाणी पुरवठा विभाग", "शिरूर", "पुणे", "Maharashtra", "वस्तीत पिण्याच्या पाण्याचा पुरवठा आठ दिवसांपासून बंद आहे.", "resolved", "critical", "2026-09-15", "2026-09-22"),
        ("GS-2026-00142", "अमित ज्ञानेश्वर गायकवाड", "+91 97654 32100", "education", "महाडीबीटी शिष्यवृत्ती कक्ष", "राहाता", "अहमदनगर", "Maharashtra", "महाडीबीटी शिष्यवृत्ती बँक आधार सीडिंग एररमुळे प्रलंबित आहे.", "under_review", "medium", "2026-10-02", "2026-10-06"),
    ]

    cursor.executemany("""
        INSERT OR REPLACE INTO complaints (id, citizen_name, citizen_phone, category_id, department, village, district, state, issue_summary, status, urgency, submission_date, last_updated)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, complaints)

    conn.commit()
    conn.close()
    print("Database gaonsathi.db successfully initialized and seeded with demo data.")

if __name__ == "__main__":
    init_and_seed()
