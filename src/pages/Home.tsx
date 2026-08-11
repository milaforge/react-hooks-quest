import { useEffect, useState } from "react";

import { loadPlayer } from "../storage/player";
import { HUD } from "../components/HUD";
import { MissionList } from "../components/MissionList";

export default function Home() {
  const [player, setPlayer] = useState(loadPlayer());

  useEffect(() => {
    setPlayer(loadPlayer());
  }, []);

  useEffect(() => {
    const refresh = () => setPlayer(loadPlayer());
    window.addEventListener("focus", refresh);
    return () => window.removeEventListener("focus", refresh);
  }, []);

  return (
    <main className="home-page">
      <HUD xp={player.xp} />
      <MissionList player={player} />
    </main>
  );
}
