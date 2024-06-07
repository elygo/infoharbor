import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CircleIcon, SIcon } from './Icons';
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
      <div className="flex w-full">
        <div className="w-1.5 bg-gradient-to-b from-[#EEEEEE] via-[#743EEC] to-[#EEEEEE] dark:bg-gradient-to-b dark:from-[#070B1A] dark:via-[#743EEC] dark:to-[#070B1A]"></div>
        <div className="w-full flex flex-col">
          <div className="text-[40px] ml-10">{t('news')}</div>
          <div className="flex w-full ml-10 mb-20 gap-8 justify-between ">
            {news?.slice(0, 3).map((item, index) => {
              return (
                <div
                  className="w-1/3 h-[386px] mt-12 bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] rounded-lg cursor-pointer"
                  key={index}
                  onClick={() => {
                    navigate(`/news/${item.id}`);
                  }}
                >
                  <div className="w-full h-[236px] overflow-hidden rounded-t-lg ">
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
            {/* <div className="w-1/3 h-[536px] mt-12 bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] rounded-lg cursor-pointer">
              <div className="w-full h-[236px] overflow-hidden  rounded-t-lg ">
                <img
                  src={`./public/euro2024.png`}
                  className="object-cover rounded-t-lg transition transform duration-1000 hover:overflow-hidden hover:scale-105 w-full h-full"
                />
              </div>
              <div className="w-full h-3/5 flex flex-col gap-6 px-6 py-4 rounded-b-lg">
                <div className="text-[20px]">Fußball-EM 2024: "Wir Brauchen Ein Neues Sommermärchen"</div>
                <div className="text-[16px] line-clamp-4">
                  Die DW verwendet Cookies und ähnliche Technologien, um notwendige Nutzungsdaten zu erheben. Zusätzlich
                  kann Ihnen ggf. personalisierte Werbung angezeigt werden. Dafür werden personenbezogene Daten und
                  Informationen mit bis zu 161 Drittanbietern geteilt.
                </div>
                <div className="text-[16px] text-[#ADB5BF]">16.05.2024</div>
              </div>
            </div>
            <div className="w-1/3 h-[536px] mt-12 bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] rounded-lg cursor-pointer">
              <div className="w-full h-[236px] overflow-hidden  rounded-t-lg ">
                <img
                  src={`./public/ocean.png`}
                  className="object-cover rounded-t-lg transition transform duration-1000 hover:overflow-hidden hover:scale-105 w-full h-full"
                />
              </div>
              <div className="w-full h-3/5 flex flex-col gap-6 px-6 py-4 rounded-b-lg">
                <div className="text-[20px]">Wieder Segelyacht Angegriffen: Nur Ein Spiel Für Orcas?</div>
                <div className="text-[16px] line-clamp-4">
                  Erneut haben Orcas ein Segelboot in der Straße von Gibraltar attackiert und versenkt. Viele Forschende
                  glauben nicht, dass es sich um aggressives Verhalten handelt, sondern um einen neumodischen Trend.
                </div>
                <div className="text-[16px] text-[#ADB5BF]">17.05.2024</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
