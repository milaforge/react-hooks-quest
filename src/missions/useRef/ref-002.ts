import type { Mission } from "../types";

export const ref002: Mission = {
    id: "ref-002",
    title: "DOM Access",
    question:
        "Which Hook is commonly used to focus an input element?",
    answers: [
        "useMemo",
        "useCallback",
        "useRef",
        "useReducer",
    ],
    correctAnswer: 2,
    explanation:
        "useRef lets you access DOM elements so you can call methods like input.focus().",
    xp: 15,
};