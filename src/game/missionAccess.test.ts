import {
    canStartMission,
} from "./missionAccess";

describe("mission access", () => {

    it("allows unlocked missions", () => {
        const player = {
            xp: 0,
            completedMissions: [],
            unlockedMissions: [
                "state-001",
            ],
        };

        expect(
            canStartMission(
                player,
                "state-001"
            )
        ).toBe(true);
    });


    it("blocks locked missions", () => {
        const player = {
            xp: 0,
            completedMissions: [],
            unlockedMissions: [],
        };

        expect(
            canStartMission(
                player,
                "state-001"
            )
        ).toBe(false);
    });
});