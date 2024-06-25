import React, { useContext, useRef } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RectangleCentral, RectangleSide, RectangleTop } from './Icons';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export default function WelcomeSection() {
  const refContent = useRef(null);
  const refRects = useRef(null);
  const isInViewContent = useInView(refContent, {
    margin: '-250px'
  });
  const isInViewRects = useInView(refRects, {
    margin: '-250px'
  });
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="h-[560px] max-w-[1364px] mx-auto z-20 dark:text-white relative max-2xl:h-full">
      <div className="w-full text-left relative flex max-md:text-center">
        <div
          className={`${theme === 'dark' ? 'gradient' : 'gradient-light'} absolute top-16 right-20 w-[550px] h-[550px] max-md:hidden`}
        ></div>
        <div className="static z-40 flex gap-12 mt-24 max-2xl:mt-12 items-center justify-between h-full w-full max-2xl:px-8">
          <div className="max-md:w-full md:w-1/2 flex flex-col justify-between items-left gap-8 z-10 max-md:mt-12">
            <div className="w-full max-md:mt-0 flex" ref={refContent}>
              <AnimatePresence>
                <motion.div
                  style={{ originY: 0, width: '4px' }}
                  className="mr-12 bg-gradient-to-b from-[#743EEC] via-[#743EEC] to-transparent my-8 max-md:hidden"
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
              <div className="w-full gap-8 mb-16 mt-8 h-full" ref={refContent}>
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
                    <div className="uppercase text-[50px] max-md:text-[32px] font-bold">{t('welcome')}</div>

                    <div className="text-[18px] mt-8 leading-10 max-md:text-[14px] max-md:leading-8 ">
                      {t('welcome_content')}
                    </div>

                    <div
                      className="cursor-pointer max-md bg-white text-black text-center mt-8 py-3 w-36 rounded-lg text-[16px] hover:bg-gradient-to-r from-[#763AED] to-[#6663ED] hover:text-white hover:scale-110 hover:origin-top-left"
                      onClick={() => {
                        navigate('/about');
                      }}
                    >
                      {t('more')}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="max-md:hidden md:w-1/2 relative z-10 2xl:ml-32 max-md:mt-12" ref={refRects}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
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
                  transform: isInViewContent ? 'translateX(0px)' : 'translateX(50px) '
                }}
                transition={{
                  duration: 1
                }}
              >
                <div className="animate-[bounce_8s_ease-in-out_infinite]">
                  <RectangleSide />
                </div>
                <div className="z-20 animate-bounce-slow absolute top-2 left-36">
                  <RectangleCentral />
                </div>
                <div className="z-30 animate-[bounce_10s_ease-in-out_infinite] absolute left-48 -top-4">
                  <RectangleTop />
                </div>
                <div className="z-40 animate-bounce-medium absolute left-80 top-24">
                  <RectangleSide />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex justify-center items-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
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
              transform: isInViewContent ? 'translate(0px)' : 'translateX(0px) '
            }}
            transition={{
              duration: 1
            }}
          >
            <div className="w-8 h-14 absolute m-auto">
              <div className="w-[16px] p-[9px_8px] h-[35px] border-2 border-[#AAA6C3] rounded-full opacity-75 box-content">
                <div className="w-[16px] h-[16px] rounded-full bg-[#AAA6C3] animate-scroll"></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div> */}
    </div>
  );
}
