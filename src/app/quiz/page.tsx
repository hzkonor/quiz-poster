"use client"

import { QuizForm } from "@/components/quiz-form";
import { QuizEnd } from "@/components/quiz-end";
import React, { useState } from 'react';

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: "Avant de commencer ce stage, il faudrait peut-être savoir de quoi on parle... Alors, que sont les haies ?",
            answers: ["De la végatation rectiligne bien taillée", "Une séparation entre 2 milieux", "Un alignement de végétaux de moins 6 mètres de large", "Un alignement de végétaux de moins de 2 mètres de large"],
            correctAnswer: "Un alignement de végétaux de moins 6 mètres de large",
            correctAnswerText: "En effet, une haie est un alignement de végétaux de moins de 6 mètres de large. La vision commune des haies dans les jardins ne correspond pas à ce qu'on définit ici comme des haies !",
            incorrectAnswerText: "La vision commune des haies dans les jardins ne correspond pas à ce qu'on définit ici comme des haies ! La bonne réponse était que les haies sont des alignements de végétaux de moins de 6 mètres de large !",
            imageSrc: undefined
        },
        {
            question: "Pourquoi je suis gentil ?",
            answers: ["bonjour", "Des choses", "Des trucs", "Je ne sais pas"],
            correctAnswer: "Des choses",
            correctAnswerText: "Oui c'est bien la bonne réponse !",
            incorrectAnswerText: "Non, malheureseument ce n'est pas ça...",
            imageSrc: undefined
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
            {currentQuestionIndex < questions.length ? (
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
            ) : (
                <QuizEnd score={score} />
            )

            }
        </main>

    );
}
