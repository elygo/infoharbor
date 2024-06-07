import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../utils/ThemeContext';
import '../styles/App.scss';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AdIcon, ArrowRightIcon, InfoharborIcon, InfoharborLogo } from '../components/Icons';
import parse from 'html-react-parser';
import Footer from '../components/Footer';

export default function NewsPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(
          `${import.meta.env.VITE_APP_BASE_URL}/vacancies?language=${i18n.language == 'De' ? 'uk' : i18n.language.toLowerCase()}`
        )
        .then((response) => {
          setVacancies(response.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [i18n.language]);

  if (!vacancies) return null;

  return (
    <div>
      <div className="min-h-[calc(100vh-174px)] max-w-[1364px] mx-auto relative max-2xl:px-8 py-8">
        <div
          className={`${theme === 'dark' ? 'gradient' : 'gradient-light'} absolute -top-72 -right-96 w-[550px] h-[550px] z-0 max-2xl:hidden`}
        ></div>
        <div className="text-[24px] font-bold">{t('vacancies')}</div>
        <div className="text-[16px] font-medium">{t('workinteam')}</div>
        <div className="flex flex-wrap gap-8 pt-6 pb-8 hover:cursor-pointer relative z-20 ">
          {vacancies?.map((item, index) => {
            return (
              <AnimatePresence mode="wait" key={index}>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', duration: 0.8 * (index + 1) }}
                >
                  <div
                    className="h-[410px] w-[430px] max-md:h-full max-sm:w-full  relative hover:z-50 hover:shadow-lg bg-white dark:bg-[#2D2A39] p-8 drop-shadow-xs rounded-lg transition transform duration-1000 hover:scale-105"
                    key={index}
                    onClick={() => {
                      navigate(`/career/${item.id}`);
                    }}
                  >
                    <div className="h-full flex flex-col gap-4">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <InfoharborLogo color={'white'} width={60} height={60} />
                          <div className="text-[18px] font-semibold line-clamp-2">{item.title}</div>
                        </div>
                        <div className="text-[16px] font-semibold">{t('tasks')}</div>
                      </div>
                      <div className="h-full line-clamp-6">{parse(item.tasks)}</div>
                      <div className="flex flex-col gap-4">
                        <div className="border-b border-[#c4c4c4] dark:border-[#687594]"></div>
                        <a target="_blank" className="flex items-center gap-4">
                          {t('more')}
                          <ArrowRightIcon color={`${theme === 'dark' ? 'white' : 'black'}`} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
