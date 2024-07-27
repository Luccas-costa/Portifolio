"use client";

import React, { useState, useEffect } from "react";

import { Language } from "@/types/Languages";
import styles from "@/styles/Hero.module.css";

import Card from "./assets/Card";
import ThreeDCardDemo from "./ui/CardAc";

import pt from "@/constants/pt.json";
import en from "@/constants/en.json";
import es from "@/constants/es.json";

interface ProjectsProps {
  LanguageType: string;
}

export default function Projects({ LanguageType }: ProjectsProps) {
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
    <div
      className={`w-full bg-black pt-40 pb-40 text-white flex flex-col items-center`}
    >
      <div className='text-7xl font-semibold'>
        {controlLanguage?.Projetos.title}
      </div>
      <div className='text-lg screen12:text-xl screen8:text-2xl font-semibold text-zinc-400 w-[90%] screen11_5:w-[70%] screen9:w-1/2 screen5:w-1/3 screen1:w-1/4 text-center mt-4'>
        {controlLanguage?.Projetos.description}
      </div>
      <div className='grid grid-cols-1 screen6:grid-cols-2 screen1:grid-cols-3 gap-0 screen6:gap-6 screen5:gap-16 screen1:gap-6 screen04:gap-16 mt-12'>
        <ThreeDCardDemo
          Title={controlLanguage?.Projetos.Card1.title || ""}
          Description={controlLanguage?.Projetos.Card1.description || ""}
          ImageProject='/Teko-bag.png'
          linkgit='https://github.com/Luccas-costa/teko-bag'
          linksite='https://teko-bag.com'
          textos={[
            {
              label: controlLanguage?.Projetos.CardAc.option1 || "",
              href: "/",
            },
            {
              label: controlLanguage?.Projetos.CardAc.option2 || "",
              href: "/",
            },
          ]}
        />
        <ThreeDCardDemo
          Title={controlLanguage?.Projetos.Card2.title || ""}
          Description={controlLanguage?.Projetos.Card2.description || ""}
          ImageProject='/EmBreve.png'
          linkgit='https://github.com/Luccas-costa/Portifolio'
          linksite='https://luccas-costa.vercel.app'
          textos={[
            {
              label: controlLanguage?.Projetos.CardAc.option1 || "",
              href: "/",
            },
            {
              label: controlLanguage?.Projetos.CardAc.option2 || "",
              href: "/",
            },
          ]}
        />
        <ThreeDCardDemo
          Title={controlLanguage?.Projetos.Card3.title || ""}
          Description={controlLanguage?.Projetos.Card3.description || ""}
          ImageProject='/EmBreve.png'
          linkgit='https://github.com/Luccas-costa/Portifolio'
          linksite='https://luccas-costa.vercel.app'
          textos={[
            {
              label: controlLanguage?.Projetos.CardAc.option1 || "",
              href: "/",
            },
            {
              label: controlLanguage?.Projetos.CardAc.option2 || "",
              href: "/",
            },
          ]}
        />
      </div>
    </div>
  );
}
