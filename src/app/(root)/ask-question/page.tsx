import QuestionForm from "@/components/forms/QuestionForm";
import React from "react";

const AskQuestion = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Ask a qustion</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </>
  );
};

export default AskQuestion;
