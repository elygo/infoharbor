import React, { useContext } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ThemeContext } from '../utils/ThemeContext';
import Footer from '../components/Footer';

export default function CookiePage() {
  const { t } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="">
      <div className="min-h-[calc(100vh-353px)] max-w-[1364px] mx-auto flex flex-col my-4 gap-4 py-4 relative z-40 max-2xl:px-8">
        <div className="text-3xl font-semibold">{t('cookiepage.title')}</div>
        <Trans t={t} i18nKey="cookiepage.intro" components={{ strong: <strong></strong> }} />
        <Trans t={t} i18nKey="cookiepage.cookies" components={{ strong: <strong></strong> }} />
        <Trans t={t} i18nKey="cookiepage.usage" components={{ strong: <strong></strong> }} />
        <Trans
          t={t}
          i18nKey="cookiepage.reasons"
          components={{ ul: <ul></ul>, li: <li></li>, strong: <strong></strong> }}
        />
        <Trans t={t} i18nKey="cookiepage.other" components={{ strong: <strong></strong> }} />
      </div>
      <Footer />
    </div>
  );
}
