import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AiIcon, CircleIcon, DataIcon, GreenTickIcon, SIcon } from './Icons';

export default function DataSection() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="max-w-[1364px] mx-auto z-20 dark:text-white relative max-2xl:h-full mt-10">
      <div className="flex">
        <div className="w-3 bg-gradient-to-b from-[#EEEEEE] via-[#743EEC] to-[#EEEEEE] dark:bg-gradient-to-b dark:from-[#070B1A] dark:via-[#743EEC] dark:to-[#070B1A]"></div>
        <div className="flex flex-col">
          <div className="border border-[#eeeeee2c] my-6 ml-10"></div>
          <div className="flex justify-center items-center gap-8 ml-10">
            <div></div>
            <div className="">
              <DataIcon width={77} height={77} />
            </div>

            <div className="flex flex-col">
              <div className="text-[30px]  font-bold">Data 4.0</div>
              <div className="mt-4 leading-9">
                Unsere Datenlösungen bieten eine umfassende Palette von Dienstleistungen für die Analyse, Verarbeitung
                und Interpretation Ihrer Daten, um wertvolle Einblicke zu gewinnen und fundierte Entscheidungen zu
                treffen. Mit einer Kombination aus Fachwissen, fortschrittlichen Technologien und bewährten Methoden
                unterstützen wir Sie dabei, den vollen Wert Ihrer Daten zu erschließen und Ihr Unternehmen
                voranzubringen.
              </div>
            </div>
          </div>

          <div className="flex items-end gap-8 mt-8 ml-10">
            <div></div>
            <div className="flex flex-col">
              <div className="text-[24px]">Datenanalyse:</div>
              <div className="flex gap-8  justify-between items-center">
                <div className="rounded-full border flex items-center justify-center p-[22px]">
                  <GreenTickIcon width={33} height={33} />
                </div>

                <div className="mt-4 leading-9">
                  Unsere Datenlösungen bieten eine umfassende Palette von Dienstleistungen für die Analyse, Verarbeitung
                  und Interpretation Ihrer Daten, um wertvolle Einblicke zu gewinnen und fundierte Entscheidungen zu
                  treffen. Mit einer Kombination aus Fachwissen, fortschrittlichen Technologien und bewährten Methoden
                  unterstützen wir Sie dabei, den vollen Wert Ihrer Daten zu erschließen und Ihr Unternehmen
                  voranzubringen.
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end gap-8 mt-8 ml-10">
            <div></div>
            <div className="flex flex-col">
              <div className="text-[24px]">Daten-Engineering:</div>
              <div className="flex gap-8 justify-between items-center ">
                <div className="rounded-full border flex items-center justify-center p-[22px]">
                  <GreenTickIcon width={33} height={33} />
                </div>

                <div className="mt-4 leading-9">
                  Unsere Datenlösungen bieten eine umfassende Palette von Dienstleistungen für die Analyse, Verarbeitung
                  und Interpretation Ihrer Daten, um wertvolle Einblicke zu gewinnen und fundierte Entscheidungen zu
                  treffen. Mit einer Kombination aus Fachwissen, fortschrittlichen Technologien und bewährten Methoden
                  unterstützen wir Sie dabei, den vollen Wert Ihrer Daten zu erschließen und Ihr Unternehmen
                  voranzubringen.
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end gap-8 mt-8 ml-10">
            <div></div>
            <div className="flex flex-col">
              <div className="text-[24px]">Daten-Science:</div>
              <div className="flex gap-8 justify-between items-center ">
                <div className="rounded-full border flex items-center justify-center p-[22px]">
                  <GreenTickIcon width={33} height={33} />
                </div>

                <div className="mt-4 leading-9">
                  Unsere Datenlösungen bieten eine umfassende Palette von Dienstleistungen für die Analyse, Verarbeitung
                  und Interpretation Ihrer Daten, um wertvolle Einblicke zu gewinnen und fundierte Entscheidungen zu
                  treffen. Mit einer Kombination aus Fachwissen, fortschrittlichen Technologien und bewährten Methoden
                  unterstützen wir Sie dabei, den vollen Wert Ihrer Daten zu erschließen und Ihr Unternehmen
                  voranzubringen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
