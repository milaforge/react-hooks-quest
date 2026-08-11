import { useEffect, useState } from "react";
import type { Mission } from "../missions/types";
import type { AttemptEvent, AttemptState } from "../game/attemptState";
import { Modal } from "./Modal";

interface Props {
  mission: Mission;
  onSubmit: (answer: number) => void;
  isOpen: boolean;
  onClose: () => void;
  attempt: AttemptState;
  attemptEvent: AttemptEvent;
  onContinue?: () => void;
}

export function Question({
  mission,
  onSubmit,
  isOpen,
  onClose,
  attempt,
  attemptEvent,
  onContinue,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [visibleAnswers, setVisibleAnswers] = useState<boolean[]>([]);
  const [shakeAnswerIndex, setShakeAnswerIndex] = useState<number | null>(null);
  const [submittedAnswerIndex, setSubmittedAnswerIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setVisibleAnswers(mission.answers.map(() => true));
      }, 100);
      return () => clearTimeout(timer);
    }
    setVisibleAnswers([]);
  }, [isOpen, mission.answers.length]);

  useEffect(() => {
    if (attempt.status !== "wrong") {
      return;
    }

    setShakeAnswerIndex(submittedAnswerIndex);
    const timer = setTimeout(() => {
      setShakeAnswerIndex(null);
    }, 500);
    return () => clearTimeout(timer);
  }, [attempt.status, attemptEvent.id, submittedAnswerIndex]);

  function handleSubmit() {
    if (selected !== null && attempt.status !== "correct") {
      setSubmittedAnswerIndex(selected);
      onSubmit(selected);
    }
  }

  function handleAnswerClick(index: number) {
    if (attempt.status === "correct") {
      return;
    }

    setSelected(index);
  }

  const correctAnswerIndex = mission.correctAnswer;
  const isCorrect = attempt.status === "correct";
  const isWrong = attempt.status === "wrong";

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={mission.title}>
      <div className="question-modal">
        <div className="question-area">
          <div className="question-label">Question</div>
          <p className="question-text">{mission.question}</p>
        </div>

        {attempt.status !== "idle" && (
          <div
            className={`feedback-area ${isCorrect ? "correct" : "incorrect"}`}
            role="alert"
            aria-live="polite"
          >
            <div className="feedback-icon">
              {isCorrect ? "✅" : "❌"} {isCorrect ? "Correct!" : "Incorrect"}
            </div>
            <p className="feedback-text">{attempt.explanation}</p>
            {isCorrect && (
              <p className="feedback-text-xp">
                <strong>+{attempt.xp} XP</strong>
              </p>
            )}
            {isCorrect && (
              <button onClick={onContinue} className="continue-button">
                Continue
              </button>
            )}
          </div>
        )}

        <div className="answers-area" role="radiogroup" aria-label="Answer options">
          {mission.answers.map((answer, index) => {
            const isSelected = selected === index;
            const isSubmittedWrong = isWrong && submittedAnswerIndex === index;
            const isShakeAnswer = shakeAnswerIndex === index;

            return (
              <label
                key={index}
                className={`answer-card ${
                  isCorrect
                    ? index === correctAnswerIndex
                      ? "selected correct-answer"
                      : "dimmed"
                    : isSubmittedWrong
                    ? "selected incorrect-answer"
                    : isSelected
                    ? "selected"
                    : ""
                } ${visibleAnswers[index] ? "visible" : ""} ${
                  isShakeAnswer ? "shake" : ""
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <input
                  type="radio"
                  name={mission.id}
                  checked={isCorrect ? index === correctAnswerIndex : isSelected}
                  onChange={() => handleAnswerClick(index)}
                  className="answer-radio"
                  aria-label={`Option ${index + 1}`}
                  disabled={isCorrect}
                />
                <span className="answer-indicator" aria-hidden="true">
                  <span className="answer-letter">
                    {isSubmittedWrong ? "✕" : String.fromCharCode(65 + index)}
                  </span>
                </span>
                <span className="answer-text">{answer}</span>
                <span className="answer-check" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M14.1667 5.83333L7.5 12.5L5.83333 10.8333"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </label>
            );
          })}
        </div>

        {attempt.status !== "correct" && (
          <button
            disabled={selected === null}
            onClick={handleSubmit}
            className="submit-button"
            aria-disabled={selected === null}
          >
            Submit Answer
          </button>
        )}
      </div>
    </Modal>
  );
}
