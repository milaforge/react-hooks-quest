import type { Mission } from "../types";

export const effect003: Mission = {
    id: "effect-003",
    title: "Infinite Loops",
    question:
        "What is the most likely result of calling setState inside a useEffect with no dependency array?",
    answers: [
        "Nothing happens",
        "The effect runs once",
        "The component repeatedly re-renders",
        "React throws a syntax error",
    ],
    correctAnswer: 2,
    explanation:
        "Without a dependency array, the effect runs after every render. Updating state inside it causes another render, creating a loop.",
    xp: 20,
};