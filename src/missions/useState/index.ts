import type { Chapter } from "../types";

import { state001 } from "./state-001";
import { state002 } from "./state-002";
import { state003 } from "./state-003";

export const useStateChapter: Chapter = {
    id: "use-state",
    title: "useState",
    missions: [
        state001,
        state002,
        state003,
    ],
};
