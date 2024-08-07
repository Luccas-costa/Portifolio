"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

import { Language } from "@/types/Languages";
import styles from "@/styles/Hero.module.css";

import BotaoIndicaScroll from "./assets/BotaoIndicaScroll";
import AnimatedModalDemo from "./ui/ModalAc";

import pt from "@/constants/pt.json";
import en from "@/constants/en.json";
import es from "@/constants/es.json";

interface HeroProps {
  LanguageType: string;
}

export default function Hero({ LanguageType }: HeroProps) {
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
      className={`bg-black text-white ${styles.degrade} screen1:pt-[150px] screen1:pb-[140px] screen2:pt-[110px] screen2:pb-[180px] screen3:pt-[110px] screen3:pb-[180px] screen4:pt-[110px] screen4:pb-[180px] screen5:pt-[110px] screen5:pb-[180px]  screen8:pt-[110px] screen8:pb-[180px] screen9:pt-[170px] screen9:pb-[240px] screen10:pt-[190px] screen10:pb-[260px] screen11:pt-[190px] screen11:pb-[240px] screen12:pt-[192px] screen12:pb-[262px] screen13:pt-[200px] screen13:pb-[270px] screen14:pt-[200px] screen14:pb-[290px] flex flex-col relative overflow-clip`}
      //pt-[150px] screen2:pb-[330px] screen3:pt-[80px] screen1:pb-[345px] pb-[260px] screen12:pb-[220px] screen11:pb-[170px]
    >
      <div
        className='p-[1rem] flex flex-col items-center justify-center'
        style={{ zIndex: 10 }}
      >
        {/* <div className='' style={{ zIndex: 1 }}>
          <div className='absolute left-[42vh] top-[174px]'>
            <Image
              src='/assets/seta.png'
              alt='logo'
              width={200}
              height={200}
              style={{ zIndex: 1 }}
            />
          </div>
          <div
            className='absolute right-[27vw] top-[273px]'
            style={{ zIndex: 1 }}
          >
            <Image
              src='/assets/chat.png'
              alt='logo'
              width={200}
              height={200}
              style={{ zIndex: 1 }}
            />
          </div>
        </div> */}
        <div className='text-5xl screen12:text-6xl screen11:text-7xl screen9:text-8xl screen8:text-9xl font-semPibold tracking-tighter'>
          {controlLanguage?.hero.olaMundo}
        </div>
        <div className='text-5xl screen12:text-6xl screen11:text-7xl screen9:text-8xl screen8:text-9xl font-semibold tracking-tighter'>
          {controlLanguage?.hero.euSou}
        </div>
        <div className='text-5xl screen12:text-6xl screen11:text-7xl screen9:text-8xl screen8:text-9xl font-semibold tracking-tighter'>
          {controlLanguage?.hero.nome}
        </div>
        <div className='text-xs screen12:text-sm screen11:text-base screen8:text-lg text-zinc-300 font-semibold tracking-tighter w-[60%] screen12:w-[75%] screen11:w-[60%] screen10:w-[48%] screen9:w-[53%] screen8:w-[50%] screen6:w-[35%] text-center'>
          {controlLanguage?.hero.descricao}
        </div>
      </div>
      <div
        className='p-[1rem] flex flex-col items-center justify-center'
        style={{ zIndex: 10 }}
      >
        <div className='px-2 py-1 rounded-lg bg-white text-black font-semibold'>
          <AnimatedModalDemo
            textos={[
              {
                label: controlLanguage?.hero.Modal.modalTrigger || "",
              },
              {
                label: controlLanguage?.hero.Modal.modalContentTitle || "",
              },
              {
                label: controlLanguage?.hero.Modal.modalContentTitleSpan || "",
              },
              {
                label:
                  controlLanguage?.hero.Modal.modalContentInstruction || "",
              },
              {
                label:
                  controlLanguage?.hero.Modal.modalContentInstructionSpan1 ||
                  "",
              },
              {
                label:
                  controlLanguage?.hero.Modal.modalContentInstructionSpan2 ||
                  "",
              },
              {
                label:
                  controlLanguage?.hero.Modal.modalContentInstructionSpan3 ||
                  "",
              },
              {
                label:
                  controlLanguage?.hero.Modal.modalContentInstructionSpan4 ||
                  "",
              },
              {
                label: controlLanguage?.hero.Modal.modalFooterExit || "",
              },
              {
                label: controlLanguage?.hero.Modal.modalFooterSendMessage || "",
              },
            ]}
          />
        </div>
      </div>
      <div
        className={`absolute h-[375px] w-[750px] menuburger:w-[180vw] menuburger:h-[768px] screen10:w-[208vw] screen10:h-[768px] screen11:w-[208vw] screen11:h-[768px] screen12:w-[280vw] screen12:h-[768px]  screen13:w-[280vw] screen13:h-[768px] rounded-[100%] bg-black screen12:top-[calc(100%-115px)] screen10:top-[calc(100%-138px)] top-[calc(100%-150px)] left-1/2 -translate-x-1/2 border border-[#B48CDE] ${styles.degrade2}`}
        style={{ zIndex: 1 }}
      ></div>

      <div
        className='absolute top-[75vh] left-1/2 -translate-x-1/2'
        style={{ zIndex: 1 }}
      >
        <BotaoIndicaScroll />
      </div>
    </div>
  );
}
