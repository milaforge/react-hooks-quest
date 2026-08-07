import {
    addXP,
    completeMission,
    unlockMission,
} from "./progression";

import type { PlayerState } from "../storage/player";

const basePlayer: PlayerState = {
    xp: 0,
    completedMissions: [],
    unlockedMissions: [
        "state-001",
    ],
};

describe("progression", () => {

    it("adds XP", () => {

        const result = addXP(basePlayer, 10);

        expect(result.xp)
            .toBe(10);

    });

    it("does not mutate original player", () => {
        addXP(basePlayer, 10);

        expect(basePlayer.xp)
            .toBe(0);
    });

});

describe("completeMission", () => {

    it("adds completed mission", () => {
        const result =
            completeMission(
                basePlayer,
                "state-001"
            );


        expect(result.completedMissions)
            .toContain("state-001");
    });


    it("does not duplicate completed missions", () => {
        const result =
            completeMission(
                {
                    ...basePlayer,
                    completedMissions: [
                        "state-001",
                    ],
                },
                "state-001"
            );


        expect(result.completedMissions)
            .toHaveLength(1);
    });

});

describe("unlockMission", () => {

    it("adds unlocked mission", () => {
        const result =
            unlockMission(
                basePlayer,
                "state-002"
            );


        expect(result.unlockedMissions)
            .toContain("state-002");

        expect(result.unlockedMissions)
            .toHaveLength(2);
    });


    it("does not duplicate unlocked missions", () => {
        const result =
            unlockMission(
                basePlayer,
                "state-001"
            );


        expect(result.unlockedMissions)
            .toHaveLength(1);
    });

});

