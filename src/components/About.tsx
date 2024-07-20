import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className='bg-black min-h-[1200px] text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[100px] flex flex-col items-center'>
      <div className='text-7xl font-semibold text-center mb-[80px]'>
        Sobre mim
      </div>
      <div className='flex w-full'>
        <div className='flex h-full items-center justify-center text-2xl font-semibold text-zinc-400 w-1/2 text-center mt-4'>
          <div className='w-3/4 text-center flex flex-col items-center justify-center'>
            Olá, eu sou o Luccas Costa, um desenvolvedor Full Stack. Sou natural
            de Minas Gerais, mas vivo hoje em São Paulo. E trabalho como um
            desenvolvedor web. Tenho 17 anos e sou apaixonado por tecnologia, já
            tendo 3 anos na área. Quando não estou em casa, gosto de estar nos
            tatames, sou atleta de jiu-jitsu, vivendo esse lifestyle há 11 anos
          </div>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
          <div className={` h-full w-3/4 flex items-center justify-center`}>
            <Image
              src='/FotoDePerfil.jpg'
              alt='logo'
              width={500}
              height={500}
              className={`${styles.bordaimg}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
