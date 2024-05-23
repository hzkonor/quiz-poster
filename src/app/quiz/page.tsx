"use client"

import { QuizForm } from "@/components/quiz-form";
import React, { useState } from 'react';

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: "Que sont les haies ?",
            answers: ["Des alignements d'arbres", "Des choses", "Des trucs", "Je ne sais pas"],
            imageSrc: "/test.jpg",
            correctAnswer: "Des choses",
            correctAnswerText: "Oui c'est bien la bonne réponse !",
            incorrectAnswerText: "Non, malheureseument ce n'est pas ça..."
        },
        {
            question: "Pourquoi je suis gentil ?",
            answers: ["bonjour", "Des choses", "Des trucs", "Je ne sais pas"],
            correctAnswer: "Des choses",
            correctAnswerText: "Oui c'est bien la bonne réponse !",
            incorrectAnswerText: "Non, malheureseument ce n'est pas ça..."
        },
    ];

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
        <main className="min-h-screen min-h-full bg-gray-100 dark:bg-gray-900">
            Score {score}
            {currentQuestionIndex < questions.length && (
                <QuizForm
                    question={questions[currentQuestionIndex].question}
                    answers={questions[currentQuestionIndex].answers}
                    imageSrc={questions[currentQuestionIndex].imageSrc}
                    correctAnswer={questions[currentQuestionIndex].correctAnswer}
                    correctAnswerText={questions[currentQuestionIndex].correctAnswerText}
                    incorrectAnswerText={questions[currentQuestionIndex].incorrectAnswerText}
                    onCorrectAnswer={handleCorrectAnswer}
                    onNextQuestion={handleNextQuestion}
                    setIsSubmitted={setIsSubmitted}
                    setFeedback={setFeedback}
                    isSubmitted={isSubmitted}
                    feedback={feedback}
                />
            )}
        </main>

    );
}
