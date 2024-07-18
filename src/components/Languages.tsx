import React from "react";
import Image from "next/image";
import styles from "@/styles/Languages.module.css";
import { languages } from "@/lib/languages";

export default function Languages() {
  return (
    <div className='w-full bg-black text-zinc-600 pt-[30px] pb-[150px] flex flex-col items-center overflow-hidden'>
      <div className='text-3xl font-semibold tracking-tighter'>
        Quais Linguages eu trabalho?
      </div>
      <div className='mt-16 overflow-hidden'>
        <div className={styles["slider-wrapper"]}>
          <ul className={styles.slider}>
            {languages.map((language) => (
              <li key={language.id} className='flex items-center space-x-4'>
                <Image
                  src={language.image}
                  alt={`Logo ${language.name}`}
                  width={50}
                  height={50}
                />
                <span className='text-4xl font-semibold'>{language.name}</span>
              </li>
            ))}
            {/* Clone the list to create the infinite effect */}
            {languages.map((language) => (
              <li
                key={`clone-${language.id}`}
                className='flex items-center space-x-4'
              >
                <Image
                  src={language.image}
                  alt={`Logo ${language.name}`}
                  width={50}
                  height={50}
                />
                <span className='text-4xl font-semibold'>{language.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
