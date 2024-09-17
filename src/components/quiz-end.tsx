import React, { useState } from 'react';
import Link from 'next/link';
import { BadgeAlertIcon } from 'lucide-react';

interface QuizEndProps {
    score: number;
}

export function QuizEnd({ score }: QuizEndProps) {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen mx-4 space-y-6'>
            <h1 className="text-3xl font-bold text-center">Félicitations, vous êtes arrivé.es à la fin de cette expérience immersive !</h1>
            <p className="text-center" dangerouslySetInnerHTML={{
                __html:
                    (score <= 3 ? (
                        "Encore un peu de travail pour pouvoir faire ce stage, votre score est de "
                    ) : score <= 7 ? (
                        "C'est pas mal, vous êtes presque prêt.es pour faire ce stage ! Votre score est de "
                    ) : (
                        "Wouah, vous êtes un.e expert.e, vous pouvez dès à présent vous lancer dans l'expérience du stage avec un score de "
                    )) + "<span class='font-bold text-lg text-secondary'>" + score + " sur 10</span>"
            }}></p>


            <Link href="/">
            <button className='btn btn-accent'>Retourner à l&apos;accueil</button>
            </Link>
        </div>
    );
}