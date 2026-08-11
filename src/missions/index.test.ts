import { chapters, getNextMission } from "./index";

describe("mission navigation", () => {
    it("returns the next mission within the same chapter", () => {
        const firstMission = chapters[0].missions[0];
        const nextMission = chapters[0].missions[1];

        expect(getNextMission(firstMission.id))
            .toBe(nextMission);
    });

    it("returns the first mission of the next chapter after the last mission in a chapter", () => {
        const currentMission = chapters[0].missions.at(-1);
        const nextMission = chapters[1].missions[0];

        expect(currentMission)
            .toBeDefined();

        expect(getNextMission(currentMission!.id))
            .toBe(nextMission);
    });

    it("returns undefined for the final mission", () => {
        const lastChapter = chapters.at(-1);
        const lastMission = lastChapter?.missions.at(-1);

        expect(lastMission)
            .toBeDefined();

        expect(getNextMission(lastMission!.id))
            .toBeUndefined();
    });
});
