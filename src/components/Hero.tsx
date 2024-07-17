import React from 'react'

import styles from "@/styles/Hero.module.css"

export default function Hero() {
  return (
    <div className={`bg-black text-white ${styles.degrade} py-[100px] flex flex-col overflow-clip`}>
      <div className="p-[1rem] flex flex-col items-center justify-center">
        <div className='text-9xl font-semibold tracking-tighter'>   
          Olá Mundo!
        </div>
        <div className='text-9xl font-semibold tracking-tighter'>   
          Luccas Costa
        </div>
        <div className='text-lg text-zinc-300 font-semibold tracking-tighter w-[35%] text-center'>
        Sou um desenvolvedor Full Stack, atualmente residindo em São Paulo. Tenho 17 anos, sendo 3 na área e sou um entusiasta apaixonado por programação e tecnologia.
        </div>
      </div>
      <div className='p-[1rem] flex flex-col items-center justify-center'>
        <button className='px-5 py-2 rounded-lg bg-white text-black font-semibold'>Contato</button>
      </div>
      <div className="absolute w-[375px] h-[700px]"></div>
    </div>
  )
}
