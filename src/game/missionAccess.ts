import type { PlayerState } from "../storage/player";

export function canStartMission(
    player: PlayerState,
    missionId: string
): boolean {

    return player.unlockedMissions.includes(
        missionId
    );
}