"""
GAONSATHI AI - Language Detection Module
Identifies Marathi, Hindi, or English from citizen queries.
"""

import re

def detect_language(text: str) -> str:
    """Detects whether text is Marathi ('mr'), Hindi ('hi'), or English ('en')."""
    if not text or not text.strip():
        return "en"

    clean_text = text.strip()
    devanagari_chars = len(re.findall(r'[\u0900-\u097F]', clean_text))
    total_letters = len(re.findall(r'[a-zA-Z\u0900-\u097F]', clean_text))

    if total_letters > 0 and (devanagari_chars / total_letters) > 0.35:
        lower = clean_text.lower()
        
        marathi_markers = [
            'माझ्या', 'आहे', 'नाही', 'गावात', 'मुलाला', 'मिळाली', 'येत', 'रस्ता', 'शेतात',
            'करायचा', 'दाखला', 'हप्ता', 'पाहिजे', 'गेल्या', 'झाला', 'झाली', 'काय', 'कोणती'
        ]
        hindi_markers = [
            'मेरे', 'है', 'नहीं', 'गांव में', 'बेटे', 'मिली', 'सड़क', 'खेत में',
            'करना', 'चाहिए', 'हुआ', 'हुई', 'क्या', 'कौन सी', 'रहा', 'रही', 'पेंडिंग'
        ]

        mr_score = sum(2 for m in marathi_markers if m in lower)
        hi_score = sum(2 for m in hindi_markers if m in lower)

        if mr_score >= hi_score and mr_score > 0:
            return "mr"
        elif hi_score > mr_score:
            return "hi"
        return "mr"

    return "en"
