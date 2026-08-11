import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { completeMissionAttempt } from "../game/completeMissionAttempt";
import type { AttemptEvent, AttemptState } from "../game/attemptState";
import { getMissionById } from "../missions";
import { Question } from "../components/Question";
import { loadPlayer, savePlayer } from "../storage/player";

export default function MissionPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const mission = getMissionById(id!);

  const [attempt, setAttempt] = useState<AttemptState>({ status: "idle" });
  const [attemptEvent, setAttemptEvent] = useState<AttemptEvent>({ id: 0 });

  if (!mission) {
    return <h1>Mission not found</h1>;
  }

  function handleSubmit(answer: number) {
    const player = loadPlayer();
    setAttemptEvent((current) => ({ id: current.id + 1 }));

    // mission is guaranteed to exist here due to the early return above
    const evaluation = completeMissionAttempt(player, mission!, answer);

    savePlayer(evaluation.player);

    setAttempt(
      evaluation.correct
        ? {
            status: "correct",
            explanation: evaluation.explanation,
            xp: evaluation.xp,
          }
        : {
            status: "wrong",
            explanation: evaluation.explanation,
          }
    );
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
        attempt={attempt}
        attemptEvent={attemptEvent}
        onContinue={handleContinue}
      />
    </main>
  );
}
