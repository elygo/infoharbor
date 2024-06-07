import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeftIcon, ArrowRightIcon } from './Icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const settings = {
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
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
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="max-w-[1364px] mx-auto z-20 dark:text-white relative max-2xl:h-full my-10">
      <div className="flex w-full">
        <div className="w-1.5 bg-gradient-to-b from-[#EEEEEE] via-[#743EEC] to-[#EEEEEE] dark:bg-gradient-to-b dark:from-[#070B1A] dark:via-[#743EEC] dark:to-[#070B1A]"></div>
        <div className="w-[calc(100%-5px)] h-full">
          <div className="text-[40px] ml-10">Services</div>
          <div className="flex h-full w-full ml-12 my-8 flex-col">
            <Slider {...settings} className="slider-container">
              <div className="h-[420px] pr-4 mb-6" key={1}>
                <div className="h-full flex flex-col justify-between px-8 py-6 bg-white dark:bg-[#2D2A39] rounded-lg border dark:border-[#2D2A39] hover:border-[#7B27EC] dark:hover:border-[#7B27EC]  dark:hover:border-[#7B27EC]">
                  <div className="h-full">
                    <div className="line-clamp-8 max-xl:line-clamp-4 font-semibold">Mobile apps development</div>
                  </div>
                  <div
                    className="flex flex-col gap-4  hover:cursor-pointer"
                    onClick={() => {
                      navigate('/mobile');
                    }}
                  >
                    <div className="border-t border-[#c4c4c4] dark:border-[#687594]"></div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-[16px] line-clamp-3 max-xl:text-[12px] hover:text-[#743EEC] hover:dark:text-[#cccccc] hover:font-bold">
                        Mehr
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[420px] pr-4 mb-6" key={2}>
                <div className="h-full flex flex-col justify-between px-8 py-6 bg-white dark:bg-[#2D2A39] rounded-lg border dark:border-[#2D2A39] hover:border-[#7B27EC] dark:hover:border-[#7B27EC]  dark:hover:border-[#7B27EC]">
                  <div className="h-full">
                    <div className="line-clamp-8 max-xl:line-clamp-4 font-semibold">Data 4.0</div>
                  </div>
                  <div
                    className="flex flex-col gap-4 hover:cursor-pointer"
                    onClick={() => {
                      navigate('/data');
                    }}
                  >
                    <div className="border-t border-[#c4c4c4] dark:border-[#687594]"></div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-[16px] line-clamp-3 max-xl:text-[12px] hover:text-[#743EEC] hover:dark:text-[#cccccc] hover:font-bold">
                        Mehr
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[420px] pr-4 mb-6" key={3}>
                <div className="h-full flex flex-col justify-between px-8 py-6 bg-white dark:bg-[#2D2A39] rounded-lg border dark:border-[#2D2A39] hover:border-[#7B27EC]  dark:hover:border-[#7B27EC]">
                  <div className="h-full">
                    <div className="line-clamp-8 max-xl:line-clamp-4 font-semibold">Web development</div>
                  </div>
                  <div
                    className="flex flex-col gap-4 hover:cursor-pointer"
                    onClick={() => {
                      navigate('/webdev');
                    }}
                  >
                    <div className="border-t border-[#c4c4c4] dark:border-[#687594]"></div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-[16px] line-clamp-3 max-xl:text-[12px] hover:text-[#743EEC] hover:dark:text-[#cccccc] hover:font-bold">
                        Mehr
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[420px] pr-4 mb-6" key={4}>
                <div className="h-full flex flex-col justify-between px-8 py-6 bg-white dark:bg-[#2D2A39] rounded-lg border dark:border-[#2D2A39] hover:border-[#7B27EC]  dark:hover:border-[#7B27EC]">
                  <div className="h-full">
                    <div className="line-clamp-8 max-xl:line-clamp-4 font-semibold">Künstliche Intelligenz</div>
                  </div>
                  <div
                    className="flex flex-col gap-4 hover:cursor-pointer"
                    onClick={() => {
                      navigate('/intelligence');
                    }}
                  >
                    <div className="border-t border-[#c4c4c4] dark:border-[#687594]"></div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-[16px] line-clamp-3 max-xl:text-[12px] hover:text-[#743EEC] hover:dark:text-[#cccccc] hover:font-bold">
                        Mehr
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
