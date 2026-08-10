import { useState, useEffect } from "react";
import type { Mission } from "../missions/types";
import { Modal } from "./Modal";

interface Props {
  mission: Mission;
  onSubmit: (answer: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Question({ mission, onSubmit, isOpen, onClose }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [visibleAnswers, setVisibleAnswers] = useState<boolean[]>([]);

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

  function handleSubmit() {
    if (selected !== null) {
      onSubmit(selected);
    }
  }

  function handleAnswerClick(index: number) {
    setSelected(index);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={mission.title}>
      <div className="question-modal">
        {/* Question Area - Distinguished and Prominent */}
        <div className="question-area">
          <div className="question-label">Question</div>
          <p className="question-text">{mission.question}</p>
        </div>

        {/* Answers Area - Card-based, Distinguished Options */}
        <div className="answers-area" role="radiogroup" aria-label="Answer options">
          {mission.answers.map((answer, index) => (
            <label
              key={index}
              className={`answer-card ${selected === index ? "selected" : ""} ${
                visibleAnswers[index] ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <input
                type="radio"
                name={mission.id}
                checked={selected === index}
                onChange={() => handleAnswerClick(index)}
                className="answer-radio"
                aria-label={`Option ${index + 1}`}
              />
              <span className="answer-indicator" aria-hidden="true">
                <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
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
        <button
          disabled={selected === null}
          onClick={handleSubmit}
          className="submit-button"
          aria-disabled={selected === null}
        >
          Submit Answer
        </button>
      </div>
    </Modal>
  );
}
