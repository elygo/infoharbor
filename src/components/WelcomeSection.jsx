import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import { StaggeredTextAnimation } from './animations/StaggeredTextAnimation';
import { useNavigate } from 'react-router-dom';
import { RectangleCentral, RectangleSide, RectangleTop } from './Icons';

export default function WelcomeSection() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="h-[500px] max-w-[1364px] mx-auto z-20 dark:text-white relative max-2xl:h-full max-2xl:mb-12">
      <div className="w-full text-left relative flex max-md:text-center">
        <div className="static z-40 flex items-center justify-between h-full w-full max-2xl:px-8">
          <div className="2xl:w-3/5 flex flex-col justify-between items-left gap-4 mt-20 z-10 max-md:mt-12">
            {/* <div className="uppercase text-[18px]">{t('welcome')}</div> */}
            <StaggeredTextAnimation
              text={t('infoharbor')}
              className="uppercase font-bold text-[30px] leading-[54px] max-lg:text-[20px] max-lg:leading-[40px]"
            />
            <div className="mt-2">
              <button
                onClick={() => {
                  navigate('/about');
                }}
                className="bg-white text-black px-12 py-4 rounded-lg text-[16px] hover:bg-[#1A8BEE] hover:text-white"
              >
                {t('more')}
              </button>
            </div>
          </div>
          <div className="2xl:w-2/5 relative mt-20 z-10 max-md:mt-12">
            <div className="animate-[bounce_8s_ease-in-out_infinite] absolute -left-32">
              <RectangleSide />
            </div>
            <div className="z-30 animate-bounce-slow absolute top-2">
              <RectangleCentral />
            </div>
            <div className="z-20 animate-[bounce_10s_ease-in-out_infinite] absolute left-12 -top-4">
              <RectangleTop />
            </div>
            <div className="z-40 animate-bounce-medium absolute left-36 top-24">
              <RectangleSide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
