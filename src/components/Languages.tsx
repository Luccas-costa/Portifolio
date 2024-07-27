"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

import { languages } from "@/lib/languages";
import { Language } from "@/types/Languages";
import styles from "@/styles/Languages.module.css";

import { motion, useAnimation } from "framer-motion";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import pt from "@/constants/pt.json";
import en from "@/constants/en.json";
import es from "@/constants/es.json";

interface LanguagesProps {
  LanguageType: string;
}

interface Languagis {
  id: number;
  image: string | StaticImport;
  name: string;
}

const chunkArray = (array: any[], size: number) => {
  const chunkedArr: any[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

export default function Languages({ LanguageType }: LanguagesProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(5);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [controlLanguage, setControlLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const handlerLanguageType = (LanguageType: string) => {
      if (LanguageType === "pt") {
        setControlLanguage(pt);
      } else if (LanguageType === "en") {
        setControlLanguage(en);
      } else if (LanguageType === "es") {
        setControlLanguage(es);
      }
    };
    handlerLanguageType(LanguageType);
  }, [LanguageType]);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 520) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 670) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 1200) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(5);
      }
    };

    window.addEventListener("resize", updateItemsPerSlide);
    updateItemsPerSlide();

    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const slides = chunkArray(languages, itemsPerSlide);

  const handleDragEnd = (_event: any, info: { offset: { x: number } }) => {
    const offset = info.offset.x;
    const direction = offset < 0 ? 1 : -1;
    moveSlide(direction);
  };

  const moveSlide = (direction: number) => {
    let newSlide = currentSlide + direction;
    if (newSlide < 0) {
      newSlide = slides.length - 1;
    } else if (newSlide >= slides.length) {
      newSlide = 0;
    }
    setCurrentSlide(newSlide);
    if (containerRef.current) {
      controls.start({ x: -newSlide * containerRef.current.offsetWidth });
    }
  };

  return (
    <div className='w-full bg-black text-zinc-600 screen9:pt-[30px] screen10:pt-[43px] screen11:pt-[48px] screen12:pt-[48px] pt-[50px] pb-[150px] flex flex-col items-center overflow-hidden relative'>
      <div className='text-xl screen12:text-2xl font-semibold tracking-tighter screen11:text-3xl'>
        {controlLanguage?.Languages.title}
      </div>
      <div className='mt-16 overflow-hidden w-full' ref={containerRef}>
        <motion.div
          className='flex'
          drag='x'
          onDragEnd={handleDragEnd}
          animate={controls}
          style={{ display: "flex", width: "100%" }}
        >
          {slides.map((slide, index) => (
            <motion.div key={index} className='flex-shrink-0 w-full'>
              <ul className='flex justify-center space-x-[30px] screen12:space-x-[50px] spacesliders:space-x-0 spacesliders:justify-around'>
                {slide.map((language: Languagis) => (
                  <li
                    key={language.id}
                    className='flex items-center space-x-2 spacesliders:space-x-4'
                  >
                    <Image
                      src={language.image}
                      alt={language.name}
                      width={50}
                      height={50}
                    />
                    <span className='text-4xl font-semibold'>
                      {language.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <button
        onClick={() => moveSlide(-1)}
        className='absolute left-4 top-[49%] screen11:top-[47%] transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full'
        style={{ zIndex: 3 }}
      >
        <CaretLeft size={24} color='white' />
      </button>
      <button
        onClick={() => moveSlide(1)}
        className='absolute right-4 top-[49%] screen11:top-[47%] transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full'
        style={{ zIndex: 3 }}
      >
        <CaretRight size={24} color='white' />
      </button>
      <div
        className={`absolute screen12:w-48 w-32 h-16 left-0 top-[49%] screen11:top-[47%] transform -translate-y-1/2 ${styles.degrade}`}
        style={{ zIndex: 2 }}
      ></div>
      <div
        className={`absolute screen12:w-48 w-32 h-16 right-0 top-[49%] screen11:top-[47%] transform -translate-y-1/2 ${styles.degrade2}`}
        style={{ zIndex: 2 }}
      ></div>
    </div>
  );
}
