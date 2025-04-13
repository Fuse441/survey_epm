"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

type QuestionContextType = {
  selectQuestions: Set<string>;
  setQuestions: React.Dispatch<React.SetStateAction<Set<string>>>;
};

const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

export const QuestionProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectQuestions, setQuestions] = useState<Set<string>>(new Set());

  useEffect(() => {
    //console.log('log select ==> ', Array.from(selectQuestions));
  }, [selectQuestions]);

  return (
    <QuestionContext.Provider value={{ selectQuestions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error('useQuestion must be used within a QuestionProvider');
  }
  return context;
};
