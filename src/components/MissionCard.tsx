import type { Mission } from "../missions/types";

interface Props {
  mission: Mission;
  unlocked: boolean;
  completed: boolean;
  onSelect: () => void;
}

export function MissionCard({ mission, unlocked, completed, onSelect }: Props) {
  return (
    <article>
      <h2>
        {completed
          ? `✅ ${mission.title}`
          : unlocked
            ? mission.title
            : "🔒 Locked"}
      </h2>

      <p>+{mission.xp} XP</p>

      <button disabled={!unlocked} onClick={onSelect}>
        {completed ? "Replay" : unlocked ? "Start" : "Locked"}
      </button>
    </article>
  );
}
