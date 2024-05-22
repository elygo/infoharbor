import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CircleIcon, SIcon } from './Icons';

export default function WebDevelopment() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="max-w-[1364px] mx-auto z-20 dark:text-white relative max-2xl:h-full mt-10">
      <div className="flex">
        <div className="w-3 bg-gradient-to-b from-[#EEEEEE] via-[#743EEC] to-[#EEEEEE] dark:bg-gradient-to-b dark:from-[#070B1A] dark:via-[#743EEC] dark:to-[#070B1A]"></div>
        <div className="flex flex-col">
          <div className="text-[40px] ml-10">Was wir am besten können</div>
          <div className="border border-[#eeeeee2c] my-6 ml-10"></div>
          <div className="flex justify-center items-center gap-8 ml-10">
            <div></div>
            <div className="">
              <SIcon width={77} height={77} />
            </div>

            <div className="flex flex-col">
              <div className="text-[30px]">Webentwicklung</div>
              <div className="mt-4 leading-9">
                Unsere Webentwicklungsdienste bieten maßgeschneiderte Lösungen für Ihre digitalen Bedürfnisse. Wir
                kombinieren kreative Gestaltung mit modernster Technologie, um ansprechende und funktionale Webseiten zu
                erstellen, die Ihr Unternehmen optimal präsentieren. Von der Konzeption bis zur Umsetzung stehen wir
                Ihnen zur Seite, um sicherzustellen, dass Ihre Online-Präsenz Ihren Anforderungen gerecht wird.
              </div>
            </div>
          </div>
          <div className="flex mt-8 items-center">
            <div className="h-1 bg-[#7343ecc0] w-28 relative flex justify-end items-center">
              <div className="absolute -right-3">
                <CircleIcon />
              </div>
            </div>
            <div className="w-[987px] h-[193px] flex gap-10 py-2 px-10 items-center bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] rounded-lg cursor-pointer">
              <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[24px] font-semibold">
                1
              </div>
              <div>Maßgeschneidertes Webdesign</div>
              <div className="text-[16px] dark:text-[#ADB5BF] border-l border-gray-500 pl-6">
                Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus liegt
                auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="relative ml-56 h-36 w-[150px] border-l-4 border-b-4 border-[#7343ecc0] rounded-bl-lg">
              <div className="absolute left-[136px] top-[132px]">
                <CircleIcon />
              </div>
            </div>
            <div className="w-[987px] h-[193px] mt-12 flex gap-8 py-2 px-6 items-center bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] rounded-lg cursor-pointer">
              <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[24px] font-semibold">
                2
              </div>
              <div>Maßgeschneidertes Webdesign</div>
              <div className="text-[16px] dark:text-[#ADB5BF] border-l border-gray-500 pl-6">
                Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus liegt
                auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
              </div>
            </div>
          </div>
          <div className="flex ml-28">
            <div className="w-[987px] h-[193px] mt-12 flex gap-8 py-2 px-6 items-center bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] rounded-lg cursor-pointer">
              <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[24px] font-semibold">
                3
              </div>
              <div>Maßgeschneidertes Webdesign</div>
              <div className="text-[16px] dark:text-[#ADB5BF] border-l border-gray-500 pl-6">
                Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus liegt
                auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
              </div>
            </div>
            <div className="relative h-36 w-20 border-r-4 border-b-4 border-[#7343ecc0] rounded-br-lg">
              <div className="absolute -left-3 top-[132px]">
                <CircleIcon />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="relative ml-56 h-36 w-[150px]  border-l-4 border-b-4 border-[#7343ecc0] rounded-bl-lg">
              <div className="absolute left-[136px] top-[132px]">
                <CircleIcon />
              </div>
            </div>
            <div className="w-[987px] h-[193px] mt-12 flex gap-8 py-2 px-6 items-center bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] rounded-lg cursor-pointer">
              <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[24px] font-semibold">
                4
              </div>
              <div>Maßgeschneidertes Webdesign</div>
              <div className="text-[16px] dark:text-[#ADB5BF] border-l border-gray-500 pl-6">
                Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus liegt
                auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
              </div>
            </div>
          </div>
          <div className="flex ml-28">
            <div className="w-[987px] h-[193px] mt-12 flex gap-8 py-2 px-6 items-center bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] rounded-lg cursor-pointer">
              <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[24px] font-semibold">
                5
              </div>
              <div>Maßgeschneidertes Webdesign</div>
              <div className="text-[16px] dark:text-[#ADB5BF] border-l border-gray-500 pl-6">
                Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus liegt
                auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
              </div>
            </div>
            <div className="relative h-36 w-20 border-r-4 border-b-4 border-[#7343ecc0] rounded-br-lg">
              <div className="absolute -left-3 top-[132px]">
                <CircleIcon />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="relative ml-56 h-36 w-[150px] border-l-4 border-b-4 border-[#7343ecc0] rounded-bl-lg">
              <div className="absolute left-[136px] top-[132px]">
                <CircleIcon />
              </div>
            </div>
            <div className="w-[987px] h-[193px] mt-12 flex gap-8 py-2 px-6 items-center bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] rounded-lg cursor-pointer">
              <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[24px] font-semibold">
                6
              </div>
              <div>Maßgeschneidertes Webdesign</div>
              <div className="text-[16px] dark:text-[#ADB5BF] border-l border-gray-500 pl-6">
                Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus liegt
                auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
