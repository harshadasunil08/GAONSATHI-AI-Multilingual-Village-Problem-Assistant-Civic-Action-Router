import React, { useState } from 'react';
import { Complaint, Language, ProblemAnalysis } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemForm } from './components/ProblemForm';
import { AnalysisResult } from './components/AnalysisResult';
import { ComplaintTracker } from './components/ComplaintTracker';
import { CitizenDashboard } from './components/CitizenDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { SchemesExplorer } from './components/SchemesExplorer';
import { HelplinesDirectory } from './components/HelplinesDirectory';
import { ComplaintModal } from './components/ComplaintModal';
import { Footer } from './components/Footer';
import { saveAnalysis } from './services/storage';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('mr');
  const [activeTab, setActiveTab] = useState<string>('home');

  // Assistant State
  const [currentAnalysis, setCurrentAnalysis] = useState<ProblemAnalysis | null>(null);
  const [assistantPrefillText, setAssistantPrefillText] = useState<string>('');
  const [assistantPrefillLang, setAssistantPrefillLang] = useState<Language>('mr');

  // Grievance / Complaint Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeComplaintId, setActiveComplaintId] = useState<string>('GS-2026-00124');

  // Handle sample problem selection from hero section
  const handleSelectSampleProblem = (text: string, lang: Language) => {
    setAssistantPrefillText(text);
    setAssistantPrefillLang(lang);
    setCurrentLang(lang);
    setCurrentAnalysis(null);
    setActiveTab('assistant');
  };

  const handleAnalysisComplete = (analysis: ProblemAnalysis) => {
    setCurrentAnalysis(analysis);
    saveAnalysis(analysis);
  };

  const handleResetAnalysis = () => {
    setCurrentAnalysis(null);
    setAssistantPrefillText('');
  };

  const handleComplaintCreated = (complaint: Complaint) => {
    setActiveComplaintId(complaint.id);
    setActiveTab('complaints');
  };

  const handleSelectComplaintFromList = (id: string) => {
    setActiveComplaintId(id);
    setActiveTab('complaints');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeTab={activeTab}
        onNavigate={setActiveTab}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === 'home' && (
          <HeroSection
            currentLang={currentLang}
            onNavigate={setActiveTab}
            onSelectSampleProblem={handleSelectSampleProblem}
          />
        )}

        {activeTab === 'assistant' && (
          <div className="space-y-8">
            {!currentAnalysis ? (
              <ProblemForm
                currentLang={currentLang}
                onAnalysisComplete={handleAnalysisComplete}
                initialText={assistantPrefillText}
                initialLang={assistantPrefillLang}
              />
            ) : (
              <AnalysisResult
                analysis={currentAnalysis}
                currentLang={currentLang}
                onOpenComplaintModal={() => setIsModalOpen(true)}
                onReset={handleResetAnalysis}
              />
            )}
          </div>
        )}

        {activeTab === 'schemes' && (
          <SchemesExplorer currentLang={currentLang} />
        )}

        {activeTab === 'complaints' && (
          <ComplaintTracker
            currentLang={currentLang}
            initialComplaintId={activeComplaintId}
            onNavigateToAssistant={() => {
              handleResetAnalysis();
              setActiveTab('assistant');
            }}
          />
        )}

        {activeTab === 'dashboard' && (
          <CitizenDashboard
            currentLang={currentLang}
            onNavigateToAssistant={() => {
              handleResetAnalysis();
              setActiveTab('assistant');
            }}
            onSelectComplaint={handleSelectComplaintFromList}
          />
        )}

        {activeTab === 'helplines' && (
          <HelplinesDirectory currentLang={currentLang} />
        )}

        {activeTab === 'admin' && (
          <AdminDashboard
            currentLang={currentLang}
            onSelectComplaint={handleSelectComplaintFromList}
          />
        )}
      </main>

      {/* Complaint Registration Modal */}
      {currentAnalysis && (
        <ComplaintModal
          analysis={currentAnalysis}
          currentLang={currentLang}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onComplaintCreated={handleComplaintCreated}
        />
      )}

      {/* Footer */}
      <Footer currentLang={currentLang} onNavigate={setActiveTab} />
    </div>
  );
}
