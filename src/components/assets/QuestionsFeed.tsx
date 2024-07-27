"use client";
import React, { useState } from "react";
import SubQuestionsFeed from "./SubQuestionsFeed";

import { QuestionsPt, QuestionsEn, QuestionsEs } from "@/lib/Questions";

interface QuestionsFeedProps {
  language: number;
}

export default function QuestionsFeed({ language }: QuestionsFeedProps) {
  let Questions = QuestionsPt; // Default to Portuguese questions

  if (language === 2) {
    Questions = QuestionsEn;
  } else if (language === 3) {
    Questions = QuestionsEs;
  }

  const [openQuestions, setOpenQuestions] = useState(
    Array(Questions.length).fill(false)
  );

  const handleSetOpen = (
    index: number,
    value: boolean | ((prevState: boolean) => boolean)
  ) => {
    setOpenQuestions((prev) => {
      const newOpenQuestions = [...prev];
      newOpenQuestions[index] = value;
      return newOpenQuestions;
    });
  };

  return (
    <div className='mt-28 w-1/2 mx-auto flex flex-col items-center justify-center'>
      {Questions.map((question, index) => (
        <SubQuestionsFeed
          key={question.id}
          open={openQuestions[index]}
          setOpen={(value) => handleSetOpen(index, value)}
          Question={question.Question}
          Response={question.Response}
        />
      ))}
    </div>
  );
}
