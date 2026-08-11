export type AttemptState =
  | { status: "idle" }
  | { status: "wrong"; explanation: string }
  | { status: "correct"; explanation: string; xp: number };

export type AttemptEvent = {
  id: number;
};
