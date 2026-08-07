import type { Mission } from "../missions/types";
import type { PlayerState } from "../storage/player";

import {
    evaluateAnswer,
} from "./evaluation";

import {
    addXP,
    completeMission,
} from "./progression";

interface CompleteMissionResult {
    player: PlayerState;
    correct: boolean;
    explanation: string;
    xp: number;
}

export function completeMissionAttempt(
    player: PlayerState,
    mission: Mission,
    selectedAnswer: number
): CompleteMissionResult {

    const evaluation =
        evaluateAnswer(
            mission,
            selectedAnswer
        );

    if (!evaluation.correct) {
        return {
            player,
            correct: false,
            explanation: evaluation.explanation,
            xp: 0,
        };
    }

    if (
        player.completedMissions.includes(
            mission.id
        )
    ) {
        return {
            player,
            correct: true,
            explanation: evaluation.explanation,
            xp: 0,
        };
    }

    let updatedPlayer =
        addXP(
            player,
            evaluation.xp
        );

    updatedPlayer =
        completeMission(
            updatedPlayer,
            mission.id
        );

    return {
        player: updatedPlayer,
        correct: true,
        explanation: evaluation.explanation,
        xp: evaluation.xp,
    };
}