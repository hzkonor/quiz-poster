"use client"

import React, { useState } from 'react';
import Image from "next/image";

interface QuizFormProps {
  question: string;
  answers: string[];
  imageSrc?: string;
  correctAnswers: number[];
  multiple: boolean;
  correctAnswerText: string;
  incorrectAnswerText: string;
  onNextQuestion: () => void;
  onCorrectAnswer: () => void;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setFeedback: React.Dispatch<React.SetStateAction<string | null>>;
  isSubmitted: boolean;
  feedback: string | null;
}

export function QuizForm({ question, answers, imageSrc, correctAnswers, correctAnswerText, incorrectAnswerText, onNextQuestion, onCorrectAnswer, setIsSubmitted, setFeedback, isSubmitted, feedback, multiple }: QuizFormProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const handleAnswerClick = (index: number) => {
    if (multiple) {
      if (selectedAnswers.includes(index)) {
        setSelectedAnswers(selectedAnswers.filter(i => i !== index));
      } else {
        setSelectedAnswers([...selectedAnswers, index]);
      }
    } else {
      setSelectedAnswers([index]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedAnswers.length === 0) {
      return;
    }
    setIsSubmitted(true);
    if (JSON.stringify(selectedAnswers.sort()) === JSON.stringify(correctAnswers.sort())) {
      setFeedback(correctAnswerText);
    } else {
      setFeedback(incorrectAnswerText);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-6 text-center">Immersion dans le stage...</h1>

      <div className="max-w-md w-full h-full sm:h-auto mb-8 bg-base-100 rounded-lg shadow-lg p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-lg font-bold mb-10 text-center">{question}</h2>

            {!feedback && multiple && <p className="italic text-sm text-center mb-6">Plusieurs réponses possibles</p>}


            {!isSubmitted && (
              <div className="grid grid-cols-1 gap-4">
                {answers.map((answer, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`flex items-center h-auto p-2 btn ${selectedAnswers.includes(index) ? 'btn-outline' : 'btn-ghost'}`}
                    onClick={() => handleAnswerClick(index)}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            )}
          </div>
          {imageSrc && (
            <div>
              <img src={imageSrc} alt="Quiz" className="w-full h-auto mb-4"></img>
            </div>
          )}
          {!isSubmitted && (
            <div className="flex justify-center">
              <button
                className="btn btn-accent text-accent-content w-full"
                type="submit"
              >
                Envoyer la réponse
              </button>
            </div>
          )}
        </form>
        {
          feedback &&
          <div className="mt-4" id="feedback">
            <p className={`text-center ${JSON.stringify(selectedAnswers.sort()) === JSON.stringify(correctAnswers.sort()) ? 'text-success' : 'text-error'}`}>{JSON.stringify(selectedAnswers.sort()) === JSON.stringify(correctAnswers.sort()) ? 'Bien joué !' : 'Bien tenté... mais non !'}</p>
            <p className="my-4 text-justify" dangerouslySetInnerHTML={{ __html: feedback }}></p>
            <button
              className="btn btn-accent text-accent-content w-full"
              type="button"
              onClick={() => {
                if (JSON.stringify(selectedAnswers.sort()) === JSON.stringify(correctAnswers.sort())) {
                  onCorrectAnswer();
                } else {
                  onNextQuestion();
                }
                setSelectedAnswers([]);
              }}
            >
              Question suivante
            </button>
          </div>
        }
      </div >
    </div >
  )
}