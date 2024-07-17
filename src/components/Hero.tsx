import React from 'react'

import styles from "@/styles/Hero.module.css"

export default function Hero() {
  return (
    <div className={`bg-black text-white ${styles.degrade} py-[72px]`}>
      <div className="p-[1rem] flex flex-col items-center justify-center">
        <div className='text-9xl font-semibold tracking-tighter'>   
          Olá Mundo!
        </div>
        <div className='text-9xl font-semibold tracking-tighter'>   
          Luccas Costa
        </div>
      </div>
    </div>
  )
}
