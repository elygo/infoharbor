import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function NewsSection() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
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
    <div className="max-w-[1364px] mx-auto z-20 dark:text-white relative max-2xl:h-full mt-10">
      <div className="flex w-full  max-2xl:px-8">
        <div className="w-1 bg-gradient-to-b from-[#EEEEEE] via-[#743EEC] to-[#EEEEEE] dark:bg-gradient-to-b dark:from-[#070B1A] dark:via-[#743EEC] dark:to-[#070B1A] max-md:hidden"></div>
        <div className="w-full flex flex-col">
          <div className="text-[40px] ml-10 max-md:ml-0 max-md:text-center">{t('news')}</div>
          <div className="flex max-md:flex-col w-full ml-10 mb-20 gap-8 justify-between max-md:ml-0">
            {news?.slice(0, 3).map((item, index) => {
              return (
                <div
                  className="w-1/3 max-md:w-full h-[386px] mt-12 bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] rounded-lg cursor-pointer"
                  key={index}
                  onClick={() => {
                    navigate(`/news/${item.id}`);
                  }}
                >
                  <div className="w-full h-[236px] overflow-hidden rounded-t-lg">
                    <img
                      src={`${import.meta.env.VITE_APP_BASE_URL}/resources/view?resource_id=${item.resourceId}`}
                      className="rounded-t-lg object-cover w-full h-full transition transform duration-1000 hover:overflow-hidden hover:scale-105"
                    />
                  </div>
                  <div className="w-full h-[150px] flex flex-col justify-center gap-6 px-6 py-4 rounded-b-lg">
                    <div className="text-[20px] line-clamp-2">{item.title}</div>
                    {/* <div className="text-[16px] line-clamp-4">{item.content}</div>
                    <div className="text-[16px] text-[#ADB5BF]">{item.date}</div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
