"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { languages } from "@/lib/languages";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import styles from "@/styles/Languages.module.css";

interface Language {
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

export default function Languages() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(5);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 430) {
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
    <div className='w-full bg-black text-zinc-600 screen9:pt-[30px] screen10:pt-[43px] screen11:pt-[48px] pb-[150px] flex flex-col items-center overflow-hidden relative'>
      <div className='text-2xl font-semibold tracking-tighter screen11:text-3xl'>
        Quais Linguagens eu trabalho?
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
                {slide.map((language: Language) => (
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
        className='absolute left-4 top-[47%] transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full'
        style={{ zIndex: 3 }}
      >
        <CaretLeft size={24} color='white' />
      </button>
      <button
        onClick={() => moveSlide(1)}
        className='absolute right-4 top-[47%] transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full'
        style={{ zIndex: 3 }}
      >
        <CaretRight size={24} color='white' />
      </button>
      <div
        className={`absolute screen12:w-48 w-32 h-12 left-4 top-[47%] transform -translate-y-1/2 ${styles.degrade}`}
        style={{ zIndex: 2 }}
      ></div>
      <div
        className={`absolute screen12:w-48 w-32 h-12 right-4 top-[47%] transform -translate-y-1/2 ${styles.degrade2}`}
        style={{ zIndex: 2 }}
      ></div>
    </div>
  );
}
