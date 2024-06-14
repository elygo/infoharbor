import React, { useState, useRef, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeftIcon, ArrowRightIcon, CircleIcon } from './Icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import MouseGradient from '../utils/MouseGradient';
import VanillaTilt from 'vanilla-tilt';
import { motion, AnimatePresence, useInView } from 'framer-motion';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  return (
    <div onClick={onClick} id="slick-next" className={`arrow ${className}`}>
      <ArrowRightIcon class="arrows" color={`${theme === 'dark' ? 'white' : 'black'}`} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div onClick={onClick} id="slick-prev" className={`arrow ${className}`}>
      <ArrowLeftIcon class="arrows" color={`${theme === 'dark' ? 'white' : 'black'}`} />
    </div>
  );
}

export default function ServicesSection() {
  const refContent = useRef(null);
  const refBarTop = useRef(null);
  const refBarBottom = useRef(null);
  const isInViewContent = useInView(refContent, {
    margin: '-250px'
  });
  const isInViewBarTop = useInView(refContent, {
    margin: '-250px'
  });
  const isInViewBarIcon = useInView(refBarBottom, {
    margin: '0px 0px -140px 0px'
  });
  const isInViewBarBottom = useInView(refBarBottom, {
    margin: '0px 0px -280px 0px'
  });

  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const card1 = useRef();
  const card2 = useRef();
  const card3 = useRef();
  const card4 = useRef();

  const options = {
    scale: 1,
    speed: 100,
    max: 7
  };

  useEffect(() => {
    VanillaTilt.init(card1.current, options);
    VanillaTilt.init(card2.current, options);
    VanillaTilt.init(card3.current, options);
    VanillaTilt.init(card4.current, options);
  }, [options]);

  const settings = {
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots',
    infinite: false,
    speed: 1500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="max-w-[1364px] mx-auto z-20 dark:text-white relative max-2xl:h-full my-10">
      <div className="flex w-full max-2xl:px-8">
        <div className="w-full flex flex-col gap-4">
          <div className="h-1/2" ref={refContent}>
            <AnimatePresence>
              <motion.div
                style={{ originY: 0, width: '4px' }}
                className="bg-gradient-to-t from-[#743EEC] via-[#743EEC] to-transparent max-md:hidden h-full"
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
                  opacity: isInViewBarTop ? 1 : 0,
                  transform: isInViewBarTop ? 'scaleY(1)' : 'scaleY(0)'
                }}
                transition={{
                  duration: 1
                }}
              ></motion.div>
            </AnimatePresence>
          </div>
          <AnimatePresence>
            <motion.div
              style={{ originY: 0, width: '4px' }}
              className=" max-md:hidden relative"
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
                opacity: isInViewBarIcon ? 1 : 0
              }}
              transition={{
                duration: 0.5
              }}
            >
              <div className="absolute -top-[10px] -left-2">
                <CircleIcon />
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="h-1/2" ref={refBarBottom}>
            <AnimatePresence>
              <motion.div
                style={{ originY: 0, width: '4px' }}
                className="bg-gradient-to-b from-[#743EEC] via-[#743EEC] to-transparent max-md:hidden h-full"
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
                  opacity: isInViewBarBottom ? 1 : 0,
                  transform: isInViewBarBottom ? 'scaleY(1)' : 'scaleY(0)'
                }}
                transition={{
                  duration: 1
                }}
              ></motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="w-[calc(100%-5px)] h-full max-md:w-full" ref={refContent}>
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
              <div className="text-[40px] ml-10 max-md:ml-0 max-md:text-center">{t('services')}</div>
              <div className="flex h-full w-full ml-12 max-md:ml-0 my-8 flex-col">
                <Slider {...settings} className="slider-container">
                  <div
                    className="h-[420px] pr-4 max-md:pr-0 mb-6"
                    key={1}
                    onClick={() => {
                      navigate('/mobile');
                    }}
                  >
                    <MouseGradient
                      refa={card1}
                      className="h-full flex flex-col justify-between px-8 py-6 bg-white dark:bg-[#2D2A39] rounded-lg border dark:border-[#2D2A39] hover:cursor-pointer"
                    >
                      <div className="h-full">
                        <div className="line-clamp-8 max-xl:line-clamp-4 font-semibold">{t('mobiledev')}</div>
                        <div className="mt-12 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.cross-platform')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.user-centered')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.diversity')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.security')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.maintenance')}
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="border-t border-[#c4c4c4] dark:border-[#687594]"></div>
                        <div className="flex items-center justify-between gap-4">
                          <div className="text-[16px] line-clamp-3 max-xl:text-[12px] hover:text-[#743EEC] hover:dark:text-[#cccccc] hover:font-bold">
                            {t('more')}
                          </div>
                        </div>
                      </div>
                    </MouseGradient>
                  </div>

                  <div
                    className="h-[420px] pr-4 max-md:pr-0 mb-6"
                    key={2}
                    onClick={() => {
                      navigate('/data');
                    }}
                  >
                    <MouseGradient
                      refa={card2}
                      className="h-full flex flex-col justify-between px-8 py-6 bg-white dark:bg-[#2D2A39] rounded-lg border dark:border-[#2D2A39]  hover:cursor-pointer"
                    >
                      <div className="h-full">
                        <div className="line-clamp-8 max-xl:line-clamp-4 font-semibold">Data 4.0</div>
                        <div className="mt-12 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.data_analysis')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.data-engineering')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.data-science')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.data-visualisation')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.digital-transformation')}
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 hover:cursor-pointer">
                        <div className="border-t border-[#c4c4c4] dark:border-[#687594]"></div>
                        <div className="flex items-center justify-between gap-4">
                          <div className="text-[16px] line-clamp-3 max-xl:text-[12px] hover:text-[#743EEC] hover:dark:text-[#cccccc] hover:font-bold">
                            {t('more')}
                          </div>
                        </div>
                      </div>
                    </MouseGradient>
                  </div>
                  <div
                    className="h-[420px] pr-4 max-md:pr-0 mb-6"
                    key={3}
                    onClick={() => {
                      navigate('/webdev');
                    }}
                  >
                    <MouseGradient
                      refa={card3}
                      className="h-full flex flex-col justify-between px-8 py-6 bg-white dark:bg-[#2D2A39] rounded-lg border dark:border-[#2D2A39]  hover:cursor-pointer"
                    >
                      <div className="h-full">
                        <div className="line-clamp-8 max-xl:line-clamp-4 font-semibold">{t('webapp')}</div>
                        <div className="mt-12 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.web-design')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.responsive')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.front_back')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.e-commerce')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.security_performance')}
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 hover:cursor-pointer">
                        <div className="border-t border-[#c4c4c4] dark:border-[#687594]"></div>
                        <div className="flex items-center justify-between gap-4">
                          <div className="text-[16px] line-clamp-3 max-xl:text-[12px] hover:text-[#743EEC] hover:dark:text-[#cccccc] hover:font-bold">
                            {t('more')}
                          </div>
                        </div>
                      </div>
                    </MouseGradient>
                  </div>
                  <div
                    className="h-[420px] pr-4 max-md:pr-0 mb-6"
                    key={4}
                    onClick={() => {
                      navigate('/intelligence');
                    }}
                  >
                    <MouseGradient
                      refa={card4}
                      className="h-full flex flex-col justify-between px-8 py-6 bg-white dark:bg-[#2D2A39] rounded-lg border dark:border-[#2D2A39]  hover:cursor-pointer"
                    >
                      <div className="h-full">
                        <div className="line-clamp-8 max-xl:line-clamp-4 font-semibold">{t('ai')}</div>
                        <div className="mt-12 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.machine_learning')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.nlp')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.computer_vision')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.predictive')}
                        </div>
                        <div className="mt-4 pl-4 text-[14px] border-l border-[#c4c4c4] dark:border-[#687594]">
                          {t('service.ai_automation')}
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 hover:cursor-pointer">
                        <div className="border-t border-[#c4c4c4] dark:border-[#687594]"></div>
                        <div className="flex items-center justify-between gap-4">
                          <div className="text-[16px] line-clamp-3 max-xl:text-[12px] hover:text-[#743EEC] hover:dark:text-[#cccccc] hover:font-bold">
                            {t('more')}
                          </div>
                        </div>
                      </div>
                    </MouseGradient>
                  </div>
                </Slider>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
