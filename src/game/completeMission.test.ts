import {
    completeMissionAttempt,
} from "./completeMissionAttempt";

import type { PlayerState } from "../storage/player";
import type { Mission } from "../missions/types";

const mission: Mission = {
    id: "state-001",
    chapter: "useState",
    title: "Remembering Values",
    question:
        "Which Hook stores values between renders?",
    answers: [
        "useEffect",
        "useState",
        "useMemo",
        "useRef",
    ],
    correctAnswer: 1,
    explanation:
        "useState stores values between renders.",
    xp: 10,
};

const player: PlayerState = {
    xp: 0,
    completedMissions: [],
};


describe("complete mission attempt", () => {

    it("awards XP for correct answer", () => {
        const result =
            completeMissionAttempt(
                player,
                mission,
                1
            );

        expect(result.player.xp)
            .toBe(10);
    });


    it("marks mission completed", () => {
        const result =
            completeMissionAttempt(
                player,
                mission,
                1
            );

        expect(result.player.completedMissions)
            .toContain("state-001");

    });


    it("does not award XP for wrong answer", () => {
        const result =
            completeMissionAttempt(
                player,
                mission,
                0
            );

        expect(result.player.xp)
            .toBe(0);
    });


    it("does not award XP twice", () => {
        const completedPlayer = {
            ...player,
            xp: 10,
            completedMissions: [
                "state-001",
            ],
        };

        const result =
            completeMissionAttempt(
                completedPlayer,
                mission,
                1
            );

        expect(result.player.xp)
            .toBe(10);
    });


    it("returns evaluation result", () => {
        const result =
            completeMissionAttempt(
                player,
                mission,
                1
            );

        expect(result.correct)
            .toBe(true);
    });

});