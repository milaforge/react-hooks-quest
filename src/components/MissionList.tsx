import { missions } from "../missions";
import type { PlayerState } from "../storage/player";
import { canStartMission } from "../game/missionAccess";
import { MissionCard } from "./MissionCard";

interface Props {
  player: PlayerState;
}

export function MissionList({ player }: Props) {
  return (
    <section>
      <h2>Missions</h2>

      {missions.map((mission) => (
        <MissionCard
          key={mission.id}
          mission={mission}
          unlocked={canStartMission(player, mission.id)}
          onSelect={() => {
            console.log("selected", mission.id);
          }}
        />
      ))}
    </section>
  );
}
