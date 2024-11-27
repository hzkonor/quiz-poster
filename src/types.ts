interface Questions{
    question: string;
    answers: string[];
    correctAnswers: number[];
    multiple: boolean;
    correctAnswerText: string;
    incorrectAnswerText: string;
    imageSrc: string | null;
}

export type { Questions };