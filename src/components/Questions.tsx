import React from "react";
import styles from "@/styles/Questions.module.css";
import QuestionsFeed from "@/components/assets/QuestionsFeed";

export default function Questions() {
  return (
    <div
      className={`bg-black min-h-[1200px] text-white pt-[100px] pb-[300px] flex flex-col ${styles.degrade}`}
    >
      <div className='text-7xl font-semibold text-center'>
        Perguntas frequentes
      </div>
      <QuestionsFeed />
    </div>
  );
}
