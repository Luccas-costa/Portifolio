"use client";
import React, { useState, useEffect } from "react";

import { Language } from "@/types/Languages";
import styles from "@/styles/Questions.module.css";

import QuestionsFeed from "@/components/assets/QuestionsFeed";

import pt from "@/constants/pt.json";
import en from "@/constants/en.json";
import es from "@/constants/es.json";

interface QuestionsProps {
  LanguageType: string;
}

export default function Questions({ LanguageType }: QuestionsProps) {
  const [numberlanguage, setNumberlanguage] = useState(0);
  const [controlLanguage, setControlLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const handlerLanguageType = (LanguageType: string) => {
      if (LanguageType === "pt") {
        setControlLanguage(pt);
        setNumberlanguage(1);
      } else if (LanguageType === "en") {
        setControlLanguage(en);
        setNumberlanguage(2);
      } else if (LanguageType === "es") {
        setControlLanguage(es);
        setNumberlanguage(3);
      }
    };
    handlerLanguageType(LanguageType);
  }, [LanguageType]);
  return (
    <div
      className={`bg-black min-h-[1200px] text-white pt-[100px] pb-[300px] flex flex-col ${styles.degrade}`}
    >
      <div className='text-7xl font-semibold text-center'>
        {controlLanguage?.Questions.title}
      </div>
      <QuestionsFeed language={numberlanguage} />
    </div>
  );
}
