export interface PlayerState {
    xp: number;
    completedMissions: string[];
    unlockedMissions: string[];
}

const STORAGE_KEY = "react-hooks-quest-player";

export const initialPlayerState: PlayerState = {
    xp: 0,
    completedMissions: [],
    unlockedMissions: ["state-001"],
};

export function loadPlayer(): PlayerState {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
        return initialPlayerState;
    }

    try {
        return JSON.parse(saved) as PlayerState;
    } catch {
        return initialPlayerState;
    }
}

export function savePlayer(player: PlayerState): void {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(player)
    );
}

export function resetPlayer(): void {
    localStorage.removeItem(STORAGE_KEY);
}