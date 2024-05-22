import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import WebDevelopment from '../components/Webdevelopment';
import AiSection from '../components/AiSection';
import DataSection from '../components/DataSection';
import MobileSection from '../components/MobileSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <WelcomeSection />
      <WebDevelopment />
      <AiSection />
      <DataSection />
      <MobileSection />
      <Footer />
    </div>
  );
}
