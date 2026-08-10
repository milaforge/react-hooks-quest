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
  const [showQuestion, setShowQuestion] = useState(true);

  if (!mission) {
    return <h1>Mission not found</h1>;
  }

  function handleSubmit(answer: number) {
    const player = loadPlayer();

    // mission is guaranteed to exist here due to the early return above
    const evaluation = completeMissionAttempt(player, mission!, answer);

    savePlayer(evaluation.player);

    setResult(evaluation);
    setShowQuestion(false);
  }

  function handleClose() {
    navigate("/");
  }

  if (result) {
    return (
      <main>
        <h1>{result.correct ? "✅ Correct" : "❌ Incorrect"}</h1>

        <p>{result.explanation}</p>

        <p>XP +{result.xp}</p>

        <button onClick={() => navigate("/")}>Continue</button>
      </main>
    );
  }

  return (
    <main>
      <Question
        mission={mission}
        onSubmit={handleSubmit}
        isOpen={showQuestion}
        onClose={handleClose}
      />
    </main>
  );
}
