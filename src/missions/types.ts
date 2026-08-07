export interface Mission {
    id: string;
    chapter: string;
    title: string;
    question: string;
    answers: string[];
    correctAnswer: number;
    explanation: string;
    xp: number;
}