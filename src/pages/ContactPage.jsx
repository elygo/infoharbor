import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { ThemeContext } from '../utils/ThemeContext';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (formSubmitted) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      toast.success(t('form_success'));

      setFormSubmitted(false);
    }
  }, [formSubmitted, formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      axios
        .post(`${import.meta.env.VITE_APP_BASE_URL}/appeal`, {
          name: formData.name,
          email: formData.email,
          topic: formData.subject,
          message: formData.message
        })
        .then((response) => {
          setFormSubmitted(true);
        })
        .catch((error) => {
          toast.error(t('form_error'));
        });
    } else {
      toast.error(t('form_error'));
    }
  };
  return (
    <div>
      <div className="py-4 min-h-[calc(100vh-353px)] max-w-[1364px] mx-auto z-40 relative max-2xl:px-8">
        <Breadcrumbs />
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
              <div className="text-[28px] font-semibold">{t('contact')}</div>
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
              <div className="text-[16px]">{t('contact_info')}</div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={'empty'}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 2.5 }}
            >
              <div className="max-w-screen-md bg-white dark:bg-[#2D2A39] rounded-lg mt-4 py-6 px-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                      {t('name')}
                    </label>
                    <input
                      type="name"
                      id="name"
                      name="name"
                      className="block bg-transparent p-3 w-full text-sm text-gray-900 rounded-lg focus:border-[#742EEC] dark:focus:border-[#742EEC] focus:outline-none focus:ring-1 border border-gray-300  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder={t('name_placeholder')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block bg-transparent p-3 w-full text-sm text-gray-900 rounded-lg focus:border-[#742EEC] dark:focus:border-[#742EEC] focus:outline-none focus:ring-1 border border-gray-300  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder={t('email_placeholder')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      {t('subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="block bg-transparent p-3 w-full text-sm text-gray-900 rounded-lg focus:border-[#742EEC] dark:focus:border-[#742EEC] focus:outline-none focus:ring-1 border border-gray-300  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder={t('subject_placeholder')}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white"
                    >
                      {t('message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className="block bg-transparent p-3 w-full text-sm text-gray-900 rounded-lg focus:border-[#742EEC] dark:focus:border-[#742EEC] focus:outline-none focus:ring-1 border border-gray-300  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder={t('message_placeholder')}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-5 text-[16px] bg-[#743EEC] font-medium text-center text-white hover:bg-[#742EEC] dark:hover:bg-[#742EEC] hover:text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    {t('send')}
                  </button>
                </form>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </div>
  );
}
