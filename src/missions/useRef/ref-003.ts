import type { Mission } from "../types";

export const ref003: Mission = {
    id: "ref-003",
    title: "Rendering",
    question:
        "What happens when you update ref.current?",
    answers: [
        "The component re-renders",
        "React throws an error",
        "Nothing; the value changes without re-rendering",
        "The component unmounts",
    ],
    correctAnswer: 2,
    explanation:
        "Changing ref.current does not trigger a render. That's the key difference between useRef and useState.",
    xp: 20,
};