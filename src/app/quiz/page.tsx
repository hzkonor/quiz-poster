"use client"

import { QuizForm } from "@/components/quiz-form";
import { QuizEnd } from "@/components/quiz-end";
import React, { useState } from 'react';

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [score, setScore] = useState(0);

    /* 
    {
            question: "",
            answers: [""],
            correctAnswers: [0],
            multiple: false,
            correctAnswerText: "",
            incorrectAnswerText: "",
            imageSrc: undefined
        },
         */

    const questions = [
        {
            question: "Avant de commencer ce stage, il faudrait peut-être savoir de quoi on parle... Alors, que sont les haies ?",
            answers: ["De la végétation rectiligne bien taillée", "Une séparation entre 2 milieux", "Un alignement de végétaux de moins 6 mètres de large", "Un alignement de végétaux de moins de 2 mètres de large"],
            correctAnswers: [2],
            multiple: false,
            correctAnswerText: "En effet, une haie est un alignement de végétaux de moins de 6 mètres de large. La vision commune des haies dans les jardins ne correspond pas à ce qu'on définit ici comme des haies !",
            incorrectAnswerText: "La vision commune des haies dans les jardins ne correspond pas à ce qu'on définit ici comme des haies ! La bonne réponse était que les haies sont des alignements de végétaux de moins de 6 mètres de large !",
            imageSrc: undefined
        },
        {
            question: "C'est bien de savoir ça, mais finalement à quoi ça sert une haie ?",
            answers: ["Limiter l'érosion des sols", "Filtrer les polluants", "Empêcher la traversée d'animaux", "Conserver la biodiversité"],
            correctAnswers: [0, 1, 3],
            multiple: true,
            correctAnswerText: "Et oui, ces 3 rôles font parties des rôles de la haies, félicitations !",
            incorrectAnswerText: "Empêcher la traversée d'animaux, c'est non. Au contraire, les haies permettent de conserver la biodiversité. En plus de cela, elles permettent aussi de limiter l'érosion des sols et de filtrer les polluants !",
            imageSrc: undefined
        },
        {
            question: "Quels éléments sont importants pour évaluer la qualité d'une haie ?",
            answers: ["Le nombre d'espèces d'arbres", "Le nombre d'espèces d'herbacées", "Le nombre d'insectes et mollusques"],
            correctAnswers: [0, 1, 2],
            multiple: true,
            correctAnswerText: "Et oui, tous ces facteurs peuvent être importants pour évaluer une haie ! On peut évidemment en sélectionner d'autres, selon ce que l'on souhaite faire pour notre étude, par exemple la présence d'espèces exotiques envahissantes, l'état général de la végétation...",
            incorrectAnswerText: "La bonne réponse était tous les facteurs cités ! Le nombre d'espèces d'arbres et d'herbacées ainsi que d'insectes et de mollusques peut apporter des informations sur la qualité d'une haie. On peut évidemment en sélectionner d'autres, selon ce que l'on souhaite faire pour notre étude, par exemple la présence d'espèces exotiques envahissantes, l'état général de la végétation...",
            imageSrc: undefined
        },

        {
            question: "Bon, il semble que le sujet de stage se précise. Nous devons évaluer la qualité des haies, et pour cela nous allons nous intéresser aux strates arbustives, arborées, herbacées et à la macrofaune du sol (le nombre d'insectes et de mollusques) comme indicateurs. Mais quel protocole pourrions-nous appliquer pour 'mesurer' cette qualité ?",
            answers: ["Compter le nombre d'individus de chaque espèce (arbre, arbuste, herbacée ou dans la macrofaune). Une bonne haie sera une haie avec le plus d'individus", "Mesurer des paramètres physiques de la haie, comme la hauteur et la largeur des strates, une bonne haie sera une haie haute et large", "On ne peut pas vraiment savoir ce qui consititue une bonne haie pour l'instant, alors on pourrait déjà comparer les haies aux parcelles adjacentes, en terme de richesse spécifique de la macrofaune du sol par exemple"],
            correctAnswers: [2],
            multiple: false,
            correctAnswerText: "Exactement, il nous faut d'abord un axe de comparaison pour estimer si les haies peuvent favoriser une densité d'individus plus élevée et à une meilleure qualité du sol que dans les parcelles adjacentes. Pour cela, nous allons utiliser l'IBQS (Indice Biologique de Qualité du Sol) qui est un indice en fonction de la macrofaune présenté dans le sol. On va également prendre en compte les autres paramètres évoqués, comme la richesse et la diversité spécifique, ainsi que les paramètres physiques de la haie, mais pour l'instant, on ne peut pas dire en quoi ils sont responsables d'une bonne qualité de haie.",
            incorrectAnswerText: "Attention à ne pas se précipiter dans les interprétations ! On ne peut pas encore dire que des paramètres sont responsables d'une bonne qualité de haie, il nous faut d'abord un axe de comparaison pour estimer si les haies peuvent favoriser une densité d'individus plus élevée et à une meilleure qualité du sol que dans les parcelles adjacentes. Pour cela, nous allons utiliser l'IBQS (Indice Biologique de Qualité du Sol) qui est un indice en fonction de la macrofaune présenté dans le sol. On va également prendre en compte les autres paramètres évoqués, comme la richesse et la diversité spécifique, ainsi que les paramètres physiques de la haie, mais sans interpréter leur influence.",
            imageSrc: undefined
        },
        {
            question: "On avance doucement dans le stage, avec un peu de bibliographie et de renseignements, nous avons appris que l'IBQS était un indice calculé grâce aux densités moyennes des espèces de la macrofaune. Pour pouvoir calculer cet indice, de quel matériel pourrions-nous avoir besoin ?",
            answers: ["Un décamètre", "Un chronomètre", "Une feuille et un stylo (ou crayon à papier...)", "Un aspifaune (c'est l'image !)", "Des jumelles", "Un livre d'identification", "Un quadrat"],
            correctAnswers: [1, 2, 3, 5, 6],
            multiple: true,
            correctAnswerText: "Bravo, tu as trouvé tout le matériel nécessaire ! Le quadrat pour délimiter notre zone de prospection, le chronomètre pour avoir le même temps de récolte dans tous les échantillonnages, de quoi noter nos observations, de quoi prélever pour identification future avec l'aspifaune et le livre d'identification.",
            incorrectAnswerText: "Le bon matériel était : le quadrat pour délimiter notre zone de prospection, le chronomètre pour avoir le même temps de récolte dans tous les échantillonnages, de quoi noter nos observations, de quoi prélever pour identification future avec l'aspifaune et le livre d'identification. Si tu as coché le décamètre, c'est une bonne idée pour les relevés botaniques, mais ici ce n'est pas très utile. De même, les jumelles ne seront pas très utiles...",
            imageSrc: "/aspifaune.png"
        },
        {
            question: "Nous avons tout le matériel nécessaire, avec un joli quadrat en bois de 40 sur 40 cm. Nous avons repéré les haies à échantillonner pour la journée. Maintenant, où est-ce que je pose mon quadrat pour faire mes relevés ?",
            answers: ["Là-bas sur le bord de la haie, nous voyons une petite limace, donc posons le quadrat ici, nous serons sûr.es d'avoir des données !", "Toujours prendre le milieu de la haie et le milieu de la parcelle, comme ça nous sommes toujours dans les mêmes conditions", "Nous allons choisir des endroits au hasard dans la haie et dans la parcelle"],
            correctAnswers: [2],
            multiple: false,
            correctAnswerText: "C'est bien ça, pour éviter de fausser les données, l'aléatoire est la meilleure solution. On peut même lancer le quadrat (doucement, attention au matériel !) pour un meilleur résultat.",
            incorrectAnswerText: "Cela peut paraître étrange, mais contrairement à tout ce que nous avons soigneusement posé auparavant, ici le plus adéquat, c'est... de faire au hasard ! Cela permet de ne pas influencer les données.",
            imageSrc: undefined
        },
        {
            question: "Le quadrat est positionné, le chronomètre est prêt. Nous venons de voir voler cet individu que nous ne connaissons pas (regarde l'image en bas, si tu le reconnais, joue le jeu 😉) mais il ne rentre pas dans notre aspifaune... Alors, que faire ?",
            answers: ["Je sors mes crayons de couleurs et je fais un dessin pour pouvoir l'identifier plus tard", "Je sors mon livre d'identification et je le feuillette pour le retrouver le plus vite possible", "J'essaye de le prendre en photo et je note rapidement des caractéristiques reconnaissables pour l'identifier plus tard"],
            correctAnswers: [2],
            multiple: false,
            correctAnswerText: "C'est bien, tu reste concentré.e sur le reste de ton quadrat ! Normalement, avec une photo et une courte description, on devrait réussir à l'identifier sans faire défiler tout notre temps d'observation !",
            incorrectAnswerText: "C'est bien, tu est méticuleux.se... mais peut-être un peu trop. Si tu perds trop de temps à identifier une espèce, comment tu pourras bien rendre compte du quadrat ? Alors il vaut mieux prendre une photo rapide et faire une courte description.",
            imageSrc: "/cloporte.jpg"
        },
        {
            question: "La première journée de terrain touche à sa fin. Que fait-on maintenant ?",
            answers: ["Le terrain, c'est fatiguant, alors on rentre et on se repose !", "On laisse les feuilles de relevés au bureau, et on prépare la prochaine sortie de terrain", "On vérifie qu'on a bien récupéré toutes les feuilles, qu'elles sont bien identifiées et on peut commencer à préparer la prochaine sortie"],
            correctAnswers: [2],
            multiple: false,
            correctAnswerText: "Bravo, tu as bien compris qu'une bonne organisation était capitale pour ne pas perdre nos précieuses données !",
            incorrectAnswerText: "Si tu as choisi l'option repos, c'est compréhensible, mais il faut quand même vérifier qu'on a bien toutes nos données ! Laisser les feuilles de relevés au bureau, c'est le risque d'en perdre une, alors on les garde bien toutes ensembles, bien identifiées et bien rangées !",
            imageSrc: undefined
        },
        {
            question: "Au bout de plusieurs journées de terrain, par tous les temps (et oui même sous la pluie on travaille !), ça y est, nous avons enfin assez de données. Mais alors, qu'est-ce qu'on va pouvoir en faire de toutes ces feuilles de relevés ?",
            answers: ["On peut scanner toutes les feuilles de relevés, et pour analyser nos données on les regardera une par une", "On peut faire un fichier dans un tableur avec toutes les données pour chaque haie échantillonnée (chaque feuille du tableur correspond à une haie)", "On peut prendre chaque paramètre et noter la somme de nos observations, par exemple que nous avons observé 112 arachnides sur 50 haies", "On peut faire un fichier dans un tableur avec les paramètres à analyser (en colonne) et noter nos observations pour chaque haie (en ligne)"],
            correctAnswers: [3],
            multiple: false,
            correctAnswerText: "Oui, c'est bien la méthode la plus efficace pour rentrer les données (il y en a un paquet, alors on peut déjà sélectionner celles qui nous intéressent le plus dans un premier temps) et pour analyser les données dans le futur.",
            incorrectAnswerText: "Une méthode plus efficace serait de faire un fichier dans un tableur avec les paramètres à analyser (en colonne) et les observations pour chaque haie (en ligne). Scanner toutes les feuilles, ça va prendre beaucoup de temps, et c'est impossible à traiter pour l'analyse. Faire une feuille de calcul par haie peut rendre les analyses difficiles et peu lisibles. Faire la somme de toutes les observations nous fait perdre beaucoup d'informations et rend impossible l'analyse statistique !",
            imageSrc: undefined
        },
        {
            question: "Toutes les données qui nous ont parues pertinentes sont rentrées dans un tableur bien organisé et clair. Maintenant, il faudrait qu'on arrive à analyser ces données, alors comment peut-on faire ?",
            answers: ["Il vaut mieux ne pas se précipiter, faire quelques graphiques d'exploration des données, puis tester statistiquement si des différences ressortent, et enfin passer à une représentation graphique adéquate, en gardant nos problématiques en tête", "C'est le moment de faire des statistiques, alors on teste toutes les potentielles différences significatives dans nos données", "Le but est de faire un poster, alors on va faire des graphiques avec notre tableur afin d'avoir un maximum de figures attrayantes. Pour cela, on peut déployer les grands moyens, des graphiques en 3D et plein de couleurs."],
            correctAnswers: [0],
            multiple: false,
            correctAnswerText: "Prendre son temps, c'est important, tu as bien choisi. En effet, il faut savoir où aller avant de foncer tête baissée dans des tests statistiques. Aussi, rester sobre dans les figures est important, <em>less is more</em>.",
            incorrectAnswerText: "Malheureusement, je pense que tu as voulu trop te précipiter, il aurait fallu choisir la première réponse. En effet, il faut savoir où aller avant de foncer tête baissée dans des tests statistiques. Aussi, rester sobre dans les figures est important, <em>less is more</em>.",
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
        <div className="flex flex-col h-screen fixed inset-0 overflow-auto"
            style={{
                backgroundImage: "url('background.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="fixed inset-0 bg-gray-100 bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 overflow-auto">
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
