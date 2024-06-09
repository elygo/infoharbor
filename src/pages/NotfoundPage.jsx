import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../utils/ThemeContext';
import Footer from '../components/Footer';

export default function NotfoundPage() {
  const { t } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="">
      <div className="min-h-[calc(100vh-174px)] flex flex-col justify-center items-center gap-4 p-4 relative z-40 max-2xl:px-8">
        <div className="text-6xl mt-8">404</div>
        <div className="text-4xl">{t('pagenotfound')}</div>
      </div>
      <Footer />
    </div>
  );
}
