export type Type =
  | "JS_NORMAL"
  | "JS_STRING"
  | "JS_NUMBER";

export const num2name = {
  0: "JS_NORMAL",
  1: "JS_STRING",
  2: "JS_NUMBER",
} as const;

export const name2num = {
  JS_NORMAL: 0,
  JS_STRING: 1,
  JS_NUMBER: 2,
} as const;
