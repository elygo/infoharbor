import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from './ThemeContext';

const CookieConsent = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    toast.dismiss();
  };

  const ignoreCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    toast.dismiss();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        background: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        borderRadius: '5px'
      }}
    >
      <p>{t('cookieContent')}</p>
      <button
        onClick={acceptCookies}
        style={{
          marginLeft: '20px',
          padding: '5px 10px',
          background: '#7638EC',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {t('accept')}
      </button>
      <button
        onClick={ignoreCookies}
        style={{
          marginLeft: '20px',
          padding: '5px 10px',
          background: '#cccccc',
          color: '#000',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {t('ignore')}
      </button>
    </div>
  );
};

const showCookieConsent = () => {
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');
  if (!cookiesAccepted) {
    toast.custom(<CookieConsent />, {
      duration: 20000
    });
  }
};

export default showCookieConsent;
