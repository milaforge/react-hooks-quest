import {
    isMissionUnlocked,
} from "./missionAccess";

describe("mission access", () => {

    it("allows unlocked missions", () => {
        const player = {
            xp: 0,
            completedMissions: [],
        };

        expect(
            isMissionUnlocked(
                player,
                0,
                0
            )
        ).toBe(true);
    });


    it("blocks locked missions", () => {
        const player = {
            xp: 0,
            completedMissions: [],
        };

        expect(
            isMissionUnlocked(
                player,
                0,
                1,
            )
        ).toBe(false);
    });
});