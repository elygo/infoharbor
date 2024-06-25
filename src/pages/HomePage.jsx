import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import Footer from '../components/Footer';
import NewsSection from '../components/NewsSection';
import ProjectsSection from '../components/ServicesSection';
import TechnologiesSection from '../components/TechnologiesSection';
import { SectionFrameLeft } from '../utils/SectionFrameLeft';

export default function HomePage() {
  return (
    <div>
      <div className="min-h-[calc(100vh-353px)]">
        <WelcomeSection />
        <ProjectsSection />
        <TechnologiesSection />
        <NewsSection />
      </div>
      <Footer />
    </div>
  );
}
