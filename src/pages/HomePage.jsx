import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import WebDevelopment from '../components/Webdevelopment';
import AiSection from '../components/AiSection';
import DataSection from '../components/DataSection';
import MobileSection from '../components/MobileSection';
import Footer from '../components/Footer';
import NewsSection from '../components/NewsSection';
import ProjectsSection from '../components/ServicesSection';
import TechnologiesSection from '../components/TechnologiesSection';

export default function HomePage() {
  return (
    <div>
      <div className="min-h-[calc(100vh-174px)]">
        <WelcomeSection />
        <ProjectsSection />
        <TechnologiesSection />
        <NewsSection />
      </div>
      <Footer />
    </div>
  );
}
