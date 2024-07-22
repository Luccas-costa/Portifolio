"use client";
import React, { useState } from "react";
import SubQuestionsFeed from "./SubQuestionsFeed";
import { Questions } from "@/lib/Questions";

export default function QuestionsFeed() {
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
