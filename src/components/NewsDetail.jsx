import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';

export default function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState();
  const [newsError, setNewsError] = useState();
  const [newsId, setNewsId] = useState();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_APP_BASE_URL}/news/${id}/details?language=${i18n.language == 'De' ? 'uk' : i18n.language.toLowerCase()}`
      )
      .then((response) => {
        setNewsId(response.data);
      })
      .catch((error) => {
        setNewsError(error.response.data.message);
      });

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
  }, [i18n.language, id]);

  return (
    <div>
      <div className="min-h-[calc(100vh-353px)] max-w-[1364px] mx-auto z-40 relative py-8">
        <div className="flex w-full h-full gap-8">
          <div className="w-4/5 h-full pr-8 max-lg:w-full max-lg:px-8 max-2xl:px-6">
            <Breadcrumbs />
            {newsId ? (
              <div className="flex flex-col gap-4">
                <div className="text-[24px] font-bold">{newsId.title}</div>
                <div className="leading-8 text-justify">{newsId.content}</div>
                <div>{new Date(newsId.created_date).toLocaleDateString('Ru-ru')}</div>
              </div>
            ) : newsError ? (
              newsError
            ) : (
              'Loading...'
            )}
          </div>
          <div className="w-1/5 max-w-[290px] h-full flex flex-col items-left pl-4 gap-4 max-lg:hidden max-2xl:px-2">
            <div className="font-bold">{t('news')}</div>
            {news?.slice(0, 5).map((news, index) => {
              return (
                <div
                  key={index}
                  className="text-[14px] leading-7 hover:cursor-pointer"
                  onClick={() => {
                    navigate(`/news/${news.id}`);
                  }}
                >
                  <div className="mb-4 border-b border-[#c4c4c4] dark:border-[#455478]" />
                  <div className="hover:font-semibold">{news.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
