import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AiIcon, CircleIcon, DataIcon, GreenTickIcon, SIcon } from './Icons';
import Footer from './Footer';

export default function DataSection(props) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    props.setScrollTop(0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div>
      <div className="max-w-[1364px] min-h-[calc(100vh-353px)] mx-auto z-20 dark:text-white relative max-2xl:h-full">
        <div className="flex my-10">
          <div className="w-3 bg-gradient-to-b from-[#EEEEEE] via-[#743EEC] to-[#EEEEEE] dark:bg-gradient-to-b dark:from-[#070B1A] dark:via-[#743EEC] dark:to-[#070B1A]"></div>
          <div className="flex flex-col">
            {/* <div className="border border-[#eeeeee2c] my-6 ml-10"></div> */}
            <div className="flex justify-center items-center gap-8 ml-10">
              <div></div>
              <div className="">
                <DataIcon width={77} height={77} />
              </div>

              <div className="flex flex-col">
                <div className="text-[30px]  font-bold">Data 4.0</div>
                <div className="mt-4 leading-9">{t('datapage.title')}</div>
              </div>
            </div>

            <div className="flex items-end gap-8 mt-8 ml-10">
              <div></div>
              <div className="flex flex-col">
                <div className="text-[24px]">{t('datapage.dataanalysis')}</div>
                <div className="flex gap-8  justify-between items-center">
                  <div className="rounded-full border flex items-center justify-center p-[22px]">
                    <GreenTickIcon width={33} height={33} />
                  </div>

                  <div className="mt-4 leading-9">{t('datapage.dataanalysis_content')}</div>
                </div>
              </div>
            </div>

            <div className="flex items-end gap-8 mt-8 ml-10">
              <div></div>
              <div className="flex flex-col">
                <div className="text-[24px]">{t('datapage.dataengineering')}</div>
                <div className="flex gap-8 justify-between items-center ">
                  <div className="rounded-full border flex items-center justify-center p-[22px]">
                    <GreenTickIcon width={33} height={33} />
                  </div>

                  <div className="mt-4 leading-9">{t('datapage.dataengineering_content')}</div>
                </div>
              </div>
            </div>

            <div className="flex items-end gap-8 mt-8 ml-10">
              <div></div>
              <div className="flex flex-col">
                <div className="text-[24px]">{t('datapage.datascience')}</div>
                <div className="flex gap-8 justify-between items-center ">
                  <div className="rounded-full border flex items-center justify-center p-[22px]">
                    <GreenTickIcon width={33} height={33} />
                  </div>

                  <div className="mt-4 leading-9">{t('datapage.datascience_content')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
