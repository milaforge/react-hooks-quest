import type { Mission } from "../missions/types";

interface Props {
  mission: Mission;
  unlocked: boolean;
  completed: boolean;
  onSelect: () => void;
}

export function MissionCard({ mission, unlocked, completed, onSelect }: Props) {
  return (
    <article className={`mission-card ${completed ? "completed" : ""} ${!unlocked ? "locked" : ""}`}>
      <div className="mission-card-inner">
        <div className="mission-icon" aria-hidden="true">
          {completed ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" />
              <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <div className="mission-info">
          <h3 className="mission-title">{mission.title}</h3>
          <p className="mission-xp">+{mission.xp} XP</p>
        </div>
        <button
          className="mission-button"
          disabled={!unlocked}
          onClick={onSelect}
          aria-disabled={!unlocked}
        >
          {completed ? "Replay" : unlocked ? "Start" : "Locked"}
        </button>
      </div>
      {!unlocked && (
        <div className="mission-lock-overlay" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="3" y="5" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5 5V4C5 2.89543 5.89543 2 7 2H9C10.1046 2 11 2.89543 11 4V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </article>
  );
}
