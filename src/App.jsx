import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VoiceIntro from './components/VoiceIntro';
import Global3DBackground from './components/Global3DBackground';

// Pages
import Home from './pages/Home';
import CompanyLibrary from './pages/CompanyLibrary';
import InterviewGenerator from './pages/InterviewGenerator';
import CodingInterview from './pages/CodingInterview';
import AptitudePrep from './pages/AptitudePrep';
import ResumeAnalyzer from './pages/ResumeAnalyzer';

// Styles
import './styles/index.css';
import './styles/glass.css';
import './styles/animations.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isLight, setIsLight] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'company-library':
        return <CompanyLibrary setActivePage={setActivePage} />;
      case 'interview-generator':
        return <InterviewGenerator />;
      case 'coding-interview':
        return <CodingInterview />;
      case 'aptitude-prep':
        return <AptitudePrep />;
      case 'resume-analyzer':
        return <ResumeAnalyzer />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <>
      <Global3DBackground isLight={isLight} />
      {!introComplete ? (
        <VoiceIntro onComplete={(role) => {
           // Optionally set role prep as active page, but sticking to home with role in localstorage
           localStorage.setItem('selectedRolePrep', role.toLowerCase().replace(' ', '-'));
           setIntroComplete(true);
        }} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
          {/* Navigation Header */}
          <Navbar 
            activePage={activePage} 
            setActivePage={setActivePage} 
            isLight={isLight} 
            setIsLight={setIsLight} 
          />

          {/* Main Panel Viewport */}
          <main style={{ flex: 1, padding: '2rem 0' }}>
            <div className="container animate-fade-in">
              {renderActivePage()}
            </div>
          </main>

          {/* Layout Footer */}
          <Footer setActivePage={setActivePage} />
        </div>
      )}
    </>
  );
}
