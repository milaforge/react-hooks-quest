import { useState, useEffect, useRef } from "react";
import type { Mission } from "../missions/types";
import { Modal } from "./Modal";

interface Props {
  mission: Mission;
  onSubmit: (answer: number) => void;
  isOpen: boolean;
  onClose: () => void;
  feedback?: {
    correct: boolean;
    explanation: string;
    xp: number;
  } | null;
  onContinue?: () => void;
}

export function Question({
  mission,
  onSubmit,
  isOpen,
  onClose,
  feedback,
  onContinue,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [visibleAnswers, setVisibleAnswers] = useState<boolean[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  // Trigger staggered animation when modal opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setVisibleAnswers(mission.answers.map(() => true));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setVisibleAnswers([]);
    }
  }, [isOpen, mission.answers.length]);

  // Trigger shake animation when incorrect feedback is shown
  useEffect(() => {
    if (feedback && !feedback.correct && contentRef.current) {
      contentRef.current.classList.add("shake");
      const timer = setTimeout(() => {
        contentRef.current?.classList.remove("shake");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  function handleSubmit() {
    if (selected !== null && !feedback) {
      onSubmit(selected);
    }
  }

  function handleAnswerClick(index: number) {
    if (!feedback) {
      setSelected(index);
    }
  }

  function handleContinue() {
    if (onContinue) {
      onContinue();
    }
  }

  // When feedback is shown, disable answer selection and show the correct answer
  const correctAnswerIndex = mission.correctAnswer;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={mission.title}>
      <div className="question-modal" ref={contentRef}>
        {/* Question Area - Distinguished and Prominent */}
        <div className="question-area">
          <div className="question-label">Question</div>
          <p className="question-text">{mission.question}</p>
        </div>

        {/* Feedback Area - Shown after submit */}
        {feedback && (
          <div
            className={`feedback-area ${feedback.correct ? "correct" : "incorrect"}`}
            role="alert"
            aria-live="polite"
          >
            <div className="feedback-icon">
              {feedback.correct ? "✅" : "❌"} {feedback.correct ? "Correct!" : "Incorrect"}
            </div>
            <p className="feedback-text">{feedback.explanation}</p>
            <p className="feedback-text">
              <strong>XP +{feedback.xp}</strong>
            </p>
            <button onClick={handleContinue} className="continue-button">
              Continue
            </button>
          </div>
        )}

        {/* Answers Area - Card-based, Distinguished Options */}
        <div className="answers-area" role="radiogroup" aria-label="Answer options">
          {mission.answers.map((answer, index) => (
            <label
              key={index}
              className={`answer-card ${
                feedback
                  ? index === correctAnswerIndex
                    ? "selected correct-answer"
                    : selected === index
                    ? "selected incorrect-answer"
                    : ""
                  : selected === index
                  ? "selected"
                  : ""
              } ${visibleAnswers[index] ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <input
                type="radio"
                name={mission.id}
                checked={
                  feedback
                    ? index === correctAnswerIndex
                    : selected === index
                }
                onChange={() => handleAnswerClick(index)}
                className="answer-radio"
                aria-label={`Option ${index + 1}`}
                disabled={!!feedback}
              />
              <span className="answer-indicator" aria-hidden="true">
                <span className="answer-letter">
                  {String.fromCharCode(65 + index)}
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
          ))}
        </div>

        {/* Submit Button - Premium Style */}
        {!feedback && (
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
