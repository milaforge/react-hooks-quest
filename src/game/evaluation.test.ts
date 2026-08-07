import { evaluateAnswer } from "./evaluation";

import type { Mission } from "../missions/types";


const mission: Mission = {
    id: "state-001",
    chapter: "useState",
    title: "Remembering Values",
    question:
        "Which Hook allows a component to remember values between renders?",
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

describe("answer evaluation", () => {

    it("returns correct when selected answer matches", () => {
        const result = evaluateAnswer(
            mission,
            1
        );

        expect(result.correct)
            .toBe(true);
    });


    it("returns incorrect when answer is wrong", () => {
        const result = evaluateAnswer(
            mission,
            0
        );

        expect(result.correct)
            .toBe(false);
    });


    it("returns the mission explanation", () => {
        const result = evaluateAnswer(
            mission,
            1
        );

        expect(result.explanation)
            .toBe(
                "useState stores values between renders."
            );
    });


    it("returns earned XP only for correct answers", () => {
        const correct =
            evaluateAnswer(mission, 1);

        const incorrect =
            evaluateAnswer(mission, 0);


        expect(correct.xp)
            .toBe(10);


        expect(incorrect.xp)
            .toBe(0);
    });


    it("handles invalid answer indexes", () => {
        const result =
            evaluateAnswer(
                mission,
                99
            );


        expect(result.correct)
            .toBe(false);

        expect(result.xp)
            .toBe(0);
    });

});