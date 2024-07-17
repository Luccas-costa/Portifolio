import React from 'react'

import styles from "@/styles/Hero.module.css"

export default function Hero() {
  return (
    <div className={`bg-black text-white ${styles.degrade} py-[72px]`}>
      <div className="container p-[1rem]">
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem exercitationem tenetur nihil at aspernatur, perferendis cumque, alias molestias maxime quod illo veritatis tempora minima, fugit neque rerum architecto dignissimos eveniet?</h1>
      </div>
    </div>
  )
}
