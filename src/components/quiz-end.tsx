import { Button } from './ui/button';
import React, { useState } from 'react';
import Link from 'next/link';
import { BadgeAlertIcon } from 'lucide-react';

interface QuizEndProps {
    score: number;
}

export function QuizEnd({ score }: QuizEndProps) {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen mx-4'>
            <h1 className="text-3xl font-bold my-6 text-center">Félicitations, vous êtes arrivé.es à la fin de cette expérience immersive !</h1>
            <p dangerouslySetInnerHTML={{
                __html:
                    (score <= 3 ? (
                        "Encore un peu de travail pour pouvoir faire ce stage, votre score est de "
                    ) : score <= 7 ? (
                        "C'est pas mal, vous êtes presque prêt.es pour faire ce stage ! Votre score est de "
                    ) : (
                        "Wouah, vous êtes un.e expert.e, vous pouvez dès à présent vous lancer dans l'expérience du stage avec un score de "
                    )) + "<span class='font-bold text-amber-800 dark:text-amber-200'>" + score + " sur 10</span>"
            }}></p>

            {/* 
            <div className="mt-10 bg-amber-200 dark:bg-amber-800 rounded-lg text-amber-800 dark:text-amber-200 p-4 flex items-center space-x-2">
                <BadgeAlertIcon className="w-8 h-8" />
                <span>Le quiz est sur 10 mais il est possible qu&apos;il manque des questions 😬</span>
            </div>
 */}


            <Link href="/">
                <Button
                    className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto mt-10"
                    variant="link"
                >
                    Retourner à l&apos;accueil
                </Button>
            </Link>
        </div>
    );
}