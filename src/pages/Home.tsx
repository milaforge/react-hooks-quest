import { loadPlayer } from "../storage/player";
import { HUD } from "../components/HUD";
import { MissionList } from "../components/MissionList";

export default function Home() {
  const player = loadPlayer();

  return (
    <main>
      <HUD xp={player.xp} />
      <MissionList player={player} />
    </main>
  );
}
