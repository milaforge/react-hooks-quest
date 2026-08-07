import type { Mission } from "../missions/types";

export interface EvaluationResult {
    correct: boolean;
    explanation: string;
    xp: number;
}

export function evaluateAnswer(
    mission: Mission,
    selectedAnswer: number
): EvaluationResult {

    const correct =
        selectedAnswer === mission.correctAnswer;

    return {
        correct,
        explanation: mission.explanation,
        xp: correct ? mission.xp : 0,
    };
}