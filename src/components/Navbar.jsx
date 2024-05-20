import React from 'react';
import { useContext, useState, useEffect, useRef } from 'react';
import { InfoharborIcon, HamburgerIcon, TelegramIcon, FacebookIcon } from './Icons';
import { ThemeContext } from '../utils/ThemeContext';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import ThemeSelector from './ThemeSelector';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Menu from './Menu';
import axios from 'axios';

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [scrollTop, setScrollTop] = useState(0);
  const [menu, setMenu] = useState(false);
  const [content, setContent] = useState([]);

  const navItems = [
    {
      id: 1,
      name: t('main'),
      link: '/'
    },
    {
      id: 2,
      name: t('news'),
      link: '/news'
    },
    {
      id: 3,
      name: t('career'),
      link: '/career'
    },
    {
      id: 4,
      name: t('about'),
      link: '/about'
    },
    {
      id: 5,
      name: t('contact'),
      link: '/contact'
    }
  ];

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
    <div className={`sticky top-0 z-50 ${scrollTop > 0 ? 'bg-[#EDEFF2] dark:bg-[#7638EC]' : ''}`}>
      <div className="max-w-[1480px] mx-auto dark:border-[#455478]">
        <div className="h-[92px] flex justify-between items-center max-w-[1364px] mx-auto max-2xl:px-8">
          <div
            className="px-2 hover:cursor-pointer max-2xl:hidden"
            onClick={() => {
              navigate('/');
            }}
          >
            <InfoharborIcon width={200} color={theme === 'dark' ? '#fff' : '#000'} />
          </div>
          <div
            className="2xl:hidden hover:cursor-pointer hover:bg-[#7638EC] h-16 w-16 rounded-full flex justify-center items-center"
            onClick={() => {
              setMenu(true);
            }}
          >
            <HamburgerIcon color={theme === 'dark' ? '#fff' : '#000'} />
          </div>
          <div className="flex items-center justify-center h-full">
            {navItems.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  className={({ isActive }) => {
                    return `max-2xl:hidden px-8 z-30 h-full flex items-center relative ${theme === 'dark' ? 'before:bg-[#7638EC]' : 'before:bg-[#7638EC] border-[#7638EC]'} ${isActive ? 'bg-gradient-to-b from-[#7638EC] to-[#6665ED] text-white' : "before:content-[''] before:absolute   before:w-full before:h-[1px] before:bottom-0 before:left-0  before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"} hover:cursor-pointer`;
                  }}
                  to={item.link}
                >
                  {item.name}
                </NavLink>
              );
            })}
            <div className="flex gap-10 hover:cursor-pointer items-center">
              <LanguageSelector />
              <ThemeSelector />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full top-[91px] border-b-2 border-[#c4c4c4] dark:border-[#455478]"></div>

      <Menu open={menu} onClose={() => setMenu(false)}>
        <div
          className={`text-center w-[100vw] md:w-[50vw] lg:w-[30vw] h-[calc(100vh-92px)] p-8 flex flex-col justify-between`}
        >
          <div className="flex flex-col gap-6 ">
            <div
              className="hover:underline hover:cursor-pointer"
              onClick={() => {
                navigate('/');
                setMenu(false);
              }}
            >
              {t('main')}
            </div>
            <div
              className="hover:underline hover:cursor-pointer"
              onClick={() => {
                navigate('/news');
                setMenu(false);
              }}
            >
              {t('news')}
            </div>
            <div
              className="hover:underline hover:cursor-pointer"
              onClick={() => {
                navigate('/about');
                setMenu(false);
              }}
            >
              {t('about')}
            </div>
            <div
              className="hover:underline hover:cursor-pointer"
              onClick={() => {
                navigate('/career');
                setMenu(false);
              }}
            >
              {t('career')}
            </div>
            <div
              className="hover:underline hover:cursor-pointer"
              onClick={() => {
                navigate('/contact');
                setMenu(false);
              }}
            >
              {t('contact')}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">{t('social')}</div>
            <div className="flex gap-4 justify-center items-center">
              {content.length > 0 ? (
                <>
                  <a
                    href={content.find((x) => x.id == 18).link}
                    target="_blank"
                    className="rounded-full border border-[#1A8BEE] dark:border-white p-1 hover:bg-gray-200 dark:hover:bg-[#1A8BEE] cursor-pointer w-8 h-8 flex items-center justify-center"
                  >
                    <TelegramIcon color={theme === 'dark' ? 'white' : '#1A8BEE'} />
                  </a>
                  <a
                    href={content.find((x) => x.id == 19).link}
                    target="_blank"
                    className="rounded-full border border-[#1A8BEE] dark:border-white p-2 hover:bg-gray-200 dark:hover:bg-[#1A8BEE] cursor-pointer w-8 h-8 flex items-center justify-center"
                  >
                    <FacebookIcon color={theme === 'dark' ? 'white' : '#1A8BEE'} />
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="https://t.me/geoinfocom"
                    target="_blank"
                    className="rounded-full border border-[#1A8BEE] dark:border-white p-1 hover:bg-gray-200 dark:hover:bg-[#1A8BEE] cursor-pointer w-8 h-8 flex items-center justify-center"
                  >
                    <TelegramIcon color={theme === 'dark' ? 'white' : '#1A8BEE'} />
                  </a>
                  <a
                    href="https://www.facebook.com/geoinfocom.center/"
                    target="_blank"
                    className="rounded-full border border-[#1A8BEE] dark:border-white p-2 hover:bg-gray-200 dark:hover:bg-[#1A8BEE] cursor-pointer w-8 h-8 flex items-center justify-center"
                  >
                    <FacebookIcon color={theme === 'dark' ? 'white' : '#1A8BEE'} />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}
