"use client";

import React from "react";
import styles from "@/styles/IndicaScroll.module.css";

export default function BotaoIndicaScroll() {
  return (
    <div className=''>
      <div>
        <div className={`${styles.scrollicon} ${styles.ex1}`}>
          <span className={`${styles.wheel}`}></span>
        </div>
      </div>
    </div>
  );
}
