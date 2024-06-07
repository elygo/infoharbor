import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { AdIcon, ArrowRightIcon, ClipIcon, InfoharborLogo } from '../components/Icons';
import toast from 'react-hot-toast';
import parse from 'html-react-parser';
import Footer from './Footer';

export default function CareerDetail() {
  const { id } = useParams();
  const [vacancyId, setVacancyId] = useState();
  const [vacancyError, setVacancyError] = useState();
  const { t, i18n } = useTranslation();
  const [fileId, setFileId] = useState();

  function handleUploadChange(event) {
    if (event.target.files[0] && event.target.files[0]?.type === 'application/pdf') {
      toast.success(t('uploaded'));

      axios
        .post(
          `${import.meta.env.VITE_APP_BASE_URL}/resources/upload`,
          {
            resource_types_id: 2,
            file: event.target.files[0]
          },
          {
            headers: {
              'content-type': 'multipart/form-data'
            }
          }
        )
        .then((response) => {
          setFileId(response.data);
        });
    } else {
      toast.error(t('form_error'));
    }
  }

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_APP_BASE_URL}/vacancies?language=${i18n.language == 'De' ? 'uk' : i18n.language.toLowerCase()}`
      )
      .then((response) => {
        setVacancyId(response.data.data);
      })
      .catch((error) => {
        setVacancyError(error.response.data.message);
      });
  }, [i18n.language, id]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      setFormData({
        name: '',
        email: '',
        phone: '',
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
    if (formData.name && formData.email && fileId) {
      axios
        .post(`${import.meta.env.VITE_APP_BASE_URL}/candidates`, {
          name: formData.name,
          email: formData.email,
          phone: formData.phone ? formData.phone : '',
          comment: formData.message ? formData.message : '',
          resourceId: fileId,
          vacancyId: id
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
      <div className="min-h-[calc(100vh-174px)] max-w-[1364px] mx-auto relative py-8 max-2xl:px-8">
        <div className="flex w-full h-full gap-8 max-md:flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', duration: 1.5 }}
              className="h-full w-3/5 max-md:w-full"
            >
              <div className="h-full px-8 py-4 bg-white dark:bg-[#2D2A39] rounded-lg">
                {vacancyId
                  ? vacancyId
                      .filter((vac) => vac.id == id)
                      .map((vac, index) => {
                        return (
                          <div className="flex flex-col gap-4" key={index}>
                            <div className="flex gap-4 items-center">
                              <InfoharborLogo color={'white'} width={60} height={60} />
                              <div className="text-[24px] max-md:text-[20px] font-bold">{vac.title}</div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-[16px] font-semibold">{t('required experience') + ': '}</div>
                              <div className="py-1">
                                <span className="bg-[#742EEC41] dark:bg-[#742EEC] p-2 rounded-lg max-md:text-[12px]">
                                  {vac.experience}
                                </span>
                              </div>
                              <div className="text-[16px] font-semibold py-2">{t('job type') + ': '}</div>
                              <div className="py-1">
                                <span className="bg-[#742EEC41] dark:bg-[#742EEC] p-2 rounded-lg max-md:text-[12px]">
                                  {vac.workingType}
                                </span>
                              </div>
                            </div>
                            <div className="my-2 border-b border-[#c4c4c4] dark:border-[#455478]" />
                            <div className="flex flex-col gap-4">
                              <div className="flex gap-4 items-center">
                                <div className="w-2 h-2 bg-[#742EEC] rounded-full"></div>
                                <div className="text-[16px] font-semibold">{t('tasks') + ': '}</div>
                              </div>
                              <div className="dark:text-[#CFCFD1] list-type">{parse(vac.tasks)}</div>

                              <div className="flex gap-4 items-center">
                                <div className="w-2 h-2 bg-[#742EEC] rounded-full"></div>
                                <div className="text-[16px] font-semibold">{t('requirements') + ': '}</div>
                              </div>
                              <div className="dark:text-[#CFCFD1] list-type">{parse(vac.requirements)}</div>
                              <div className="flex gap-4 items-center">
                                <div className="w-2 h-2 bg-[#742EEC] rounded-full"></div>
                                <div className="text-[16px] font-semibold">{t('conditions') + ': '}</div>
                              </div>
                              <div className="dark:text-[#CFCFD1] list-type">{parse(vac.ourOffer)}</div>
                            </div>
                            <div className="leading-8">{vac.content}</div>
                            <div>{new Date(vac.createdDate).toLocaleDateString('Ru-ru')}</div>
                          </div>
                        );
                      })
                  : vacancyError
                    ? vacancyError
                    : 'Loading...'}
              </div>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', duration: 2.5 }}
              className="h-full w-2/5 max-md:w-full"
            >
              <div className="p-4 h-full flex flex-col items-left gap-4 bg-white dark:bg-[#2D2A39] rounded-lg">
                <div className="text-[20px] font-bold p-4">{t('fill form')}</div>

                <form onSubmit={handleSubmit} className="space-y-6 px-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">
                      {t('name') + '*'}
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
                      {t('email') + '*'}
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
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      {t('phone') + '*'}
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="block bg-transparent p-3 w-full text-sm text-gray-900 rounded-lg focus:border-[#742EEC] dark:focus:border-[#742EEC] focus:outline-none focus:ring-1 border border-gray-300  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder={t('phone_placeholder')}
                      value={formData.phone}
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
                  <div className="flex items-center  hover:underline cursor-pointer">
                    <label className="flex px-2 gap-2 items-center" htmlFor="file_input">
                      <ClipIcon />
                      <div className="text-[16px] w-2/3">{t('attachment')}</div>
                    </label>
                    <input
                      type="file"
                      id="file_input"
                      name="file_input"
                      className="opacity-0 absolute"
                      onChange={handleUploadChange}
                    />
                  </div>
                  <div className="pb-2">
                    <button
                      type="submit"
                      className="py-3 px-5 text-[16px] bg-[#742EEC] font-medium text-center text-white hover:bg-[#742EEC] dark:hover:bg-[#742EEC] hover:text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      {t('send')}
                    </button>
                  </div>
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
