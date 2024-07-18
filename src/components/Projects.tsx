import React from "react";
import Card from "./assets/Card";
import styles from "@/styles/Hero.module.css";

export default function Projects() {
  return (
    <div
      className={`w-full bg-black pt-40 pb-40 text-white flex flex-col items-center`}
    >
      <div className='text-7xl font-semibold'>Projetos</div>
      <div className='text-2xl font-semibold text-zinc-400 w-1/4 text-center mt-4'>
        Esses são alguns de meus projetos pessoais ou open sources.
      </div>
      <div className='grid grid-cols-3 gap-10 mt-12'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
