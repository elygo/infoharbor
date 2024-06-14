import React from 'react';
import { useContext, useRef, useState, useEffect } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CircleIcon, SIcon } from './Icons';
import Footer from './Footer';
import VanillaTilt from 'vanilla-tilt';
import MouseGradient from '../utils/MouseGradient';

export default function WebDevelopment(props) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const tilt = useRef(null);
  const tilt2 = useRef(null);
  const tilt3 = useRef(null);
  const tilt4 = useRef(null);
  const tilt5 = useRef(null);
  const tilt6 = useRef(null);

  const options = {
    scale: 1,
    speed: 100,
    max: 2
  };

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
    VanillaTilt.init(tilt2.current, options);
    VanillaTilt.init(tilt3.current, options);
    VanillaTilt.init(tilt3.current, options);
    VanillaTilt.init(tilt4.current, options);
    VanillaTilt.init(tilt5.current, options);
    VanillaTilt.init(tilt6.current, options);
  }, [options]);

  useEffect(() => {
    props.setScrollTop(0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div>
      <div className="max-w-[1364px] min-h-[calc(100vh-174px)] mx-auto z-20 dark:text-white relative max-2xl:h-full">
        <div
          className={`${theme === 'dark' ? 'gradient' : 'gradient-light'} absolute top-60 -left-20 w-[550px] h-[550px] max-2xl:hidden`}
        ></div>
        <div className="w-full flex my-10 max-2xl:px-8">
          <div className="w-3 bg-gradient-to-b from-[#EEEEEE] via-[#743EEC] to-[#EEEEEE] dark:bg-gradient-to-b dark:from-[#070B1A] dark:via-[#743EEC] dark:to-[#070B1A] max-xl:hidden"></div>
          <div className="w-full flex flex-col z-30 max-xl:items-center max-xl:gap-6">
            {/* <div className="text-[40px] ml-10">Was wir am besten können</div> */}
            {/* <div className="border border-[#eeeeee2c] my-6 ml-10"></div> */}
            <div className="flex justify-center items-center gap-8 ml-10 max-xl:ml-0">
              <div></div>
              <div className="max-md:hidden">
                <SIcon width={77} height={77} />
              </div>

              <div className="flex flex-col">
                <div className="text-[30px] max-md:text-center">Webentwicklung</div>
                <div className="mt-4 leading-9">
                  Unsere Webentwicklungsdienste bieten maßgeschneiderte Lösungen für Ihre digitalen Bedürfnisse. Wir
                  kombinieren kreative Gestaltung mit modernster Technologie, um ansprechende und funktionale Webseiten
                  zu erstellen, die Ihr Unternehmen optimal präsentieren. Von der Konzeption bis zur Umsetzung stehen
                  wir Ihnen zur Seite, um sicherzustellen, dass Ihre Online-Präsenz Ihren Anforderungen gerecht wird.
                </div>
              </div>
            </div>
            <div className="flex mt-8 items-center">
              <div className="max-xl:hidden h-1 bg-[#7343ecc0] w-28 relative flex justify-end items-center">
                <div className="z-[40] absolute -right-3">
                  <CircleIcon />
                </div>
              </div>
              <MouseGradient
                refa={tilt}
                className="hover:z-[50] w-[987px] h-[193px] max-xl:w-full max-xl:h-full flex gap-10 py-2 max-xl:gap-4 max-xl:px-4 px-10 items-center bg-white dark:bg-[#141726] border border-transparent hover:border-[#7343ecc0] rounded-lg cursor-pointer"
              >
                <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[24px] font-semibold">
                  1
                </div>
                <div>Maßgeschneidertes Webdesign</div>
                <div className="text-[16px] border-l border-gray-500 pl-6">
                  Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus
                  liegt auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
                </div>
              </MouseGradient>
            </div>
            <div className="flex">
              <div className="max-xl:hidden relative ml-56 h-36 w-[150px] border-l-4 border-b-4 border-[#7343ecc0] rounded-bl-lg">
                <div className="z-[40] absolute left-[136px] top-[132px]">
                  <CircleIcon />
                </div>
              </div>
              <MouseGradient
                refa={tilt2}
                className="hover:z-[50] w-[987px] h-[193px] max-xl:w-full max-xl:h-full mt-12 max-xl:mt-0 flex gap-8 py-2 px-6 max-xl:gap-4 max-xl:px-4 items-center bg-white dark:bg-[#141726] border border-transparent hover:border-[#7343ecc0] rounded-lg cursor-pointer"
              >
                <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[24px] font-semibold">
                  2
                </div>
                <div>Maßgeschneidertes Webdesign</div>
                <div className="text-[16px] border-l border-gray-500 pl-6">
                  Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus
                  liegt auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
                </div>
              </MouseGradient>
            </div>
            <div className="flex ml-28 max-xl:ml-0">
              <MouseGradient
                refa={tilt3}
                className="hover:z-[50] w-[987px] h-[193px] max-xl:w-full max-xl:h-full mt-12 max-xl:mt-0 flex gap-8 py-2 px-6 max-xl:gap-4 max-xl:px-4  items-center bg-white dark:bg-[#141726] border border-transparent hover:border-[#7343ecc0] rounded-lg cursor-pointer"
              >
                <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[24px] font-semibold">
                  3
                </div>
                <div>Maßgeschneidertes Webdesign</div>
                <div className="text-[16px] border-l border-gray-500 pl-6">
                  Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus
                  liegt auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
                </div>
              </MouseGradient>
              <div className="max-xl:hidden relative h-36 w-20 border-r-4 border-b-4 border-[#7343ecc0] rounded-br-lg">
                <div className="z-[40] absolute -left-3 top-[132px]">
                  <CircleIcon />
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="max-xl:hidden relative ml-56 h-36 w-[150px]  border-l-4 border-b-4 border-[#7343ecc0] rounded-bl-lg">
                <div className="z-[40] absolute left-[136px] top-[132px]">
                  <CircleIcon />
                </div>
              </div>
              <MouseGradient
                refa={tilt4}
                className="hover:z-[50] w-[987px] h-[193px] max-xl:w-full max-xl:h-full mt-12 max-xl:mt-0 flex gap-8 py-2 px-6 max-xl:gap-4 max-xl:px-4  items-center bg-white dark:bg-[#141726] border border-transparent hover:border-[#7343ecc0] rounded-lg cursor-pointer"
              >
                <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[24px] font-semibold">
                  4
                </div>
                <div>Maßgeschneidertes Webdesign</div>
                <div className="text-[16px] border-l border-gray-500 pl-6">
                  Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus
                  liegt auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
                </div>
              </MouseGradient>
            </div>
            <div className="flex ml-28 max-xl:ml-0">
              <MouseGradient
                refa={tilt5}
                className="hover:z-[50] w-[987px] h-[193px] max-xl:w-full max-xl:h-full mt-12 max-xl:mt-0 flex gap-8 py-2 px-6 max-xl:gap-4 max-xl:px-4 items-center bg-white dark:bg-[#141726] border border-transparent hover:border-[#7343ecc0] rounded-lg cursor-pointer"
              >
                <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[24px] font-semibold">
                  5
                </div>
                <div>Maßgeschneidertes Webdesign</div>
                <div className="text-[16px] border-l border-gray-500 pl-6">
                  Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus
                  liegt auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
                </div>
              </MouseGradient>
              <div className="max-xl:hidden relative h-36 w-20 border-r-4 border-b-4 border-[#7343ecc0] rounded-br-lg">
                <div className="z-[40] absolute -left-3 top-[132px]">
                  <CircleIcon />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="max-xl:hidden relative ml-56 h-36 w-[150px] border-l-4 border-b-4 border-[#7343ecc0] rounded-bl-lg">
                <div className="z-[40] absolute left-[136px] top-[132px]">
                  <CircleIcon />
                </div>
              </div>
              <MouseGradient
                refa={tilt6}
                className="hover:z-[50] w-[987px] h-[193px] max-xl:w-full max-xl:h-full mt-12 max-xl:mt-0 flex gap-8 py-2 px-6 max-xl:gap-4 max-xl:px-4  items-center bg-white dark:bg-[#141726] border border-transparent hover:border-[#7343ecc0] rounded-lg cursor-pointer"
              >
                <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[24px] font-semibold">
                  6
                </div>
                <div>Maßgeschneidertes Webdesign</div>
                <div className="text-[16px] border-l border-gray-500 pl-6">
                  Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus
                  liegt auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
                </div>
              </MouseGradient>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
