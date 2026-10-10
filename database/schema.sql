-- GAONSATHI AI Database Schema (SQLite)
-- Viksit Bharat Young Leaders Dialogue (VBYLD) 2027 Challenge

PRAGMA foreign_keys = ON;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    phone_number TEXT UNIQUE NOT NULL,
    state TEXT DEFAULT 'Maharashtra',
    district TEXT NOT NULL,
    village TEXT NOT NULL,
    occupation TEXT,
    annual_income TEXT,
    language_preference TEXT DEFAULT 'mr',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name_en TEXT NOT NULL,
    name_mr TEXT NOT NULL,
    name_hi TEXT NOT NULL,
    department_en TEXT NOT NULL,
    department_mr TEXT NOT NULL,
    icon_name TEXT
);

-- 3. Schemes Table
CREATE TABLE IF NOT EXISTS schemes (
    id TEXT PRIMARY KEY,
    name_en TEXT NOT NULL,
    name_mr TEXT NOT NULL,
    name_hi TEXT NOT NULL,
    short_code TEXT NOT NULL,
    category_id TEXT NOT NULL,
    level TEXT NOT NULL,
    description_en TEXT,
    eligibility_json TEXT,
    required_docs_json TEXT,
    official_portal TEXT,
    is_demo BOOLEAN DEFAULT 1,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- 4. Services Table
CREATE TABLE IF NOT EXISTS services (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category_id TEXT NOT NULL,
    department TEXT NOT NULL,
    turnaround_days INTEGER,
    sla TEXT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- 5. Problems Table (Citizen Submissions Analyzed by NLP)
CREATE TABLE IF NOT EXISTS problems (
    id TEXT PRIMARY KEY,
    user_id INTEGER,
    raw_text TEXT NOT NULL,
    detected_language TEXT NOT NULL,
    classified_category TEXT NOT NULL,
    confidence_score INTEGER NOT NULL,
    urgency TEXT NOT NULL,
    keywords_json TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (classified_category) REFERENCES categories(id)
);

-- 6. Recommendations Table (Explainable AI outputs)
CREATE TABLE IF NOT EXISTS recommendations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    problem_id TEXT NOT NULL,
    scheme_id TEXT,
    why_recommended TEXT NOT NULL,
    action_plan_json TEXT NOT NULL,
    checklist_json TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (problem_id) REFERENCES problems(id),
    FOREIGN KEY (scheme_id) REFERENCES schemes(id)
);

-- 7. Complaints Table (Civic Grievances)
CREATE TABLE IF NOT EXISTS complaints (
    id TEXT PRIMARY KEY, -- e.g. GS-2026-00124
    problem_id TEXT,
    citizen_name TEXT NOT NULL,
    citizen_phone TEXT,
    category_id TEXT NOT NULL,
    department TEXT NOT NULL,
    village TEXT NOT NULL,
    district TEXT NOT NULL,
    state TEXT NOT NULL,
    issue_summary TEXT NOT NULL,
    status TEXT NOT NULL CHECK(status IN ('submitted', 'forwarded', 'under_review', 'action_taken', 'resolved')),
    urgency TEXT NOT NULL,
    submission_date DATE NOT NULL,
    last_updated DATE NOT NULL,
    FOREIGN KEY (problem_id) REFERENCES problems(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- 8. Applications Table (Benefit applications under schemes)
CREATE TABLE IF NOT EXISTS applications (
    id TEXT PRIMARY KEY,
    complaint_id TEXT,
    scheme_id TEXT NOT NULL,
    citizen_name TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    applied_date DATE DEFAULT (DATE('now')),
    FOREIGN KEY (complaint_id) REFERENCES complaints(id),
    FOREIGN KEY (scheme_id) REFERENCES schemes(id)
);

-- 9. Documents Table (Citizen documents attached or checklist)
CREATE TABLE IF NOT EXISTS documents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    complaint_id TEXT,
    doc_name TEXT NOT NULL,
    is_verified BOOLEAN DEFAULT 0,
    FOREIGN KEY (complaint_id) REFERENCES complaints(id)
);

-- 10. Feedback Table (Citizen satisfaction after resolution)
CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    complaint_id TEXT NOT NULL,
    rating INTEGER CHECK(rating BETWEEN 1 AND 5),
    comments TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (complaint_id) REFERENCES complaints(id)
);

-- Timeline events table for complaints
CREATE TABLE IF NOT EXISTS complaint_timeline (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    complaint_id TEXT NOT NULL,
    status TEXT NOT NULL,
    event_date DATE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    officer_office TEXT,
    FOREIGN KEY (complaint_id) REFERENCES complaints(id)
);
