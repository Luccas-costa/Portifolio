import React from "react";
import Card from "./assets/Card";
import styles from "@/styles/Hero.module.css";
import ThreeDCardDemo from "./ui/CardAc";

export default function Projects() {
  return (
    <div
      className={`w-full bg-black pt-40 pb-40 text-white flex flex-col items-center`}
    >
      <div className='text-7xl font-semibold'>Projetos</div>
      <div className='text-lg screen12:text-xl screen8:text-2xl font-semibold text-zinc-400 w-[90%] screen11_5:w-[70%] screen9:w-1/2 screen5:w-1/3 screen1:w-1/4 text-center mt-4'>
        Esses são alguns de meus projetos atuais, pessoais ou open sources.
      </div>
      <div className='grid grid-cols-1 screen6:grid-cols-2 screen1:grid-cols-3 gap-0 screen6:gap-6 screen5:gap-16 screen1:gap-6 screen04:gap-16 mt-12'>
        <ThreeDCardDemo
          Title={`Teko${"'"}s bag`}
          Description='E-commerce de produtos de moda, desenvolvido com Next.js, Tailwind, React, Typescript e Clerk.'
          ImageProject='/Teko-bag.png'
          linkgit='https://github.com/Luccas-costa/teko-bag'
          linksite='https://teko-bag.com'
        />
        <ThreeDCardDemo
          Title='Ainda nao tem'
          Description='Em Breve  Em Breve  Em Breve  Em Breve  Em Breve  Em Breve  Em Breve'
          ImageProject='/EmBreve.png'
          linkgit='https://github.com/Luccas-costa/Portifolio'
          linksite='https://luccas-costa.vercel.app'
        />
        <ThreeDCardDemo
          Title='Ainda nao tem'
          Description='Em Breve  Em Breve  Em Breve  Em Breve  Em Breve  Em Breve  Em Breve'
          ImageProject='/EmBreve.png'
          linkgit='https://github.com/Luccas-costa/Portifolio'
          linksite='https://luccas-costa.vercel.app'
        />
      </div>
    </div>
  );
}
