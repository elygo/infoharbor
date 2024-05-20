import { Fragment, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { availableLanguages } from '../../i18n';
import { Menu, Transition } from '@headlessui/react';
import { ThemeContext } from '../utils/ThemeContext';
import { ArrowDownIcon } from './Icons';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Language selector used i18n
 * @returns JSX element
 */
export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);

  /**
   * Change language function
   * @param e target language short version
   */
  const changeLang = (e) => {
    i18n.changeLanguage(e.target.innerText);
    localStorage.setItem('i18nextLng', e.target.innerText);
  };

  return (
    <Menu as="div" className="relative z-[40] px-8">
      {({ open }) => {
        return (
          <>
            <Menu.Button className="z-[40] flex gap-2 items-center">
              {i18n.language}
              <div className={`${open ? 'rotate-180' : ''}`}>
                <ArrowDownIcon color={theme === 'dark' ? 'white' : 'black'} />
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={`absolute right-0 z-[100] mt-2 w-12 origin-top-right ${
                  theme !== 'dark' ? 'bg-white' : 'bg-[#2D2A39] border border-[#242424]'
                } rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer`}
              >
                {availableLanguages.map((language, index) => {
                  if (i18n.language !== language) {
                    return (
                      <Menu.Item disabled={i18n.language === language ? true : false} key={index}>
                        {({ active }) => (
                          <span
                            onClick={changeLang}
                            className={classNames(
                              active
                                ? 'text-white bg-[#7343ecd5] dark:bg-[#7343ecd5] hover:bg-[#7343ecd5]'
                                : 'dark:text-white',
                              'block px-4 py-2 text-sm z-[100]'
                            )}
                          >
                            {language}
                          </span>
                        )}
                      </Menu.Item>
                    );
                  }
                })}
              </Menu.Items>
            </Transition>
          </>
        );
      }}
    </Menu>
  );
}
