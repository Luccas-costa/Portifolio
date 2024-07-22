import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";
import { GlobeDemo } from "./ui/GlobeAc";

export default function About() {
  return (
    <div className='bg-black min-h-[1200px] text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[100px] flex flex-col'>
      <div className='text-7xl font-semibold mt-[100px] px-[72px]'>
        Sobre mim
      </div>
      <div className='text-4xl font-semibold flex flex-col items-start px-20 w-full'>
        <h1>Vamos falar um pouco sobre mim.</h1>
        <h4 className='text-xl'></h4>
        <div className='w-[76%] h-[600px] mt-5 bg-black font-bold text-5xl relative'>
          <div
            className={`absolute top-[50%] right-0 translate-x-[55%] translate-y-[-50%] -rotate-90 `}
          >
            E afinal quem sou<span className='text-[#5D2CA8]'> EU?</span>
          </div>
        </div>
      </div>
      <div className='flex  justify-evenly items-center'>
        <div className='w-1/2'>
          <GlobeDemo />
        </div>
        <div className='w-[45%] px-20 text-3xl text-center'>
          <span className='text-5xl pl-4'>S</span>ou um desenvolvedor Full
          Stack. Sou natural de Minas Gerais, mas vivo hoje em São Paulo. E
          trabalho como um desenvolvedor web. Tenho 17 anos e sou apaixonado por
          tecnologia, já tendo 3 anos na área. Quando não estou em casa, gosto
          de estar nos tatames, sou atleta de jiu-jitsu, vivendo esse lifestyle
          há 11 anos. Já realizei varios projetos variados na área e estou em
          busca de novos desafios.
        </div>
      </div>
    </div>
  );
}
