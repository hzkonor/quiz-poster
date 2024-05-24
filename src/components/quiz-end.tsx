import { Button } from './ui/button';
import React, { useState } from 'react';
import Link from 'next/link';

interface QuizEndProps {
    score: number;
}

export function QuizEnd({ score }: QuizEndProps) {
    return (
        <div className='flex flex-col items-center mx-4'>
            <h1 className="text-3xl font-bold my-6 text-center">Félicitations, vous êtes arrivé.es à la fin de cette expérience immersive !</h1>
            {score <= 7 ? (
                "Encore un peu de travail pour pouvoir faire ce stage, votre score est de " + score
            ) : score <= 14 ? (
                "C'est pas mal, vous êtes presque prêt.es pour faire ce stage ! Votre score est de " + score
            ) : (
                "Wouah, vous êtes un.e expert.e, vous pouvez dès à présent vous lancer dans l'expérience du stage avec un score de " + score
            )}

            <Link href="/">
                <Button
                    className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto mt-10"
                    variant="link"
                >
                    Retourner à l'accueil
                </Button>
            </Link>
        </div>
    );
}