import type { PlayerState } from "../storage/player";
import { chapters } from "../missions";

export function isMissionUnlocked(
    player: PlayerState,
    chapterIndex: number,
    missionIndex: number
): boolean {
    // First mission of the first chapter.
    if (chapterIndex === 0 && missionIndex === 0) {
        return true;
    }

    // First mission of a chapter:
    // previous chapter must be complete.
    if (missionIndex === 0) {
        const previousChapter = chapters[chapterIndex - 1];

        return previousChapter.missions.every(mission =>
            player.completedMissions.includes(mission.id)
        );
    }

    // Otherwise the previous mission must be complete.
    const previousMission =
        chapters[chapterIndex].missions[missionIndex - 1];

    return player.completedMissions.includes(
        previousMission.id
    );
}
