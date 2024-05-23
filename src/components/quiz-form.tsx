"use client"

import { Button } from "@/components/ui/button";
import React, { useState } from 'react';

interface QuizFormProps {
  question: string;
  answers: string[];
  imageSrc?: string;
  correctAnswer: string;
  correctAnswerText: string;
  incorrectAnswerText: string;
}

export function QuizForm({ question, answers, imageSrc, correctAnswer, correctAnswerText, incorrectAnswerText }: QuizFormProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (selectedAnswer) {
      if (selectedAnswer === correctAnswer) {
        setFeedback(correctAnswerText);
      } else {
        setFeedback(incorrectAnswerText);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-6 text-center">Immersion dans le stage...</h1>

      <div className="max-w-md w-full h-full sm:h-auto mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-lg font-bold mb-10 text-center">{question}</h2>
            {imageSrc && <img src={imageSrc} alt="Quiz" className="w-full h-auto mb-4" />}
            {!isSubmitted && (
              <div className="grid grid-cols-1 gap-4">
                {answers.map((answer, index) => (
                  <Button
                    type="button"
                    key={index}
                    className={`flex items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${selectedAnswer === answer ? 'border-2 border-emerald-500' : ''}`}
                    onClick={() => setSelectedAnswer(answer)}
                    variant="custom"
                  >
                    {answer}
                  </Button>
                ))}
              </div>
            )}
          </div>
          {!isSubmitted && (
            <div className="flex justify-center">
              <Button
                className="bg-gray-900 hover:bg-gray-900/90 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:focus:ring-offset-gray-800 w-full"
                type="submit"
              >
                Envoyer la réponse
              </Button>
            </div>
          )}
        </form>
        {feedback &&
          <div className="mt-4 text-center text-lg font-medium" id="feedback">{feedback}
            <Button
              className="bg-gray-900 hover:bg-gray-900/90 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:focus:ring-offset-gray-800 w-full"
              type="submit"
            >
              Question suivante
            </Button>
          </div>}
      </div>
    </div>
  )
}