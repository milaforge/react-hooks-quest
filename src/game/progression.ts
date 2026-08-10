import type { PlayerState } from "../storage/player";


export function addXP(
    player: PlayerState,
    amount: number
): PlayerState {

    return {
        ...player,
        xp: player.xp + amount,
    };

}


export function completeMission(
    player: PlayerState,
    missionId: string
): PlayerState {

    if (
        player.completedMissions.includes(missionId)
    ) {
        return player;
    }

    return {
        ...player,
        completedMissions: [
            ...player.completedMissions,
            missionId,
        ],
    };

}
