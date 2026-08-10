import type { Chapter } from "../types";

import { effect001 } from "./effect-001";
import { effect002 } from "./effect-002";
import { effect003 } from "./effect-003";

export const useEffectChapter: Chapter = {
    id: "use-effect",
    title: "useEffect",
    missions: [
        effect001,
        effect002,
        effect003,
    ],
};