"use client";

import { ArrowDown } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/IndicaScroll.module.css";

export default function BotaoIndicaScroll() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 25) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className='fixed top-[85vh] left-1/2 -translate-x-1/2'
      style={{ zIndex: 1 }}
    >
      {isVisible && (
        <div>
          <div className={`${styles.scrollicon} ${styles.ex1}`}>
            <span className={`${styles.wheel}`}></span>
          </div>
        </div>
      )}
    </div>
  );
}
