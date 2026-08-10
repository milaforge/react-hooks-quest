export interface Mission {
    id: string;
    title: string;
    question: string;
    answers: string[];
    correctAnswer: number;
    explanation: string;
    xp: number;
}

export interface Chapter {
    id: string;
    title: string;
    description?: string;
    missions: Mission[];
}