"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import { Language } from "@/types/Languages";
import styles from "@/styles/About.module.css";

import { GlobeDemo } from "./ui/GlobeAc";

import pt from "@/constants/pt.json";
import en from "@/constants/en.json";
import es from "@/constants/es.json";

interface AboutProps {
  LanguageType: string;
}

export default function About({ LanguageType }: AboutProps) {
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
  return (
    <div className='bg-black min-h-[1200px] text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[100px] flex flex-col'>
      <div className='text-7xl font-semibold mt-[100px] px-[72px]'>
        {controlLanguage?.About.title}
      </div>
      <div className='text-4xl font-semibold flex flex-col items-start px-20 w-full'>
        <h1>{controlLanguage?.About.description}</h1>
        <h4 className='text-xl'></h4>
        <div
          className={`w-[76%] h-[600px] mt-5 bg-black font-bold ${
            LanguageType == "es" ? "text-3xl" : "text-5xl"
          } relative rounded-lg`}
        >
          <div
            className={`absolute top-[50%] right-0 translate-x-[55%] translate-y-[-50%] -rotate-90 `}
          >
            {controlLanguage?.About.question}
            {"  "}
            <span className='text-[#5D2CA8]'>
              {controlLanguage?.About["question-span"]}
            </span>
          </div>
        </div>
      </div>
      <div className='flex  justify-evenly items-center'>
        <div className='w-1/2'>
          <GlobeDemo />
        </div>
        <div className='w-[45%] px-20 text-3xl text-center'>
          {controlLanguage?.About["about-me"]}
        </div>
      </div>
    </div>
  );
}
