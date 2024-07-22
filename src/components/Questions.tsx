import React from "react";
import styles from "@/styles/Questions.module.css";
import QuestionsFeed from "@/components/assets/QuestionsFeed";

export default function Questions() {
  return (
    <div className='bg-black min-h-[1200px] text-white bg-gradient-to-b from-[#5D2CA8] to-[#000] py-[100px] flex flex-col'>
      <div className='text-7xl font-semibold text-center'>
        Perguntas frequentes
      </div>
      <QuestionsFeed />
    </div>
  );
}
