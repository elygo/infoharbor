import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import Footer from '../components/Footer';
import NewsSection from '../components/NewsSection';
import ProjectsSection from '../components/ServicesSection';
import TechnologiesSection from '../components/TechnologiesSection';
import { SectionFrame } from '../utils/SectionFrame';

export default function HomePage() {
  return (
    <div>
      <div className="min-h-[calc(100vh-174px)]">
        <SectionFrame>
          <WelcomeSection />
        </SectionFrame>
        <SectionFrame>
          <ProjectsSection />
        </SectionFrame>
        <SectionFrame>
          <TechnologiesSection />
        </SectionFrame>
        <SectionFrame>
          <NewsSection />
        </SectionFrame>
      </div>
      <Footer />
    </div>
  );
}
