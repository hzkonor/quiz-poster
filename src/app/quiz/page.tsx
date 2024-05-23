import { QuizForm } from "@/components/quiz-form"

export default function Quiz() {
    return (
        <main className="min-h-screen min-h-full bg-gray-100 dark:bg-gray-900">

            <QuizForm
                question="Que sont les haies ?"
                answers={["Des alignements d'arbresdzoiuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiipfoijzer fzirojfzoiez", "Des choses", "Des trucs", "Je ne sais pas"]}
                imageSrc="/test.jpg"
                correctAnswer="Des choses"
                correctAnswerText="Oui c'est bien la bonne réponse !"
                incorrectAnswerText="Non, malheureseument ce n'est pas ça..."
            /></main>

    );
}
