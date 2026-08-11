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
    <section className="mission-list">
      <div className="mission-list-header">
        <h2>Missions</h2>
      </div>

      <div className="missions-scroll" role="list" aria-label="Missions">
        {chapters.map((chapter, chapterIndex) => (
          <section key={chapter.id} className="chapter">
            <header className="chapter-header chapter-separator">
              <h3 className="chapter-title">{chapter.title}</h3>
              {chapter.description && <p className="chapter-description">{chapter.description}</p>}
            </header>

            <div className="chapter-missions" role="list" aria-label={`${chapter.title} missions`}>
              {chapter.missions.map((mission, missionIndex) => (
                <MissionCard
                  key={mission.id}
                  mission={mission}
                  unlocked={isMissionUnlocked(player, chapterIndex, missionIndex)}
                  completed={player.completedMissions.includes(mission.id)}
                  onSelect={() => navigate(`/mission/${mission.id}`)}
                  index={missionIndex + 1}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
