import type { Mission } from "../types";

export const state002: Mission = {
    id: "state-002",
    title: "Updating State",
    question:
        "Which function should you call to update a value created with useState?",
    answers: [
        "setState",
        "setCount",
        "updateState",
        "changeState",
    ],
    correctAnswer: 1,
    explanation:
        "The second value returned by useState is the setter function. In this example it's named setCount.",
    xp: 15,
};