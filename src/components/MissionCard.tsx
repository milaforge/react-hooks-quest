import type { Mission } from "../missions/types";

interface Props {
  mission: Mission;
  unlocked: boolean;
  onSelect: () => void;
}

export function MissionCard({ mission, unlocked, onSelect }: Props) {
  return (
    <article>
      <h2>{unlocked ? mission.title : "🔒 Locked"}</h2>

      <p>+{mission.xp} XP</p>

      <button disabled={!unlocked} onClick={onSelect}>
        {unlocked ? "Start" : "Locked"}
      </button>
    </article>
  );
}
