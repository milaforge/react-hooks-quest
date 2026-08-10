import type { Mission } from "../types";

export const state001: Mission = {
    id: "state-001",
    title: "State Basics",
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
        "useState stores values between renders. Normal variables are recreated every render.",
    xp: 10,
};