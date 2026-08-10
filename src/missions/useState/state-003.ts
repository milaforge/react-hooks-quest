import type { Mission } from "../types";

export const state003: Mission = {
    id: "state-003",
    title: "Derived Data",
    question:
        "Which value should generally NOT be stored in state?",
    answers: [
        "A user's name",
        "The current theme",
        "A filtered list derived from existing state",
        "The current score",
    ],
    correctAnswer: 2,
    explanation:
        "Avoid storing data that can be calculated from existing state. Derive it during rendering instead.",
    xp: 20,
};