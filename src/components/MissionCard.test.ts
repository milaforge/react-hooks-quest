import { describe, expect, it } from "vitest";

import { getMissionCardState } from "./MissionCard";

describe("mission card state", () => {
  it("shows completed missions as completed", () => {
    expect(getMissionCardState(true, true)).toBe("completed");
  });

  it("shows unlocked missions as ready", () => {
    expect(getMissionCardState(true, false)).toBe("ready");
  });

  it("shows locked missions as locked", () => {
    expect(getMissionCardState(false, false)).toBe("locked");
  });
});
