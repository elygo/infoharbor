import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { GreenTickIcon, MobileIcon } from './Icons';
import Footer from './Footer';

export default function MobileSection(props) {
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
      <div className="max-w-[1364px] min-h-[calc(100vh-174px)] mx-auto z-20 dark:text-white relative max-2xl:h-full">
        <div className="flex my-10">
          <div className="w-3 bg-gradient-to-b from-[#EEEEEE] via-[#743EEC] to-[#EEEEEE] dark:bg-gradient-to-b dark:from-[#070B1A] dark:via-[#743EEC] dark:to-[#070B1A]"></div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center gap-8 ml-10">
              <div></div>
              <div className="">
                <MobileIcon width={77} height={77} />
              </div>

              <div className="flex flex-col">
                <div className="text-[30px] font-bold">Mobile App-Entwicklung Für Innovative Lösungen</div>
                <div className="mt-4 leading-9">
                  Unsere BizDevOps-Lösungen bieten eine integrative Herangehensweise an die Unternehmensentwicklung, die
                  Business, Entwicklung und Betrieb nahtlos miteinander verbindet. Wir unterstützen Unternehmen dabei,
                  agile Praktiken zu implementieren, um Innovation zu fördern, die Time-to-Market zu verkürzen und eine
                  kontinuierliche Verbesserung zu ermöglichen.
                </div>
              </div>
            </div>

            <div className="flex items-end gap-8 mt-8 ml-10">
              <div></div>
              <div className="flex flex-col">
                <div className="text-[24px]">Plattformübergreifende Entwicklung</div>
                <div className="flex gap-8  justify-between items-center ">
                  <div className="rounded-full flex items-center justify-center p-[24px]">
                    <GreenTickIcon width={33} height={33} />
                  </div>

                  <div className="mt-4 leading-9">
                    Wir entwickeln plattformübergreifende mobile Anwendungen, die auf iOS, Android und anderen
                    Plattformen nahtlos funktionieren. Mit bewährten Frameworks wie React Native oder Flutter erstellen
                    wir mobile Anwendungen, die eine konsistente Benutzererfahrung bieten und gleichzeitig
                    Entwicklungszeit und -kosten minimieren
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-end gap-8 mt-8 ml-10">
              <div></div>
              <div className="flex flex-col">
                <div className="text-[24px]">Benutzerzentriertes Design</div>
                <div className="flex gap-8 justify-between items-center ">
                  <div className="rounded-full flex items-center justify-center p-[24px]">
                    <GreenTickIcon width={33} height={33} />
                  </div>

                  <div className="mt-4 leading-9">
                    Unsere mobile App-Entwicklung beginnt mit einem starken Fokus auf das Benutzererlebnis. Wir führen
                    umfassende Nutzer¬forschung durch, um die Bedürfnisse und Präferenzen Ihrer Zielgruppe zu verstehen,
                    und gestalten intuitive Benutzeroberflächen, die eine reibungslose Interaktion und eine hohe
                    Benutzer¬zufriedenheit gewährleisten
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-end gap-8 mt-8 ml-10">
              <div></div>
              <div className="flex flex-col">
                <div className="text-[24px]">Funktionale Vielfalt</div>
                <div className="flex gap-8 justify-between items-center ">
                  <div className="rounded-full flex items-center justify-center p-[24px]">
                    <GreenTickIcon width={33} height={33} />
                  </div>

                  <div className="mt-4 leading-9">
                    Wir entwickeln mobile Anwendungen mit einer Vielzahl von Funktionen, die es Ihnen ermöglichen, Ihre
                    Geschäftsziele zu erreichen und Mehrwert für Ihre Kunden zu schaffen. Von E-Commerce-Integrationen
                    bis hin zu GPS-basierten Diensten bieten wir maßgeschneiderte Funktionen, die Ihre mobile App
                    einzigartig machen und sie von der Konkurrenz abheben
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-end gap-8 mt-8 ml-10">
              <div></div>
              <div className="flex flex-col">
                <div className="text-[24px]">Sicherheit Und Performance</div>
                <div className="flex gap-8 justify-between items-center ">
                  <div className="rounded-full flex items-center justify-center p-[24px]">
                    <GreenTickIcon width={33} height={33} />
                  </div>

                  <div className="mt-4 leading-9">
                    Wir legen großen Wert auf Sicherheit und Performance und implementieren bewährte Praktiken, um Ihre
                    mobile App vor Bedrohungen zu schützen und eine reibungslose Leistung zu gewährleisten. Von
                    Datenverschlüsselung bis hin zur Optimierung von Ladezeiten optimieren wir Ihre mobile App für
                    Sicherheit, Geschwindigkeit und Zuverlässigkeit
                  </div>
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
