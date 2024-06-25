import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../utils/ThemeContext';
import '../styles/App.scss';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';

export default function NewsPage() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(
          `${import.meta.env.VITE_APP_BASE_URL}/news?language=${i18n.language == 'De' ? 'uk' : i18n.language.toLowerCase()}`
        )
        .then((response) => {
          setNews(response.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [i18n.language]);

  if (!news) return null;

  return (
    <div>
      <div className="min-h-[calc(100vh-353px)] max-w-[1364px] mx-auto z-40 relative max-2xl:px-8 py-4">
        <Breadcrumbs />
        <div
          className={`${theme === 'dark' ? 'gradient' : 'gradient-light'} absolute -top-72 -right-96 w-[550px] h-[550px] z-0 max-2xl:hidden`}
        ></div>
        <div className="flex flex-wrap gap-8 py-6 hover:cursor-pointer relative z-50 max-2xl:justify-center">
          {news?.map((item, index) => {
            return (
              <AnimatePresence mode="wait" key={index}>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', duration: 0.8 * (index + 1) }}
                >
                  <div
                    className="h-[410px] w-[430px] relative hover:z-50 hover:shadow-lg max-2xl:h-[320px] max-2xl:w-[320px]"
                    key={index}
                    onClick={() => {
                      navigate(`/news/${item.id}`);
                    }}
                  >
                    <div className="w-full h-[270px] rounded-lg overflow-hidden max-2xl:h-[200px]">
                      <img
                        src={`${import.meta.env.VITE_APP_BASE_URL}/resources/view?resource_id=${item.resourceId}`}
                        className="object-cover w-full h-full transition transform duration-1000 hover:overflow-hidden hover:scale-125"
                      />
                    </div>
                    <div className="absolute bottom-0 h-[150px] w-full bg-white dark:bg-[#2D2A39] rounded-b-lg p-8 flex items-center drop-shadow-xl">
                      {item.title}
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
