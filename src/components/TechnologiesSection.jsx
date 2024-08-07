import React, { useContext, useRef, useEffect, useState } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowDownIcon, ArrowRightIcon } from './Icons';
import {
  faAndroid,
  faAppStoreIos,
  faJava,
  faJs,
  faNodeJs,
  faPython,
  faReact,
  faVuejs
} from '@fortawesome/free-brands-svg-icons';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faDatabase, faMultiply } from '@fortawesome/free-solid-svg-icons';
import { faBarChart } from '@fortawesome/free-regular-svg-icons';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export default function TechnologiesSection() {
  const refContent = useRef(null);
  const isInViewContent = useInView(refContent, {
    margin: '-300px'
  });
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const technologies = [{}];

  return (
    <div className="max-w-[1364px] mx-auto z-20 dark:text-white relative max-2xl:h-full my-10">
      <div className="flex w-full max-2xl:px-8" ref={refContent}>
        <AnimatePresence>
          <motion.div
            style={{ originY: 0, width: '4px' }}
            className="my-4 bg-gradient-to-b from-[#743EEC] via-[#743EEC] to-transparent max-md:hidden"
            variants={{
              hidden: {
                y: 0,
                opacity: 0
              },
              visible: {
                y: 0,
                opacity: 1
              }
            }}
            animate={{
              opacity: isInViewContent ? 1 : 0,
              transform: isInViewContent ? 'scaleY(1)' : 'scaleY(0)'
            }}
            transition={{
              duration: 2
            }}
          ></motion.div>
        </AnimatePresence>
        <div className="w-[calc(100%-5px)] h-full" ref={refContent}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="flex flex-col  max-md:items-center"
              variants={{
                initial: {
                  opacity: 0
                },
                hidden: {
                  opacity: 0
                },
                visible: {
                  opacity: isInViewContent ? 1 : 0
                }
              }}
              animate={{
                opacity: isInViewContent ? 1 : 0,
                transform: isInViewContent ? 'translateX(0px)' : 'translateX(-50px) '
              }}
              transition={{
                duration: 1
              }}
            >
              <div className="text-[40px] ml-10 max-md:ml-0 max-md:text-center">{t('technologies')}</div>
              <div className="flex max-md:flex-col h-full w-full md:ml-6 max my-8 md:gap-12 max-md:gap-0">
                <div className="max-md:w-full md:w-1/2 flex flex-col">
                  <Disclosure as="div" className="group pt-6 px-6" defaultOpen={true}>
                    {({ open }) => (
                      <>
                        <DisclosureButton className="group flex w-full items-center justify-between">
                          <span className="text-lg font-medium group-data-[open]:font-semibold dark:group-data-[hover]:text-white/80">
                            Back-end
                          </span>
                          {open ? (
                            <ArrowDownIcon color={theme === 'dark' ? 'white' : 'black'} />
                          ) : (
                            <ArrowRightIcon color={theme === 'dark' ? 'white' : 'black'} width={5} />
                          )}
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 text-sm/5">
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-4 justify-between items-center">
                              <div className="flex flex-col gap-1 text-lg">
                                <div>Java, Spring Framework (MVC, BOOT, AOP)</div>
                                <div>Hibernate, MyBatis, Lombok, MapStruct</div>
                              </div>
                              <div className="p-2">
                                <FontAwesomeIcon
                                  icon={faJava}
                                  size="4x"
                                  color={theme === 'dark' ? '#ffffff60' : '#8E68EF'}
                                />
                              </div>
                            </div>
                            <div className="flex gap-4 justify-between items-center">
                              <div className="flex flex-col gap-1 text-lg">
                                <div>NodeJS, ExpressJS, NestJS</div>
                              </div>
                              <div className="p-2">
                                <FontAwesomeIcon
                                  icon={faNodeJs}
                                  size="3x"
                                  color={theme === 'dark' ? '#ffffff60' : '#8E68EF'}
                                />
                              </div>
                            </div>
                            <div className="flex gap-4 justify-between items-center">
                              <div className="flex flex-col gap-1 text-lg">
                                <div>PostgreSQL, MongoDB, Redis, Docker, Kubernetes</div>
                              </div>
                              <div className="p-2">
                                <FontAwesomeIcon
                                  icon={faDatabase}
                                  size="3x"
                                  color={theme === 'dark' ? '#ffffff60' : '#8E68EF'}
                                />
                              </div>
                            </div>
                          </div>
                        </DisclosurePanel>
                        <hr className="my-6 border-b-t border-[#cecece] group-data-[hover]:border-[#7243EC] group-data-[open]:border-[#7243EC]" />
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="group pt-6 px-6" defaultOpen={false}>
                    {({ open }) => (
                      <>
                        <DisclosureButton className="group flex w-full items-center justify-between">
                          <span className="text-lg font-medium group-data-[open]:font-semibold  dark:group-data-[hover]:text-white/80">
                            Front-end
                          </span>
                          {open ? (
                            <ArrowDownIcon color={theme === 'dark' ? 'white' : 'black'} />
                          ) : (
                            <ArrowRightIcon color={theme === 'dark' ? 'white' : 'black'} width={5} />
                          )}
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 text-sm/5">
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-4 justify-between items-center">
                              <div className="flex flex-col gap-1 text-lg">
                                <div>JavaScript, TypeScript</div>
                                <div>HTML, CSS, SASS/SCSS, Tailwind, Bootstrap</div>
                              </div>
                              <div className="p-2">
                                <FontAwesomeIcon
                                  icon={faJs}
                                  size="4x"
                                  color={theme === 'dark' ? '#ffffff60' : '#8E68EF'}
                                />
                              </div>
                            </div>
                            <div className="flex gap-4 justify-between items-center">
                              <div className="flex flex-col gap-1 text-lg">
                                <div>ReactJs, Redux, NextJs, ThreeJs</div>
                              </div>
                              <div className="p-2">
                                <FontAwesomeIcon
                                  icon={faReact}
                                  size="3x"
                                  color={theme === 'dark' ? '#ffffff60' : '#8E68EF'}
                                />
                              </div>
                            </div>
                            <div className="flex gap-4 justify-between items-center">
                              <div className="flex flex-col gap-1 text-lg">
                                <div>VueJs, Vuex, Mobx, NuxtJs</div>
                              </div>
                              <div className="p-2">
                                <FontAwesomeIcon
                                  icon={faVuejs}
                                  size="3x"
                                  color={theme === 'dark' ? '#ffffff60' : '#8E68EF'}
                                />
                              </div>
                            </div>
                          </div>
                        </DisclosurePanel>
                        <hr className="my-6 border-b-t border-[#cecece] group-data-[hover]:border-[#7243EC] group-data-[open]:border-[#7243EC]" />
                      </>
                    )}
                  </Disclosure>
                </div>

                <div className="max-md:w-full md:w-1/2 flex flex-col">
                  <Disclosure as="div" className="group pt-6 px-6" defaultOpen={true}>
                    {({ open }) => (
                      <>
                        <DisclosureButton className="group flex w-full items-center justify-between">
                          <span className="text-lg font-medium group-data-[open]:font-semibold  dark:group-data-[hover]:text-white/80">
                            Data 4.0
                          </span>
                          {open ? (
                            <ArrowDownIcon color={theme === 'dark' ? 'white' : 'black'} />
                          ) : (
                            <ArrowRightIcon color={theme === 'dark' ? 'white' : 'black'} width={5} />
                          )}
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 text-sm/5">
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-4 justify-between items-center">
                              <div className="flex flex-col gap-1 text-lg">
                                <div>Python, Pandas, Numpy, TensorFlow, Seaborn, Matplotlib</div>
                                <div>Hadoop, Hive SQL, PySpark</div>
                              </div>
                              <div className="p-2">
                                <FontAwesomeIcon
                                  icon={faPython}
                                  size="4x"
                                  color={theme === 'dark' ? '#ffffff60' : '#8E68EF'}
                                />
                              </div>
                            </div>
                            <div className="flex gap-4 justify-between items-center">
                              <div className="flex flex-col gap-1 text-lg">
                                <div>
                                  Tableu, Power BI, Yandex.Metrica, Google Data Studio, S3, Airflow, Airbyte,
                                  KafkaGeoPandas, Elasticsearch
                                </div>
                              </div>
                              <div className="p-2">
                                <FontAwesomeIcon
                                  icon={faDashboard}
                                  size="3x"
                                  color={theme === 'dark' ? '#ffffff60' : '#8E68EF'}
                                />
                              </div>
                            </div>
                            <div className="flex gap-4 justify-between items-center">
                              <div className="flex flex-col gap-1 text-lg">
                                <div>GCP, Microsoft Azure, MySQL, PostgreSQL, Clickhouse</div>
                              </div>
                              <div className="p-2">
                                <FontAwesomeIcon
                                  icon={faBarChart}
                                  size="3x"
                                  color={theme === 'dark' ? '#ffffff60' : '#8E68EF'}
                                />
                              </div>
                            </div>
                          </div>
                        </DisclosurePanel>
                        <hr className="my-6 border-b-t border-[#cecece] group-data-[hover]:border-[#7243EC] group-data-[open]:border-[#7243EC]" />
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="group pt-6 px-6" defaultOpen={false}>
                    {({ open }) => (
                      <>
                        <DisclosureButton className="group flex w-full items-center justify-between">
                          <span className="text-lg font-medium group-data-[open]:font-semibold  dark:group-data-[hover]:text-white/80">
                            {t('mobile')}
                          </span>
                          {open ? (
                            <ArrowDownIcon color={theme === 'dark' ? 'white' : 'black'} />
                          ) : (
                            <ArrowRightIcon color={theme === 'dark' ? 'white' : 'black'} width={5} />
                          )}
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 text-sm/5">
                          <div className="flex flex-col gap-1">
                            <div className="flex gap-4 justify-between items-center">
                              <div className="flex flex-col gap-1 text-lg">
                                <div>iOS</div>
                                <div>Objective-C, Swift, Clean Swift, Snapkit</div>
                              </div>
                              <div className="p-2">
                                <FontAwesomeIcon
                                  icon={faAppStoreIos}
                                  size="4x"
                                  color={theme === 'dark' ? '#ffffff60' : '#8E68EF'}
                                />
                              </div>
                            </div>
                            <div className="flex gap-4 justify-between items-center">
                              <div className="flex flex-col gap-1 text-lg">
                                <div>Android</div>
                                <div>Java, Kotlin, ViewModel, Navigation, JUnit, Retrofit</div>
                              </div>
                              <div className="p-2">
                                <FontAwesomeIcon
                                  icon={faAndroid}
                                  size="3x"
                                  color={theme === 'dark' ? '#ffffff60' : '#8E68EF'}
                                />
                              </div>
                            </div>
                            <div className="flex gap-4 justify-between items-center">
                              <div className="flex flex-col gap-1 text-lg">
                                <div>Flutter, React Native</div>
                              </div>
                              <div className="p-2">
                                <FontAwesomeIcon
                                  icon={faMultiply}
                                  size="3x"
                                  color={theme === 'dark' ? '#ffffff60' : '#8E68EF'}
                                />
                              </div>
                            </div>
                          </div>
                        </DisclosurePanel>
                        <hr className="my-6 border-b-t border-[#cecece] group-data-[hover]:border-[#7243EC] group-data-[open]:border-[#7243EC]" />
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
