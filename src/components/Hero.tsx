import React from "react";
import Image from "next/image";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <div
      className={`bg-black text-white ${styles.degrade}  pt-[150px] pb-[170px] flex flex-col relative overflow-clip`}
    >
      <div
        className='p-[1rem] flex flex-col items-center justify-center'
        style={{ zIndex: 10 }}
      >
        <div className=''>
          <div className='absolute left-[506px] top-[174px]'>
            <Image src='/assets/seta.png' alt='logo' width={200} height={200} />
          </div>
          <div className='absolute right-[499px] top-[273px]'>
            <Image src='/assets/chat.png' alt='logo' width={200} height={200} />
          </div>
        </div>
        <div className='text-9xl font-semibold tracking-tighter'>
          Olá Mundo!
        </div>
        <div className='text-9xl font-semibold tracking-tighter'>eu sou</div>
        <div className='text-9xl font-semibold tracking-tighter'>
          Luccas Costa
        </div>
        <div className='text-lg text-zinc-300 font-semibold tracking-tighter w-[35%] text-center'>
          Sou um desenvolvedor Full Stack, atualmente residindo em São Paulo.
          Tenho 17 anos, sendo 3 na área e sou um entusiasta apaixonado por
          programação e tecnologia.
        </div>
      </div>
      <div
        className='p-[1rem] flex flex-col items-center justify-center'
        style={{ zIndex: 10 }}
      >
        <button className='px-5 py-2 rounded-lg bg-white text-black font-semibold'>
          Contato
        </button>
      </div>
      <div
        className={`absolute h-[375px] w-[750px] menuburger:w-[180vw] menuburger:h-[768px] rounded-[100%] bg-black top-[calc(100%-150px)] left-1/2 -translate-x-1/2 border border-[#B48CDE] ${styles.degrade2}`}
        style={{ zIndex: 1 }}
      ></div>
    </div>
  );
}
