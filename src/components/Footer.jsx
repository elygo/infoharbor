import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { CallIcon, LocationIcon, MailIcon, InfoharborIcon, ArrowRightIcon, InfoharborLogo } from './Icons';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';

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
    <div className="bg-[#ffffff6b] border-t dark:border-[#ffffff33]  dark:bg-[#2B2A30] min-h-[260px] mx-auto z-20 dark:text-white relative max-2xl:px-8">
      <div className="max-w-[1364px] mx-auto flex justify-between max-md:flex-col max-md:items-center">
        <div className="mt-8 max-md:mt-2">
          <InfoharborIcon width={200} color={theme === 'dark' ? '#fff' : '#000'} />
          <div className="text-[17px] max-md:text-center dark:text-[#ffffff8e] mt-8 max-md:mt-2 max-xl:text-[14px]">
            {t('copyright')}
          </div>
        </div>
        <div className="flex gap-20 max-md:mt-4 max-md:mb-4 max-lg:gap-8 max-md:gap-4 max-xs:flex-col">
          <div className="flex flex-col gap-4 text-[17px] mt-8 max-md:mt-0 max-xl:text-[14px]">
            <div className="font-semibold dark:font-medium">{t('services')}</div>
            <NavLink to={'/mobile'} className="dark:text-[#ffffff8e]">
              {t('mobile')}
            </NavLink>
            <NavLink to={'/data'} className="dark:text-[#ffffff8e]">
              Data 4.0
            </NavLink>
            <NavLink to={'/webdev'} className="dark:text-[#ffffff8e]">
              {t('web')}
            </NavLink>
            <NavLink to={'/intelligence'} className="dark:text-[#ffffff8e]">
              {t('ai')}
            </NavLink>
          </div>
          <div className="flex flex-col gap-4  text-[17px] mt-8 max-md:mt-0 max-xl:text-[14px]">
            <div className="font-semibold dark:font-medium">{t('technologies')}</div>
            <div className="dark:text-[#ffffff8e]">Front-End</div>
            <div className="dark:text-[#ffffff8e]">Back-End</div>
            <div className="dark:text-[#ffffff8e]">Big Data</div>
          </div>
          <div className="flex flex-col gap-4 text-[17px] mt-8 max-md:mt-0  max-xl:text-[14px]">
            <div className="font-semibold dark:font-medium">{t('company')}</div>
            <NavLink to={'/contact'} className="dark:text-[#ffffff8e]">
              {t('contact')}
            </NavLink>
          </div>
          <div className="flex flex-col gap-4  text-[17px] mt-8 max-md:mt-0  max-xl:text-[14px]">
            <div className="font-semibold dark:font-medium">{t('resources')}</div>
            <NavLink to={'/privacy'} className="dark:text-[#ffffff8e]">
              {t('privacy policy')}
            </NavLink>
            <NavLink to={'/cookie'} className="dark:text-[#ffffff8e]">
              {t('cookie policy')}
            </NavLink>
          </div>
        </div>
      </div>
      {scrollTop > 50 ? (
        <div
          onClick={() => {
            document.documentElement.style.scrollBehavior = 'smooth';
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
          className="scrollToTop w-16 h-16 bg-[#743EEC] rounded-full fixed bottom-6 right-6 flex justify-center items-center -rotate-90 hover:cursor-pointer max-md:hidden"
        >
          <ArrowRightIcon color={theme === 'dark' ? 'white' : 'white'} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
