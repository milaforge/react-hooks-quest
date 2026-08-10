import { useStateChapter } from "./useState";
import { useEffectChapter } from "./useEffect";
import { useRefChapter } from "./useRef";
import type { Chapter } from "./types";

export const chapters = [
    useStateChapter,
    useEffectChapter,
    useRefChapter,
];

export const missions = chapters.flatMap(
    chapter => chapter.missions
);

export const missionsById = new Map(
    missions.map(m => [m.id, m])
);

export function getMissionById(id: string) {
    return missionsById.get(id);
}

export function getNextMission(
    missionId: string
) {
    for (const chapter of chapters) {

        const index = chapter.missions.findIndex(
            m => m.id === missionId
        );

        if (index === -1) {
            continue;
        }

        return chapter.missions[index + 1];
    }

    return undefined;
}

export function isChapterComplete(
    chapter: Chapter,
    completed: string[]
) {
    return chapter.missions.every(
        mission =>
            completed.includes(mission.id)
    );
}