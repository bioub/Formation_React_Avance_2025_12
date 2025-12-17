import { expect, test } from "vitest";
import { hello } from "./hello.js";

test("hello function", () => {
  expect(hello("World")).toBe("Hello, World!");
});
