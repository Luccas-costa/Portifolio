"use client";

import React, { useState } from "react";
import styles from "@/styles/IndicaScroll.module.css";

export default function BotaoIndicaScroll() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='fixed top-[85vh] left-1/2 -translate-x-1/2'
      style={{ zIndex: 1 }}
    >
      <div>
        <div className={`${styles.scrollicon} ${styles.ex1}`}>
          <span className={`${styles.wheel}`}></span>
        </div>
      </div>
    </div>
  );
}
