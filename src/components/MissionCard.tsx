import type { Mission } from "../missions/types";

interface Props {
  mission: Mission;
  unlocked: boolean;
  completed: boolean;
  onSelect: () => void;
  /** 1‑based index of the mission within its chapter. If provided it replaces the mission title. */
  index?: number;
}

export function getMissionCardState(unlocked: boolean, completed: boolean) {
  if (completed) {
    return "completed";
  }

  if (unlocked) {
    return "ready";
  }

  return "locked";
}

export function MissionCard({ mission, unlocked, completed, onSelect, index }: Props) {
  const displayTitle = index !== undefined ? String(index) : mission.title;
  const state = getMissionCardState(unlocked, completed);
  const actionLabel = completed
    ? `Replay mission ${displayTitle}`
    : unlocked
      ? `Start mission ${displayTitle}`
      : `Mission ${displayTitle} locked`;

  return (
    <article className={`mission-row ${state}`}>
      <button
        type="button"
        className="mission-icon-button"
        onClick={onSelect}
        aria-label={actionLabel}
        disabled={!unlocked}
      >
        <div className="mission-icon" aria-hidden="true">
          {completed ? (
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <circle cx="13" cy="13" r="11" fill="currentColor" />
              <path d="M8.5 13.2L11.5 16.2L17.5 9.8" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <>
              {unlocked && <span className="mission-start-bubble">START</span>}
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="11" fill="currentColor" />
                <path d="M13 6.2L14.98 10.24L19.44 10.88L16.22 13.98L16.98 18.42L13 16.32L9.02 18.42L9.78 13.98L6.56 10.88L11.02 10.24L13 6.2Z" fill="#fff" />
              </svg>
            </>
          )}
        </div>
      </button>
    </article>
  );
}
