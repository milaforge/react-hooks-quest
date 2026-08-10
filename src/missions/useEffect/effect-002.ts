import type { Mission } from "../types";

export const effect002: Mission = {
    id: "effect-002",
    title: "Run Once",
    question:
        "Which dependency array makes an effect run only after the initial render?",
    answers: [
        "No dependency array",
        "[]",
        "[value]",
        "[...dependencies]",
    ],
    correctAnswer: 1,
    explanation:
        "An empty dependency array tells React to run the effect only after the component mounts.",
    xp: 15,
};