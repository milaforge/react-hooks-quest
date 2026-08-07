interface HUDProps {
  xp: number;
}

export function HUD({ xp }: HUDProps) {
  return (
    <header>
      <h1>React Hooks Quest</h1>
      <p>XP: {xp}</p>
    </header>
  );
}
