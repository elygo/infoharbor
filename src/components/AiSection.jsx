import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AiIcon, CircleIcon, SIcon } from './Icons';
import Footer from './Footer';

export default function AiSection(props) {
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
      <div className="max-w-[1364px] min-h-[calc(100vh-174px)] mx-auto z-20 dark:text-white relative max-2xl:h-full my-8">
        <div
          className={`${theme === 'dark' ? 'gradient' : 'gradient-light'} absolute top-48 -right-60 w-[550px] h-[550px] max-2xl:hidden`}
        ></div>
        <div className="flex ">
          <div className="w-3 bg-gradient-to-b from-[#EEEEEE] via-[#743EEC] to-[#EEEEEE] dark:bg-gradient-to-b dark:from-[#070B1A] dark:via-[#743EEC] dark:to-[#070B1A]"></div>
          <div className="flex flex-col z-30">
            {/* <div className="border border-[#eeeeee2c] my-6 ml-10"></div> */}
            <div className="flex justify-center items-center gap-8 ml-10">
              <div></div>
              <div className="">
                <AiIcon width={77} height={77} />
              </div>

              <div className="flex flex-col">
                <div className="text-[30px]">Künstliche Intelligenz (KI)</div>
                <div className="mt-4 leading-9">
                  Unsere Webentwicklungsdienste bieten maßgeschneiderte Lösungen für Ihre digitalen Bedürfnisse. Wir
                  kombinieren kreative Gestaltung mit modernster Technologie, um ansprechende und funktionale Webseiten
                  zu erstellen, die Ihr Unternehmen optimal präsentieren. Von der Konzeption bis zur Umsetzung stehen
                  wir Ihnen zur Seite, um sicherzustellen, dass Ihre Online-Präsenz Ihren Anforderungen gerecht wird.
                </div>
              </div>
            </div>
            <div className="max-w-[1280px] mt-8 ml-auto flex flex-col">
              <div className="flex gap-10 py-8 px-10 items-center bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] rounded-t-lg cursor-pointer">
                <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[20px] font-semibold">
                  1
                </div>
                <div>Maßgeschneidertes Webdesign</div>
                <div className="text-[16px] dark:text-[#ADB5BF] border-l dark:border-[#ffffff36] pl-6">
                  Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus
                  liegt auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
                </div>
              </div>
              <div className="bg-white dark:bg-opacity-5">
                <hr className="mx-24 dark:border-[#ffffff36]" />
              </div>
              <div className="flex gap-10 py-8 px-10 items-center bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] cursor-pointer">
                <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[20px] font-semibold">
                  2
                </div>
                <div>Maßgeschneidertes Webdesign</div>
                <div className="text-[16px] dark:text-[#ADB5BF] border-l dark:border-[#ffffff36] pl-6">
                  Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus
                  liegt auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
                </div>
              </div>

              <div className="bg-white dark:bg-opacity-5">
                <hr className="mx-24 dark:border-[#ffffff36]" />
              </div>
              <div className="flex gap-10 py-8 px-10 items-center bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] cursor-pointer">
                <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[20px] font-semibold">
                  3
                </div>
                <div>Maßgeschneidertes Webdesign</div>
                <div className="text-[16px] dark:text-[#ADB5BF] border-l dark:border-[#ffffff36] pl-6">
                  Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus
                  liegt auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
                </div>
              </div>
              <div className="bg-white dark:bg-opacity-5">
                <hr className="mx-24 dark:border-[#ffffff36]" />
              </div>
              <div className="flex gap-10 py-8 px-10 items-center bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] cursor-pointer">
                <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[20px] font-semibold">
                  4
                </div>
                <div>Maßgeschneidertes Webdesign</div>
                <div className="text-[16px] dark:text-[#ADB5BF] border-l dark:border-[#ffffff36] pl-6">
                  Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus
                  liegt auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
                </div>
              </div>
              <div className="bg-white dark:bg-opacity-5">
                <hr className="mx-24 dark:border-[#ffffff36]" />
              </div>
              <div className="flex gap-10 py-8 px-10 items-center bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] cursor-pointer">
                <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[20px] font-semibold">
                  5
                </div>
                <div>Maßgeschneidertes Webdesign</div>
                <div className="text-[16px] dark:text-[#ADB5BF] border-l dark:border-[#ffffff36] pl-6">
                  Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus
                  liegt auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
                </div>
              </div>
              <div className="bg-white dark:bg-opacity-5">
                <hr className="mx-24 dark:border-[#ffffff36]" />
              </div>
              <div className="flex gap-10 py-8 px-10 items-center bg-white dark:bg-opacity-5 border-2 border-transparent hover:border-[#7243EC] rounded-b-lg cursor-pointer">
                <div className="h-12 w-12 p-6 flex items-center justify-center text-white dark:bg-transparent bg-[#7245ED] dark:border rounded-full text-[20px] font-semibold">
                  6
                </div>
                <div>Maßgeschneidertes Webdesign</div>
                <div className="text-[16px] dark:text-[#ADB5BF] border-l dark:border-[#ffffff36] pl-6">
                  Wir gestalten Webseiten, die Ihre Marke repräsentieren und Ihre Zielgruppe ansprechen. Unser Fokus
                  liegt auf Benutzerfreundlichkeit und Ästhetik, um ein beeindruckendes Online-Erlebnis zu schaffen
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
