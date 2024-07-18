import React from 'react'
import styles from "@/styles/About.module.css"

export default function About() {
  return (
    <div className='bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] flex flex-col justify-center'> 
      <div className='text-7xl font-semibold text-center mb-4'>Sobre Mim</div>
      <div className='flex w-full'>  
        <div className='flex items-center justify-center text-2xl font-semibold text-zinc-400 w-1/2 text-center mt-4'>
          <div className="w-3/4 text-center flex items-center justify-center">  
            Olá, eu sou o Luccas Costa, um desenvolvedor Full Stack. Sou natural de Minas Gerais, mas vivo hoje em São Paulo. E trabalho como um desenvolvedor web. Tenho 17 anos e sou apaixonado por tecnologia, já tendo 3 anos na área. Quando não estou em casa, gosto de estar nos tatames, sou atleta de jiu-jitsu, vivendo esse life-style há 11 anos 
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center"> 
          <div className={` ${styles.bordaimg} h-full w-3/4 bg-green-500 flex items-center justify-center`} >
              33
          </div>
        </div>

      </div>
    </div>
  )
}
