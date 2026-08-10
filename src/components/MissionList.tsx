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

      <div className="chapters-scroll" role="list" aria-label="Chapters">
        {chapters.map((chapter, chapterIndex) => (
          <section key={chapter.id} className="chapter" role="listitem">
            <header className="chapter-header">
              <h3 className="chapter-title">{chapter.title}</h3>
              {chapter.description && <p className="chapter-description">{chapter.description}</p>}
            </header>

            <div className="missions-scroll" role="list" aria-label={`${chapter.title} missions`}>
              {chapter.missions.slice(0, 2).map((mission, missionIndex) => (
                <MissionCard
                  key={mission.id}
                  mission={mission}
                  unlocked={isMissionUnlocked(player, chapterIndex, missionIndex)}
                  completed={player.completedMissions.includes(mission.id)}
                  onSelect={() => navigate(`/mission/${mission.id}`)}
                />
              ))}

              {chapter.missions.length > 2 && (
                <button
                  className="chapter-more-button"
                  onClick={() => navigate(`/chapter/${chapter.id}`)}
                  aria-label={`View all ${chapter.missions.length} missions in ${chapter.title}`}
                >
                  <span>+{chapter.missions.length - 2} more</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M5 8L11 8M11 8L8 5M11 8L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
