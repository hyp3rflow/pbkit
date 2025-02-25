export type Type =
  | "IDEMPOTENCY_UNKNOWN"
  | "NO_SIDE_EFFECTS"
  | "IDEMPOTENT";

export const num2name = {
  0: "IDEMPOTENCY_UNKNOWN",
  1: "NO_SIDE_EFFECTS",
  2: "IDEMPOTENT",
} as const;

export const name2num = {
  IDEMPOTENCY_UNKNOWN: 0,
  NO_SIDE_EFFECTS: 1,
  IDEMPOTENT: 2,
} as const;
