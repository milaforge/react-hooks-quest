interface HUDProps {
  xp: number;
}

export function HUD({ xp }: HUDProps) {
  return (
    <header className="hud">
      <div className="hud-title" aria-label="React Hooks Quest">
        <h1>React Hooks</h1>
      </div>
      <p className="hud-xp">{xp} XP</p>
    </header>
  );
}
