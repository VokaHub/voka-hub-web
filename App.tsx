
import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

// Importing Pages
import PortfolioPage from './components/pages/PortfolioPage';
import ProjectDetailPage from './components/pages/ProjectDetailPage';
import SpacesPage from './components/pages/SpacesPage';
import AcademyPage from './components/pages/AcademyPage';
import InsideCrewPage from './components/pages/InsideCrewPage';
import TalentsPage from './components/pages/TalentsPage';

// Simple ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio" element={<PortfolioPage />} />
          <Route path="/portafolio/:id" element={<ProjectDetailPage />} />
          <Route path="/spaces" element={<SpacesPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/inside-crew" element={<InsideCrewPage />} />
          <Route path="/talentos" element={<TalentsPage />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
