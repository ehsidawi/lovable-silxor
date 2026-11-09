import { expect, test } from "bun:test";
import { DEFAULT_THEME } from "./appearance.ts";
test("new visitors default to night mode", () => {
  expect(DEFAULT_THEME).toBe("dark");
});