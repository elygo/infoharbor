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

export default function Navbar(props) {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
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
      props.setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky top-0 z-50 ${props.scrollTop > 0 ? 'bg-lightBackground dark:bg-darkBackground' : ''}`}>
      <div className="max-w-[1480px] mx-auto dark:border-[#455478]">
        <div className={`h-[91px] flex justify-between items-center max-w-[1364px] mx-auto max-2xl:px-8`}>
          <div
            className="hover:cursor-pointer max-2xl:hidden"
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
                    return `max-2xl:hidden px-8 z-30 h-[calc(100%+3px)] flex items-center relative ${theme === 'dark' ? 'before:bg-[#7638EC]' : 'before:bg-[#7638EC] border-[#7638EC]'} ${isActive ? 'bg-gradient-to-b from-[#7638EC] to-[#6665ED] text-white' : "before:content-[''] before:absolute   before:w-full before:h-[1.5px] before:bottom-0 before:left-0  before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"} hover:cursor-pointer`;
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

      <div className={`top-[91px] absolute w-full  border-b-2 border-[#80808034] dark:border-[#ffffff23]`}></div>

      <Menu open={menu} onClose={() => setMenu(false)}>
        <div className={`text-center w-[100vw] md:w-[50vw] lg:w-[30vw] h-[100vh] p-8 flex flex-col justify-between`}>
          <div className="flex flex-col gap-6">
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
        </div>
      </Menu>
    </div>
  );
}
