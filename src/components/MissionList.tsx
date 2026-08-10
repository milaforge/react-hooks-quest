import { useNavigate } from "react-router-dom";
import { chapters } from "../missions";
import type { PlayerState } from "../storage/player";
import { isMissionUnlocked } from "../game/missionAccess";
import { MissionCard } from "./MissionCard";

interface Props {
  player: PlayerState;
}

export function MissionList({ player }: Props) {
  const navigate = useNavigate();

  return (
    <section>
      <h2>Missions</h2>

      {chapters.map((chapter, chapterIndex) => (
        <section key={chapter.id}>
          <h3>{chapter.title}</h3>

          {chapter.description && <p>{chapter.description}</p>}

          {chapter.missions.map((mission, missionIndex) => (
            <MissionCard
              key={mission.id}
              mission={mission}
              unlocked={isMissionUnlocked(player, chapterIndex, missionIndex)}
              completed={player.completedMissions.includes(mission.id)}
              onSelect={() => navigate(`/mission/${mission.id}`)}
            />
          ))}
        </section>
      ))}
    </section>
  );
}
