import type { Mission } from "../types";

export const ref001: Mission = {
    id: "ref-001",
    title: "Persistent Values",
    question:
        "What is the primary purpose of useRef?",
    answers: [
        "Store values without causing a re-render",
        "Replace useState",
        "Run side effects",
        "Optimize expensive calculations",
    ],
    correctAnswer: 0,
    explanation:
        "useRef keeps a mutable value between renders without triggering a re-render when it changes.",
    xp: 10,
};