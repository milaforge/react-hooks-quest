import type { Chapter } from "../types";

import { ref001 } from "./ref-001";
import { ref002 } from "./ref-002";
import { ref003 } from "./ref-003";

export const useRefChapter: Chapter = {
    id: "use-ref",
    title: "useRef",
    missions: [
        ref001,
        ref002,
        ref003,
    ],
};