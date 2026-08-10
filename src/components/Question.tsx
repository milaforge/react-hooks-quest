import { useState } from "react";
import type { Mission } from "../missions/types";

interface Props {
  mission: Mission;
  onSubmit: (answer: number) => void;
}

export function Question({ mission, onSubmit }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <h1>{mission.title}</h1>

      <p>{mission.question}</p>

      {mission.answers.map((answer, index) => (
        <label
          key={index}
          style={{
            display: "block",
            marginBottom: "0.75rem",
          }}
        >
          <input
            type="radio"
            name={mission.id}
            checked={selected === index}
            onChange={() => setSelected(index)}
          />{" "}
          {answer}
        </label>
      ))}

      <button disabled={selected === null} onClick={() => onSubmit(selected!)}>
        Submit
      </button>
    </>
  );
}
