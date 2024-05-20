import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RectangleCentral, RectangleSide, RectangleTop } from './Icons';

export default function WelcomeSection() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="h-[560px] max-w-[1364px] mx-auto z-20 dark:text-white relative max-2xl:h-full">
      <div className="w-full text-left relative flex max-md:text-center">
        <div className="static z-40 flex gap-12 items-end justify-between h-full w-full max-2xl:px-8">
          <div className="max-md:w-full md:w-1/2 flex flex-col justify-between items-left gap-8 z-10 max-md:mt-12">
            <div className="mt-24 flex">
              <div className="w-4 mr-10 bg-gradient-to-b from-[#EEEEEE] via-[#743EEC] to-[#EEEEEE] dark:bg-gradient-to-b dark:from-[#070B1A] dark:via-[#743EEC] dark:to-[#070B1A]"></div>
              <div className="flex flex-col gap-8 h-full">
                <div className="uppercase text-[50px] font-bold">{t('welcome')}</div>
                <div className="text-[18px] leading-10">
                  Entfesseln Sie die Kraft der Technologie mit InfoHarbor. Von hochmoderner App-Entwicklung bis hin zu
                  fundierten Datenanalysen stehen wir Ihnen zur Seite, um Ihr Unternehmen auf neue Höhen zu bringen.
                  Lassen Sie uns gemeinsam innovieren!
                </div>
                <div
                  className="cursor-pointer bg-white text-black text-center py-3 w-36 rounded-lg text-[16px] hover:bg-gradient-to-r from-[#763AED] to-[#6663ED] hover:text-white hover:scale-110 hover:origin-top-left"
                  onClick={() => {
                    navigate('/about');
                  }}
                >
                  {t('more')}
                </div>
              </div>
            </div>
          </div>
          <div className="max-md:hidden md:w-1/2 relative z-10  2xl:ml-32 max-md:mt-12">
            <div className="animate-[bounce_8s_ease-in-out_infinite]">
              <RectangleSide />
            </div>
            <div className="z-20 animate-bounce-slow absolute top-2 left-36">
              <RectangleCentral />
            </div>
            <div className="z-30 animate-[bounce_10s_ease-in-out_infinite] absolute left-48 -top-4">
              <RectangleTop />
            </div>
            <div className="z-40 animate-bounce-medium absolute left-80 top-24">
              <RectangleSide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
