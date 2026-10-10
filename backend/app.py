"""
GAONSATHI AI - Python Flask Backend Entry Point
Provides REST APIs for Problem NLP Analysis, Scheme Recommendations, and Grievance Tracking.
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os
import sys

# Ensure ai directory is in path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from ai.language import detect_language
from ai.classifier import classify_problem
from ai.recommendation import recommend_service
from ai.action_plan import generate_action_plan, generate_document_checklist

app = Flask(__name__)
CORS(app)

DB_PATH = os.path.join(os.path.dirname(__file__), "..", "database", "gaonsathi.db")

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({
        "status": "online",
        "service": "GAONSATHI AI API",
        "version": "1.0.0",
        "vbyld_challenge": "Think Global, Hack Local"
    })

@app.route("/api/analyze", methods=["POST"])
def analyze():
    data = request.get_json() or {}
    text = data.get("text", "").strip()

    if not text:
        return jsonify({"error": "No problem text provided"}), 400

    lang = data.get("language") or detect_language(text)
    category, confidence, keywords = classify_problem(text)
    rec = recommend_service(category, text)
    action_plan = generate_action_plan(category)
    checklist = generate_document_checklist(category)

    return jsonify({
        "detected_language": lang,
        "category": category,
        "confidence_score": confidence,
        "keywords": keywords,
        "recommended_scheme": rec["scheme"],
        "why_recommended": rec["why_recommended"],
        "action_plan": action_plan,
        "required_documents": checklist
    })

@app.route("/api/complaints", methods=["GET"])
def get_complaints():
    conn = get_db()
    rows = conn.execute("SELECT * FROM complaints ORDER BY submission_date DESC").fetchall()
    complaints = [dict(row) for row in rows]
    conn.close()
    return jsonify(complaints)

@app.route("/api/complaints/<complaint_id>", methods=["GET"])
def get_complaint(complaint_id):
    conn = get_db()
    row = conn.execute("SELECT * FROM complaints WHERE id = ?", (complaint_id,)).fetchone()
    conn.close()
    if not row:
        return jsonify({"error": "Complaint not found"}), 404
    return jsonify(dict(row))

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print(f"Starting GAONSATHI AI Backend on port {port}...")
    app.run(host="0.0.0.0", port=port, debug=True)
