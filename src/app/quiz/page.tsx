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
            question: "Quels éléments sont importants pour évaluer la qualité d'une haie ?",
            answers: ["Le nombre d'espèces d'arbres", "Le nombre d'espèces d'herbacées", "Le nombre d'insectes et mollusques", "Toutes ces réponses"],
            correctAnswer: "Toutes ces réponses",
            correctAnswerText: "Et oui, tous ces facteurs peuvent être importants pour évaluer une haie !",
            incorrectAnswerText: "La bonne réponse était tous les facteurs cités ! Le nombre d'espèces d'arbres et d'herbacées ainsi que d'insectes et de mollusques peut apporter des informations sur la qualité d'une haie",
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
        <div className="flex flex-col h-screen"
            style={{
                backgroundImage: "url('background.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="min-h-screen min-h-full bg-gray-100 bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80">
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
            </div>
        </div>

    );
}
