import type { Mission } from "../types";

export const effect001: Mission = {
    id: "effect-001",
    title: "Purpose of Effects",
    question:
        "When should you use useEffect?",
    answers: [
        "To update the UI",
        "To perform side effects like fetching data or subscribing to events",
        "To store component state",
        "To optimize rendering",
    ],
    correctAnswer: 1,
    explanation:
        "useEffect synchronizes your component with external systems such as APIs, timers, or browser events.",
    xp: 10,
};