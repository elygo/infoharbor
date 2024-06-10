import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import i18n from '../../i18n';
import parse from 'html-react-parser';
import { ThemeContext } from '../utils/ThemeContext';
import Footer from '../components/Footer';

export default function AboutPage() {
  const { t } = useTranslation();
  const [aboutContent, setAboutContent] = useState();
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    try {
      axios
        .get(
          `${import.meta.env.VITE_APP_BASE_URL}/web-page-contents?language=${i18n.language == 'De' ? 'uk' : i18n.language.toLowerCase()}&type=about_us`
        )
        .then((response) => {
          setAboutContent(response.data[0]);
        });
    } catch (error) {
      console.log(error);
    }
  }, [i18n.language]);

  return (
    <div>
      <div className="py-8 min-h-[calc(100vh-174px)] max-w-[1364px] mx-auto z-40 relative max-2xl:px-8">
        <div
          className={`${theme === 'dark' ? 'gradient' : 'gradient-light'} absolute -top-72 -right-96 w-[550px] h-[550px] z-0 max-2xl:hidden`}
        ></div>

        <div className="z-50 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={'empty'}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-[28px] font-semibold mb-4">{t('infoharbor')}</div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={'empty'}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              {aboutContent ? (
                parse(aboutContent.content)
              ) : (
                <>
                  <div className="text-[18px]  text-justify">Infoharbor</div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
}
