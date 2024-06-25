import React, { useContext } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ThemeContext } from '../utils/ThemeContext';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  const { t } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="">
      <div className="min-h-[calc(100vh-353px)] max-w-[1364px] mx-auto flex flex-col my-4 gap-4 py-4 relative z-40 max-2xl:px-8">
        <div className="text-3xl font-semibold">{t('privacypage.title')}</div>
        <Trans t={t} i18nKey="privacypage.intro" components={{ strong: <strong></strong> }} />
        <Trans t={t} i18nKey="privacypage.address" components={{ strong: <strong></strong> }} />
        <Trans
          t={t}
          i18nKey="privacypage.types"
          components={{ ul: <ul></ul>, li: <li></li>, strong: <strong></strong> }}
        />
        <Trans
          t={t}
          i18nKey="privacypage.aim"
          components={{ ul: <ul></ul>, li: <li></li>, strong: <strong></strong> }}
        />
        <Trans
          t={t}
          i18nKey="privacypage.techno"
          components={{ ul: <ul></ul>, li: <li></li>, strong: <strong></strong> }}
        />
        <Trans t={t} i18nKey="privacypage.other" components={{ strong: <strong></strong> }} />
      </div>
      <Footer />
    </div>
  );
}
