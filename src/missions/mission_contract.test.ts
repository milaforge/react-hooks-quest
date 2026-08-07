import { missions } from "./index";
import type { Mission } from "./types";

describe("missions", () => {

    it("contains at least one mission", () => {
        expect(missions.length)
            .toBeGreaterThan(0);
    });

    it("has a valid mission structure", () => {
        const mission = missions[0];

        expect(mission.id)
            .toBeDefined();

        expect(mission.title)
            .toBeDefined();

        expect(mission.question)
            .toBeDefined();

        expect(mission.answers)
            .toHaveLength(4);

        expect(mission.correctAnswer)
            .toBeGreaterThanOrEqual(0);

        expect(mission.correctAnswer)
            .toBeLessThan(mission.answers.length);

        expect(mission.explanation)
            .toBeDefined();

        expect(mission.xp)
            .toBeGreaterThan(0);
    });

    it("does not contain duplicate mission ids", () => {
        const ids = missions.map(
            (mission: Mission) => mission.id
        );

        expect(new Set(ids).size)
            .toBe(ids.length);
    });

});