import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../utils/ThemeContext';

export default function NotfoundPage() {
  const { t } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="bg-white h-[calc(100vh-592px)] p-4 relative z-40 max-2xl:px-8">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="text-5xl  mt-8">404</div>
        <div className="text-3xl">{t('pagenotfound')}</div>
      </div>
    </div>
  );
}
