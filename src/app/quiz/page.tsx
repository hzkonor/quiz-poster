"use client"

import { QuizForm } from "@components/quiz-form";
import { QuizEnd } from "@components/quiz-end";
import { Questions } from "@/types";
import questionsData from "@/data/questions.json";
import React, { useState } from 'react';

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const questions: Questions[] = questionsData.questions;

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsSubmitted(false);
        setFeedback(null);
    };

    const handleCorrectAnswer = () => {
        setScore(score + 1);
        handleNextQuestion();
    };

    return (
        <div className="flex flex-col h-screen fixed inset-0 overflow-auto"
            style={{
                backgroundImage: "url('images/background.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="fixed inset-0 bg-base-100 bg-opacity-80 text-base-content overflow-auto">
                {currentQuestionIndex < questions.length ? (
                    <QuizForm
                        question={questions[currentQuestionIndex].question}
                        answers={questions[currentQuestionIndex].answers}
                        imageSrc={questions[currentQuestionIndex].imageSrc}
                        correctAnswers={questions[currentQuestionIndex].correctAnswers}
                        multiple={questions[currentQuestionIndex].multiple}
                        correctAnswerText={questions[currentQuestionIndex].correctAnswerText}
                        incorrectAnswerText={questions[currentQuestionIndex].incorrectAnswerText}
                        onCorrectAnswer={handleCorrectAnswer}
                        onNextQuestion={handleNextQuestion}
                        setIsSubmitted={setIsSubmitted}
                        setFeedback={setFeedback}
                        isSubmitted={isSubmitted}
                        feedback={feedback}
                    />
                ) : (
                    <QuizEnd score={score} />
                )

                }
            </div>
        </div>

    );
}
