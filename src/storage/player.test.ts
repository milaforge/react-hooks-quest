import {
  loadPlayer,
  savePlayer,
  resetPlayer,
  initialPlayerState,
} from "./player";


describe("player storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });


  it("returns default player when no save exists", () => {
    const player = loadPlayer();

    expect(player).toEqual(initialPlayerState);
  });


  it("persists player progress", () => {
    const player = {
      xp: 20,
      completedMissions: ["state-001"],
    };

    savePlayer(player);

    expect(loadPlayer())
      .toEqual(player);
  });


  it("clears saved progress", () => {
    savePlayer({
      xp: 50,
      completedMissions: ["state-001"],
    });


    resetPlayer();


    expect(loadPlayer())
      .toEqual(initialPlayerState);
  });


  it("recovers from invalid saved data", () => {
    localStorage.setItem(
      "react-hooks-quest-player",
      "broken-json"
    );


    expect(loadPlayer())
      .toEqual(initialPlayerState);
  });
});