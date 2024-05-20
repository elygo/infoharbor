import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { CallIcon, LocationIcon, MailIcon, InfoharborIcon, ArrowRightIcon } from './Icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [scrollTop, setScrollTop] = useState(0);
  const navigate = useNavigate();
  const [content, setContent] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="dark:bg-[#2B2A30] h-[81px] mx-auto z-20 dark:text-white relative max-2xl:px-8">
      <div className="flex flex-col gap-8 mt-12 max-md:mt-6 max-md:gap-4">
        <div className="mt-4">
          <div className="text-[17px] mt-8 max-xl:text-[14px]">{t('copyright')}</div>
        </div>
      </div>
      {scrollTop > 50 ? (
        <div
          onClick={() => {
            document.documentElement.style.scrollBehavior = 'smooth';
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
          className="scrollToTop w-16 h-16 bg-[#1a8bee] rounded-full fixed bottom-6 right-6 flex justify-center items-center -rotate-90 hover:cursor-pointer max-md:hidden"
        >
          <ArrowRightIcon color={theme === 'dark' ? 'white' : 'white'} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
