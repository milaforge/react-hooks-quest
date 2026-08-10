import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { completeMissionAttempt } from "../game/completeMissionAttempt";
import { getMissionById } from "../missions";
import { Question } from "../components/Question";
import { loadPlayer, savePlayer } from "../storage/player";

export default function MissionPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const mission = getMissionById(id!);

  const [result, setResult] = useState<ReturnType<
    typeof completeMissionAttempt
  > | null>(null);

  if (!mission) {
    return <h1>Mission not found</h1>;
  }

  function handleSubmit(answer: number) {
    const player = loadPlayer();

    // mission is guaranteed to exist here due to the early return above
    const evaluation = completeMissionAttempt(player, mission!, answer);

    savePlayer(evaluation.player);

    setResult(evaluation);
    // Don't close the modal - keep it open to show feedback
  }

  function handleContinue() {
    // Navigate back to home after user clicks Continue
    navigate("/");
  }

  function handleClose() {
    navigate("/");
  }

  return (
    <main>
      <Question
        mission={mission}
        onSubmit={handleSubmit}
        isOpen={true}
        onClose={handleClose}
        feedback={result}
        onContinue={handleContinue}
      />
    </main>
  );
}
